import "@/styles/globals.scss";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/lib/Layout/Header/Header";
import Footer from "@/lib/Layout/Footer/Footer";
import type { Metadata } from "next";
import React, { ReactNode } from "react";
import { OutFitFont } from "@/lib/Config/Fonts/Fonts";
import Script from "next/script";

export const metadata: Metadata = {
  title: "VGSEVEN",
  description:
    "Welcome to VGSEVEN.COM, where the realms of life, psychology, philosophy, and science converge to ignite curiosity and foster intellectual growth. As a passionate writer and curator, I invite you to embark on a captivating journey through vgseven.com, where we explore the depths of human understanding and offer insights into the mysteries of existence.",
  icons: {
    icon: "vg.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={OutFitFont.className}>
      <body>
        {/*Google AdSense Verification Start*/}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4155181137197417"
          crossOrigin="anonymous"
        />
        {/*Google AdSense Verification End*/}

        {/*Google Analytics Verification Start*/}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-RG7E1L1B9N"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-RG7E1L1B9N');`}
        </Script>
        {/*Google Analytics Verification End*/}
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
