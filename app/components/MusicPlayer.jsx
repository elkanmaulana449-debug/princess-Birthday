
"use client";

import { useRef, useState } from "react";

export default function MusicPlayer() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleMusic = async () => {
        const audio = audioRef.current;

        if (!audio) return;

        try {
            if (audio.paused) {
                await audio.play();
                setIsPlaying(true);
            } else {
                audio.pause();
                setIsPlaying(false);
            }
        } catch (error) {
            console.log("Musik gagal diputar:", error);
        }
    };

    return (
        <>
            <audio
                ref={audioRef}
                src="/music/bernaung.mp3"
                loop
                preload="auto"
            />

            <button
                type="button"
                onClick={toggleMusic}
                className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-rose-300/40 bg-[#140b12] text-xl text-rose-200 shadow-[0_0_25px_rgba(244,63,94,0.35)] transition duration-300 hover:scale-110 hover:bg-rose-500/20 active:scale-95"
                aria-label={isPlaying ? "Matikan musik" : "Putar musik"}
            >
                {isPlaying ? "🔊" : "🔇"}
            </button>
        </>
    );
}
