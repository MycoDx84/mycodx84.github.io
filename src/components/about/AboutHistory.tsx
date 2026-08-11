import { useTranslation } from 'react-i18next'

interface HistoryMetric {
  value: string
  label: string
}

interface HistoryItem {
  year: string
  title: string
  description: string
}

function toList<T>(value: unknown): T[] {
  return Array.isArray(value) ? value : []
}

export default function AboutHistory() {
  const { t } = useTranslation()
  const historyMetrics = toList<HistoryMetric>(
    t('about.history.metrics', { returnObjects: true })
  )
  const historyItems = toList<HistoryItem>(
    t('about.history.items', { returnObjects: true })
  )

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

          <ul className="about-history__metrics" aria-label={t('about.history.metricsAria')}>
            {historyMetrics.map((metric) => (
              <li key={`${metric.value}-${metric.label}`}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <ol className="history-timeline" aria-label={t('about.history.aria')}>
          {historyItems.map((item, index) => (
            <li
              key={`${item.year}-${item.title}`}
              className={`history-timeline__item ${index % 2 === 0 ? 'is-left' : 'is-right'}`}
            >
              <article className="history-timeline__content">
                <time>{item.year}</time>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
