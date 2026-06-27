import type { Metadata } from "next";
import {
  Inter,
  Cormorant_Garamond,
  IBM_Plex_Mono,
} from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Odyssey | Vyom",
    template: "%s | Odyssey",
  },
  description:
    "A personal portfolio exploring software engineering, photography, poetry, and creativity.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable}
          ${cormorant.variable}
          ${mono.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}