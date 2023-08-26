"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { useRecoilState } from "recoil";
import { colorPaletteState, uploadedImageState } from "@/states";
import ColorThief from "colorthief";

export function SiteHeader() {
    const [uploadedImage, setUploadedImage] =
        useRecoilState(uploadedImageState);
    const [colorPalette, setColorPalette] = useRecoilState(colorPaletteState);

    const uploadImage = (e: any) => {
        const imageFile = (e.target as HTMLInputElement).files![0];

        const reader = new FileReader();
        reader.onload = async (ev) => {
            const img = new Image();
            img.onload = () => {
                const colorThief = new ColorThief();
                const palette = colorThief.getPalette(img, 6);
                setUploadedImage(ev.target?.result as string);
                setColorPalette(palette);
            };
            img.src = ev.target?.result as string;
        };
        reader.readAsDataURL(imageFile);
    };

    return (
        <header className="bg-background sticky top-0 z-40 w-full border-b">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <MainNav />
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <div className="flex items-center justify-center">
                        <label
                            htmlFor="image-file"
                            className="py-2 px-8 border-solid border-2 border-border rounded-lg cursor-pointer flex items-center justify-center gap-4"
                        >
                            <Icons.image className="h-6 w-6" />
                            Upload Image
                        </label>
                        <input
                            type="file"
                            id="image-file"
                            hidden
                            onChange={uploadImage}
                        />
                    </div>
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
