"use client"

import { faqs, event } from "@/lib/data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import RegisterButton from "@/components/register-button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function FaqPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-[#f9f0f6] py-16 md:py-24">
        <div className="container text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Find answers to common questions about the Advances in Women’s Health Symposium.
          </motion.p>
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-gray-800">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <p className="text-lg text-gray-600 mb-6">Don't see your question answered here? Contact us directly.</p>
          <Button asChild size="lg" style={{ backgroundColor: "#cfb2f3" }} className="text-black hover:opacity-90">
            <Link href="mailto:info@nfh.ca">Contact Us</Link>
          </Button>
        </motion.div>
      </section>

      <section className="container py-16">
        <div className="bg-[#e6d3ff] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#512b81]">
            Ready to join us on {event.date}?
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-3xl mx-auto">
            Secure your spot at the {event.editionOrdinal} annual Advances in Women’s Health Symposium and spend a day
            with leading naturopathic doctors and integrative medicine experts.
          </p>
          <RegisterButton size="lg" className="px-8 text-lg shadow-md" showNote />
        </div>
      </section>
    </main>
  )
}
