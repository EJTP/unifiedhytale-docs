import "./global.css";
import { RootProvider } from "fumadocs-ui/provider/next";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://docs.unifiedhytale.com"),
  title: {
    default: "UnifiedHytale Docs",
    template: "%s | UnifiedHytale Docs",
  },
  description:
    "Official documentation for UnifiedHytale - the ultimate platform for Hytale mods, maps, resource packs, and server listings.",
  keywords: [
    "UnifiedHytale",
    "Hytale",
    "Hytale mods",
    "Hytale documentation",
    "Hytale API",
    "Hytale community",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "UnifiedHytale Docs",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootProvider>
          <DocsLayout
            tree={source.pageTree}
            nav={{
              title: "UnifiedHytale Docs",
              url: "/",
            }}
            githubUrl="https://github.com/UnifiedHytale/docs"
            sidebar={{
              defaultOpenLevel: 1,
            }}
          >
            {children}
          </DocsLayout>
        </RootProvider>
      </body>
    </html>
  );
}
