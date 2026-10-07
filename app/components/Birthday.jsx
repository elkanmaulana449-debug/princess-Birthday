"use client";

import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";

export default function Birthday() {
    return (
        <section
            id="birthday"
            className="relative min-h-screen overflow-hidden bg-[#080508] px-6 py-24 text-white"
        >

            <FloatingHearts />

            {/* Background glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-900/20 blur-[140px]" />

                <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-pink-900/10 blur-[100px]" />

                <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-red-900/10 blur-[100px]" />
            </div>

            {/* Decorative stars */}
            <div className="absolute left-[12%] top-[15%] text-xs text-rose-300">
                ✦
            </div>

            <div className="absolute right-[15%] top-[25%] text-sm text-rose-200">
                ✧
            </div>

            <div className="absolute bottom-[20%] left-[18%] text-xs text-rose-300">
                ✦
            </div>

            <div className="absolute bottom-[15%] right-[20%] text-sm text-rose-200">
                ✧
            </div>

            {/* Main content */}
            <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center text-center">

                {/* Small heading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 text-xs uppercase tracking-[0.5em] text-rose-300 md:text-sm"
                >
                    A special day for someone special
                </motion.p>

                {/* Birthday title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="font-serif text-5xl font-semibold tracking-wide md:text-7xl"
                >
                    Happy Birthday,
                </motion.h2>

                <motion.h3
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mt-2 font-serif text-6xl font-semibold text-rose-300 md:text-8xl"
                >
                    Princess
                </motion.h3>

                {/* Heart */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    className="my-8 text-4xl text-rose-400"
                >
                    ♡
                </motion.div>

                {/* Date */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="rounded-full border border-rose-300/20 bg-white/[0.03] px-8 py-3 backdrop-blur-sm"
                >
                    <p className="text-sm tracking-[0.4em] text-rose-200 md:text-base">
                        08 • 10 • 2009
                    </p>
                </motion.div>

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-10 max-w-2xl"
                >
                    <p className="font-serif text-xl italic leading-9 text-gray-300 md:text-2xl">
                        Hari ini bukan sekadar hari biasa... ini adalah hari seseorang yang sangat Ku Cintai dilahirkan.."
                    </p>

                    <p className="mt-6 text-sm leading-7 text-gray-500 md:text-base">
                        Dan entah bagaimana, bertahun-tahun kemudian,
                        aku mendapatkan kesempatan untuk mengenalmu,
                        menyayangimu, dan membuat banyak kenangan
                        indah bersamamu.
                    </p>
                </motion.div>

                {/* From */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1.3 }}
                    className="mt-8 text-sm text-rose-300/70"
                >
                    With love, Elkan Maulana Ganteng ♡
                </motion.p>

                {/* Continue button */}
                <motion.a
                    href="#memories"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 1.5 }}
                    whileHover={{
                        scale: 1.05,
                    }}
                    whileTap={{
                        scale: 0.95,
                    }}
                    className="mt-12 rounded-full border border-rose-400/30 bg-rose-500/10 px-8 py-4 text-xs tracking-[0.3em] text-rose-200 transition hover:bg-rose-500/20 hover:shadow-[0_0_35px_rgba(244,63,94,0.2)]"
                >
                    CONTINUE OUR STORY →
                </motion.a>

            </div>
        </section>
    );
}