import type { Metadata } from "next";
import { webinars, getSpeakerByWebinarId } from "@/lib/data";

export function generateStaticParams() {
  return webinars.map((w) => ({ id: w.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const webinar = webinars.find((w) => w.id === id);
  if (!webinar) return {};

  const speaker = getSpeakerByWebinarId(webinar.id);
  const who = speaker ? `${speaker.name}, ${speaker.credentials}` : "";
  const title = webinar.tba
    ? `${who} | Advances in Women's Health Symposium 2026`
    : `${webinar.title} | ${who}`;
  const description =
    webinar.shortDescription ||
    `${who} presents at the Advances in Women's Health Symposium on ${webinar.date}, ${webinar.time}.`;

  return {
    title,
    description,
    alternates: { canonical: `/webinars/${webinar.id}` },
    openGraph: {
      title,
      description,
      url: `/webinars/${webinar.id}`,
      images: speaker ? [{ url: speaker.image }] : undefined,
    },
  };
}

export default function WebinarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
