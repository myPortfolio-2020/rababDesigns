import type { Metadata } from "next";
import { Open_Sans, Baskervville } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/Header";

import Footer from "./components/ui/Footer";
import OnlyHomeContent from "./components/ui/OnlyHomeContent";

import CustomCursor from "./components/animation/customCursor";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

// const baskervville = Baskervville({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Rabab designs",
  description: "Designer's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <div id="app-wrapper">
          {/* <CustomCursor /> */}
          <div className="container mx-auto relative">
            {/* 🔹 Only show this on Home */}
            <OnlyHomeContent />
            <Header />
            {/* <PageTransition>{children}</PageTransition> */}
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
