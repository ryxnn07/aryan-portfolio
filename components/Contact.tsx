import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Contact() {
  return (
    <section
      id="contact"
      className="glass-card rounded-3xl p-8"
    >
      <h2 className="text-3xl font-bold mb-3">
        Let's Connect
      </h2>

      <p className="text-slate-400 mb-8">
        Open to internships, collaborations and exciting projects.
      </p>

      <div className="flex flex-wrap gap-4">

        <a
          href="https://github.com/ryxnn07"
          target="_blank"
          className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-violet-500 transition-all"
        >
          <FaGithub size={18} />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/aryan-saxena-57b180370?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 transition-all"
        >
          <FaLinkedin size={18} />
          LinkedIn
        </a>

        <a
          href="mailto:ryxn911@gmail.com"
          className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-violet-500 transition-all"
        >
          <MdEmail size={18} />
          Email Me
        </a>

      </div>
    </section>
  );
}