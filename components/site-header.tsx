"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { useRecoilState } from "recoil";
import { colorFormatState } from "@/states";
import { Switch } from "./ui/switch";
import UploadImage from "./UploadImage";

export function SiteHeader() {
    const [colorFormat, setColorFormat] = useRecoilState(colorFormatState);

    return (
        <header className="bg-background sticky top-0 z-40 w-full border-b">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <MainNav />
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <div className="flex gap-2">
                        <span>hex</span>
                        <Switch
                            onCheckedChange={() => {
                                setColorFormat(!colorFormat);
                            }}
                        />
                        <span>rgb</span>
                    </div>
                    <UploadImage />
                    <nav className="flex items-center space-x-1">
                        <Link
                            href={siteConfig.links.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div
                                className={buttonVariants({
                                    size: "icon",
                                    variant: "ghost",
                                })}
                            >
                                <Icons.gitHub className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </div>
                        </Link>
                        <Link
                            href={siteConfig.links.twitter}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div
                                className={buttonVariants({
                                    size: "icon",
                                    variant: "ghost",
                                })}
                            >
                                <Icons.twitter className="h-5 w-5 fill-current" />
                                <span className="sr-only">Twitter</span>
                            </div>
                        </Link>
                        <ThemeToggle />
                    </nav>
                </div>
            </div>
        </header>
    );
}
