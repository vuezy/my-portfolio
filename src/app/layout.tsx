import type { Metadata } from "next";
import { Geist, Lora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import profile from "@/data/profile.json";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { ThemeProvider } from "next-themes";
import BookSpine from "@/components/common/BookSpine";
import { MotionConfig } from "motion/react";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: profile.name,
  description: "Backend developer who thinks through consequences, accepts trade-offs, and never stops experimenting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "dark", geist.variable, lora.variable)}
      suppressHydrationWarning
    >
      <body className="relative min-h-screen flex flex-col">
        <MotionConfig reducedMotion="user">
          <ThemeProvider attribute="class">
            <Header />
            <BookSpine />
            <main className="flex-1">{children}</main>
            <Footer />
          </ThemeProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
