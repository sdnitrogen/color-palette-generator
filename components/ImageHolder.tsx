"use client";

import { uploadedImageState } from "@/states";
import React from "react";
import { useRecoilState } from "recoil";

const ImageHolder = () => {
    const [uploadedImage, setUploadedImage] =
        useRecoilState(uploadedImageState);

    return (
        <div className="flex items-center justify-center w-11/12 min-h-[40vh] max-h-[60vh] border-solid border-border border-2">
            {uploadedImage ? (
                <img
                    src={uploadedImage}
                    alt="uploaded image"
                    className="max-h-[60vh] object-contain"
                />
            ) : (
                <h2>Upload an Image here...</h2>
            )}
        </div>
    );
};

export default ImageHolder;
