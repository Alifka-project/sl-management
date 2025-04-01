export const locales = ['en', 'de', 'zh', 'es', 'nl']
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

export const languageNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  zh: '中文',
  es: 'Español',
  nl: 'Nederlands',
}

export const languageFlags: Record<Locale, string> = {
  en: '🇬🇧',
  de: '🇩🇪',
  zh: '🇨🇳',
  es: '🇪🇸',
  nl: '🇳🇱',
}
