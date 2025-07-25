"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const RotatingText = () => {
  const phrases = [
    "Advance your practice",
    "Empower your patients",
    "Shape the future of women’s health",
  ];
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
    <section className="min-h-480px bg-[linear-gradient(to_right,_#cdcde0_0%,_#dfe3e3_35%,_#e9efee_40%)] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* RIGHT COLUMN: IMAGE */}
        <div className="w-full h-full object-contain">
          <img
            src="/herobanner4.png"
            alt="Symposium visual"
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
              Advances in Womens Health Symposium
            </motion.h1>

            <motion.p
              className="text-base md:text-2xl text-gray-800 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              A virtual event for integrative practitioners <br />
              <strong className="text-[#d45ba2] font-semibold">
                October 17, 2025
              </strong>
            </motion.p>

            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Button
                style={{ backgroundColor: "#cfb2f3" }}
                className="text-black hover:opacity-90 px-6 py-3 text-lg"
              >
                <Link
                  href="https://register.gotowebinar.com/register/7850851020637015647"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </Link>
              </Button>
            </motion.div>

            {/* Speaker avatars + info */}
            <motion.div
              className="mt-6 flex flex-col sm:flex-row items-center sm:items-start sm:space-x-4 text-center sm:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="flex justify-center sm:justify-start -space-x-4 mb-4 sm:mb-0">
                {[1, 2, 3, 4].map((i) => (
                  <motion.img
                    key={i}
                    src={`/speakers/speaker${i}.jpg`}
                    alt={`Speaker ${i}`}
                    className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  />
                ))}
              </div>

              <p className="text-gray-800 font-medium text-sm sm:text-base">
                <span className="font-semibold block sm:inline">
                  4 expert speakers one-day virtual symposium
                </span>
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

            <motion.div
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="mb-1">
                Register by September 17th to receive an Early Registration Gift Package mailed to you! 
              </p>
              <p className="mb-1">
                <strong>CE credits:</strong> 5.00 (General + Pharmacology)
              </p>
              {/* <p className="mb-1">
            <strong>Fee:</strong> $59 CAD practitioners / $28 CAD students
          </p> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
