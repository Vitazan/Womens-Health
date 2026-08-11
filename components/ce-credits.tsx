"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { event } from "@/lib/data";

const CeCredits = () => {
  const cards = event.ceCredits.filter((credit) => !credit.note);
  const notes = event.ceCredits.filter((credit) => credit.note);

  return (
    <section id="ce-credits" className="bg-[#f9f0f6] py-16 px-6 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-3">
            CE Credits
          </h2>
          <p className="text-lg text-gray-700">
            Earn continuing education credits while advancing your practice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((credit, index) => (
            <motion.div
              key={credit.body}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
            >
              <Award className="h-6 w-6 text-[#9455e5] mb-3" />
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="text-lg font-bold text-gray-900">
                  {credit.body}
                </h3>
                {credit.pending && (
                  <span className="rounded-full bg-[#f7ddec] px-2.5 py-0.5 text-xs font-medium text-[#512b81]">
                    Pending approval
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {credit.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {notes.map((credit) => (
          <p
            key={credit.body}
            className="mt-6 text-sm text-gray-600 leading-relaxed border-l-4 border-[#cfb2f3] pl-4"
          >
            <span className="font-semibold text-gray-800">{credit.body}:</span>{" "}
            {credit.detail}
          </p>
        ))}
      </div>
    </section>
  );
};

export default CeCredits;
