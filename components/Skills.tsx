"use client";

import { useEffect, useState } from "react";
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
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");

      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    requestAnimationFrame(handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Navbar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#050816]/90 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-5 py-4">
          <h1 className="text-2xl font-bold text-violet-500">
            AS
          </h1>

          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {open && (
          <nav className="pb-4 px-5 space-y-2">
            {links.map((item) => {
              const Icon = item.icon;
              const id = item.href.replace("#", "");

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                    active === id
                      ? "bg-violet-600 text-white"
                      : "hover:bg-white/10"
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                </a>
              );
            })}
          </nav>
        )}
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 w-64 h-screen border-r border-white/10 bg-[#050816]/95 backdrop-blur-xl z-40">
        <div className="p-8">
          <h1 className="text-5xl font-bold text-violet-500 mb-12">
            AS
          </h1>

          <nav className="space-y-3">
            {links.map((item) => {
              const Icon = item.icon;
              const id = item.href.replace("#", "");

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    active === id
                      ? "bg-violet-600 text-white"
                      : "hover:bg-white/5"
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}