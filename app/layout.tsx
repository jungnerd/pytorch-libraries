import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PyTorch Libraries",
  description: "A curated map of PyTorch libraries maintained under the PyTorch GitHub organization."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
