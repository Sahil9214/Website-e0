import Image from "next/image"
import { Button } from "./ui/Button"
import InfiniteCarousel from "./ui/InfiniteCarousel"
import {
  HERO_BADGE,
  HERO_SOCIAL_LINKS,
  HERO_SUBTITLE,
  HERO_TITLE_LINE1,
  HERO_TITLE_LINE2,
} from "@/constant"
import Link from "next/link"

export const Herosection = () => {
  return (
    <section className="w-full py-20">
      <div className="mx-auto flex w-full max-w-[1300px] flex-col items-center gap-6 px-4  sm:px-6 lg:px-8">
      <div className="flex items-center gap-2">
        <span className="h-[10px] w-[10px] rounded-full bg-[#4B55E8]" />
        <p className="text-center text-xs font-medium uppercase leading-4 text-black sm:text-base">
          {HERO_BADGE}
        </p>
      </div>

      <h1 className="text-center font-medium capitalize leading-none text-black text-[clamp(2.2rem,5.2vw,4.9rem)]">
        {HERO_TITLE_LINE1}
        <br />
        {HERO_TITLE_LINE2}
      </h1>

      <div className="max-w-[767px] pb-[14.4px]">
        <h2 className="font-dm text-center text-base font-normal leading-6 text-[#585858]">
          {HERO_SUBTITLE}
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <Button />
        <div className="flex items-center justify-center gap-3">
          {HERO_SOCIAL_LINKS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-label={item.name}
              className="group flex h-[44px] w-[44px] items-center justify-center rounded-[4.4px] bg-[#F4F4F4] p-[11px] transition-colors duration-300 hover:bg-black"
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={22}
                height={22}
                className="h-[22px] w-[22px] transition duration-300 group-hover:invert"
              />
            </Link>
          ))}
        </div>
      </div>
      </div>
      <section className="w-full ">
      <InfiniteCarousel/>
      </section>
     
    </section>
  )
}
