import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
  UI_LEARN_MORE,
  WHY_CHOOSE_AVATARS,
  WHY_CHOOSE_BODY,
  WHY_CHOOSE_FEATURE_LEFT_BODY,
  WHY_CHOOSE_FEATURE_LEFT_TITLE,
  WHY_CHOOSE_FEATURE_RIGHT_BODY,
  WHY_CHOOSE_FEATURE_RIGHT_TITLE,
  WHY_CHOOSE_HEADLINE,
  WHY_CHOOSE_IMAGE_ALT,
  WHY_CHOOSE_IMAGE_SRC,
  WHY_CHOOSE_SECTION_LABEL,
  WHY_CHOOSE_WELCOME,
} from "@/constant"

export const WhyChooseus = () => {
  return (
    <section
      id="why-choose-us"
      className="w-full scroll-mt-24 bg-white py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-4">
        <div className="flex w-full flex-col items-stretch gap-8 rounded-[20px] bg-black p-6 sm:p-8 lg:flex-row lg:items-start lg:gap-[90px] lg:p-10">
          {/* Left: image + glass card */}
          <div className="relative flex  w-full min-h-[280px] flex-col justify-end overflow-hidden rounded-[20px] sm:min-h-[360px] lg:min-h-0 lg:h-[650px] lg:max-w-[546.24px] lg:flex-[0_0_auto] lg:self-stretch">
            <Image
              src={WHY_CHOOSE_IMAGE_SRC}
              alt={WHY_CHOOSE_IMAGE_ALT}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 546px"
              className="object-cover"
            />
            <div className="relative z-10 p-4 sm:p-5">
              <div className="relative isolate flex min-h-[154.87px] flex-row items-stretch gap-4 rounded-[15px] border border-[rgba(255,255,255,0.09)] bg-[rgba(0,0,0,0.14)] p-4 backdrop-blur-[1.4px] sm:gap-5 sm:p-5">
                <div className="flex min-w-0 flex-1 flex-col justify-between gap-4">
                  <div className="flex items-start">
                    <div className="flex shrink-0 -space-x-[10px]">
                      {WHY_CHOOSE_AVATARS.map((src, idx) => (
                        <div
                          key={src}
                          className="relative h-[47.27px] w-[47.27px] shrink-0 overflow-hidden rounded-full border border-white/10 bg-neutral-800"
                          style={{ zIndex: WHY_CHOOSE_AVATARS.length - idx }}
                        >
                          <Image
                            src={src}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="font-hanken text-xl font-normal capitalize leading-[29px] text-white sm:text-2xl">
                    {WHY_CHOOSE_WELCOME}
                  </p>
                </div>
                <div className="flex shrink-0 flex-col justify-end">
                  <button
                    type="button"
                    aria-label="Next"
                    className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-[27px] bg-white p-[13.5px] transition-opacity hover:opacity-90"
                  >
                    <ArrowRight className="h-[27px] w-[27px] text-black" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: copy + grid */}
          <div className="flex min-w-0 w-full flex-1 flex-col gap-5 lg:max-w-[583.76px]">
            <div className="flex flex-col gap-5">
              <div className="flex flex-row items-center gap-5 pt-0 lg:pt-[22px]">
                <span className="h-[10px] w-[10px] shrink-0 rounded-[5px] bg-[#4B55E8]" />
                <p className="font-hanken text-base font-medium uppercase leading-4 text-white">
                  {WHY_CHOOSE_SECTION_LABEL}
                </p>
              </div>

              <div className="relative">
                <h2 className="font-hanken text-[clamp(2.25rem,6.5vw,4.9rem)] font-medium capitalize leading-[0.99] text-white">
                  {WHY_CHOOSE_HEADLINE}
                </h2>
              </div>

              <p className="max-w-full pb-0 font-dm text-base font-normal leading-6 text-[#BABABA] lg:pb-[14.4px]">
                {WHY_CHOOSE_BODY}
              </p>

              <div className="flex flex-col items-start">
                <Link
                  href="/#contact-us"
                  className="relative isolate inline-flex h-[50px] min-w-[173px] flex-row items-center justify-center gap-3 rounded-[5px] bg-[#4B55E8] px-[30px] py-[17px] font-dm text-base font-medium leading-4 text-white shadow-[0_15px_16px_-7px_rgba(182,232,75,0.34)] transition-colors hover:bg-[#373FAF]"
                >
                  <span>{UI_LEARN_MORE}</span>
                  <span className="inline-flex h-4 w-4 items-center justify-center text-white">
                    <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                </Link>
              </div>
            </div>

            <div className="mt-10 w-full border-t border-[#222222] pt-8 lg:mt-[68px] lg:pt-[30px] ">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-0 ">
                <div className="flex flex-col gap-5 md:border-r md:border-[#222222]  md:pt-0 ">
                  <div className="flex flex-col gap-[26px]">
                    <Image src="/svg/brief.svg"
                      width={40.58}
                      height={40.58}
                      className="h-[40.58px] w-[40.58px] shrink-0 text-white"
                      alt="real access"
                    />
                    <h3 className="font-hanken text-2xl font-medium capitalize leading-9 text-white">
                      {WHY_CHOOSE_FEATURE_LEFT_TITLE}
                    </h3>
                  </div>
                  <p className="max-w-[225.48px] font-dm text-base font-normal leading-6 text-[#BABABA]">
                    {WHY_CHOOSE_FEATURE_LEFT_BODY}
                  </p>
                </div>

                <div className="flex flex-col gap-5 border-t border-[#222222] pt-10 md:border-t-0 md:pl-[35px] md:pt-0 md:pr-[20px] ">
                  <div className="flex flex-col gap-[26px]">
                    <Image src="/svg/fast-service.svg"
                      width={39.11}
                      height={39.11}
                      className="h-[39.11px] w-[39.11px] shrink-0 text-white"
                 
                      alt="fast service"
                    />
                    <h3 className="font-hanken text-2xl font-medium capitalize leading-9 text-white">
                      {WHY_CHOOSE_FEATURE_RIGHT_TITLE}
                    </h3>
                  </div>
                  <p className="max-w-[217.28px] font-dm text-base font-normal leading-6 text-[#BABABA]">
                    {WHY_CHOOSE_FEATURE_RIGHT_BODY}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


