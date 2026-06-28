import { FaChessKnight, FaBook, FaFilm } from "react-icons/fa";

export default function Interests() {
  return (
    <section id="interests" className="glass-card rounded-3xl p-8 overflow-hidden relative">

      <h2 className="text-3xl font-bold mb-6">
        Interests
      </h2>

      <p className="text-slate-400 mb-6">
        I enjoy exploring and spending time on things I love.
      </p>

      <div className="space-y-4">

        <div className="flex items-center gap-3">
          <FaChessKnight className="text-violet-400 text-xl" />
          <span>Playing Chess</span>
        </div>

        <div className="flex items-center gap-3">
          <FaBook className="text-violet-400 text-xl" />
          <span>Literature Reading</span>
        </div>

        <div className="flex items-center gap-3">
          <FaFilm className="text-violet-400 text-xl" />
          <span>Movies Watching</span>
        </div>

      </div>

      <div className="absolute right-6 bottom-0 text-[140px] opacity-20 text-violet-400">
        ♞
      </div>

    </section>
  );
}