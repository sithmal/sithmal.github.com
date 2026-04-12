import { skills } from "../data/portfolio";
import { SectionLabel } from "./About";

const categoryColors: Record<string, string> = {
  "SRE Practices": "from-cyan-500/10 to-cyan-500/5 border-cyan-500/20",
  "Cloud Platforms": "from-blue-500/10 to-blue-500/5 border-blue-500/20",
  "Container & Orchestration": "from-sky-500/10 to-sky-500/5 border-sky-500/20",
  "Infrastructure as Code": "from-teal-500/10 to-teal-500/5 border-teal-500/20",
  "CI/CD & GitOps": "from-indigo-500/10 to-indigo-500/5 border-indigo-500/20",
  "Monitoring & Observability": "from-emerald-500/10 to-emerald-500/5 border-emerald-500/20",
  "Security & Secrets": "from-red-500/10 to-red-500/5 border-red-500/20",
  "Package Management": "from-orange-500/10 to-orange-500/5 border-orange-500/20",
  "Scripting & Languages": "from-slate-500/10 to-slate-500/5 border-slate-500/20",
  "AI Tools": "from-violet-500/10 to-violet-500/5 border-violet-500/20",
  Leadership: "from-amber-500/10 to-amber-500/5 border-amber-500/20",
};

const tagColors: Record<string, string> = {
  "SRE Practices": "bg-cyan-400/10 text-cyan-300 border-cyan-400/20",
  "Cloud Platforms": "bg-blue-400/10 text-blue-300 border-blue-400/20",
  "Container & Orchestration": "bg-sky-400/10 text-sky-300 border-sky-400/20",
  "Infrastructure as Code": "bg-teal-400/10 text-teal-300 border-teal-400/20",
  "CI/CD & GitOps": "bg-indigo-400/10 text-indigo-300 border-indigo-400/20",
  "Monitoring & Observability": "bg-emerald-400/10 text-emerald-300 border-emerald-400/20",
  "Security & Secrets": "bg-red-400/10 text-red-300 border-red-400/20",
  "Package Management": "bg-orange-400/10 text-orange-300 border-orange-400/20",
  "Scripting & Languages": "bg-slate-400/10 text-slate-300 border-slate-400/20",
  "AI Tools": "bg-violet-400/10 text-violet-300 border-violet-400/20",
  Leadership: "bg-amber-400/10 text-amber-300 border-amber-400/20",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel label="Skills" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Technical <span className="text-cyan-400">Expertise</span>
        </h2>
        <p className="text-slate-400 mb-14 text-base max-w-xl">
          15+ years of deep, hands-on experience across the modern cloud-native stack.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className={`rounded-2xl border bg-gradient-to-br p-5 ${categoryColors[category] || "from-slate-800 to-slate-900 border-slate-700"} hover:-translate-y-1 transition-transform duration-200`}
            >
              <h3 className="text-white text-sm font-semibold mb-4 leading-tight">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs px-2.5 py-1 rounded-md border font-medium ${tagColors[category] || "bg-slate-700 text-slate-300 border-slate-600"}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
