"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const hearts = [
    { left: "8%", delay: 0, duration: 7, size: "text-xl" },
    { left: "18%", delay: 2, duration: 9, size: "text-2xl" },
    { left: "30%", delay: 4, duration: 8, size: "text-lg" },
    { left: "42%", delay: 1, duration: 10, size: "text-xl" },
    { left: "55%", delay: 5, duration: 8, size: "text-2xl" },
    { left: "68%", delay: 3, duration: 9, size: "text-lg" },
    { left: "80%", delay: 6, duration: 7, size: "text-xl" },
    { left: "92%", delay: 1.5, duration: 10, size: "text-2xl" },
];

export default function OurStory() {
    const [answered, setAnswered] = useState(false);

    const [noPosition, setNoPosition] = useState({
        x: 0,
        y: 0,
    });

    const moveButton = () => {
        const positions = [
            { x: -110, y: -70 },
            { x: 110, y: -60 },
            { x: -130, y: 65 },
            { x: 130, y: 70 },
            { x: -70, y: 100 },
            { x: 80, y: -100 },
        ];

        const randomPosition =
            positions[Math.floor(Math.random() * positions.length)];

        setNoPosition(randomPosition);
    };

    return (
        <section
            id="story"
            className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080508] px-6 py-32 text-white"
        >

            {/* ============================= */}
            {/* FLOATING HEARTS */}
            {/* ============================= */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                {hearts.map((heart, index) => (
                    <motion.div
                        key={index}
                        initial={{
                            y: "110vh",
                            opacity: 0,
                            rotate: 0,
                        }}
                        animate={{
                            y: "-15vh",
                            opacity: [0, 0.6, 0.6, 0],
                            rotate: [0, 15, -15, 10, 0],
                            x: [0, 15, -15, 10, 0],
                        }}
                        transition={{
                            duration: heart.duration,
                            delay: heart.delay,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className={`absolute ${heart.size} text-rose-400/30`}
                        style={{
                            left: heart.left,
                        }}
                    >
                        ♡
                    </motion.div>
                ))}

            </div>

            {/* ============================= */}
            {/* BACKGROUND GLOW */}
            {/* ============================= */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden">

                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-900/20 blur-[150px]" />

                <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-pink-900/10 blur-[100px]" />

                <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-red-900/10 blur-[100px]" />

            </div>

            {/* ============================= */}
            {/* MAIN CONTENT */}
            {/* ============================= */}

            <div className="relative z-10 mx-auto w-full max-w-3xl text-center">

                {!answered ? (
                    <>
                        {/* Question */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 1,
                            }}
                        >

                            <p className="text-xs uppercase tracking-[0.5em] text-rose-300">
                                One Important Question
                            </p>

                            <h2 className="mt-6 font-serif text-5xl leading-tight md:text-7xl">
                                Apakah Princess
                                <br />

                                <span className="text-rose-300">
                                    Sayang aku selamanya??
                                </span>
                            </h2>

                            {/* Heart utama */}

                            <motion.div
                                animate={{
                                    scale: [1, 1.15, 1],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                }}
                                className="mt-8 text-5xl text-rose-400"
                            >
                                ♡
                            </motion.div>

                            <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-gray-500">
                                Think carefully before you answer...
                                <br />
                                because there is only one correct answer. 😌
                            </p>

                        </motion.div>

                        {/* ============================= */}
                        {/* BUTTONS */}
                        {/* ============================= */}

                        <div className="relative mx-auto mt-14 flex h-32 max-w-md items-center justify-center gap-5">

                            {/* YES */}

                            <motion.button
                                onClick={() => setAnswered(true)}
                                whileHover={{
                                    scale: 1.08,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                                className="rounded-full border border-rose-400/40 bg-rose-500/10 px-8 py-4 text-sm tracking-[0.2em] text-rose-200 transition hover:bg-rose-500/20 hover:shadow-[0_0_35px_rgba(244,63,94,0.3)]"
                            >
                                YES ❤️
                            </motion.button>

                            {/* NO */}

                            <motion.button
                                onMouseEnter={moveButton}
                                onTouchStart={moveButton}
                                animate={{
                                    x: noPosition.x,
                                    y: noPosition.y,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 500,
                                    damping: 20,
                                }}
                                className="rounded-full border border-gray-700 bg-white/5 px-8 py-4 text-sm tracking-[0.2em] text-gray-400"
                            >
                                NO 😈
                            </motion.button>

                        </div>

                    </>
                ) : (

                    /* ============================= */
                    /* YES ANSWER */
                    /* ============================= */

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.7,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                    >

                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                            }}
                            className="text-7xl text-rose-400"
                        >
                            ❤️
                        </motion.div>

                        <h2 className="mt-8 font-serif text-5xl md:text-7xl">
                            YEYEYYY!
                        </h2>

                        <p className="mt-5 font-serif text-2xl italic text-rose-300">
                            Acuu uga Cayangg princess😘😘😘❤️❤️❤️.
                        </p>

                        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-gray-500 md:text-base">
                            Aku Sangat sangat cayanggg princess cintaa princess acu yang paling imut
                            paling cantik paling gemoy dan paling manis melebihi
                            apapun🥰🥰🥰.
                        </p>

                        <p className="mt-8 text-sm text-gray-600">
                            09.08.2025 — ∞
                        </p>

                        <motion.a
                            href="#surprise"
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{
                                scale: 0.95,
                            }}
                            className="mt-12 inline-block rounded-full border border-rose-400/30 bg-rose-500/10 px-8 py-4 text-xs tracking-[0.3em] text-rose-200 transition hover:bg-rose-500/20"
                        >
                            SURPRISE TERAKHIR→
                        </motion.a>

                    </motion.div>

                )}

            </div>
        </section>
    );
}
