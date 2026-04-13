"use client"

import type { FormEvent } from "react"
import { useState } from "react"

const CONTACT_DESCRIPTION =
"Interested in joining or have questions about the chapter? Reach out and our membership team will get back to you within 48 hours."

type ContactFormValues = {
  name: string
  phone: string
  email: string
  subject: string
  message: string
}

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
}

const GOOGLE_SHEET_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL ?? ""

export const Contactus = () => {
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const validateForm = (formValues: ContactFormValues) => {
    const nextErrors: ContactFormErrors = {}

    if (!formValues.name.trim()) nextErrors.name = "Name is required."
    if (!formValues.phone.trim()) {
      nextErrors.phone = "Mobile number is required."
    } else if (!/^[+\d][\d\s-]{7,14}$/.test(formValues.phone.trim())) {
      nextErrors.phone = "Please enter a valid mobile number."
    }
    if (!formValues.email.trim()) {
      nextErrors.email = "Email is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email.trim())) {
      nextErrors.email = "Please enter a valid email address."
    }
    if (!formValues.subject.trim()) nextErrors.subject = "Subject is required."
    if (!formValues.message.trim()) nextErrors.message = "Message is required."

    return nextErrors
  }

  const validateField = (
    key: keyof ContactFormValues,
    value: string,
  ) => {
    const nextValues = { ...values, [key]: value }
    return validateForm(nextValues)[key]
  }

  const handleChange = (
    key: keyof ContactFormValues,
    value: string,
  ) => {
    setValues((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({
      ...prev,
      [key]: prev[key] ? validateField(key, value) : undefined,
    }))
  }

  const handleBlur = (key: keyof ContactFormValues, value: string) => {
    setErrors((prev) => ({ ...prev, [key]: validateField(key, value) }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitMessage("")

    const trimmedValues: ContactFormValues = {
      name: values.name.trim(),
      phone: values.phone.trim(),
      email: values.email.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
    }

    const validationErrors = validateForm(trimmedValues)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    if (!GOOGLE_SHEET_WEBHOOK_URL) {
      setSubmitMessage(
        "Form is not configured yet. Please set NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL.",
      )
      return
    }

    setIsSubmitting(true)

    try {
      const payload = new URLSearchParams({
        ...trimmedValues,
        source: "website-contact-form",
        submittedAt: new Date().toISOString(),
      })

      const response = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: "POST",
        body: payload,
      })

      if (!response.ok) {
        throw new Error("Failed to submit form.")
      }

      setValues(INITIAL_VALUES)
      setSubmitMessage("Thank you! Your query has been submitted successfully.")
    } catch {
      setSubmitMessage("Unable to submit right now. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
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
                  value={values.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  onBlur={(event) => handleBlur("name", event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className="h-[56px] rounded-[100px] border border-[#EAEAEA] bg-[#FAFAFA] px-[30px] font-dm text-sm leading-[18px] text-black placeholder:text-[#C9C1C1] focus:outline-none focus:ring-2 focus:ring-[#4B55E8]/35"
                />
                {errors.name ? (
                  <p id="contact-name-error" className="font-dm text-xs text-red-600">
                    {errors.name}
                  </p>
                ) : null}
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
                  value={values.phone}
                  onChange={(event) => handleChange("phone", event.target.value)}
                  onBlur={(event) => handleBlur("phone", event.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                  className="h-[56px] rounded-[100px] border border-[#EAEAEA] bg-[#FAFAFA] px-[30px] font-dm text-sm leading-[18px] text-black placeholder:text-[#C9C1C1] focus:outline-none focus:ring-2 focus:ring-[#4B55E8]/35"
                />
                {errors.phone ? (
                  <p id="contact-phone-error" className="font-dm text-xs text-red-600">
                    {errors.phone}
                  </p>
                ) : null}
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
                value={values.email}
                onChange={(event) => handleChange("email", event.target.value)}
                onBlur={(event) => handleBlur("email", event.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                className="h-[56px] rounded-[100px] border border-[#EAEAEA] bg-[#FAFAFA] px-[30px] font-dm text-sm leading-[18px] text-black placeholder:text-[#C9C1C1] focus:outline-none focus:ring-2 focus:ring-[#4B55E8]/35"
              />
              {errors.email ? (
                <p id="contact-email-error" className="font-dm text-xs text-red-600">
                  {errors.email}
                </p>
              ) : null}
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
                value={values.subject}
                onChange={(event) => handleChange("subject", event.target.value)}
                onBlur={(event) => handleBlur("subject", event.target.value)}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                className="h-[56px] rounded-[100px] border border-[#EAEAEA] bg-[#FAFAFA] px-[30px] font-dm text-sm leading-[18px] text-black placeholder:text-[#C9C1C1] focus:outline-none focus:ring-2 focus:ring-[#4B55E8]/35"
              />
              {errors.subject ? (
                <p id="contact-subject-error" className="font-dm text-xs text-red-600">
                  {errors.subject}
                </p>
              ) : null}
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
                value={values.message}
                onChange={(event) => handleChange("message", event.target.value)}
                onBlur={(event) => handleBlur("message", event.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
                className="min-h-[150px] resize-y rounded-[18px] border border-[#EAEAEA] bg-[#FAFAFA] px-[30px] py-[17px] font-dm text-sm leading-[21px] text-black placeholder:text-[#C9C1C1] focus:outline-none focus:ring-2 focus:ring-[#4B55E8]/35"
              />
              {errors.message ? (
                <p id="contact-message-error" className="font-dm text-xs text-red-600">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <div className="flex justify-center pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-12 cursor-pointer rounded-[5px] bg-[#4B55E8] px-5 font-dm text-base font-normal leading-[18px] text-white shadow-[0_15px_16px_-7px_rgba(75,85,232,0.32)]  hover:bg-[#373FAF] focus:outline-none focus:ring-2 focus:ring-[#4B55E8]/40 focus:ring-offset-2 transition-all duration-300 hover:scale-105"
              >
                {isSubmitting ? "Submitting..." : "Enquiry"}
              </button>
            </div>
            {submitMessage ? (
              <p className="text-center font-dm text-sm text-[#1E1E1E]">{submitMessage}</p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}
