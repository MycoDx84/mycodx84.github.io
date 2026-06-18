interface NewsCardProps {
  title: string
  date: string
  dateTime?: string
  summary: string
  category?: string
  image?: string
  url?: string
}

export default function NewsCard({
  title,
  date,
  dateTime = date,
  summary,
  category = 'News',
  image,
  url,
}: NewsCardProps) {
  const content = (
    <>
      {image && <img src={image} alt="" />}
      <div className="news-card__meta">
        <time dateTime={dateTime}>{date}</time>
        <span>{category}</span>
      </div>
      <h3>{title}</h3>
      <p>{summary}</p>
    </>
  )

  return url ? (
    <a className="editorial-card news-card" href={url} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    <article className="editorial-card news-card">
      {content}
    </article>
  )
}
