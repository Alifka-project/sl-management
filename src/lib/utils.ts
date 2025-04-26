'use client'

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { usePathname } from 'next/navigation'
import { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * A custom hook for scrolling to hash anchors with internationalization support
 */
export function useScrollToHash() {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  /**
   * Scrolls to an element with the specified ID
   * @param elementId The ID of the element to scroll to
   * @param options Scroll options
   */
  const scrollToElement = useCallback(
    (
      elementId: string,
      options: {
        behavior?: ScrollBehavior
        block?: ScrollLogicalPosition
      } = {},
    ) => {
      const element = document.getElementById(elementId)

      if (element) {
        const { behavior = 'smooth', block = 'start' } = options
        element.scrollIntoView({ behavior, block })
        return true
      }

      return false
    },
    [],
  )

  /**
   * Navigates to a URL with a hash and scrolls to the element
   * @param path The path to navigate to
   * @param hash The hash (without #) to scroll to
   */
  const navigateToHash = useCallback(
    (path: string, hash: string) => {
      // Determine if we're already on the target page
      const currentPath = pathname.split('/').slice(2).join('/') // Remove locale prefix
      const targetPath = path.startsWith('/') ? path.substring(1) : path

      if (currentPath === targetPath) {
        // If we're on the same page, just scroll to the element
        scrollToElement(hash)
      } else {
        // Otherwise, navigate to the new page with the hash
        const newPath = `/${locale}/${targetPath}#${hash}`
        router.push(newPath)
      }
    },
    [locale, pathname, router, scrollToElement],
  )

  return {
    scrollToElement,
    navigateToHash,
  }
}
