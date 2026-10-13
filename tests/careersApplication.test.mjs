import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import vm from 'node:vm'
import { test } from 'node:test'
import { CAREERS_ENDPOINT, prepareApplicationData, isApplicationReceipt } from '../src/services/careersApplication.ts'

test('standard multipart upload preserves all file bytes with unique fields', async () => {
  const data = new FormData()
  data.append('성명', 'Test')
  const fixtures = [
    ['자사 입사지원서', 'application.pdf'],
    ['학위 증명서', 'degree-1.pdf'],
    ['학위 증명서', 'degree-2.pdf'],
    ['성적 증명서', 'transcript.pdf'],
    ['논문 및 기타 자료', '연구자료.pdf'],
  ]
  for (const [field, name] of fixtures) data.append(field, new File([name], name, { type: 'application/pdf' }))
  data.append('빈 선택항목', new File([], ''))
  prepareApplicationData(data, 'https://mycodx.com', 'test-token')
  assert.equal(CAREERS_ENDPOINT, 'https://formsubmit.co/jakim@mycodx.com')
  const request = new Request(CAREERS_ENDPOINT, { method: 'POST', body: data })
  assert.match(request.headers.get('Content-Type'), /^multipart\/form-data; boundary=/)
  const received = await request.formData()
  assert.equal(received.get('성명'), 'Test')
  assert.equal(received.get('_next'), 'https://mycodx.com/careers-submit-complete.html?token=test-token')
  assert.equal([...received.values()].filter(v => v instanceof File).length, 5)
  for (const [index, [field, name]] of fixtures.entries()) {
    const key = index === 0 ? 'attachment' : `attachment${index + 1}`
    const file = received.get(key)
    const attachmentName = `${index + 1}_${field}_${name}`
    assert.equal(file.name, attachmentName)
    assert.equal(await file.text(), name)
    assert.ok(received.get('첨부파일 목록').includes(`${key}: ${field} — ${attachmentName}`))
  }
})

test('same file selected in three fields remains three uniquely named attachments', async () => {
  const data = new FormData()
  const file = new File(['identical bytes'], 'test.pdf', { type: 'application/pdf' })
  for (const field of ['자사 입사지원서', '학위 증명서', '성적 증명서']) data.append(field, file)
  prepareApplicationData(data, 'https://mycodx.com', 'test-token')
  const received = await new Request(CAREERS_ENDPOINT, { method: 'POST', body: data }).formData()
  const files = [...received.values()].filter(value => value instanceof File)
  assert.deepEqual(files.map(value => value.name), [
    '1_자사 입사지원서_test.pdf', '2_학위 증명서_test.pdf', '3_성적 증명서_test.pdf',
  ])
  for (const attachment of files) assert.equal(await attachment.text(), 'identical bytes')
})

test('only current same-origin iframe callback completes a submission', () => {
  const frame = {}
  const event = { origin: 'https://mycodx.com', source: frame, data: { type: 'careers-application-received', token: 'current' } }
  const accepts = value => isApplicationReceipt(value, 'https://mycodx.com', frame, 'current')
  assert.equal(accepts(event), true)
  assert.equal(accepts({ ...event, origin: 'https://formsubmit.co' }), false)
  assert.equal(accepts({ ...event, source: {} }), false)
  assert.equal(accepts({ ...event, data: { ...event.data, token: 'old' } }), false)
  assert.equal(accepts({ ...event, data: null }), false)
  assert.equal(accepts({ ...event, data: { type: 'load' } }), false)
})

test('static callback posts token only to its own origin and only when framed', () => {
  const script = readFileSync(new URL('../public/careers-submit-complete.js', import.meta.url), 'utf8')
  const calls = []
  const window = { location: { search: '?token=current', origin: 'https://mycodx.com' }, parent: { postMessage: (...args) => calls.push(args) } }
  vm.runInNewContext(script, { window, URLSearchParams })
  assert.equal(calls.length, 1)
  assert.equal(calls[0][0].token, 'current')
  assert.equal(calls[0][1], 'https://mycodx.com')
  window.location.search = ''
  vm.runInNewContext(script, { window, URLSearchParams })
  assert.equal(calls.length, 1)
  window.location.search = '?token=current'
  window.parent = window
  vm.runInNewContext(script, { window, URLSearchParams })
  assert.equal(calls.length, 1)
})
