'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { Button } from './ui/Button'
import { NAV_LINKS, NAVBAR_BRAND } from '@/constant'

export const Navbar = () => {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className='border-b border-gray-200'>
    <nav className="mx-auto flex w-full max-w-[1300px] flex-row items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className='flex flex-row items-center gap-2'>
        <Image src={NAVBAR_BRAND.logoSrc} alt={NAVBAR_BRAND.logoAlt} width={45} height={28} />
        <div className='text-2xl font-bold flex flex-col gap-1'>
           <span className='text-navbar-heading-color font-inter font-bold text-sm'> <b>{NAVBAR_BRAND.titleLine1}</b></span>
           <span className='text-navbar-text-color font-inter text-[10px]'>&nbsp;{NAVBAR_BRAND.titleLine2}</span>
        </div>
        </div>
        <div className='hidden items-center gap-8 lg:flex'>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.href}
                  className={`font-dm text-base leading-1 ${
                    isActive ? 'text-[#373FAF] font-bold' : 'text-black font-normal'
                  }`}
                  href={link.href}
                >
                  {link.label}
                </Link>
              )
            })}
        </div>
        <div className='hidden lg:block'>
           <Button />
        </div>
        <button
          type='button'
          className='inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-100 lg:hidden'
          aria-label='Toggle navigation menu'
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            ) : (
              <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
            )}
          </svg>
        </button>
   
    </nav>
    {isMobileMenuOpen && (
      <div className='mx-auto flex w-full max-w-[1300px] flex-col gap-4 px-4 pb-4 sm:px-6 lg:hidden'>
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href

          return (
            <Link
              key={link.href}
              className={`font-dm text-base ${
                isActive ? 'text-[#373FAF] font-bold' : 'text-black font-normal'
              }`}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          )
        })}
        <div className='pt-2'>
          <Button />
        </div>
      </div>
    )}
    </div>
  )
}


