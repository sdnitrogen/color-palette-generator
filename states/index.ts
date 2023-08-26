import { RGBColor } from "colorthief";
import { atom } from "recoil";

export const uploadedImageState = atom<string | null>({
    key: "uploadedImageState",
    default: null,
});

export const colorPaletteState = atom<RGBColor[] | null>({
    key: "colorPaletteState",
    default: null,
});
