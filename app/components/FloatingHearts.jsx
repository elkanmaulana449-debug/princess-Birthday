"use client";

import { motion } from "framer-motion";

const hearts = [
    { left: "3%", delay: 0, duration: 7, size: "text-2xl", type: "♡" },
    { left: "10%", delay: 1.5, duration: 9, size: "text-3xl", type: "♥" },
    { left: "18%", delay: 3, duration: 8, size: "text-xl", type: "♡" },
    { left: "27%", delay: 0.5, duration: 10, size: "text-2xl", type: "♥" },
    { left: "36%", delay: 4, duration: 8, size: "text-4xl", type: "♡" },
    { left: "45%", delay: 2, duration: 9, size: "text-xl", type: "♥" },
    { left: "54%", delay: 5, duration: 7, size: "text-3xl", type: "♡" },
    { left: "63%", delay: 1, duration: 10, size: "text-2xl", type: "♥" },
    { left: "72%", delay: 3.5, duration: 8, size: "text-4xl", type: "♡" },
    { left: "81%", delay: 0, duration: 9, size: "text-xl", type: "♥" },
    { left: "90%", delay: 2.5, duration: 7, size: "text-3xl", type: "♡" },
    { left: "97%", delay: 4.5, duration: 10, size: "text-2xl", type: "♥" },
];

export default function FloatingHearts() {
    return (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

            {hearts.map((heart, index) => (
                <motion.div
                    key={index}
                    initial={{
                        y: "110vh",
                        x: 0,
                        opacity: 0,
                        scale: 0.7,
                        rotate: 0,
                    }}
                    animate={{
                        y: "-15vh",
                        x: [0, 25, -20, 15, 0],
                        opacity: [0, 0.8, 0.9, 0.7, 0],
                        scale: [0.7, 1, 1.15, 0.9, 0.7],
                        rotate: [0, 15, -15, 10, 0],
                    }}
                    transition={{
                        duration: heart.duration,
                        delay: heart.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className={`absolute ${heart.size} font-bold text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]`}
                    style={{
                        left: heart.left,
                    }}
                >
                    {heart.type}
                </motion.div>
            ))}

        </div>
    );
}
