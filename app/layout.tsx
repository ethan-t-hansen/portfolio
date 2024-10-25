import "@/styles/main.css";

import type { Metadata } from "next";

import { Providers } from "@/components/providers";
import { OpenGraph } from "@/lib/og";

import clsx from "clsx";
import { Inter, IBM_Plex_Sans, Manrope, Inconsolata } from "next/font/google";

export const metadata: Metadata = {
  ...OpenGraph,
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'], 
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],  
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],  
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(manrope.className)} suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/assets/icons/favicon.svg"
          type="image/svg+xml"
        />
      </head>
      <body>
        <Providers>
          <main className="mx-auto max-w-screen-sm overflow-x-hidden px-6 py-24 md:overflow-x-visible ">
            <article className="article">{children}</article>
          </main>
        </Providers>
      </body>
    </html>
  );
}
