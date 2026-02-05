import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://thinkfortip.com"),

  title: {
    default:
      "ThinkFortIP | Intellectual Property & Patent Services for Innovators",
    template: "%s | ThinkFortIP",
  },

  description:
    "ThinkFortIP provides expert intellectual property, patent, trademark, and IP strategy services for startups, MSMEs, universities, and innovation-driven enterprises.",

  openGraph: {
    title:
      "ThinkFortIP | Intellectual Property & Patent Services for Innovators",
    description:
      "ThinkFortIP helps innovators protect, manage, and scale their ideas through strong intellectual property, patent, and trademark services.",
    url: "https://thinkfortip.com/",
    siteName: "ThinkFortIP",
    images: [
      {
        url: "https://thinkfortip.com/logo.png",
        width: 1200,
        height: 630,
        alt: "ThinkFortIP – Intellectual Property Services",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "ThinkFortIP | Intellectual Property & Patent Services for Innovators",
    description:
      "Expert intellectual property, patent, and trademark services by ThinkFortIP for startups and enterprises.",
  },

  alternates: {
    canonical: "https://thinkfortip.com/",
  },
};


const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {GA_ID && <GoogleAnalytics gaId={GA_ID}/>}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GoogleAnalytics gaId={GA_ID}/>
        {children}
      </body>
    </html>
  );
}
