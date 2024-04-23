"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { ThemeProvider } from "~/components/providers";
import { CSPostHogProvider } from "../_analytics/providers";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <CSPostHogProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </CSPostHogProvider>
    </SessionProvider>
  );
}
