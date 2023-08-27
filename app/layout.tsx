"use client";

import "./globals.css";
import { Poppins } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { RecoilRoot } from "recoil";

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"] });

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
