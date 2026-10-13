import { type ChangeEvent, type FormEvent, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useSearchParams } from 'react-router-dom'

const CAREERS_ENDPOINT = 'https://formsubmit.co/hyemlee@mycodx.com'
const CAREERS_SUCCESS_URL = 'https://mycodx.com/careers/apply?submitted=true'
const MAX_TOTAL_FILE_SIZE = 10 * 1024 * 1024
const APPLICATION_FILE_TYPES = '.pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document'

function getTotalFileSize(form: HTMLFormElement) {
  return Array.from(form.querySelectorAll<HTMLInputElement>('input[type="file"]'))
    .flatMap((input) => Array.from(input.files ?? []))
    .reduce((total, file) => total + file.size, 0)
}

export default function CareersApply() {
  const { t } = useTranslation()
  const [searchParams] = useSearchParams()
  const [messageLength, setMessageLength] = useState(0)
  const [fileError, setFileError] = useState('')
  const [localSubmissionComplete, setLocalSubmissionComplete] = useState(false)
  const localSubmissionPending = useRef(false)
  const content = {
    back: t('careersApply.back'), title: t('careersApply.title'), lead: t('careersApply.lead'),
    successTitle: t('careersApply.successTitle'), successBody: t('careersApply.successBody'), formTitle: t('careersApply.formTitle'), required: t('careersApply.required'),
    area: t('careersApply.area'), areas: t('careersApply.areas', { returnObjects: true }) as string[],
    name: t('careersApply.name'), email: t('careersApply.email'), phone: t('careersApply.phone'), education: t('careersApply.education'), select: t('careersApply.select'), degrees: t('careersApply.degrees', { returnObjects: true }) as string[],
    experience: t('careersApply.experience'), experiences: t('careersApply.experiences', { returnObjects: true }) as string[], message: t('careersApply.message'), messagePlaceholder: t('careersApply.messagePlaceholder'), chars: t('careersApply.chars'),
    files: t('careersApply.files'), fileHelp: t('careersApply.fileHelp'), download: t('careersApply.download'), downloadMeta: t('careersApply.downloadMeta'), application: t('careersApply.application'), degree: t('careersApply.degree'), transcript: t('careersApply.transcript'), papers: t('careersApply.papers'),
    consent: t('careersApply.consent'), submit: t('careersApply.submit'), fileSizeError: t('careersApply.fileSizeError'),
  }
  const submitted = searchParams.get('submitted') === 'true'

  const validateFileSize = (form: HTMLFormElement) => {
    const isTooLarge = getTotalFileSize(form) > MAX_TOTAL_FILE_SIZE
    setFileError(isTooLarge ? content.fileSizeError : '')
    return !isTooLarge
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.form) validateFileSize(event.currentTarget.form)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (!validateFileSize(event.currentTarget)) {
      event.preventDefault()
      return
    }
    if (import.meta.env.DEV) localSubmissionPending.current = true
  }

  const handleLocalSubmitResponse = () => {
    if (!localSubmissionPending.current) return
    localSubmissionPending.current = false
    setLocalSubmissionComplete(true)
  }

  return (
    <div className="careers-apply-page">
      <header className="careers-apply-header">
        <Link to="/careers">← {content.back}</Link>
        <p>Application Guide</p>
        <h1>{content.title}</h1>
        <span>{content.lead}</span>
      </header>

      <section className="careers-application">
        <form className="careers-form" action={CAREERS_ENDPOINT} method="POST" encType="multipart/form-data" target={import.meta.env.DEV ? 'careers-submit-response' : undefined} onSubmit={handleSubmit}>
          <div className="careers-form__heading">
            <span>Application form</span>
            <h2>{content.formTitle}</h2>
            <p>{content.required}</p>
          </div>
          <fieldset className="careers-form__areas"><legend>{content.area} <i>*</i></legend><div>{content.areas.map((title, index) => <label key={title}><input type="radio" name="지원 분야" value={title} defaultChecked={index === 0} required /><span>{title}</span></label>)}</div></fieldset>
          <div className="careers-form__grid">
            <label><span>{content.name} <i>*</i></span><input name="성명" type="text" autoComplete="name" required /></label>
            <label><span>{content.email} <i>*</i></span><input name="email" type="email" autoComplete="email" placeholder="email@example.com" required /></label>
            <label><span>{content.phone} <i>*</i></span><input name="연락처" type="tel" autoComplete="tel" placeholder="010-0000-0000" required /></label>
            <label><span>{content.education} <i>*</i></span><select name="최종 학력" defaultValue="" required><option value="" disabled>{content.select}</option>{content.degrees.map((degree) => <option key={degree}>{degree}</option>)}</select></label>
            <label className="careers-form__wide"><span>{content.experience} <i>*</i></span><select name="경력 구분" defaultValue="" required><option value="" disabled>{content.select}</option>{content.experiences.map((experience) => <option key={experience}>{experience}</option>)}</select></label>
          </div>
          <label className="careers-form__message">
            <span>{content.message}</span>
            <textarea
              name="주요 경력 및 지원 내용"
              rows={6}
              maxLength={1000}
              placeholder={content.messagePlaceholder}
              onChange={(event) => setMessageLength(event.currentTarget.value.length)}
            />
            <small><span>{messageLength.toLocaleString()}</span> / 1,000 {content.chars}</small>
          </label>
          <div className="careers-form__files">
            <div className="careers-form__files-heading">
              <div><h3>{content.files} <i>*</i></h3><p>{content.fileHelp}</p></div>
              <a
                className="careers-download"
                href="/forms/MycoDx_상시채용지원서_동의서포함.docx"
                download="MycoDx_상시채용지원서_동의서포함.docx"
              >
                <span>{content.download}</span>
                <small>{content.downloadMeta}</small>
              </a>
            </div>
            <label><span>{content.application} <i>*</i></span><input name="자사 입사지원서" type="file" accept={APPLICATION_FILE_TYPES} onChange={handleFileChange} required /></label>
            <label><span>{content.degree} <i>*</i></span><input name="학위 증명서" type="file" accept=".pdf,.zip,application/pdf,application/zip" onChange={handleFileChange} multiple required /></label>
            <label><span>{content.transcript} <i>*</i></span><input name="성적 증명서" type="file" accept=".pdf,.zip,application/pdf,application/zip" onChange={handleFileChange} multiple required /></label>
            <label><span>{content.papers}</span><input name="논문 및 기타 자료" type="file" accept=".pdf,.zip,application/pdf,application/zip" onChange={handleFileChange} multiple /></label>
            {fileError && <p className="careers-form__file-error" role="alert">{fileError}</p>}
          </div>
          <label className="careers-form__consent"><input type="checkbox" name="개인정보 수집 및 인재풀 등록 동의" value="동의함" required /><span>{content.consent} <i>*</i></span></label>
          <input type="text" name="_honey" className="careers-form__honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <input type="hidden" name="_subject" value="[MycoDx 채용] 신규 지원서 접수" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          <input type="hidden" name="_next" value={CAREERS_SUCCESS_URL} />
          <div className="careers-form__footer"><button type="submit" disabled={Boolean(fileError)}>{content.submit}</button></div>
        </form>
      </section>
      {import.meta.env.DEV && <iframe className="careers-submit-response" name="careers-submit-response" title="Application submission response" onLoad={handleLocalSubmitResponse} />}
      {(submitted || localSubmissionComplete) && (
        <div className="careers-success-dialog" role="dialog" aria-modal="true" aria-labelledby="careers-success-title">
          <div className="careers-success-dialog__panel">
            <strong id="careers-success-title">{content.successTitle}</strong>
            <span>{content.successBody}</span>
            <Link to="/careers">{content.back}</Link>
          </div>
        </div>
      )}
    </div>
  )
}
