'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Button } from '../ui/button'
import AssetLinkList from './asset-link-list'
import LeadGateModal from './lead-gate-modal'
import {
  DOWNLOAD_CATEGORIES,
  getAssetsForLanguage,
  getDocumentLanguages,
  getDocumentsByCategory,
  type DownloadDocument,
} from '@/lib/downloads'

const LockIcon = () => (
  <svg
    className='h-4 w-4'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}
    aria-hidden='true'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 12.75v6.75a2.25 2.25 0 002.25 2.25z'
    />
  </svg>
)

interface DocumentCardProps {
  doc: DownloadDocument
  onRequestAccess: (document: DownloadDocument) => void
}

const DocumentCard: React.FC<DocumentCardProps> = ({
  doc,
  onRequestAccess,
}) => {
  const t = useTranslations('downloads')
  const languages = getDocumentLanguages(doc)

  return (
    <motion.article
      className='flex h-full flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className='flex flex-col gap-2'>
        <div className='flex flex-wrap items-center gap-2'>
          {languages.map(language => (
            <span
              key={language}
              className='inline-flex items-center gap-1 rounded-full bg-[#EABF49]/20 px-3 py-1 text-xs font-bold uppercase text-[#252525]'
            >
              {language}
            </span>
          ))}
          {doc.requiresLead && (
            <span className='inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600'>
              <LockIcon />
              {t('gatedBadge')}
            </span>
          )}
        </div>

        <h3 className='text-xl font-bold text-[#252525] sm:text-2xl'>
          {t(`documents.${doc.id}.title`)}
        </h3>
        <p className='text-sm leading-relaxed text-gray-600 sm:text-base'>
          {t(`documents.${doc.id}.description`)}
        </p>
      </div>

      {doc.requiresLead ? (
        <div className='mt-auto flex flex-col gap-3'>
          <p className='text-sm text-gray-500'>{t('gatedHint')}</p>
          <Button
            onClick={() => onRequestAccess(doc)}
            className='w-fit cursor-pointer rounded-[10px] px-8 py-5 font-bold text-[#252525]'
          >
            {t('unlockButton')}
          </Button>
        </div>
      ) : (
        <div className='mt-auto'>
          <AssetLinkList
            assets={languages.flatMap(language =>
              getAssetsForLanguage(doc, language),
            )}
          />
        </div>
      )}
    </motion.article>
  )
}

const DownloadsLibrary: React.FC = () => {
  const t = useTranslations('downloads')
  const [gatedDocument, setGatedDocument] = useState<DownloadDocument | null>(
    null,
  )
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openGate = (doc: DownloadDocument) => {
    setGatedDocument(doc)
    setIsModalOpen(true)
  }

  const categories = DOWNLOAD_CATEGORIES.map(category => ({
    category,
    documents: getDocumentsByCategory(category),
  })).filter(group => group.documents.length > 0)

  return (
    <>
      <section className='bg-[#252525] px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 xl:px-16'>
        <div className='container mx-auto flex flex-col gap-4 text-center lg:text-left'>
          <span className='text-xs font-bold uppercase tracking-[3px] text-[#EABF49]'>
            {t('eyebrow')}
          </span>
          <h1 className='text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl'>
            {t('title')}
          </h1>
          <p className='max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg lg:mx-0 mx-auto'>
            {t('description')}
          </p>
        </div>
      </section>

      <section className='bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 xl:px-16'>
        <div className='container mx-auto flex flex-col gap-14'>
          {categories.map(({ category, documents }) => (
            <div key={category} className='flex flex-col gap-6'>
              <div className='flex flex-col gap-2'>
                <h2 className='text-2xl font-bold text-[#252525] sm:text-3xl'>
                  {t(`categories.${category}.title`)}
                </h2>
                <p className='max-w-3xl text-sm text-gray-600 sm:text-base'>
                  {t(`categories.${category}.description`)}
                </p>
              </div>

              <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
                {documents.map(doc => (
                  <DocumentCard
                    key={doc.id}
                    doc={doc}
                    onRequestAccess={openGate}
                  />
                ))}
              </div>
            </div>
          ))}

          <div className='flex flex-col items-center gap-4 rounded-2xl bg-gray-50 px-6 py-10 text-center sm:px-10'>
            <h2 className='text-xl font-bold text-[#252525] sm:text-2xl'>
              {t('help.title')}
            </h2>
            <p className='max-w-2xl text-sm text-gray-600 sm:text-base'>
              {t('help.description')}
            </p>
            <Link href='/contact-us'>
              <Button className='cursor-pointer rounded-[10px] px-8 py-5 font-bold text-[#252525]'>
                {t('help.cta')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <LeadGateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        assets={gatedDocument?.assets ?? []}
        documentLabel={
          gatedDocument ? t(`documents.${gatedDocument.id}.title`) : ''
        }
      />
    </>
  )
}

export default DownloadsLibrary
