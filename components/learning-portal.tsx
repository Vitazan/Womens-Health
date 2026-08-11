"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { event } from "@/lib/data";

const LearningPortal = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-10 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto rounded-2xl bg-[#e6d3ff] p-8 md:p-12 text-center"
      >
        <PlayCircle className="h-10 w-10 text-[#512b81] mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#512b81]">
          Expand your knowledge at your own pace
        </h2>
        <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
          Browse previous Advances in Women’s Health Symposium sessions in the
          NFH Learning Portal.
        </p>

        {event.learningPortalLink ? (
          <Button
            asChild
            size="lg"
            style={{ backgroundColor: "#cfb2f3" }}
            className="text-black hover:opacity-90 px-8 py-6 text-lg shadow-md"
          >
            <Link
              href={event.learningPortalLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Access Learning Portal
            </Link>
          </Button>
        ) : (
          <div className="inline-flex flex-col items-center">
            <Button
              disabled
              size="lg"
              aria-disabled="true"
              className="bg-gray-300 text-gray-600 hover:bg-gray-300 px-8 py-6 text-lg"
            >
              Access Learning Portal
            </Button>
            <p className="mt-2 text-sm text-gray-600">Link coming soon</p>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default LearningPortal;
