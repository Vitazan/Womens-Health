import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import HeroBanner from "@/components/hero-banner";
import WebinarList from "@/components/webinar-list";
import FaqPreview from "@/components/faq-preview";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export default function Home() {
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
              Now in its 12<sup>th</sup> year, the{" "}
              <span className="font-semibold text-[#9455e5]">
                Advances in Women’s Health Symposium
              </span>{" "}
              remains a trusted source of continuing education and connection
              for healthcare practitioners dedicated to women’s well-being.
            </p>
          </div>

          {/* Description */}
          <div className="text-center text-gray-700 text-base sm:text-lg leading-relaxed space-y-6">
            <p>
              Proudly sponsored by <span className="font-semibold">NFH</span>{" "}
              and <span className="font-semibold">Vitazan Professional</span>,
              this one-day virtual event brings together leading naturopathic
              doctors and integrative medicine experts to share the latest
              research and practical, evidence-based strategies in the evolving
              landscape of women’s health.
            </p>

            {/* List of benefits */}
            <div className="flex w-full items-stretch justify-between rounded-lg bg-[#f7ddec] p-4 text-center font-medium text-[#512b81] shadow-sm">
              {[
                "Advance your practice",
                "Empower your patients",
                "Shape the future of women’s health",
              ].map((text, i, arr) => (
                // Use React.Fragment to avoid adding extra divs to the DOM
                <React.Fragment key={i}>
                  <span className="flex flex-1 items-center justify-center">
                    {text}
                  </span>
                  {/* Add a divider between items, but not after the last one */}
                  {i < arr.length - 1 && (
                    <div className="mx-4 border-l border-[#d3b8d0]"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <p className="mt-6 text-xl text-[#d45ba2] font-bold p-4 border-dashed border-2 border-[#d45ba2] rounded-lg">
              🎁 Register by September 17<sup>th</sup> to receive an Early-Bird
              Registration Gift Package mailed to you!
            </p>
          </div>

          {/* Pricing & CE Cards */}
          <div className="w-full mx-auto">
            {/* Pricing */}
            <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-3xl font-bold text-center text-[#9455e5] mb-6">
                Pricing
              </h3>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1 p-6 bg-gray-50 rounded-lg text-center">
                  <p className="text-lg font-semibold text-gray-800">
                    Practitioners
                  </p>
                  <p className="text-4xl font-bold text-gray-900 mt-2">
                    $59{" "}
                    <span className="text-xl font-medium text-gray-500">
                      CAD
                    </span>
                  </p>
                </div>
                <div className="flex-1 p-6 bg-gray-50 rounded-lg text-center">
                  <p className="text-lg font-semibold text-gray-800">
                    Students
                  </p>
                  <p className="text-4xl font-bold text-gray-900 mt-2">
                    $28{" "}
                    <span className="text-xl font-medium text-gray-500">
                      CAD
                    </span>
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    (Promo Code: STUDENT)
                  </p>
                </div>
              </div>
              <p className="text-xs text-center text-gray-500 mt-6">
                <em>Taxes included (for Canadian residents only)</em>
              </p>
              <div className="mt-8 text-center">
                <Button
                  style={{ backgroundColor: "#cfb2f3" }}
                  className="text-black hover:opacity-90 px-8 py-6 text-lg shadow-md"
                >
                  <Link
                    href="https://register.gotowebinar.com/register/7850851020637015647"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      <WebinarList />

      {/* <FaqPreview /> */}
      {/* 
      <section className="container ">
        <div className="bg-emerald-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-800">
            Ready to Join Our Free Webinar Series?
          </h2>
          <p className="text-lg text-emerald-700 mb-8 max-w-3xl mx-auto">
            Register now to secure your spot in our upcoming integrative oncology webinars. Learn from expert
            naturopathic doctors and enhance your knowledge of complementary cancer care approaches - completely free of
            charge.
          </p>
          <Button className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 text-lg">
            Register Free
          </Button>
        </div>
      </section> */}
    </main>
  );
}
