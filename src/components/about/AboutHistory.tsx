import { useTranslation } from 'react-i18next'

const historyItems = ['foundation', 'research', 'partnership'] as const

export default function AboutHistory() {
  const { t } = useTranslation()

  return (
    <section id="history" className="about-history" aria-labelledby="about-history-title">
      <div className="about-section-heading">
        <span>02</span>
        <div>
          <p className="about-kicker">{t('about.history.kicker')}</p>
          <h2 id="about-history-title">{t('about.history.title')}</h2>
        </div>
      </div>

      <div className="about-history__body">
        <div className="about-history__summary">
          <span>{t('about.history.label')}</span>
          <strong>{t('about.history.since')}</strong>
          <p>{t('about.history.description')}</p>
        </div>

        <ol className="history-timeline" aria-label={t('about.history.aria')}>
          {historyItems.map((item, index) => (
            <li
              key={item}
              className={`history-timeline__item ${index % 2 === 0 ? 'is-left' : 'is-right'}`}
            >
              <article className="history-timeline__content">
                <time>{t(`about.history.items.${item}.year`)}</time>
                <h3>{t(`about.history.items.${item}.title`)}</h3>
                <p>{t(`about.history.items.${item}.description`)}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
