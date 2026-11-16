import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "StudioXYZ — We find your problem. We build the fix.",
  description:
    "A software engineering studio from Visakhapatnam building websites, web apps, mobile apps, and custom software solutions that solve real user problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#0A0A0A] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
