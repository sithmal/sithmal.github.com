import { GraduationCap, FlaskConical } from "lucide-react";
import { education } from "../data/portfolio";
import { SectionLabel } from "./About";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel label="Education" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">
          Academic <span className="text-cyan-400">Background</span>
        </h2>

        <div className="max-w-2xl">
          <div className="rounded-2xl border border-slate-800 bg-slate-800/40 p-8 hover:border-cyan-400/20 transition-colors duration-300">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={26} className="text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-1">{education.degree}</h3>
                <p className="text-cyan-400 font-medium mb-1">{education.institution}</p>
                <p className="text-slate-500 text-sm font-mono mb-4">{education.period}</p>

                <div className="flex flex-wrap gap-3 mb-5">
                  <span className="px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 text-xs font-medium border border-emerald-400/20">
                    {education.classification}
                  </span>
                </div>

                <div className="rounded-xl bg-slate-900/60 border border-slate-700/60 p-4 flex items-start gap-3">
                  <FlaskConical size={16} className="text-cyan-400/70 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">
                      Final Year Project
                    </p>
                    <p className="text-slate-300 text-sm">{education.project}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
