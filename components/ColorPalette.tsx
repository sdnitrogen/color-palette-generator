"use client";

import { colorPaletteState } from "@/states";
import React from "react";
import { useRecoilState } from "recoil";
import PaletteItem from "./PaletteItem";

const ColorPalette = () => {
    const [colorPalette, setColorPalette] = useRecoilState(colorPaletteState);

    const componentToHex = (c: Number) => {
        const hex_c = c.toString(16);
        return hex_c.length == 1 ? "0" + hex_c : hex_c;
    };

    const rgbToHex = (r: Number, g: Number, b: Number) => {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    };

    return (
        colorPalette && (
            <div className="flex flex-auto items-center justify-center w-11/12">
                <ul className="flex flex-1 flex-wrap items-center justify-center gap-4">
                    {colorPalette.map((color, index) => {
                        const rgb = `rgb(${color.join(",")})`;
                        const hex = rgbToHex(color[0], color[1], color[2]);
                        return <PaletteItem key={index} rgb={rgb} hex={hex} />;
                    })}
                </ul>
            </div>
        )
    );
};

export default ColorPalette;
