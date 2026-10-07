"use client";

import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";

const memories = [
    {
        id: 1,
        title: "Awal awal kita nongkrong di FM",
        text: "Seru banget rasanyaa bisa ngobrol makan sama cerita bareng🥰🥰🥰",
        image: "/images/foto-01.jpeg",
    },
    {
        id: 2,
        title: "Masa masa princess masih gemoy",
        text: "Ehehehe🤭🤭🤭🤭",
        image: "/images/foto-02.jpeg",
    },
    {
        id: 3,
        title: "Gemess banget mau aku remes pipinya",
        text: "Pipi gemoy princecss gemoy.",
        image: "/images/foto-03.jpeg",
    },
    {
        id: 4,
        title: "Fotbar batik",
        text: "Walaupun gak couple batiknya tapi tetep keliatan lucuk hehe",
        image: "/images/foto-04.jpeg",
    },
    {
        id: 5,
        title: "Fotbar pas lebaran",
        text: "Udah kayak papa mama mau bagi bagi THR 😭😭😭😭",
        image: "/images/foto-05.jpeg",
    },
    {
        id: 6,
        title: "Blok M Date",
        text: "Omaygad ini moment yang paling seruu banget si🥰🥰🥰🥰.",
        image: "/images/foto-06.jpeg",
    },
    {
        id: 7,
        title: "Anniversary 1 tahun",
        text: "Lucukk banget ekspresi princecs hehe.",
        image: "/images/foto-07.jpeg",
    },
    {
        id: 8,
        title: "Kebon Raya Bogor Date",
        text: "Kangen bangett jalann jalann agi ma bubbbb.",
        image: "/images/foto-08.jpeg",
    },
    {
        id: 9,
        title: "Foto random",
        text: "hehehehh🥰🥰🥰🥰.",
        image: "/images/foto-09.jpeg",
    },
    {
        id: 10,
        title: "Princess jadi pengibar",
        text: "Princess bisa jadi keren uga ternyata hehehe.",
        image: "/images/foto-10.jpeg",
    },
    {
        id: 11,
        title: "Foto Random",
        text: "Imutt banget posenyaa🥰🥰🥰🥰.",
        image: "/images/foto-11.jpeg",
    },
    {
        id: 12,
        title: "Photobox",
        text: "Photobox pertama di blok m kangen banget rasanya semoga bisa photobox lagi nanti .",
        image: "/images/foto-12.jpeg",
    },
    {
        id: 13,
        title: "Foto random",
        text: "Cenyum manis bubub.",
        image: "/images/foto-13.jpeg",
    },
    {
        id: 14,
        title: "Foto Random",
        text: "co cwiitt cekalii tangan bubub mungil🥰🥰.",
        image: "/images/foto-14.jpeg",
    },
    {
        id: 15,
        title: "Foto Random",
        text: "Kangen dechh foto foto lagi.",
        image: "/images/foto-15.jpeg",
    },
    {
        id: 16,
        title: "Foto Random",
        text: "Ini foto paling lama kayaknya dech😭😭😭.",
        image: "/images/foto-16.jpeg",
    },
    {
        id: 17,
        title: "Anniversary Day",
        text: "Cantikk banget princessnyaa acuuu heheh🥰🥰.",
        image: "/images/foto-17.jpeg",
    },
    {
        id: 18,
        title: "Anniversary Day",
        text: "Yey mukbang Dimsum bayeng bubub ,gak nyangka acu bubub beyi sebanyak ituch maaci banyakk yaachhh😘😘😘.",
        image: "/images/foto-18.jpeg",
    },
];

export default function Memories() {
    return (
        <section
            id="memories"
            className="relative overflow-hidden bg-[#080508] px-6 py-32 text-white"
        >
            <FloatingHearts />

            {/* Background glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-rose-900/10 blur-[150px]" />
            </div>

            {/* Header */}
            <div className="relative z-10 mx-auto max-w-4xl text-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-xs uppercase tracking-[0.5em] text-rose-300"
                >
                    Foto Kenang kenangan
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mt-5 font-serif text-5xl md:text-7xl"
                >
                    Momen Kecil,
                    <br />
                    <span className="text-rose-300">
                        Dan Momen Besar Yang indah.
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-500 md:text-base"
                >
                    .
                </motion.p>
            </div>

            {/* Memories */}
            <div className="relative z-10 mx-auto mt-24 max-w-5xl">

                {memories.map((memory, index) => (
                    <motion.div
                        key={memory.id}
                        initial={{
                            opacity: 0,
                            y: 80,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            margin: "-100px",
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                        }}
                        className={`mb-24 flex flex-col items-center gap-8 md:flex-row ${
                            index % 2 !== 0
                                ? "md:flex-row-reverse"
                                : ""
                        }`}
                    >

                        {/* Photo */}
                        <div className="group relative w-full md:w-1/2">

                            <div className="absolute -inset-2 rounded-2xl bg-rose-500/10 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#110b10]">

                                <img
                                    src={memory.image}
                                    alt={memory.title}
                                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                />

                            </div>
                        </div>

                        {/* Text */}
                        <div className="w-full text-center md:w-1/2 md:text-left">

                            <p className="text-xs tracking-[0.4em] text-rose-400">
                                {String(memory.id).padStart(2, "0")}
                            </p>

                            <h3 className="mt-3 font-serif text-3xl text-gray-100 md:text-4xl">
                                {memory.title}
                            </h3>

                            <div className="mx-auto my-5 h-px w-16 bg-rose-400/30 md:mx-0" />

                            <p className="text-sm leading-7 text-gray-500 md:text-base">
                                {memory.text}
                            </p>

                        </div>

                    </motion.div>
                ))}

            </div>

            {/* Ending */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative z-10 mx-auto mt-16 max-w-xl text-center"
            >
                <div className="text-4xl text-rose-400">
                    ♡
                </div>

                <p className="mt-6 font-serif text-2xl italic text-gray-300">
                    "Kenangan,
                    <br />
                    yang buat aku nyaman."
                </p>

                <p className="mt-5 text-sm text-gray-600">
                    — Elkan Maulana Ganteng
                </p>
            </motion.div>

        </section>
    );
}
