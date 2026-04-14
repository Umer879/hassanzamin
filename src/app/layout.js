import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

import Header from "@/common/Header/Header2";
import Footer from "@/common/Footer/Footer";
import ScrollToTop from "@/common/ScrollToTop/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://hassanzamin.com"),

  title: {
    default: "Hassan Zamin | Digital Marketing Strategist & Business Growth Expert",
    template: "%s | Hassan Zamin",
  },

  description:
    "Official portfolio of Hassan Zamin. 15+ years of experience in business growth, digital marketing, lead generation, performance marketing and brand scaling.",

  keywords: [
    "Hassan Zamin",
    "Digital Marketing Strategist",
    "Business Growth Expert",
    "Performance Marketing",
    "Lead Generation Expert",
    "Brand Growth Consultant",
    "Marketing Consultant Pakistan",
    "SEO Expert",
    "Business Development"
  ],

  authors: [{ name: "Hassan Zamin" }],
  creator: "Hassan Zamin",

  openGraph: {
    title: "Hassan Zamin Official Portfolio",
    description:
      "Helping businesses scale smarter, grow faster, and achieve sustainable success through strategic marketing.",
    url: "https://hassanzamin.com",
    siteName: "Hassan Zamin",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hassan Zamin Portfolio",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}