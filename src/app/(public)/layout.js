import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Footers from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Script from "next/script";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "ThinkFort IP – IP Services",
    template: "%s | ThinkFort IP",
  },
  description:
    "ThinkFort IP provides expert intellectual property services, solutions, and legal support for startups and enterprises.",
  openGraph: {
    title: "ThinkFort IP – IP Services",
    description:
      "ThinkFort IP provides expert intellectual property services, solutions, and legal support for startups and enterprises.",
    url: "https://thinkfortip.netlify.app/",
    siteName: "ThinkFort",
    images: [
      {
        url: "https://thinkfortip.netlify.app/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://thinkfortip.netlify.app",
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <GoogleAnalytics />
      {children}
      <Footers />
    </>
  );
}
