"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import RegisterButton from "@/components/register-button";
import { event, speakers } from "@/lib/data";

const RotatingText = () => {
  const phrases = event.taglines;
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-6 md:h-8 relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute"
        >
          {phrases[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const HeroBanner = () => {
  return (
    <section className="min-h-[480px] bg-[linear-gradient(to_right,_#cdcde0_0%,_#dfe3e3_35%,_#e9efee_40%)] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* RIGHT COLUMN: IMAGE */}
        <div className="w-full h-full">
          <img
            src="/herobanner4.png"
            alt="Advances in Women’s Health Symposium — virtual event"
            className="w-full h-full object-contain"
          />
        </div>
        {/* LEFT COLUMN: TEXT */}
        <div className="flex items-center justify-center px-6 md:px-12 pt-12 sm:pt-12 lg:pt-10">
          <div className="max-w-xl">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-4xl font-extrabold tracking-tight text-[#9455e5] mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Advances in Women’s Health Symposium
            </motion.h1>

            <motion.p
              className="text-base md:text-2xl text-gray-800 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <strong className="text-[#d45ba2] font-semibold">
                {event.date} ({event.time})
              </strong>
            </motion.p>

            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <RegisterButton
                className="px-6 py-3 text-lg"
                showNote
                noteClassName="self-start"
                wrapperClassName="items-start"
              />
            </motion.div>

            {event.earlyBirdDeadline && event.earlyBirdReward && (
              <p className="mb-1">
                🎁 Register by {event.earlyBirdDeadline} to receive{" "}
                {event.earlyBirdReward}
              </p>
            )}

            {/* Speaker avatars + info */}
            <motion.div
              className="my-6 flex flex-col sm:flex-row items-center sm:space-x-4 text-center sm:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="flex items-center justify-center sm:justify-start -space-x-4">
                {speakers.map((speaker, i) => (
                  <motion.img
                    key={speaker.id}
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-12 h-12 rounded-full border-2 border-white shadow-sm object-cover"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  />
                ))}
              </div>
              <p className="text-gray-800 font-medium text-sm sm:text-base">
                <span className="font-semibold block sm:inline">
                  Four expert speakers in women’s health <br /> One-day virtual
                  symposium for practitioners and students
                </span>
              </p>
            </motion.div>

            <motion.div
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="mb-1">
                <strong>CE credits:</strong> 5.00 (General + Pharmacology) —{" "}
                <a href="#ce-credits" className="underline hover:text-gray-800">
                  see details
                </a>
              </p>
            </motion.div>

            {/* Sponsored by section */}
            <motion.div
              className="mt-6 flex flex-col items-start gap-2 text-gray-800 text-sm md:text-base"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="flex items-center gap-3">
                <span className="font-medium">Sponsored by</span>
                <a
                  href="https://nfh.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/NFH x Vitazan.png"
                    alt="NFH and Vitazan Logos"
                    className="h-7 md:h-14 object-contain"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
