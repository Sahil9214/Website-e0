import Image from "next/image"
import { COMPANY_LOGOS } from "@/constant"

export const CompaniesLogo = () => {
  return (
    <section className="w-full py-12 sm:py-32 max-w-[1300px] mx-auto">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12 lg:justify-between">
          {COMPANY_LOGOS.map((logo) => (
            <div
              key={logo.src}
              className="flex h-[72px] w-[clamp(110px,16vw,160px)] items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={72}
                className="h-auto max-h-[72px] w-full object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
