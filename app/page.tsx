import ColorPalette from "@/components/ColorPalette";
import ImageHolder from "@/components/ImageHolder";

export default function Home() {
    return (
        <main className="flex flex-1 h-full flex-col items-center justify-between p-4">
            <ImageHolder />
            <ColorPalette />
        </main>
    );
}
