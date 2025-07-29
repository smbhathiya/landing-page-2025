import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ABC - Digital Marketing Agency",
  description: "Transform your business with our cutting-edge digital marketing solutions. We specialize in SEO, PPC, social media marketing, and content strategy.",
  keywords: "digital marketing, SEO, PPC, social media marketing, content strategy, web design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
