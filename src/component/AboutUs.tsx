import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Lightbulb } from "lucide-react"
import {
  ABOUT_BODY,
  ABOUT_CARD_TITLE,
  ABOUT_HEADLINE,
  ABOUT_HIGHLIGHTS,
  ABOUT_IMAGE_ALT,
  ABOUT_IMAGE_SRC,
  ABOUT_SECTION_LABEL,
  ABOUT_STAT_CAPTION,
  ABOUT_STAT_VALUE,
  ABOUT_USER_AVATARS,
  UI_LEARN_MORE,
} from "@/constant"

const AboutUs = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-[50px] ">
      <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-8 px-4 sm:px-6 lg:gap-9 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between ">
          <div className="flex items-center gap-5 ">
            <span className="h-[10px] w-[10px] rounded-full bg-[#4B55E8]" />
            <p className="font-hanken text-base font-medium uppercase leading-4 text-black">
              {ABOUT_SECTION_LABEL}
            </p>
          </div>

          <h2 className="max-w-[925px]  font-hanken text-[clamp(1.8rem,4.1vw,2.6rem)] font-normal leading-[1.2] text-[#585858]">
            {ABOUT_HEADLINE}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[295px_minmax(0,1fr)_472px] lg:gap-5">
          <aside className="flex items-end">
            <div className="w-full max-w-[251px] rounded-[20px] bg-black p-5 pb-4">
              <div className="mb-7">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>

              <div className="mb-5 flex items-center">
                <div className="flex items-center">
                  {ABOUT_USER_AVATARS.map((src, idx) => (
                    <div
                      key={src}
                      className={`relative h-[42px] w-[42px] overflow-hidden rounded-full border-2 border-black ${
                        idx === 0 ? "" : "-ml-2"
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`team ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="-ml-2 flex h-[42px] w-[42px] items-center justify-center rounded-full border-2 border-black bg-white">
                  <span className="text-xl leading-none text-black">+</span>
                </div>
              </div>

              <p className="font-dm text-base leading-6 text-[#CFCFCF]">
                {ABOUT_CARD_TITLE}
              </p>
            </div>
          </aside>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <p className="max-w-[472px] font-dm text-base leading-6 text-[#585858]">
                {ABOUT_BODY}
              </p>

              <ul className="space-y-[5px]">
                {ABOUT_HIGHLIGHTS.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-[5px] font-dm text-base leading-6 text-[#585858]"
                  >
                    <CheckCircle className="h-5 w-5 shrink-0 text-[#232A87]" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/#contact-us"
                aria-label="Contact Us"
                className="flex h-[50px] cursor-pointer max-w-[180px] items-center justify-center gap-3 rounded-[5px] bg-[#4B55E8] px-[30px] py-[17px] font-dm text-base leading-4 text-white shadow-[0_15px_16px_-7px_rgba(75,85,232,0.32)] transition-colors hover:bg-[#373FAF]"
              >
                <span>{UI_LEARN_MORE}</span>
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-white">
                  <ArrowRight className="h-3 w-3 text-[#4B55E8]" />
                </span>
              </Link>
            </div>

            <div className="flex flex-col gap-4 border-t border-[#E4E4E4] pt-6 sm:flex-row sm:items-center sm:gap-5 mt-2">
              <span className="font-hanken text-[clamp(3rem,8vw,5rem)] leading-none text-[#FF346E]">
                {ABOUT_STAT_VALUE}
              </span>
              <p className="max-w-[246px] font-dm text-[15px] leading-6 text-[#585858] mt-1">
                {ABOUT_STAT_CAPTION}
              </p>
            </div>
          </div>

          <div className="relative h-[320px] overflow-hidden rounded-[20px] sm:h-[388px]">
            <Image
              src={ABOUT_IMAGE_SRC}
              alt={ABOUT_IMAGE_ALT}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
