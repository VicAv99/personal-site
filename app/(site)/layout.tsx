import "../globals.css";

import { Analytics } from "@vercel/analytics/react";
import { Nunito } from "next/font/google";
import { PropsWithChildren } from "react";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";
import { ThemeProvider } from "~/components/theme-provider";

import type { Metadata } from "next";

const inter = Nunito({ subsets: ["latin"] });

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://victor-avila.com"),
  title: {
    template: "%s | Victor Avila",
    default: "Victor Avila",
  },
  description: "Software Engineer. Blog, projects, and more.",
  keywords:
    "victor avila, software engineer, full-stack, angular, next.js, supabase",
  openGraph: {
    title: "Victor Avila",
    description:
      "Building awesome and meaningful technology people care about.",
    url: "https://victor-avila.com",
    siteName: "Victor Avila's Website",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `/profile-birds.jpg`,
        width: 1200,
        height: 630,
        alt: "Victor Avila's site",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    title: "Victor Avila",
    card: "summary_large_image",
    creator: "@victoravila__",
  },
  icons: {
    shortcut: "https://victor-avila.com/favicons/favicon.ico",
  },
};
