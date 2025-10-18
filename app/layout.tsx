import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mark Kirby | Portfolio",
  description: "I am a frontend developer that takes code and turns it into experiences!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}>
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
          {/** Navigation */}
          <Header />
          {/** Main withg children pages */}
          <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            {children}
          </main>
          {/** Footer */}
          <footer></footer>
        </div>
      </body>
    </html>
  );
}
