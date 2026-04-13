
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { BUTTON_ARIA_LEARN_MORE } from '@/constant'

export const Button = () => {
  return (
    <Link
            href="/#contact-us"
            aria-label={BUTTON_ARIA_LEARN_MORE}
            className='bg-[#4B55E8] text-white py-3 px-6 rounded-[5px] flex items-center gap-3 cursor-pointer transition-all duration-300 hover:bg-[#373FAF] active:scale-95 shadow-[0_8px_20px_rgba(75,85,232,0.25),0_3px_8px_rgba(0,0,0,0.12)] hover:shadow-[0_14px_28px_rgba(75,85,232,0.32),0_6px_14px_rgba(0,0,0,0.15)] hover:-translate-y-[2px]'>
                <span className='text-sm'>Contact Us</span>
                <span className='inline-flex items-center justify-center rounded-full   bg-white border border-white'>
                  <ArrowRight size={16} strokeWidth={2.25} className='text-[#4B55E8] shrink-0 font-bold' />
                </span>
            </Link>
  )
}
