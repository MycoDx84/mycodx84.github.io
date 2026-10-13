export const CAREERS_ENDPOINT = 'https://formsubmit.co/jakim@mycodx.com'

export function prepareApplicationData(data: FormData, origin: string, token: string) {
  const uploads = Array.from(data.entries()).filter((entry): entry is [string, File] => entry[1] instanceof File)
  for (const [field] of uploads) data.delete(field)
  const manifest: string[] = []
  let index = 0
  for (const [field, file] of uploads) {
    if (!file.name) continue
    // Unique scalar fields match the verified standard upload request, even
    // when the applicant selected several files in a single input.
    const key = ++index === 1 ? 'attachment' : `attachment${index}`
    // Different inputs may contain the same filename. Keep the attachment
    // names distinct as well, so mail processing cannot collapse those names.
    const attachmentName = `${index}_${field.replace(/[\\/\r\n]/g, '_')}_${file.name}`
    data.append(key, file, attachmentName)
    manifest.push(`${key}: ${field} — ${attachmentName} (원본: ${file.name})`)
  }
  data.set('첨부파일 목록', manifest.join('\n'))
  const callback = new URL('/careers-submit-complete.html', origin)
  callback.searchParams.set('token', token)
  data.set('_next', callback.href)
}

export function isApplicationReceipt(
  event: Pick<MessageEvent, 'origin' | 'source' | 'data'>,
  origin: string,
  frame: Window | null | undefined,
  token: string,
) {
  return Boolean(frame) && event.origin === origin && event.source === frame &&
    event.data?.type === 'careers-application-received' && event.data?.token === token
}
