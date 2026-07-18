import type { Metadata } from "next";
import { headers } from "next/headers";
import { PersonalSite } from "../PersonalSite";

const title = "Heshu AI | The AI Gear Guide for Technical People";
const description =
  "Field-tested AI gear and real workflows. Now building Torchcast.AI and FFM — Forecast Foundation Model.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const socialImage = `${protocol}://${host}/og.png`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_US",
      images: [{ url: socialImage, width: 1200, height: 630, alt: "Heshu AI — field-tested AI gear and Forecast Foundation Model" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default function EnglishHome() {
  return <PersonalSite language="en" />;
}
