
"use client";

import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";

export default function FinalSurprise() {
    return (
        <section
            id="surprise"
            className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080508] px-6 py-32 text-white"
        >
            <FloatingHearts />

            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-900/20 blur-[160px]" />

                <div className="absolute left-[10%] top-[20%] h-40 w-40 rounded-full bg-pink-900/10 blur-[100px]" />

                <div className="absolute bottom-[10%] right-[10%] h-40 w-40 rounded-full bg-red-900/10 blur-[100px]" />
            </div>

            {/* Decorative stars */}
            <motion.div
                animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute left-[15%] top-[20%] text-xl text-rose-300"
            >
                ✦
            </motion.div>

            <motion.div
                animate={{
                    opacity: [1, 0.2, 1],
                    scale: [1.2, 0.8, 1.2],
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute right-[15%] top-[30%] text-2xl text-rose-200"
            >
                ✧
            </motion.div>

            <motion.div
                animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-[20%] left-[20%] text-xl text-rose-300"
            >
                ✦
            </motion.div>

            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">

                {/* Small heading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-xs uppercase tracking-[0.5em] text-rose-300 md:text-sm"
                >
                    And finally...
                </motion.p>

                {/* Heart */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        opacity: {
                            duration: 0.8,
                            delay: 0.3,
                        },
                        scale: {
                            duration: 0.8,
                            delay: 0.3,
                            ease: "easeOut",
                        },
                    }}
                    animate={{
                        scale: [1, 1.12, 1],
                    }}
                    className="my-8 text-7xl text-rose-400 drop-shadow-[0_0_30px_rgba(244,63,94,0.7)] md:text-9xl"
                >
                    ♥
                </motion.div>

                {/* Main title */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                    }}
                    className="font-serif text-5xl font-semibold md:text-7xl"
                >
                    Happy Birthday,
                </motion.h2>

                <motion.h3
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1,
                        delay: 0.8,
                    }}
                    className="mt-2 font-serif text-6xl font-semibold text-rose-300 md:text-8xl"
                >
                    Princess.
                </motion.h3>

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1,
                        delay: 1.1,
                    }}
                    className="mt-10 max-w-2xl"
                >
                    <p className="font-serif text-xl italic leading-9 text-gray-300 md:text-2xl">
                        "Terima Kasih Telah Menjadi Bagian Hidup Aku yang Paling Menyenangkan🥰🥰."
                    </p>

                    <p className="mt-6 text-sm leading-7 text-gray-500 md:text-base">
                        Semoga Surprise Ini bisa Mengingatkan princess kalo kamu
                        Bener Bener Orang Yang Paling Spesial Buat aku🥰🥰🥰
                        Terima Kasih Atas Setiap Senyuman Manis Dan Imutnya Dan 
                        kenang Kenangan yang telah Kita Lewatkan🥰🥰.
                    </p>
                </motion.div>

                {/* Relationship date */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1,
                        delay: 1.4,
                    }}
                    className="mt-10 rounded-full border border-rose-300/20 bg-white/[0.03] px-8 py-3 backdrop-blur-sm"
                >
                    <p className="text-sm tracking-[0.4em] text-rose-200 md:text-base">
                        09.08.2025 — ∞
                    </p>
                </motion.div>

                {/* I Love You */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1,
                        delay: 1.7,
                    }}
                    className="mt-14"
                >
                    <p className="font-serif text-3xl italic text-gray-300 md:text-4xl">
                        I Love You,
                    </p>

                    <motion.p
                        animate={{
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="mt-2 font-serif text-4xl font-semibold text-rose-300 drop-shadow-[0_0_20px_rgba(244,63,94,0.4)] md:text-6xl"
                    >
                        Princess. ❤️
                    </motion.p>
                </motion.div>

                {/* Signature */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1,
                        delay: 2.2,
                    }}
                    className="mt-16"
                >
                    <p className="text-xs uppercase tracking-[0.3em] text-gray-600">
                        Made with love by
                    </p>

                    <p className="mt-3 font-serif text-lg italic text-rose-300/80">
                        Elkan Maulana Ganteng ♡
                    </p>
                </motion.div>

                {/* Restart Button */}
                <motion.a
                    href="#opening"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 1,
                        delay: 2.5,
                    }}
                    whileHover={{
                        scale: 1.05,
                    }}
                    whileTap={{
                        scale: 0.95,
                    }}
                    className="mt-12 rounded-full border border-rose-400/30 bg-rose-500/10 px-8 py-4 text-xs tracking-[0.3em] text-rose-200 transition hover:bg-rose-500/20 hover:shadow-[0_0_35px_rgba(244,63,94,0.25)]"
                >
                    Ulang Lagi ga? ♡
                </motion.a>

            </div>
        </section>
    );
}
