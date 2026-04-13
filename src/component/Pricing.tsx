import Image from "next/image"
import {  CheckCircle } from "lucide-react"
import {
  PRICING_CUSTOM_TITLE,
  PRICING_DESCRIPTION,
  PRICING_FEATURES,
  PRICING_CUSTOM_DESCRIPTION,
  PRICING_PREMIUM_DECOR_ALT,
  PRICING_PREMIUM_DECOR_IMAGE,
  PRICING_PREMIUM_TITLE,
  PRICING_SECTION_LABEL,
  PRICING_STARTER_TITLE,
  PRICING_CUSTOM_FEATURES,
  PRICING_PREMIUM_FEATURES
} from "@/constant"

export const Pricing = () => {
  return (
    <section className="w-full  py-10 sm:py-12 lg:py-[50px]">
      <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-5 px-4 sm:px-6 lg:gap-5 lg:px-8">
        <div className="flex flex-col items-center gap-5 pb-2 sm:pb-[15px]">
          <div className="flex flex-row items-center justify-center gap-5">
            <span
              className="h-[10px] w-[10px] shrink-0 rounded-[5px] bg-[#4B55E8]"
              aria-hidden
            />
            <h2 className="font-inter text-base font-medium uppercase leading-4 text-black">
              {PRICING_SECTION_LABEL}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 xl:gap-10 xl:items-stretch">
          {/* Starter */}
          <article className="group relative isolate flex min-h-0 w-full max-w-[415px] flex-col gap-10 overflow-hidden rounded-[20px] bg-[#F7F7F7] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-[0_20px_45px_rgba(75,85,232,0.35)] sm:max-h-[403px] xl:max-w-none">
            <div className="flex flex-col gap-5 px-2 pt-2 sm:px-[10px]">
              <div className="flex flex-col gap-5">
                <h3 className="font-hanken text-[clamp(1.125rem,2.5vw,1.2rem)] font-medium capitalize leading-[1.2] text-black transition-colors duration-300 group-hover:text-white">
                  {PRICING_STARTER_TITLE}
                </h3>
                <p className="max-w-[302px] font-dm text-base font-normal leading-6 text-[#585858] transition-colors duration-300 group-hover:text-[#DDDDDD]">
                  {PRICING_DESCRIPTION}
                </p>
              </div>

            </div>

            <ul className="flex flex-col gap-[5px] px-2 sm:px-[10px]">
              {PRICING_FEATURES.map((item) => (
                <li key={item} className="flex items-start gap-1 pb-[5px] last:pb-0">
                  <CheckCircle className="h-5 w-5 shrink-0 text-[#232A87] transition-colors duration-300 group-hover:text-[#4B55E8]" />
                  <span className="pl-1 font-dm text-base font-normal leading-6 text-[#585858] transition-colors duration-300 group-hover:text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <Image
              className="pointer-events-none absolute -bottom-20 -right-20 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
              src={PRICING_PREMIUM_DECOR_IMAGE}
              alt={PRICING_PREMIUM_DECOR_ALT}
              width={324}
              height={324}
            />
          </article>

          {/* Premium */}
          <article className="group relative isolate flex min-h-0 w-full max-w-[415px] flex-col gap-10 overflow-hidden rounded-[20px] bg-[#F7F7F7] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-[0_20px_45px_rgba(75,85,232,0.35)] sm:max-h-[403px] xl:max-w-none">
            <div className=" z-1 flex flex-col gap-5 px-2 pt-2 sm:px-[10px] relative">
              <div className="flex flex-col gap-5">
                <h3 className="font-hanken text-[clamp(1.125rem,2.5vw,1.2rem)] font-medium capitalize leading-[1.2] text-black transition-colors duration-300 group-hover:text-white">
                  {PRICING_PREMIUM_TITLE}
                </h3>
                <p className="max-w-[302px] font-dm text-base font-normal leading-6 text-[#585858] transition-colors duration-300 group-hover:text-[#DDDDDD]">
                  {PRICING_DESCRIPTION}
                </p>
              </div>

             
            </div>

            <ul className="relative z-1 flex flex-col gap-[5px] px-2 sm:px-[10px]">
              {PRICING_PREMIUM_FEATURES.map((item) => (
                <li key={item} className="flex items-start gap-1 pb-[5px] last:pb-0">
                  <CheckCircle className="h-5 w-5 shrink-0 text-[#232A87] transition-colors duration-300 group-hover:text-[#4B55E8]" />
                  <span className="pl-1 font-dm text-base font-normal leading-6 text-[#585858] transition-colors duration-300 group-hover:text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <Image
            className="pointer-events-none absolute -bottom-20 -right-20 opacity-0 transition-opacity duration-300 group-hover:opacity-10" 
            src={PRICING_PREMIUM_DECOR_IMAGE} alt={PRICING_PREMIUM_DECOR_ALT} width={324} height={324} />
          </article>

          {/* Custom quote */}
          <article className="group relative isolate flex min-h-0 w-full max-w-[415px] flex-col gap-10 overflow-hidden rounded-[20px] bg-[#F7F7F7] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-[0_20px_45px_rgba(75,85,232,0.35)] sm:min-h-[403px] xl:max-w-none">
            <div className="flex flex-col gap-5 px-2 pt-2 sm:px-[10px]">
              <div className="flex flex-col gap-5">
                <h3 className="font-hanken text-[clamp(1.125rem,2.5vw,1.2rem)] font-medium capitalize leading-[1.2] text-black transition-colors duration-300 group-hover:text-white">
                  {PRICING_CUSTOM_TITLE}
                </h3>
                <p className="max-w-[302px] font-dm text-base font-normal leading-6 text-[#585858] transition-colors duration-300 group-hover:text-[#DDDDDD]">
                  {PRICING_CUSTOM_DESCRIPTION}
                </p>
              </div>

            </div>

            <ul className="flex flex-col gap-[5px] px-2 sm:px-[10px]">
              {PRICING_CUSTOM_FEATURES.map((item) => (
                <li key={item} className="flex items-start gap-1 pb-[5px] last:pb-0">
                  <CheckCircle className="h-5 w-5 shrink-0 text-[#232A87] transition-colors duration-300 group-hover:text-[#4B55E8]" />
                  <span className="pl-1 font-dm text-base font-normal leading-6 text-[#585858] transition-colors duration-300 group-hover:text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <Image
              className="pointer-events-none absolute -bottom-20 -right-20 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
              src={PRICING_PREMIUM_DECOR_IMAGE}
              alt={PRICING_PREMIUM_DECOR_ALT}
              width={324}
              height={324}
            />
          </article>
        </div>
      </div>
    </section>
  )
}


