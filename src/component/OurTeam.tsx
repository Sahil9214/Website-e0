import Link from "next/link"
import { ArrowRight, FileBadge2, Globe, Medal, UsersRound } from "lucide-react"
import {
  TEAM_DESCRIPTION,
  TEAM_FEATURES,
  TEAM_HEADLINE,
  TEAM_SECTION_LABEL,
  UI_VIEW_MORE,
} from "@/constant"

export const OurTeam = () => {
  const iconMap = {
    "users-round": UsersRound,
    "file-badge-2": FileBadge2,
    globe: Globe,
    medal: Medal,
  } as const

  return (
    <section className="w-full bg-white py-12 sm:py-14 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1315px] flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:gap-[80px] lg:px-8">
        <div className="flex w-full flex-col justify-between gap-10 lg:max-w-[548px] lg:gap-24">
          <div className="space-y-5">
            <div className="flex items-center gap-5">
              <span className="h-[10px] w-[10px] rounded-full bg-[#4B55E8]" />
              <p className="font-hanken text-base font-medium uppercase leading-4 text-black">
                {TEAM_SECTION_LABEL}
              </p>
            </div>

            <h2 className="max-w-[548px] font-hanken text-[clamp(2rem,8vw,4.9rem)] font-medium capitalize leading-none text-black">
              {TEAM_HEADLINE}
            </h2>
          </div>

          <div className="space-y-6">
            <p className="max-w-[461px] font-dm text-base leading-6 text-[#585858]">
              {TEAM_DESCRIPTION}
            </p>

            <Link
              href="/#contact-us"
              aria-label="View more team members"
              className="inline-flex h-[50px] max-w-[180px] items-center justify-center gap-3 rounded-[5px] bg-[#4B55E8] px-[30px] py-[17px] font-dm text-base leading-4 text-white shadow-[0_15px_16px_-7px_rgba(182,232,75,0.32)] transition-colors hover:bg-[#3D46C8]"
            >
              <span>{UI_VIEW_MORE}</span>
              <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-white">
                <ArrowRight className="h-3 w-3 text-[#4B55E8]" />
              </span>
            </Link>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:max-w-[630px]">
          {TEAM_FEATURES.map((feature) => {
            const FeatureIcon = iconMap[feature.icon]

            return (
              <article
                key={feature.title}
                className="flex min-h-[250px] flex-col justify-between rounded-2xl bg-[#F7F7F7] p-4 sm:min-h-[286px]"
              >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
                <FeatureIcon className="h-6 w-6 text-black" strokeWidth={2} />
              </span>

              <div className="space-y-2">
                <h3 className="font-hanken text-3xl font-medium capitalize leading-[1.2] text-black">
                  {feature.title}
                </h3>
                <p className="font-dm text-base leading-6 text-[#505050]">
                  {feature.description}
                </p>
              </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}


