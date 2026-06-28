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
} from "lucide-react";

const links = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: Code2, label: "Skills", href: "#skills" },
  { icon: FolderOpen, label: "Projects", href: "#projects" },
  { icon: Award, label: "Certificates", href: "#certificates" },
  { icon: GitBranch, label: "GitHub", href: "#github" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export default function Sidebar() {
  const [active, setActive] = useState("home");


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

  requestAnimationFrame(() => {
    handleScroll();
  });

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <aside className="hidden lg:flex flex-col fixed left-0 top-0 w-64 h-screen border-r border-white/10 bg-[#050816]/95 backdrop-blur-xl z-50">

      <div className="p-8">

        <h1 className="text-5xl font-bold text-violet-500 mb-12">
          AS
        </h1>

        <nav className="space-y-3">

          {links.map((item) => {
            const Icon = item.icon;

            const id = item.href.replace("#", "");

            const isActive = active === id;

            return (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                  isActive
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-600/30"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
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

      </div>

    </aside>
  );
}