"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", icon: "/icons/python.svg" },
  { name: "NumPy", icon: "/icons/numpy.svg" },
  { name: "Pandas", icon: "/icons/pandas.svg" },
  { name: "Scikit Learn", icon: "/icons/scikitlearn.svg" },
  { name: "TensorFlow", icon: "/icons/TensorFlow.svg" },

  { name: "C", icon: "/icons/C.svg" },
  { name: "Java", icon: "/icons/Java.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "VS Code", icon: "/icons/vscode.svg" },
  { name: "GitHub", icon: "/icons/github.svg" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="glass-card rounded-3xl p-10"
    >
      {/* Heading */}

      <p className="text-violet-400 uppercase tracking-[0.35em] text-sm font-semibold mb-3">
        ● MY TECH STACK
      </p>

      <h2 className="text-6xl font-bold mb-4">
        Techno
        <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
          logy
        </span>
      </h2>

      <p className="text-slate-400 text-lg max-w-2xl leading-8 mb-12">
        Technologies and tools I use to build, learn and create
        impactful solutions.
      </p>

      {/* Skills */}

      <div className="grid grid-cols-2 md:grid-cols-5 gap-7">

        {skills.map((skill, index) => (

          <motion.div
            key={skill.name}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.45,
              delay: index * 0.05,
            }}
            whileHover={{
              scale: 1.08,
              rotate: [0, -2, 2, -2, 0],
              transition: {
                duration: 0.35,
              },
            }}
            className="group"
          >

            <div
              className="
              relative
              h-48
              rounded-3xl
              border
              border-white/15
              bg-white/[0.04]
              backdrop-blur-xl
              flex
              flex-col
              items-center
              justify-center
              overflow-hidden
              transition-all
              duration-300
              hover:border-violet-400
              hover:shadow-[0_0_35px_rgba(168,85,247,0.45)]
            "
            >

              {/* Glow */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">

                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full bg-violet-500/20 blur-3xl" />

              </div>

              {/* Icon */}

              <Image
                src={skill.icon}
                alt={skill.name}
                width={72}
                height={72}
                className="relative z-10 object-contain"
              />

              {/* Name */}

              <h3 className="relative z-10 mt-7 text-xl font-semibold">
                {skill.name}
              </h3>

              {/* Underline */}

              <div className="relative z-10 mt-4 w-12 h-[3px] rounded-full bg-violet-500 group-hover:w-20 transition-all duration-300"></div>

            </div>

          </motion.div>

        ))}

      </div>
    </section>
  );
}