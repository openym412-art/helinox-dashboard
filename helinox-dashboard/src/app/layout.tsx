import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Helinox Wear Morning Dashboard",
  description: "AI-powered brand intelligence dashboard for Helinox Wear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
