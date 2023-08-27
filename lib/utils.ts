import { type ClassValue, clsx } from "clsx";
import { RGBColor } from "colorthief";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function giveRandomColors(NumberofColors: number) {
    let randomColors = [];
    for (let i = 0; i < NumberofColors; i++) {
        randomColors.push([
            Math.floor(Math.random() * 255),
            Math.floor(Math.random() * 255),
            Math.floor(Math.random() * 255),
        ] as RGBColor);
    }
    return randomColors;
}
