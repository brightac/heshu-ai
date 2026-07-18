import type { Metadata } from "next";
import { PersonalSite } from "../PersonalSite";

const title = "Heshu AI | The AI Gear Guide for Technical People";
const description =
  "Only AI gear I have used—and whether it is worth installing. Field tests, OpenClaw workflows, and practical implementation products.";
const publicBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://heshu-ai.cranelee.chatgpt.site";
const pageUrl = `${siteOrigin}${publicBase}/en/`;
const socialImage = `${siteOrigin}${publicBase}/og.png`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    type: "website",
    locale: "en_US",
    images: [{ url: socialImage, width: 1200, height: 630, alt: "Heshu AI — field-tested AI gear and practical AI workflows" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

export default function EnglishHome() {
  return <PersonalSite language="en" />;
}
