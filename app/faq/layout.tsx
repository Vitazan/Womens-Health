import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Advances in Women's Health Symposium 2026",
  description:
    "Answers to common questions about the Advances in Women's Health Symposium — who it's for, CE credits, recordings, student pricing, and Q&A.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ | Advances in Women's Health Symposium 2026",
    description:
      "Answers to common questions about the Advances in Women's Health Symposium.",
    url: "/faq",
  },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
