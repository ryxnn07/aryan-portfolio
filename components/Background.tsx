"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Large Blob */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-20 w-[420px] h-[420px] rounded-full bg-violet-600/20 blur-[150px]"
      />

      {/* Right Blob */}
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-0 w-[350px] h-[350px] rounded-full bg-purple-500/20 blur-[140px]"
      />

      {/* Bottom Blob */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/3 w-[320px] h-[320px] rounded-full bg-indigo-500/20 blur-[140px]"
      />

    </div>
  );
}