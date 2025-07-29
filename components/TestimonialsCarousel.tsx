"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    review:
      "The women's heath symposium was an extraordinary opportunity to upgrade my practice and skills.  The quality of the presentations, speakers and materials were of a doctorate level.  I would highly recommend and plan to attend the next one for more educational growth.",
  },
  {
    review:
      "The NFH Women's Health Symposium is repeatedly at the top of my list for well-rounded continuing education.  The topics, speakers and information are always first rate.  Every time it has left me with an expanded knowledge of conditions and approaches.  The clinical take aways are solid and can be applied to your practice the very next week.",
  },
  
];

export default function TestimonialTextCarousel({
  language = "en",
}: {
  language?: "en" | "fr";
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const scrollPositionRef = useRef(0);

  const scroll = () => {
    const container = containerRef.current;
    if (!container) return;

    scrollPositionRef.current += 0.5;
    if (scrollPositionRef.current >= container.scrollWidth / 2) {
      scrollPositionRef.current = 0;
    }

    container.scrollLeft = scrollPositionRef.current;
    animationFrameRef.current = requestAnimationFrame(scroll);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    animationFrameRef.current = requestAnimationFrame(scroll);

    const handleMouseEnter = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };

    const handleMouseLeave = () => {
      if (!animationFrameRef.current) {
        animationFrameRef.current = requestAnimationFrame(scroll);
      }
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const currentTestimonials = testimonials;

  return (
    <section className="w-full bg-gray-100 py-20 overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
        {language === "fr"
          ? "Ce que disent les participants précédents"
          : "What past attendees are saying"}
      </h2>
      <div
        ref={containerRef}
        className="flex overflow-hidden cursor-pointer"
        aria-live="polite"
        aria-atomic="true"
      >
        <div className="flex">
          {[...currentTestimonials, ...currentTestimonials].map(
            (testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[100vw] md:w-[550px] mx-4 bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <p className="text-gray-700 text-lg italic">
                    “{testimonial.review}”
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
