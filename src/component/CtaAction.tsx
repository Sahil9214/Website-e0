import Image from "next/image"
import Link from "next/link"
import {
  CONTACT_SECTION_HREF,
  CONTACT_EMAIL,
  CONTACT_REGION_LABEL,
  CTA_CONTACT_LABEL,
  CTA_EMAIL_LABEL,
  CTA_FOOTER_NAV_PRIMARY,
  CTA_FOOTER_NAV_SECONDARY,
  CTA_HEADLINE,
  CTA_SOCIAL_LINKS,
  CTA_SUBHEADLINE,
  NAVBAR_BRAND,
} from "@/constant"

 function NavRow({ items }: { items: readonly { href: string; label: string }[] }) {
  return (
    <div className="flex flex-row flex-wrap items-center gap-x-0 gap-y-1">
      {items.map((item, index) => (
        <span key={item.href} className="inline-flex items-center">
          {index > 0 ? (
            <span
              className="px-2 font-dm text-base font-normal leading-6 text-[#585858]"
              aria-hidden
            >
              /
            </span>
          ) : null}
          <Link
            href={item.href}
            className="inline-block px-2 font-dm text-base font-normal leading-6 text-[#9E9E9E] underline decoration-[#9E9E9E] underline-offset-2 transition-colors hover:text-white hover:decoration-white"
          >
            {item.label}
          </Link>
        </span>
      ))}
    </div>
  )
}

export const CtaAction = () => {
  return (
    <footer className="w-full px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-[50px]">
      <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-5 rounded-[20px] bg-black p-6 sm:p-8 sm:gap-5 lg:gap-5 lg:p-10">
        {/* Top: headline + Join Now */}
        <div className="flex w-full flex-col items-start gap-8 md:flex-row md:items-center md:justify-between md:gap-6">
          <Link
            href={CONTACT_SECTION_HREF}
            className="inline-flex h-[70px] w-[112px] items-center justify-start sm:h-[86px] sm:w-[140px]"
            aria-label={NAVBAR_BRAND.logoAlt}
          >
            <Image
              src={'/svg/ctaLogo.svg'}
              alt={NAVBAR_BRAND.logoAlt}
              width={150}
              height={93}
              className="h-full w-auto object-contain"
              priority
            />
          </Link>

          <div className="ml-0 flex min-w-0 flex-1 flex-col items-start gap-1 text-left md:ml-auto md:max-w-[880px] md:items-end md:text-right">
            <h2 className="font-hanken text-[clamp(2rem,5.7vw,3.7rem)] font-medium capitalize leading-tight text-white">
              {CTA_HEADLINE}
            </h2>
            <p className="font-hanken text-[clamp(2rem,5.7vw,3.7rem)] font-medium capitalize leading-tight text-white">
              {CTA_SUBHEADLINE}
            </p>
          </div>
        </div>

        {/* Bottom block: social + 3 columns */}
        <div className="flex w-full flex-col gap-8 pt-6 sm:pt-8 lg:pt-10">
          <ul className="flex list-none flex-row items-center gap-[5px] p-0">
            {CTA_SOCIAL_LINKS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white/22 transition-opacity hover:opacity-90"
                  aria-label={s.label}
                >
                  <Image
                    src={s.src}
                    alt=""
                    width={17}
                    height={17}
                    className="brightness-0 invert"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8 xl:gap-10">
            <div className="flex min-w-0 flex-col gap-6 mt-14">
              <NavRow items={CTA_FOOTER_NAV_PRIMARY} />
              <NavRow items={CTA_FOOTER_NAV_SECONDARY} />
            </div>

            <div className="flex min-w-0 flex-col gap-2">
              <p className="font-dm text-base font-normal leading-6 text-[#9E9E9E]">{CTA_CONTACT_LABEL}</p>
              <p className="max-w-[294px] font-hanken text-xl font-medium capitalize leading-9 text-white sm:text-2xl sm:leading-9">
                {CONTACT_REGION_LABEL}
              </p>
            </div>

            <div className="flex min-w-0 flex-col gap-2">
              <p className="font-dm text-base font-normal leading-6 text-[#9E9E9E]">
                {CTA_EMAIL_LABEL}
              </p>
              <a
                href={CONTACT_SECTION_HREF}
                className="wrap-break-word font-hanken text-xl font-medium leading-9 text-white normal-case sm:text-2xl sm:leading-9"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


