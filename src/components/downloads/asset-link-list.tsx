'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import type { DownloadAsset } from '@/lib/downloads'

const DownloadIcon = () => (
  <svg
    className='h-5 w-5 shrink-0 text-[#252525]'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
    strokeWidth={2}
    aria-hidden='true'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3'
    />
  </svg>
)

interface AssetLinkListProps {
  assets: DownloadAsset[]
}

/**
 * Renders one download row per file: language badge, format, size.
 * Shared by the downloads page and the lead-capture modal.
 */
const AssetLinkList: React.FC<AssetLinkListProps> = ({ assets }) => {
  const t = useTranslations('downloads')

  return (
    <ul className='flex flex-col gap-3'>
      {assets.map(asset => (
        <li key={asset.href}>
          <a
            href={asset.href}
            download={asset.fileName}
            className='flex items-center justify-between gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 transition-colors hover:border-[#EABF49] hover:bg-[#EABF49]/10'
          >
            <span className='flex min-w-0 items-center gap-3'>
              <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#EABF49] text-xs font-bold uppercase text-[#252525]'>
                {asset.language}
              </span>
              <span className='flex min-w-0 flex-col'>
                <span className='truncate text-sm font-medium text-[#252525]'>
                  {t(`languages.${asset.language}`)} ·{' '}
                  {t(`formats.${asset.format}`)}
                </span>
                <span className='text-xs text-gray-500'>{asset.size}</span>
              </span>
            </span>
            <DownloadIcon />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default AssetLinkList
