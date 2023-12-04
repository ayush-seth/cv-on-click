import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./(root)/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "CV, Career, Coach on Click",
  description:
    "Craft an easy, affordable resume effortlessly in just 60 seconds. Transform your career seamlessly with our best practices—secure your professional CV with ease, minimal cost, and zero confusion!",
  keywords:
    "resume, AI, career guidance, professional CV, affordable, easy, best practices",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${manrope.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
