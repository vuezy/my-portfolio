import type { Metadata } from "next";
import { Geist, Lora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Shane Christian Kwok",
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
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
