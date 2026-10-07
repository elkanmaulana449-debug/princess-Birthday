"use client";
import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";

export default function Opening() {
    return (
        <main 
        id="opening"
        className="relative min-h-screen overflow-hidden bg-[#080508] text-white">

            <FloatingHearts />

            {/* Background glow */}
            <div className="absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-900/20 blur-[120px]" />
            </div>

            {/* Bintang */}
            <div className="absolute left-[15%] top-[20%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_white]" />
            <div className="absolute left-[75%] top-[15%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_white]" />
            <div className="absolute left-[85%] top-[65%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_white]" />
            <div className="absolute left-[20%] top-[75%] h-1 w-1 rounded-full bg-white shadow-[0_0_10px_white]" />

            {/* Isi */}
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-5 text-sm uppercase tracking-[0.4em] text-rose-300"
                >
                    A little surprise for
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="font-serif text-6xl font-semibold tracking-wide md:text-8xl"
                >
                    My Princess
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="my-7 text-3xl text-rose-400"
                >
                    ♡
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="max-w-md text-sm leading-7 text-gray-400 md:text-base"
                >
                    There is someone very special in my life,
                    and today is the day I celebrate her.
                </motion.p>

                <motion.a
                    href="#birthday"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-10 rounded-full border border-rose-400/40
                            bg-rose-500/10 px-8 py-4 text-sm
                            tracking-widest text-rose-200
                            transition hover:bg-rose-500/20
                            hover:shadow-[0_0_30px_rgba(244,63,94,0.25)]"
                >
                    OPEN YOUR SURPRISE ♡
                </motion.a>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="mt-8 text-xs text-gray-600"
                >
                    from Elkan Maulana Ganteng
                </motion.p>

            </div>

        </main>
    );
}