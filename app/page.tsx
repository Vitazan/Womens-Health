import Link from "next/link";
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
        Now in it 12<sup>th</sup> year, the{" "}
        <span className="font-semibold text-[#9455e5]">Advances in Women’s Health Symposium</span>{" "}
        remains a trusted source of continuing education and connection for
        healthcare practitioners dedicated to women’s well-being.
      </p>
    </div>

    {/* Description */}
    <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-6">
      <p>
        Proudly sponsored by{" "}
        <span className="font-semibold">NFH</span> and{" "}
        <span className="font-semibold">Vitazan Professional</span>, this one-day
        virtual event brings together leading naturopathic doctors and integrative
        medicine experts to share the latest research and practical, evidence-based
        strategies in the evolving landscape of women’s health.
      </p>

      {/* List of benefits */}
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          "Advance your practice",
          "Empower your patients",
          "Shape the future of women’s health",
        ].map((text, i) => (
          <li key={i} className="bg-[#f7ddec] text-[#512b81] p-4 rounded-lg font-medium text-center shadow-sm">
            {text}
          </li>
        ))}
      </ul>
    </div>

    {/* CTA Button */}
    <div className="text-center">
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
      <p className="mt-3 text-md text-[#d45ba2] font-medium">
        Register before <strong>September 17<sup>th</sup> 2025</strong> to receive your care package.
      </p>
    </div>

    {/* Pricing & CE Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Pricing */}
      <div className="bg-[#f9f9fb] border border-gray-200 p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold text-[#9455e5] mb-4">Pricing</h3>
        <ul className="space-y-2 text-gray-700 text-md">
          <li>
            <strong>Practitioners:</strong> $59.00 CAD
          </li>
          <li>
            <strong>Students:</strong> $28.00 CAD{" "}
            <span className="text-gray-500">(Promo Code: STUDENT)</span>
          </li>
          <li>
            <em>Taxes included (for Canadian residents only)</em>
          </li>
        </ul>
      </div>

      {/* CE Credits */}
      <div className="bg-[#f9f9fb] border border-gray-200 p-6 rounded-xl shadow-sm">
        <h3 className="text-xl font-semibold text-[#9455e5] mb-4">CE Credits</h3>
        <ul className="space-y-2 text-gray-700 text-md">
          <li>
            <strong>CONO</strong> (pending): Category A – 5.00 credits;
            4.75 (General), 0.25 (Pharmacology)
          </li>
          <li>
            <strong>British Columbia:</strong> Category C – 5.00 credits
          </li>
          <li>
            <strong>AANP</strong> (pending): 5.00 credits; 4.75 General, 0.25 Pharmacy
          </li>
          <li>
            <strong>OANP/OBNM:</strong> Not submitted to OBNM. CE certificate will be issued upon request.
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

     
      {/* <TestimonialsCarousel/> */}

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
