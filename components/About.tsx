"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Brain,
  MapPin,
  Briefcase,
} from "lucide-react";

const details = [
  {
    icon: GraduationCap,
    title: "Education",
    value: "B.Tech CSE (Data Science)",
  },
  {
    icon: Brain,
    title: "Specialization",
    value: "Artificial Intelligence & ML",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "India",
  },
  {
    icon: Briefcase,
    title: "Status",
    value: "Open to Internships",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="glass-card rounded-3xl p-6 sm:p-8 lg:p-12 overflow-hidden relative"
    >
      {/* Background Glow */}
      <div className="absolute -right-24 top-10 w-72 h-72 bg-violet-600/10 blur-[120px] rounded-full"></div>

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 relative z-10"
      >
        <p className="text-violet-400 uppercase tracking-[0.35em] text-sm font-semibold">
          GET TO KNOW ME
        </p>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-3">
          About{" "}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center relative z-10">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">
            Passionate about building
            <span className="text-violet-400">
              {" "}AI-powered solutions.
            </span>
          </h3>

          <p className="text-slate-300 text-base sm:text-lg leading-8">
            I'm{" "}
            <span className="text-violet-400 font-semibold">
              Aryan Saxena
            </span>
            , a Computer Science student specializing in{" "}
            <span className="text-violet-400 font-semibold">
              Data Science
            </span>
            .

            <br />
            <br />

            I enjoy transforming ideas into intelligent applications
            using Machine Learning, Python and modern web technologies.

            <br />
            <br />

            My long-term goal is to become an{" "}
            <span className="text-violet-400 font-semibold">
              AI Engineer
            </span>{" "}
            who builds impactful products that solve real-world
            problems and improve people's lives.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">

            <span className="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-sm">
              AI
            </span>

            <span className="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-sm">
              Machine Learning
            </span>

            <span className="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-sm">
              Python
            </span>

            <span className="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-sm">
              Data Science
            </span>

          </div>

        </motion.div>

        {/* RIGHT */}

        <div className="grid grid-cols-2 gap-5">

          {details.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                }}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 transition-all duration-300 hover:border-violet-500 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]"
              >

                <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center mb-5 group-hover:bg-violet-500/20 transition">

                  <Icon
                    size={28}
                    className="text-violet-400"
                  />

                </div>

                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="text-slate-400 mt-2 text-sm leading-6">
                  {item.value}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}