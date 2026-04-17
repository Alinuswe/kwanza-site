import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kwanza Capital Africa",
  description:
    "Kwanza Capital Africa provides structured procurement, energy systems, and disciplined execution for mission-critical operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
