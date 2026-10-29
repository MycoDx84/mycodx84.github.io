import { type ReactNode, useId, useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../../styles/email-submission.css'

interface Props {
  email: string
  subject: string
  title: string
  description: string
  headingLevel?: 'h2' | 'h3'
  children?: ReactNode
}

export default function EmailSubmissionNotice({ email, subject, title, description, headingLevel: Heading = 'h3', children }: Props) {
  const { t } = useTranslation()
  const titleId = useId()
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'failed'>('idle')
  const emailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopyStatus('copied')
    } catch {
      setCopyStatus('failed')
    }
  }

  return (
    <section className="email-submission" aria-labelledby={titleId}>
      <p className="email-submission__notice">{t('emailSubmission.notice')}</p>
      <Heading id={titleId} className="email-submission__title">{title}</Heading>
      <p className="email-submission__description">{description}</p>
      <a className="email-submission__address" href={emailUrl}>{email}</a>
      {children && <div className="email-submission__details">{children}</div>}
      <div className="email-submission__actions">
        <a className="email-submission__compose" href={emailUrl}>{t('emailSubmission.compose')}</a>
        <button type="button" onClick={copyEmail}>{t('emailSubmission.copy')}</button>
        <span role="status">{copyStatus !== 'idle' && t(`emailSubmission.${copyStatus}`)}</span>
      </div>
      <p className="email-submission__help">{t('emailSubmission.help')}</p>
    </section>
  )
}
