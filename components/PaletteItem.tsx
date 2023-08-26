import React, { useState } from "react";
import { Icons } from "./icons";

interface PaletteItemProps {
    rgb: string;
    hex: string;
}

const PaletteItem = ({ rgb, hex }: PaletteItemProps) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (e: any) => {
        const color = e.target.innerText;
        navigator.clipboard.writeText(color);
    };

    return (
        <li
            className="relative list-none w-40 h-40 rounded-lg shadow-lg shadow-slate-400 dark:shadow-cyan-700/40 transition-all duration-300 ease-in-out hover:-translate-y-2"
            style={{ background: rgb }}
        >
            <span
                className="flex items-center font-semibold bg-[rgba(255,255,255,0.14)] justify-between w-full cursor-pointer px-4 py-2 absolute bottom-0 border-t-2 border-t-border rounded-b-lg"
                onClick={(e) => {
                    copyToClipboard(e);
                    setCopied(true);
                    setTimeout(() => {
                        setCopied(false);
                    }, 1000);
                }}
            >
                {copied ? "Copied!" : hex} <Icons.copy className="h-6 w-6" />
            </span>
        </li>
    );
};

export default PaletteItem;
