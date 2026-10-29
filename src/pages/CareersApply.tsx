import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import EmailSubmissionNotice from '../components/common/EmailSubmissionNotice'

export default function CareersApply() {
  const { t } = useTranslation()

  return (
    <div className="careers-apply-page">
      <header className="careers-apply-header">
        <Link to="/careers">← {t('careersApply.back')}</Link>
        <p>Application Guide</p>
        <h1>{t('careersApply.emailNotice.title')}</h1>
        <span>{t('careersApply.emailNotice.lead')}</span>
      </header>

      <section className="careers-application">
        <div className="careers-email-guide">
          <EmailSubmissionNotice
            email="jakim@mycodx.com"
            subject="[MycoDx 채용] 입사지원서 제출"
            headingLevel="h2"
            title={t('careersApply.emailNotice.noticeTitle')}
            description={t('careersApply.emailNotice.description')}
          >
            <div>
              <h3>{t('careersApply.emailNotice.bodyTitle')}</h3>
              <p>{t('careersApply.emailNotice.body')}</p>
            </div>
            <div>
              <h3>{t('careersApply.emailNotice.documentsTitle')}</h3>
              <ul>
                <li>{t('careersApply.emailNotice.application')}</li>
                <li>{t('careersApply.degree')}</li>
                <li>{t('careersApply.transcript')}</li>
                <li>{t('careersApply.papers')} ({t('emailSubmission.optional')})</li>
              </ul>
            </div>
            <p>{t('careersApply.emailNotice.attachmentsHelp')}</p>
            <p>{t('careersApply.emailNotice.receiptHelp')}</p>
          </EmailSubmissionNotice>

          <section className="careers-email-download" aria-labelledby="careers-email-download-title">
            <h2 id="careers-email-download-title">{t('careersApply.download')}</h2>
            <p>{t('careersApply.emailNotice.downloadHelp')}</p>
            <a
              className="careers-download"
              href="/forms/MycoDx_상시채용지원서_동의서포함.docx"
              download="MycoDx_상시채용지원서_동의서포함.docx"
            >
              <span>{t('careersApply.download')}</span>
              <small>{t('careersApply.downloadMeta')}</small>
            </a>
          </section>
        </div>
      </section>
    </div>
  )
}
