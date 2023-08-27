import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import ColorPalette from "@/components/ColorPalette";
import ImageHolder from "@/components/ImageHolder";

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

export default function Home() {
    return (
        <main className="flex flex-1 h-full flex-col items-center justify-between p-4">
            <ImageHolder />
            <ColorPalette />
        </main>
    );
}
