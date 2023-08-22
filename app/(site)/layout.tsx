import "../globals.css";

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
    images:
      "https://res.cloudinary.com/victoreke/image/upload/v1689893059/docs/og.png",
  },
};
