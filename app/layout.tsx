import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ponsaranya R | AI/ML Engineer",
  description: "Portfolio of Ponsaranya R — AI/ML, GenAI, Python and software engineering.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}