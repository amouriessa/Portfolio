import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import Galaxy from "@/components/ui/Galaxy";
import Navbar from "@/components/layout/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body
        className={`${poppins.variable} ${geistMono.variable} font-sans antialiased neon-scroll`}
      >
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
