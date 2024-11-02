import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "animate.css";
import Navbar from "../components/layout/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fenster Farm",
  description: "Fresh local hydoponic lettuce, herbs, and microgreens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        {/* Footer */}
        <footer className="bg-white border py-6 mt-12 text-center text-black">
          <p>© 2024 Fenster Farm | All Rights Reserved</p>
        </footer>
      </body>
    </html>
  );
}
