import { CheckCircle2 } from "lucide-react";

const topics = [
  "Deep Learning & Neural Networks",
  "Advanced Machine Learning",
  "Data Analysis & Visualization",
  "End-to-End ML Workflows",
  "Exploring LLMs and GenAI",
];

export default function Learning() {
  return (
    <section  id="learning" className="glass-card rounded-3xl p-8 overflow-hidden relative">

      <h2 className="text-3xl font-bold mb-6">
        Currently Learning
      </h2>

      <div className="space-y-4">

        {topics.map((topic) => (
          <div
            key={topic}
            className="flex items-center gap-3"
          >
            <CheckCircle2
              size={18}
              className="text-violet-400"
            />

            <span>{topic}</span>
          </div>
        ))}

      </div>

      <div className="absolute right-4 bottom-0 text-[120px] opacity-20">
        🧠
      </div>

    </section>
  );
}