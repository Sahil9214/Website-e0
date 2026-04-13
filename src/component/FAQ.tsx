"use client"

import React, { useState } from "react"
import { Minus, Plus } from "lucide-react"
import { FAQ_HEADLINE, FAQ_ITEMS, FAQ_SECTION_LABEL } from "@/constant"

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="w-full bg-white py-10 sm:py-12 lg:py-[50px]">
      <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-5 px-4 sm:px-6 lg:gap-5 lg:px-8">
        <div className="flex flex-col items-center gap-5 pb-2 sm:pb-[15px]">
          <div className="flex flex-row items-center justify-center gap-5">
            <span
              className="h-[10px] w-[10px] shrink-0 rounded-[5px] bg-[#4B55E8]"
              aria-hidden
            />
            <p className="font-hanken text-base font-medium uppercase leading-4 text-black">
              {FAQ_SECTION_LABEL}
            </p>
          </div>
        </div>

        <h2 className="text-center font-hanken text-[clamp(2rem,8vw,4.9rem)] font-medium capitalize leading-[0.99] text-black">
          {FAQ_HEADLINE}
        </h2>

        <div className="mx-auto flex w-full max-w-[1131px] flex-col gap-4 pt-4 sm:gap-5 sm:pt-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={item.question} className="w-full">
                <button
                  type="button"
                  onClick={() => setOpenIndex(index)}
                  className="flex w-full cursor-pointer flex-row items-center justify-between gap-3 rounded-[999px] bg-[#F7F7F7] px-5 py-[17px] text-left sm:px-[30px]"
                  aria-expanded={isOpen}
                >
                  <span className="min-w-0 flex-1 pr-2 font-hanken text-[clamp(1rem,2.5vw,1.125rem)] font-medium capitalize leading-6 text-black sm:text-lg">
                    {item.question}
                  </span>
                  <span
                    className="inline-flex h-[21.5px] w-[20.8px] shrink-0 items-center justify-center text-[#3942B9]"
                    aria-hidden
                  >
                    {isOpen ? (
                      <Minus className="h-[21px] w-[21px]" strokeWidth={2} />
                    ) : (
                      <Plus className="h-[21px] w-[21px]" strokeWidth={2} />
                    )}
                  </span>
                </button>
                {isOpen ? (
                  <div className="px-5 pt-3 sm:px-[30px] sm:py-6 md:pl-[65px] md:pr-[85px]">
                    <p className="font-dm text-sm font-normal leading-6 text-[#585858] sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


