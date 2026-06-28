import Image from "next/image";
import { ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Python Programming",
    issuer: "GeeksforGeeks",
    image: "/pythongfg.jpeg",
  },
  {
    title: "Web Development",
    issuer: "NSS EDU",
    image: "/webdev.jpeg",
  },
  {
    title: "C Programming",
    issuer: "CodeTantra",
    image: "/c.jpeg",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="glass-card rounded-3xl p-8"
    >
      <h2 className="text-3xl font-bold mb-8">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <a
            key={cert.title}
            href={cert.image}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-900 rounded-2xl border border-white/10 overflow-hidden hover:border-violet-500 transition-all"
          >
            <div className="overflow-hidden">
              <Image
                src={cert.image}
                alt={cert.title}
                width={500}
                height={350}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-5 flex justify-between items-center">
              <div>
                <h3 className="font-semibold">
                  {cert.title}
                </h3>

                <p className="text-slate-400 text-sm">
                  {cert.issuer}
                </p>
              </div>

              <ExternalLink
                size={20}
                className="text-violet-400"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}