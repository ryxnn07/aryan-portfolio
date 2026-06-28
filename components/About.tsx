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
    value: "AI & Machine Learning",
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
      className="glass-card rounded-3xl p-8 lg:p-12"
    >
      {/* Heading */}
      <div className="mb-10">
        <p className="text-violet-400 uppercase tracking-[0.3em] text-sm font-semibold">
          Get To Know Me
        </p>

        <h2 className="text-5xl font-bold mt-3">
          About{" "}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-slate-300 text-lg leading-9">
            I'm <span className="text-violet-400 font-semibold">Aryan Saxena</span>,
            a passionate Computer Science student specializing in
            <span className="text-violet-400 font-semibold"> Data Science</span>.

            <br /><br />

            I enjoy building intelligent web applications, solving
            real-world problems with
            <span className="text-violet-400 font-semibold">
              {" "}Machine Learning
            </span>,
            and continuously learning modern technologies.

            <br /><br />

            My goal is to become an
            <span className="text-violet-400 font-semibold">
              {" "}AI Engineer
            </span>
            {" "}who builds products that create meaningful impact.
          </p>
        </motion.div>

        {/* Right Cards */}
        <div className="grid sm:grid-cols-2 gap-5">

          {details.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                className="bg-slate-900/80 border border-white/10 rounded-2xl p-6 hover:border-violet-500 hover:-translate-y-1 transition-all"
              >
                <Icon
                  size={32}
                  className="text-violet-400 mb-4"
                />

                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="text-slate-400 mt-2">
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