import type { Metadata } from "next";
import { Orbitron, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Obioma for NACOS UI President",
  description: "Official campaign website of Obioma Kennedy Ezeocha for NACOS UI President. Compiling the Future, for the good of NACOS.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PixelBackground from "@/components/PixelBackground";
import MobileNav from "@/components/MobileNav";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${jetBrainsMono.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-brand-bg-primary text-brand-text-primary font-sans relative selection:bg-brand-neon-green selection:text-brand-bg-primary">
        <ThemeProvider>
          <PixelBackground />
          <Navbar />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
          <MobileNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
