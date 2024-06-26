import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";
import { SiteHeader } from "~/components/layouts/site-header";
import { TailwindIndicator } from "~/components/tailwind-indicator";

import "~/styles/globals.css";

import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { Toaster } from "~/components/ui/sonner";
import { Providers } from "./_components/providers";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "nextjs",
    "react",
    "react server components",
    "table",
    "tanstack-table",
  ],
  authors: [
    {
      name: "Hitaji Tech",
      url: "https://www.hitajitech.com",
    },
  ],
  creator: "Hitajitech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  icons: {
    icon: "/icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            {/* <SiteHeader /> */}
            <main className="flex-1">{children}</main>
          </div>
          <TailwindIndicator />
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
