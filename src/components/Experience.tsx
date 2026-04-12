import { experience } from "../data/portfolio";
import { SectionLabel } from "./About";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel label="Experience" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">
          Career <span className="text-cyan-400">Timeline</span>
        </h2>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-slate-700 to-transparent md:left-8" />

          <div className="space-y-6">
            {experience.map((job, i) => (
              <div key={i} className="relative pl-20 md:pl-24">
                <div className="absolute left-4 top-6 md:left-6 flex items-center justify-center w-5 h-5 rounded-full border-2 border-cyan-400 bg-slate-950 z-10">
                  <div className={`w-2 h-2 rounded-full ${job.current ? "bg-cyan-400" : "bg-slate-700"}`} />
                </div>

                <div
                  className={`rounded-2xl border bg-slate-900/70 p-6 hover:border-cyan-400/30 transition-all duration-300 hover:bg-slate-900 ${
                    job.current ? "border-cyan-400/30 bg-slate-900" : "border-slate-800"
                  }`}
                >
                  <div className="flex flex-wrap items-start gap-3 mb-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        {job.current && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-xs font-medium border border-cyan-400/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-white font-semibold text-base leading-snug">{job.title}</h3>
                      <p className="text-cyan-400/80 text-sm font-medium mt-0.5">{job.company}</p>
                    </div>
                    <span className="text-slate-600 text-xs font-mono whitespace-nowrap mt-1">{job.period}</span>
                  </div>

                  <ul className="space-y-2">
                    {job.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-slate-400 text-sm leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400/50 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
