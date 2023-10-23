import type { Metadata } from "next";
import "@/styles/global.css";
import { Sora as font } from "@/lib/utils/fonts";
import React, { ReactNode } from "react";
import { ThemeProvider } from "@/lib/utils/theme-provider";
import { Header } from "@/ui/components/header";
import { Footer } from "@/ui/components/footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "VGSEVEN",
  description: "Official VGSEVEN",
  icons: {
    icon: "favicon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={font.className} suppressHydrationWarning>
      <body>
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
