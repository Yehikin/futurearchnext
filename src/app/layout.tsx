import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: "/img/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "AvenirNext, sans-serif" }}>{children}</body>
    </html>
  );
}
