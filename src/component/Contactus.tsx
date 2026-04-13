"use client"

import type { FormEvent } from "react"
import { CONTACT_EMAIL } from "@/constant"

const CONTACT_DESCRIPTION =
"Interested in joining or have questions about the chapter? Reach out and our membership team will get back to you within 48 hours."
export const Contactus = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get("name") ?? "").trim()
    const phone = String(formData.get("phone") ?? "").trim()
    const email = String(formData.get("email") ?? "").trim()
    const subject = String(formData.get("subject") ?? "").trim()
    const message = String(formData.get("message") ?? "").trim()

    const mailSubject = encodeURIComponent(subject || "Website Contact Enquiry")
    const mailBody = encodeURIComponent(
      [
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    )

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${mailSubject}&body=${mailBody}`
  }

  return (
    <section id="contact-us" className="w-full scroll-mt-24 bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-[72px]">
      <div className="mx-auto flex w-full max-w-[1300px] flex-col items-center gap-5 pb-[50px]">
        <div className="flex items-center justify-center gap-2">
          <span className="h-[10px] w-[10px] rounded-full bg-[#4B55E8]" aria-hidden />
          <p className="font-hanken text-base font-medium uppercase leading-4 text-black">
          WELCOME TO EO
          </p>
        </div>

        <div className="flex w-full max-w-[767px] flex-col items-center gap-5 text-center">
          <h2 className="font-hanken text-[clamp(2.5rem,8vw,4.9rem)] font-medium capitalize leading-none text-black">
            Contact
          </h2>
        </div>
          <p className="font-dm text-base font-normal leading-6 text-[#585858] max-w-[990px]">
            {CONTACT_DESCRIPTION}
          </p>
        

        <div className="w-full pt-8 sm:pt-12">
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex w-full max-w-[936px] flex-col gap-5"
            noValidate
          >
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="flex flex-col gap-4">
                <label
                  htmlFor="contact-name"
                  className="font-hanken text-base font-medium uppercase leading-4 text-black"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Name"
                  required
                  className="h-[56px] rounded-[100px] border border-[#EAEAEA] bg-[#FAFAFA] px-[30px] font-dm text-sm leading-[18px] text-black placeholder:text-[#C9C1C1] focus:outline-none focus:ring-2 focus:ring-[#4B55E8]/35"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label
                  htmlFor="contact-phone"
                  className="font-hanken text-base font-medium uppercase leading-4 text-black"
                >
                  Mobile Number
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="+91 Your Number"
                  required
                  className="h-[56px] rounded-[100px] border border-[#EAEAEA] bg-[#FAFAFA] px-[30px] font-dm text-sm leading-[18px] text-black placeholder:text-[#C9C1C1] focus:outline-none focus:ring-2 focus:ring-[#4B55E8]/35"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <label
                htmlFor="contact-email"
                className="font-hanken text-base font-medium uppercase leading-4 text-black"
              >
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Your Email Address"
                required
                className="h-[56px] rounded-[100px] border border-[#EAEAEA] bg-[#FAFAFA] px-[30px] font-dm text-sm leading-[18px] text-black placeholder:text-[#C9C1C1] focus:outline-none focus:ring-2 focus:ring-[#4B55E8]/35"
              />
            </div>

            <div className="flex flex-col gap-4">
              <label
                htmlFor="contact-subject"
                className="font-hanken text-base font-medium uppercase leading-4 text-black"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                autoComplete="off"
                placeholder="Membership Enquiry / General Enquiry"
                required
                className="h-[56px] rounded-[100px] border border-[#EAEAEA] bg-[#FAFAFA] px-[30px] font-dm text-sm leading-[18px] text-black placeholder:text-[#C9C1C1] focus:outline-none focus:ring-2 focus:ring-[#4B55E8]/35"
              />
            </div>

            <div className="flex flex-col gap-4">
              <label
                htmlFor="contact-message"
                className="font-hanken text-base font-medium uppercase leading-4 text-black"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Tell us about yourself and your business."
                required
                className="min-h-[150px] resize-y rounded-[18px] border border-[#EAEAEA] bg-[#FAFAFA] px-[30px] py-[17px] font-dm text-sm leading-[21px] text-black placeholder:text-[#C9C1C1] focus:outline-none focus:ring-2 focus:ring-[#4B55E8]/35"
              />
            </div>

            <div className="flex justify-center pt-1">
              <button
                type="submit"
                className="h-12 cursor-pointer rounded-[5px] bg-[#4B55E8] px-5 font-dm text-base font-normal leading-[18px] text-white shadow-[0_15px_16px_-7px_rgba(75,85,232,0.32)]  hover:bg-[#373FAF] focus:outline-none focus:ring-2 focus:ring-[#4B55E8]/40 focus:ring-offset-2 transition-all duration-300 hover:scale-105"
              >
                Enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
