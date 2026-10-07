"use client";

import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";

export default function VideoSection() {
    return (
        <section
            id="video"
            className="relative min-h-screen overflow-hidden bg-[#080508] px-6 py-32 text-white"
        >

            <FloatingHearts />

            {/* Background glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-900/10 blur-[150px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    <p className="text-xs uppercase tracking-[0.5em] text-rose-300">
                        A Little Piece of Us
                    </p>

                    <h2 className="mt-5 font-serif text-5xl md:text-7xl">
                        Moments Worth
                        <br />
                        <span className="text-rose-300">
                            Remembering.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-500 md:text-base">
                        Some memories are better remembered than explained.
                        So here's a little piece of our story.
                    </p>
                </motion.div>

                {/* Video */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="group relative mt-16 w-full max-w-4xl"
                >

                    {/* Glow */}
                    <div className="absolute -inset-3 rounded-3xl bg-rose-500/10 opacity-0 blur-2xl transition duration-700 group-hover:opacity-100" />

                    {/* Frame */}
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">

                        <video
                            className="aspect-video w-full object-cover"
                            controls
                            playsInline
                            preload="metadata"
                        >
                            <source
                                src="/video/our-story.mp4"
                                type="video/mp4"
                            />

                            Browser kamu tidak mendukung video.
                        </video>

                    </div>

                </motion.div>

                {/* Caption */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-10 text-center"
                >
                    <p className="font-serif text-2xl italic text-gray-300">
                        "Some memories deserve to be replayed."
                    </p>

                    <p className="mt-5 text-sm text-gray-600">
                        ♡
                    </p>
                </motion.div>

                {/* Continue */}
                <motion.a
                    href="#letter"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-12 rounded-full border border-rose-400/30 bg-rose-500/10 px-8 py-4 text-xs tracking-[0.3em] text-rose-200 transition hover:bg-rose-500/20 hover:shadow-[0_0_35px_rgba(244,63,94,0.2)]"
                >
                    READ MY LETTER →
                </motion.a>

            </div>

        </section>
    );
}