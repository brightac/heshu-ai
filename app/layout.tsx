import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "贺叔 AI｜技术人的 AI 装备师";
const description =
  "只讲真用过的 AI 装备，只说值不值得装。真实评测、OpenClaw 工作流，以及从免费开源到落地答疑的产品。";
const publicBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://heshu-ai.cranelee.chatgpt.site";
const siteUrl = `${siteOrigin}${publicBase}/`;
const socialImage = `${siteOrigin}${publicBase}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    type: "website",
    locale: "zh_CN",
    images: [{ url: socialImage, width: 1200, height: 630, alt: "贺叔 AI：技术人的 AI 装备师" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
