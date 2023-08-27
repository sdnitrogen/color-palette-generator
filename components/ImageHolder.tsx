"use client";

import { uploadedImageState } from "@/states";
import React from "react";
import { useRecoilState } from "recoil";
import { Button } from "./ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { Dices, RotateCw } from "lucide-react";
import UploadImage from "./UploadImage";

const ImageHolder = () => {
    const [uploadedImage, setUploadedImage] =
        useRecoilState(uploadedImageState);

    return (
        <div className="flex flex-col flex-auto items-center justify-center w-11/12 h-[38vh] border-solid border-border border-2">
            {uploadedImage ? (
                <Sheet>
                    <SheetTrigger asChild>
                        <img
                            src={uploadedImage}
                            alt="uploaded image"
                            className="max-h-full object-contain cursor-pointer hover:scale-105 hover:rounded-sm transition-all"
                        />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Action</SheetTitle>
                            <SheetDescription>
                                Make changes to your palette here. You can
                                refresh a new palette from the same image or
                                generate a random palette of colors if you're
                                feelin' lucky!
                            </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                            <SheetClose asChild>
                                <Button className="w-56">
                                    <RotateCw className="mr-2 h-4 w-4" />
                                    Refresh Palette!
                                </Button>
                            </SheetClose>
                            <SheetClose asChild>
                                <Button className="w-56">
                                    <Dices className="mr-2 h-4 w-4" />
                                    I'm feelin' lucky!
                                </Button>
                            </SheetClose>
                        </div>
                    </SheetContent>
                </Sheet>
            ) : (
                <div className="flex flex-col items-center justify-center gap-4">
                    <UploadImage />
                    <span>or</span>
                    <Button className="w-56">
                        <Dices className="mr-2 h-4 w-4" />
                        I'm feelin' lucky!
                    </Button>
                </div>
            )}
        </div>
    );
};

export default ImageHolder;
