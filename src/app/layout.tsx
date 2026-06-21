import "@/app/globals.css";

import { type Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "Offer Loop",
  description:
    "Job application tracking platform that automatically builds your job search pipeline from application emails and provides AI-powered insights/helpful tips. Use AI to help prepare you for interviews and more",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
