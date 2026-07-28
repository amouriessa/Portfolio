import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import GalaxyWrapper from "@/components/ui/GalaxyWrapper";
import Navbar from "@/components/layout/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bagas Saras | Web Developer",
  description: "Hello! Welcome to my portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/images/ava1.png" as="image" type="image/png" fetchPriority="high" />
      </head>
      <body
        className={`${poppins.variable} ${geistMono.variable} font-sans antialiased neon-scroll`}
      >
        <GalaxyWrapper
          mouseRepulsion={true}
          mouseInteraction={true}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}

