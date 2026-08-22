// src/lib/downloads.ts
//
// Single source of truth for everything offered on the /downloads page.
//
// To publish a new document:
//   1. Drop the file(s) into `public/downloads/`.
//   2. Add one entry to DOCUMENTS below (ids are kebab-case and must be unique).
//   3. Add `downloads.documents.<id>.title` / `.description` to every file in
//      `locale/*.json` (en, de, es, nl, zh).
// Nothing else needs to change — the page, the language badges and the
// lead-capture gate are all driven by this file.

export type DocumentLanguage = 'de' | 'en'
export type DocumentFormat = 'pdf' | 'docx'

export interface DownloadAsset {
  language: DocumentLanguage
  format: DocumentFormat
  /** Public URL of the file (also its path under `public/`). */
  href: string
  /** File name the browser saves as. */
  fileName: string
  /** Shown next to the button. Update when the file is replaced. */
  size: string
}

export type DownloadCategoryId = 'mandates' | 'factsheets'

export interface DownloadDocument {
  /** Unique id — also the translation key under `downloads.documents`. */
  id: string
  category: DownloadCategoryId
  /**
   * `true` puts the file behind the contact form (lead capture),
   * `false` gives a direct download. Flip this per document at any time.
   */
  requiresLead: boolean
  assets: DownloadAsset[]
}

/** Order in which the categories are rendered on the page. */
export const DOWNLOAD_CATEGORIES: DownloadCategoryId[] = [
  'mandates',
  'factsheets',
]

export const DOWNLOAD_DOCUMENTS: DownloadDocument[] = [
  {
    id: 'co-broker-mandate',
    category: 'mandates',
    // Direct download: clients should be able to grab, sign and return the
    // mandate without filling in anything first.
    requiresLead: false,
    assets: [
      {
        language: 'de',
        format: 'pdf',
        href: '/downloads/SLMC-Betreuungsmandat-Co-Broker-DE.pdf',
        fileName: 'SLMC-Betreuungsmandat-Co-Broker-DE.pdf',
        size: '138 KB',
      },
      {
        language: 'de',
        format: 'docx',
        href: '/downloads/SLMC-Betreuungsmandat-Co-Broker-DE.docx',
        fileName: 'SLMC-Betreuungsmandat-Co-Broker-DE.docx',
        size: '78 KB',
      },
      {
        language: 'en',
        format: 'pdf',
        href: '/downloads/SLMC-Insurance-Brokerage-Mandate-Co-Broker-EN.pdf',
        fileName: 'SLMC-Insurance-Brokerage-Mandate-Co-Broker-EN.pdf',
        size: '141 KB',
      },
      {
        language: 'en',
        format: 'docx',
        href: '/downloads/SLMC-Insurance-Brokerage-Mandate-Co-Broker-EN.docx',
        fileName: 'SLMC-Insurance-Brokerage-Mandate-Co-Broker-EN.docx',
        size: '75 KB',
      },
    ],
  },
  {
    id: 'sme-factsheet',
    category: 'factsheets',
    // Kept behind the contact form — this is the existing marketing lead magnet.
    requiresLead: true,
    assets: [
      {
        language: 'de',
        format: 'pdf',
        href: '/SLMC_Factsheet_KMU_Versicherungs_und_Vorsorge_Review_DE.pdf',
        fileName: 'SLMC_Factsheet_KMU_Versicherungs_und_Vorsorge_Review_DE.pdf',
        size: '199 KB',
      },
      {
        language: 'en',
        format: 'pdf',
        href: '/SLMC_Factsheet_SME_Insurance_and_Pension_Review_EN.pdf',
        fileName: 'SLMC_Factsheet_SME_Insurance_and_Pension_Review_EN.pdf',
        size: '198 KB',
      },
    ],
  },
]

/** Documents of one category, in registry order. */
export function getDocumentsByCategory(
  category: DownloadCategoryId,
): DownloadDocument[] {
  return DOWNLOAD_DOCUMENTS.filter(doc => doc.category === category)
}

/** Distinct languages a document is available in, German first. */
export function getDocumentLanguages(
  doc: DownloadDocument,
): DocumentLanguage[] {
  const order: DocumentLanguage[] = ['de', 'en']
  return order.filter(language =>
    doc.assets.some(asset => asset.language === language),
  )
}

/** Assets for one language of a document, PDF before Word. */
export function getAssetsForLanguage(
  doc: DownloadDocument,
  language: DocumentLanguage,
): DownloadAsset[] {
  const order: DocumentFormat[] = ['pdf', 'docx']
  return doc.assets
    .filter(asset => asset.language === language)
    .sort((a, b) => order.indexOf(a.format) - order.indexOf(b.format))
}
