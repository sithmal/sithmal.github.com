import { Award } from "lucide-react";
import { certifications } from "../data/portfolio";
import { SectionLabel } from "./About";

const iconMap: Record<string, string> = {
  kubernetes: "K8s",
  aws: "AWS",
  terraform: "TF",
};

const badgeColors: Record<string, string> = {
  kubernetes: "from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-300",
  aws: "from-amber-500/20 to-amber-600/10 border-amber-500/30 text-amber-300",
  terraform: "from-violet-500/20 to-violet-600/10 border-violet-500/30 text-violet-300",
};

const iconBgMap: Record<string, string> = {
  kubernetes: "bg-blue-500/20 text-blue-400",
  aws: "bg-amber-500/20 text-amber-400",
  terraform: "bg-violet-500/20 text-violet-400",
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel label="Certifications" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Professional <span className="text-cyan-400">Credentials</span>
        </h2>
        <p className="text-slate-400 mb-14 text-base max-w-xl">
          Industry-recognized certifications validating deep expertise in cloud and Kubernetes ecosystems.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className={`group rounded-2xl border bg-gradient-to-br p-6 hover:-translate-y-1 transition-all duration-300 ${badgeColors[cert.icon] || "from-slate-800 to-slate-900 border-slate-700 text-slate-300"}`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0 ${iconBgMap[cert.icon] || "bg-slate-700 text-slate-400"}`}>
                  {iconMap[cert.icon] || <Award size={18} />}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm leading-snug mb-2">{cert.name}</h3>
                  <p className="text-slate-500 text-xs">{cert.issuer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 text-slate-500 text-sm">
          <Award size={16} className="text-cyan-400/60" />
          <span>6 active industry certifications</span>
        </div>
      </div>
    </section>
  );
}
