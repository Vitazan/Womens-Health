import React from "react";
import HeroBanner from "@/components/hero-banner";
import WebinarList from "@/components/webinar-list";
import CeCredits from "@/components/ce-credits";
import LearningPortal from "@/components/learning-portal";
import RegisterButton from "@/components/register-button";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { event } from "@/lib/data";

export default function Home() {
  const { practitioner, student } = event.pricing;

  return (
    <main className="min-h-screen">
      <HeroBanner />
      <section id="about" className="bg-white py-16 px-6 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-3">
              About the Symposium
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Now in its {event.editionOrdinal} year, the{" "}
              <span className="font-semibold text-[#9455e5]">
                Advances in Women’s Health Symposium
              </span>{" "}
              continues to be a trusted continuing education event, connecting
              healthcare practitioners dedicated to women’s well-being.
            </p>
          </div>

          {/* Description */}
          <div className="text-center text-gray-700 text-base sm:text-lg leading-relaxed space-y-6">
            <p>
              Proudly sponsored by <span className="font-semibold">NFH</span>{" "}
              and <span className="font-semibold">Vitazan Professional</span>,
              this one-day virtual symposium features leading naturopathic
              doctors and integrative medicine experts, sharing the latest
              research and practical, evidence-based strategies in the evolving
              landscape of women’s health.
            </p>

            {/* Taglines */}
            <div className="flex w-full flex-col sm:flex-row items-stretch justify-between gap-3 sm:gap-0 rounded-lg bg-[#f7ddec] p-4 text-center font-medium text-[#512b81] shadow-sm">
              {event.taglines.map((text, i, arr) => (
                // Use React.Fragment to avoid adding extra divs to the DOM
                <React.Fragment key={text}>
                  <span className="flex flex-1 items-center justify-center">
                    {text}
                  </span>
                  {/* Add a divider between items, but not after the last one */}
                  {i < arr.length - 1 && (
                    <div className="hidden sm:block mx-4 border-l border-[#d3b8d0]"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Date & time */}
          <div className="text-center">
            <p className="text-xl sm:text-2xl font-bold text-[#9455e5]">
              {event.date}
            </p>
            <p className="text-lg text-gray-700">{event.time}</p>
          </div>

          {/* Early-bird banner — only rendered once NFH confirms the offer */}
          {event.earlyBirdDeadline && event.earlyBirdReward && (
            <div className="text-center">
              <p className="mt-6 text-xl text-[#d45ba2] font-bold p-4 border-dashed border-2 border-[#d45ba2] rounded-lg">
                🎁 Register by {event.earlyBirdDeadline} to receive{" "}
                {event.earlyBirdReward}
              </p>
            </div>
          )}

          {/* Pricing */}
          <div className="w-full mx-auto">
            <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-3xl font-bold text-center text-[#9455e5] mb-6">
                Pricing
              </h3>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1 p-6 bg-gray-50 rounded-lg text-center">
                  <p className="text-lg font-semibold text-gray-800">
                    {practitioner.label}
                  </p>
                  <p className="text-4xl font-bold text-gray-900 mt-2">
                    {practitioner.amount}{" "}
                    <span className="text-xl font-medium text-gray-500">
                      {practitioner.currency}
                    </span>
                  </p>
                </div>
                <div className="flex-1 p-6 bg-gray-50 rounded-lg text-center">
                  <p className="text-lg font-semibold text-gray-800">
                    {student.label}
                  </p>
                  <p className="text-4xl font-bold text-gray-900 mt-2">
                    {student.amount}{" "}
                    <span className="text-xl font-medium text-gray-500">
                      {student.currency}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    (Promo Code: {student.promoCode})
                  </p>
                </div>
              </div>
              <p className="text-xs text-center text-gray-500 mt-6">
                <em>{event.pricing.note}</em>
              </p>
              <div className="mt-8 text-center">
                <RegisterButton
                  className="px-8 py-6 text-lg shadow-md"
                  showNote
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CeCredits />

      <TestimonialsCarousel />

      <WebinarList />

      <LearningPortal />
    </main>
  );
}
