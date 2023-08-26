"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { siteConfig } from "@/config/site";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { RecoilRoot } from "recoil";

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body className={cn(poppins.className, "h-screen overflow-hidden")}>
                <RecoilRoot>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                    >
                        <div className="relative flex min-h-screen flex-col">
                            <SiteHeader />
                            <div className="flex flex-1 h-full flex-col">
                                {children}
                            </div>
                        </div>
                    </ThemeProvider>
                </RecoilRoot>
            </body>
        </html>
    );
}
