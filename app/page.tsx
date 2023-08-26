"use client";

import ColorPalette from "@/components/ColorPalette";
import ImageHolder from "@/components/ImageHolder";
import { colorPaletteState } from "@/states";
import { useRecoilState } from "recoil";

export default function Home() {
    const [colorPalette, setColorPalette] = useRecoilState(colorPaletteState);

    return (
        <main className="flex flex-1 h-full flex-col items-center justify-between p-4">
            <ImageHolder />
            {colorPalette && <ColorPalette />}
        </main>
    );
}
