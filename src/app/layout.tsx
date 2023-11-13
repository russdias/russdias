import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import Header from "@/modules/Header";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Russell Dias",
  description:
    "Dive into Russell Dias's dynamic tech adventure, from co-founding cutting-edge startups to leading transformative cloud and AI projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          (clsx(inter.className),
          "flex justify-center flex-col items-center max-w-6xl mx-auto")
        }
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
