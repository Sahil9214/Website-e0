import Image from "next/image"
import {  Star } from "lucide-react"
import {
  SERVICES,
  SERVICES_HEADLINE,
  SERVICES_SECTION_LABEL,
  SERVICES_SUBTITLE,
} from "@/constant"

export const Services = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-14 lg:py-32">
      <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-6 px-4 sm:px-6 lg:gap-10 lg:px-4">
        <div className="grid grid-cols-1 gap-5  pb-8 lg:grid-cols-[auto_minmax(0,680px)] lg:items-start lg:gap-8 ">
          <div className="flex  items-center gap-5 lg:self-start">
            <span className="h-[10px] w-[10px] rounded-full bg-[#4B55E8]" />
            <p className="font-hanken text-base font-medium uppercase leading-4 text-black">
              {SERVICES_SECTION_LABEL}
            </p>
          </div>

          <div className="flex w-full  max-w-full flex-col gap-3 lg:justify-self-end">
            <h2 className="font-hanken  text-[clamp(2rem,8vw,4.9rem)] font-medium capitalize leading-[1.02] text-black">
              {SERVICES_HEADLINE}
            </h2>
            <p className="font-dm  text-base leading-6 text-[#585858]">
              {SERVICES_SUBTITLE}
            </p>
          </div>
        </div>

        <div className="flex flex-col ">
          {SERVICES.map((item, index) => (
            <article
              key={item.id}
              style={{ zIndex: index + 1 }}
              className="box-border flex min-h-0 flex-col gap-8 border-t border-[#E1E1E1] bg-white py-8 sm:py-[42px] md:gap-6 lg:sticky lg:top-24 xl:min-h-[397.4px] xl:flex-row xl:items-start xl:gap-5"
            >
              {/* Left: Figma ~502px column; 98.2px title↔list gap at xl (space-between) */}
              <div className="flex w-full min-w-0 flex-col gap-8 xl:max-w-[502px] xl:min-h-[311px] xl:shrink-0 xl:justify-between xl:gap-[98.2px]">
                <div className="flex flex-col gap-5">
                  <div className="pt-[5px] pb-[30px]">
                    <p className="font-hanken text-base font-medium uppercase leading-4 text-black">
                      [{item.id}]
                    </p>
                    <h3 className="mt-[37.2px] font-hanken text-[clamp(1.5rem,5vw,28.8px)] font-medium capitalize leading-normal text-black xl:text-[28.8px] xl:leading-[43px]">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <ul className="flex max-w-[421px] flex-col gap-[9px] items-start">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="inline-flex w-fit max-w-full items-center gap-2 rounded-full bg-[#FF346E0D] px-4 py-[3px] font-dm text-base leading-6 text-[#7A7A7A]"
                    >
                      <Star
                        className="h-[13.33px] w-[13.33px] shrink-0 fill-[#FF346E] text-[#FF346E]"
                        strokeWidth={1.75}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Figma padding 10px, gap 20px; two 358.91×291.4 columns */}
              <div className="flex w-full min-w-0 flex-col items-stretch gap-5 p-0 sm:p-2.5 md:flex-row md:justify-center md:gap-5 xl:min-h-[311px] xl:flex-1 xl:justify-center">
                <div className="relative mx-auto aspect-[358.91/291.4] w-full max-w-[620px] shrink-0 overflow-hidden rounded-[20px] sm:mx-0 md:aspect-auto md:h-[291px] md:w-[620px] ">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 620px"
                    className="object-cover"
                  />
                </div>

                {/* <div className="mx-auto flex h-auto min-h-[200px] w-full max-w-[359px] shrink-0 flex-col justify-between gap-6 md:mx-0 md:h-[291px] md:min-h-[291px] md:gap-0">
                  <div className="w-full pt-[5px] pb-[30px]">
                    <p className="text-right font-hanken text-base font-medium uppercase leading-4 text-black">
                      {SERVICES_PROJECT_BADGE}
                    </p>
                  </div>

                  <button 
                  aria-label="Next"
                  className="flex w-full justify-end pb-[6.5px]">
                    <span className="inline-flex h-[42px] cursor-pointer w-[42px] items-center justify-center rounded-full bg-[#4B55E8] p-[10.5px]">
                      <ArrowRight className="h-[21px] w-[21px] text-white" />
                    </span>
                  </button>
                </div> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

