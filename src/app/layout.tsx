import type { Metadata } from "next";
import { Dancing_Script, Arimo } from "next/font/google";
import "./globals.css";

export const dancing = Dancing_Script({ subsets: ["latin"] });
export const arimo = Arimo({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Chú cuội Flowers",
  description: "Phục vụ sỉ lẻ hoa tươi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dancing.className}>{children}</body>
    </html>
  );
}
