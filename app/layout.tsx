import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Muhammad Rayyan Mohsin - AI Engineer & Researcher",
  description: "AI Engineer & Researcher building AI-powered products and intelligent automation systems. Currently at ClientAcquisition.io serving 2,000+ clients.",
  openGraph: {
    title: "Muhammad Rayyan Mohsin - AI Engineer & Researcher",
    description: "Building AI-powered products and intelligent automation systems. 2,000+ clients impacted across 13+ industries.",
    type: "website",
  },
  metadataBase: new URL("https://rayyanmohsin.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
