export interface LocalizedText {
  ko: string
  en: string
}

export interface ProductContent {
  id: string
  visible?: boolean
  featured?: boolean
  order?: number
  category?: string
  family?: LocalizedText
  image?: string
  status?: LocalizedText
  title: LocalizedText
  summary: LocalizedText
  listSummary?: LocalizedText
  detailSummary?: LocalizedText
  listFeatures?: LocalizedText[]
  detailFeatures?: LocalizedText[]
  specs?: LocalizedText[]
  tags?: string[]
}

export interface NewsContent {
  id: string
  visible?: boolean
  date: string
  category?: string
  image?: string
  title: LocalizedText
  summary: LocalizedText
  url?: string
}

export interface GalleryContent {
  id: string
  visible?: boolean
  order?: number
  image: string
  alt: LocalizedText
  caption?: LocalizedText
}

export function localize(value: LocalizedText, language: string) {
  return language.startsWith('en') ? value.en || value.ko : value.ko || value.en
}

export function sortByOrder<T extends { order?: number }>(items: T[]) {
  return [...items].sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
}
