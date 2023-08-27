"use client";

import React from "react";
import { Icons } from "./icons";
import ColorThief from "colorthief";
import { useRecoilState } from "recoil";
import { colorPaletteState, uploadedImageState } from "@/states";

const UploadImage = () => {
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
        <div className="flex items-center justify-center w-56">
            <label
                htmlFor="image-file"
                className="py-2 px-8 border-solid border-2 border-primary rounded-lg cursor-pointer flex items-center justify-center gap-4"
            >
                <Icons.image className="h-6 w-6" />
                Upload Image
            </label>
            <input type="file" id="image-file" hidden onChange={uploadImage} />
        </div>
    );
};

export default UploadImage;
