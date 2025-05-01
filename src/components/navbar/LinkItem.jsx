/**
 * @file LinkItem.jsx
 * @module LinkItem
 * @desc A reusable navigation link component that supports react-scroll and Next.js routing.
 *
 * @see {@link https://www.npmjs.com/package/react-scroll | React Scroll Documentation}
 * @see {@link https://nextjs.org/docs/app/building-your-application/routing | Next.js Routing}
 *
 * @author Chace Nielson
 * @created Mar 17, 2025
 * @updated Mar 31, 2025
 */

'use client'

import React from 'react'
import { Link as ScrollLink, scroller } from 'react-scroll'
import { usePathname, useRouter } from 'next/navigation'
import useGoogleAnalytics from '@/analytics/useGoogleAnalytics';

export default function LinkItem({
  href,
  scrollTo,
  router,
  children,
  className = '',
  activeClassName = '',
  disableActive = false,
}) {
  const pathname = usePathname()
  const routerNav = useRouter()
  const isHomePage = pathname === '/'
  const { trackEvent } = useGoogleAnalytics();

  // Function to handle internal routing and scrolling
  const handleClick = (e) => {
    e.preventDefault()

    if (scrollTo) {
      if (isHomePage) {
        scroller.scrollTo(scrollTo, {
          smooth: true,
          duration: 600,
          offset: -120,
        })
      } else {
        routerNav.push('/')

        const observer = new MutationObserver(() => {
          const targetElement = document.getElementById(scrollTo)
          if (targetElement) {
            observer.disconnect()
            setTimeout(() => {
              scroller.scrollTo(scrollTo, {
                smooth: true,
                duration: 1000,
                offset: -50,
              })
            }, 300)
          }
        })

        observer.observe(document.body, { childList: true, subtree: true })
      }
    } else if (router) {
      routerNav.push(router)
    }
  }

  return (
    <div className="relative hover:cursor-pointer">
      {/* External Link */}
      {href && (
        <a
          href={href}
          onClick={() => trackEvent('LinkItem', 'Click', `External Link: ${href}`, 1)} // Track external link click with Google Analytics
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {children}
        </a>
      )}

      {/* Scroll Link on Home Page */}
      {scrollTo && isHomePage && (
        <ScrollLink
          to={scrollTo}
          smooth={true}
          duration={1000}
          spy={true}
          offset={-50}
          activeClass={!disableActive ? activeClassName : ''}
          className={className}
        >
          {children}
        </ScrollLink>
      )}

      {/* Scroll Link with redirect to Home first */}
      {scrollTo && !isHomePage && (
        <a href="/" onClick={handleClick} className={className}>
          {children}
        </a>
      )}

      {/* Router Link */}
      {router && !scrollTo && (
        <a
          href={router}
          onClick={(e) => {
            e.preventDefault()
            routerNav.push(router)
          }}
          className={className}
        >
          {children}
        </a>
      )}
    </div>
  )
}
