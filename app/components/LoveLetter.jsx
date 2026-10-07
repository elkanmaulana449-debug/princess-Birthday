"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "./FloatingHearts";

export default function LoveLetter() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section
            id="letter"
            className="relative min-h-screen overflow-hidden bg-[#080508] px-6 py-32 text-white"
        >

            <FloatingHearts />

            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-900/15 blur-[150px]" />

                <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-pink-900/10 blur-[100px]" />

                <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-red-900/10 blur-[100px]" />
            </div>

            {/* Header */}
            <div className="relative z-10 mx-auto max-w-3xl text-center">

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-xs uppercase tracking-[0.5em] text-rose-300"
                >
                    Something From My Heart
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mt-5 font-serif text-5xl md:text-7xl"
                >
                    Surat Cinta Hati Aku
                    <br />
                    <span className="text-rose-300">
                        Untuk Princess.
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="mx-auto mt-6 max-w-xl text-sm leading-7 text-gray-500 md:text-base"
                >
                    Pesan dan Doa dari Hati aku agar princess aku jadi makin Baik 
                    dan bahagia selamanya .
                </motion.p>

                {/* Envelope / Letter */}
                <AnimatePresence mode="wait">

                    {!isOpen ? (
                        <motion.div
                            key="envelope"
                            initial={{
                                opacity: 0,
                                scale: 0.8,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                            }}
                            viewport={{ once: true }}
                            exit={{
                                opacity: 0,
                                scale: 0.8,
                                y: -30,
                            }}
                            transition={{
                                duration: 0.7,
                            }}
                            className="mt-16 flex flex-col items-center"
                        >

                            <motion.button
                                type="button"
                                onClick={() => setIsOpen(true)}
                                whileHover={{
                                    scale: 1.05,
                                    y: -5,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                                className="group relative"
                            >

                                {/* Glow */}
                                <div className="absolute -inset-5 rounded-3xl bg-rose-500/10 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

                                {/* Envelope */}
                                <div className="relative flex h-48 w-72 items-center justify-center rounded-xl border border-rose-300/20 bg-[#160d14] shadow-2xl md:h-56 md:w-96">

                                    {/* Envelope flap */}
                                    <div className="absolute left-0 top-0 h-0 w-0 border-l-[144px] border-r-[144px] border-t-[90px] border-l-transparent border-r-transparent border-t-rose-900/40 md:border-l-[192px] md:border-r-[192px] md:border-t-[105px]" />

                                    {/* Heart */}
                                    <motion.div
                                        animate={{
                                            scale: [1, 1.1, 1],
                                        }}
                                        transition={{
                                            duration: 1.8,
                                            repeat: Infinity,
                                        }}
                                        className="relative z-10 mt-5 text-5xl text-rose-400"
                                    >
                                        ♡
                                    </motion.div>

                                </div>

                            </motion.button>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="mt-8 text-xs uppercase tracking-[0.35em] text-gray-500"
                            >
                                Click to open
                            </motion.p>

                        </motion.div>
                    ) : (

                        /* Open Letter */
                        <motion.div
                            key="letter"
                            initial={{
                                opacity: 0,
                                y: 40,
                                scale: 0.95,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                            className="mx-auto mt-16 max-w-2xl"
                        >

                            <div className="relative rounded-2xl border border-rose-200/10 bg-[#120c11] p-8 text-left shadow-2xl md:p-12">

                                {/* Decorative heart */}
                                <div className="absolute right-6 top-5 text-xl text-rose-400/40">
                                    ♡
                                </div>

                                <p className="font-serif text-2xl text-rose-300">
                                    Halo Sayangg acu,
                                </p>

                                <div className="mt-8 space-y-5 text-sm leading-8 text-gray-400 md:text-base">

                                    <p>
                                        Happy BirthDay sayang akuuu😘😘😘😘.
                                    </p>

                                    <p>
                                        Aku tau kok ini SweetSeventeennya princess
                                        ,ulang tahun yang ke 17 yang dimana kamu menjadi lebih
                                        besar dan dewasa ,aku minta maaf kalo sweetseventeen ini
                                        gak terlalu wahh banget tapi semuanya ini udah aku usahain 
                                        sekuat aku untuk princess kesayangan aku🥰🥰🥰🥰 .
                                    </p>

                                    <p>
                                        Ehehe maap nyak, Aku mau mengucapkan Terima Kasih Banyak
                                        Atas perjalanan hubungan kita yang ada senengnya, sedih, berantem,
                                        ,ketawa bareng ,jalan jalan dan lain lain
                                        Makasih Banyak Telah Menjadi Pasangan Pertama dan Terakhir aku🥰🥰.
                                    </p>

                                    <p>
                                        Perjalanan kita Udah Dimulai Dari{" "}
                                        <span className="text-rose-300">
                                            09.08.2025
                                        </span>
                                        , Aku Harap Hubungan kita terus berjalan lancar
                                        Dan Bahagia Berdua Selamanya🥰🥰🥰🥰.
                                    </p>

                                    <p>
                                        Dengan Bertambahnya Umur Princess aku Berharap kamu
                                        Jadi orang yang Lebih Dewasa lagi dan Menjadi lebih Baik
                                        ,dan semoga Hubungan Kita bisa Bahagia 
                                        dan Sukses sampai Berkeluarga dan  Sampai Tua nanti🥰🥰🥰🥰.
                                    </p>

                                    <p>
                                        Sekali lagi Aku Ucapkan HappyBirthDay My princess my Love😘😘😘,
                                        Dan aku Minta maap Kalo udah Sejauh ini aku Masih Banyak Kurang dan Salahnya
                                        ,Iloveee youuu soo muchhh my prinncess my love Kekasih akuu yang paling aku sayangii dan ku cintaii
                                        😘😘😘❤️❤️❤️❤️.

                                    </p>

                                </div>

                                {/* Signature */}
                                <div className="mt-10 border-t border-white/5 pt-8">

                                    <p className="font-serif text-xl italic text-gray-300">
                                        With all my love,
                                    </p>

                                    <p className="mt-2 text-sm text-rose-300">
                                        Elkan Maulana Ganteng ♡
                                    </p>

                                </div>

                            </div>

                            {/* Close */}
                            <motion.button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                whileHover={{
                                    scale: 1.05,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                                className="mt-8 rounded-full border border-rose-400/20 bg-rose-500/5 px-6 py-3 text-xs tracking-[0.25em] text-rose-300 transition hover:bg-rose-500/10"
                            >
                                CLOSE LETTER
                            </motion.button>

                        </motion.div>
                    )}

                </AnimatePresence>

            </div>
        </section>
    );
}
