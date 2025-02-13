import type { Metadata } from "next";
import "./globals.css";
import { TTNorms } from './fonts';

export const metadata: Metadata = {
  title: "Manual: Men's Healthcare - Made easy",
  description: "No waiting rooms or awkward conversations. Clinically proven treatments to your door. The most effective treatments. Backed by science. 365-Day Patient Support. Subscription Service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${TTNorms.className}`}>
        {children}
      </body>
    </html>
  );
}
