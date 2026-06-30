"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  FolderOpen,
  Award,
  Code2,
  GitBranch,
  Mail,
  Menu,
  X,
} from "lucide-react";

const links = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: Code2, label: "Technology", href: "#skills" },
  { icon: FolderOpen, label: "Projects", href: "#projects" },
  { icon: Award, label: "Certificates", href: "#certificates" },
  { icon: GitBranch, label: "GitHub", href: "#github" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export default function Sidebar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 140 && rect.bottom >= 140) {
          current = section.id;
        }
      });

      setActive(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= Mobile Navbar ================= */}

      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl">

        <div className="flex items-center justify-between px-5 py-4">

          <div>

            <h1 className="text-3xl font-black bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              AS
            </h1>

          </div>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl p-2 hover:bg-white/5 transition"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

        <AnimatePresence>

          {open && (

            <motion.nav
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="px-5 pb-5 space-y-2"
            >

              {links.map((item) => {

                const Icon = item.icon;

                const id = item.href.replace("#", "");

                return (

                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 ${
                      active === id
                        ? "bg-violet-600 text-white"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >

                    <Icon size={19} />

                    <span className="font-medium">
                      {item.label}
                    </span>

                  </a>

                );
              })}

            </motion.nav>

          )}

        </AnimatePresence>

      </header>

      {/* ================= Desktop Sidebar ================= */}

      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 flex-col border-r border-white/10 bg-[#050816]/95 backdrop-blur-xl z-40">

        {/* Logo */}

        <div className="px-8 pt-10 pb-8">

          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl font-black bg-gradient-to-r from-violet-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent"
          >
            AS
          </motion.h1>

          <h2 className="mt-5 text-lg font-semibold">
            Aryan Saxena
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            AI • Data Science
          </p>

        </div>

        <div className="border-t border-white/10" />

        <nav className="flex-1 px-5 py-6 space-y-2">

                  {links.map((item) => {
            const Icon = item.icon;

            const id = item.href.replace("#", "");

            const isActive = active === id;

            return (
              <a
                key={item.label}
                href={item.href}
                className={`group relative flex items-center gap-4 rounded-2xl px-5 py-3.5 transition-all duration-300 ${
                  isActive
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-white"
                  />
                )}

                <Icon
                  size={19}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                <span className="font-medium">
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>

        <div className="border-t border-white/10" />

        {/* Bottom Card */}

        <div className="p-5">

          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            className="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-5"
          >

            <div className="flex items-center gap-3">

              <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>

              <span className="text-sm font-medium text-white">
                Open to Internships
              </span>

            </div>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Currently building AI applications,
              machine learning projects and modern
              web experiences.
            </p>

          </motion.div>

          <p className="mt-6 text-center text-xs text-slate-500">
            © 2026 Aryan Saxena
          </p>

        </div>

      </aside>

    </>
  );
}