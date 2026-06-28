import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Project() {
  return (
    <section
      id="projects"
      className="glass-card rounded-3xl p-8 lg:p-10"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-violet-400 text-sm uppercase tracking-widest">
            Featured Project
          </p>

          <h2 className="text-4xl font-bold mt-2">
            DiagnoseAI
          </h2>
        </div>

        <span className="bg-violet-600 px-4 py-2 rounded-full text-sm">
          Machine Learning
        </span>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div className="overflow-hidden rounded-2xl border border-white/10 group">
          <Image
            src="/diag.png"
            alt="DiagnoseAI"
            width={800}
            height={500}
            className="w-full transition duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div>

          <p className="text-slate-400 leading-8">
            DiagnoseAI is an AI-powered disease prediction platform
            that analyzes user symptoms and predicts possible
            diseases using Machine Learning models. The project
            combines an intuitive frontend with a Flask backend
            and intelligent prediction pipeline.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">

            {[
              "Python",
              "Flask",
              "Scikit-Learn",
              "HTML",
              "CSS",
              "JavaScript",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-slate-800 border border-white/10 text-sm"
              >
                {tech}
              </span>
            ))}

          </div>

          <div className="flex gap-4 mt-10">

            <a
              href="https://diagnoseai-phi.vercel.app/"
              className="flex items-center gap-2 bg-violet-600 px-6 py-3 rounded-xl hover:bg-violet-700 transition"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>

            <a
              href="https://github.com/ryxnn07/Diagnose-AI"
              className="flex items-center gap-2 border border-white/10 px-6 py-3 rounded-xl hover:border-violet-500 transition"
            >
              <FaGithub size={18} />
              Source Code
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}