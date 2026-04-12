import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { personal } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-sm font-medium tracking-wide">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Based in Espoo, Finland
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight leading-tight">
          {personal.name.split(" ")[0]}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            {personal.name.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 mb-6 font-light tracking-wide max-w-2xl mx-auto">
          {personal.title}
        </p>

        <p className="text-slate-500 text-base mb-10 max-w-xl mx-auto leading-relaxed">
          Strategic technical leader building resilient, cloud-native infrastructure at scale.
          Kubernetes expert. HashiCorp Vault practitioner. DevOps transformation driver.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 hover:-translate-y-0.5"
          >
            <Mail size={16} />
            Get In Touch
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 hover:border-cyan-400/50 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 hover:border-cyan-400/50 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-center">
          {[
            { value: "15+", label: "Years Experience" },
            { value: "6", label: "Certifications" },
            { value: "8+", label: "Companies" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600 hover:text-cyan-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
