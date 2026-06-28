"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="glass-card rounded-3xl min-h-[720px] p-10 lg:p-16 overflow-hidden relative flex items-center"
    >
      {/* Purple Glow */}
      <div className="absolute top-1/2 right-28 -translate-y-1/2 w-[420px] h-[420px] bg-violet-600/20 blur-[150px] rounded-full"></div>

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center relative z-10 w-full">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex px-4 py-2 rounded-full border border-violet-500/30 text-violet-400 text-sm mb-6">
            Hi, I'm
          </div>

          <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
            Aryan{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              Saxena
            </span>
          </h1>

          <h2 className="text-violet-400 text-3xl mt-6 font-semibold">
            Aspiring Data Scientist
          </h2>

          <p className="text-slate-400 mt-6 text-xl leading-9 max-w-xl">
            AI Enthusiast • Python Developer
            <br />
            Building intelligent systems and AI-powered
            applications using Machine Learning and
            Data Science.
          </p>

          <div className="flex gap-4 mt-10">

            <a
              href="#projects"
              className="px-7 py-4 rounded-xl bg-violet-600 hover:bg-violet-700 transition"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="px-7 py-4 rounded-xl border border-white/10 hover:border-violet-500 transition"
            >
              Contact Me
            </a>

            <a
              href="/Aryan_Saxena_Resume.pdf"
              download
              className="px-7 py-4 rounded-xl border border-violet-500/30 hover:bg-violet-500/10 transition"
            >
              Resume
            </a>

          </div>

          <div className="flex items-center gap-3 mt-10">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

            <span className="text-slate-400">
              Open to Internships & Opportunities
            </span>
          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center -translate-x-14"
        >
          {/* Ring */}
          <div className="absolute w-[620px] h-[620px] rounded-full border border-violet-500/15"></div>

<div className="absolute w-[520px] h-[520px] rounded-full border border-violet-500/10"></div>

<div className="absolute w-[420px] h-[420px] rounded-full border border-violet-500/10"></div>

          {/* Glow */}
          <div className="absolute w-[420px] h-[420px] rounded-full bg-violet-600/30 blur-[120px]"></div>

          {/* Left Star */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute left-0 top-28 text-5xl text-violet-400"
          >
            ✦
          </motion.div>

          {/* Right Star */}
          <motion.div
            animate={{ y: [8, -8, 8] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute right-2 top-20 text-5xl text-violet-400"
          >
            ✦
          </motion.div>

          {/* Avatar */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="relative flex items-center justify-center"
          >
            <Image
              src="/avatar.png"
              alt="Aryan"
              width={500}
              height={500}
              priority
              className="relative z-10 drop-shadow-2xl"
            />
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}