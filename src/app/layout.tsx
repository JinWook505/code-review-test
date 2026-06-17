import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "rescene 팬페이지 | 르센느 모아보기",
  description: "르센느(rescene)를 사랑하는 팬들을 위한 모아보기 팬페이지. 멤버 정보, 음악, 일정, 갤러리를 한 곳에서.",
  keywords: ["르센느", "rescene", "케이팝", "kpop", "팬페이지"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
