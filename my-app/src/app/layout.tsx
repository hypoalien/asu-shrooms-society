import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers";
import "./globals.css";
import { fontSans } from "@/lib/fonts";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shrooms Society @ASU",
  description: "Landing page for Shrooms Society ASU",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-mono antialiased",
          fontSans.className
        )}
      >
        <div vaul-drawer-wrapper="">
          <div className="relative flex min-h-screen flex-col bg-background  justify-center bg-white w-full  max-3xl">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
