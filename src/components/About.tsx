import { MapPin, Phone, Mail, Globe, Guitar, Swords } from "lucide-react";
import { personal } from "../data/portfolio";

const highlights = [
  "15+ years in SRE, Platform Engineering, and Software Development",
  "Expert in Kubernetes cluster design and cloud-native operations",
  "Certified across AWS, Kubernetes (CKA, CKAD, CKS) and Terraform",
  "Proven track record reducing operational toil through automation",
  "Experienced technical leader, mentor, and cross-functional collaborator",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel label="About Me" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">
          Building resilient systems,{" "}
          <span className="text-cyan-400">one cluster at a time.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-slate-400 text-base leading-relaxed mb-6">
              {personal.summary}
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Currently based in Espoo, Finland, I work at Relex Solutions driving SRE
              practices, HashiCorp Vault adoption, and GitLab CI/CD automation. Outside of
              work, I play guitar and enjoy badminton — and I'm always up for a good sci-fi or
              fantasy story.
            </p>

            <div className="space-y-3">
              {highlights.map((h) => (
                <div key={h} className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  {h}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-800 bg-slate-800/40 p-6">
              <h3 className="text-slate-500 font-semibold mb-4 text-sm tracking-widest uppercase">
                Contact Details
              </h3>
              <div className="space-y-3">
                {[
                  { icon: <MapPin size={15} />, text: personal.location },
                  { icon: <Phone size={15} />, text: personal.phone, href: `tel:${personal.phone}` },
                  { icon: <Mail size={15} />, text: personal.email, href: `mailto:${personal.email}` },
                  { icon: <Globe size={15} />, text: "www.sithmal.info", href: personal.website },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 text-slate-400 text-sm">
                    <span className="text-cyan-400/80">{item.icon}</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition-colors"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-800/40 p-6">
              <h3 className="text-slate-500 font-semibold mb-4 text-sm tracking-widest uppercase">
                Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { icon: <Guitar size={15} />, label: "Guitar" },
                  { icon: <Swords size={15} />, label: "Badminton" },
                  { icon: <span className="text-xs font-bold">SF</span>, label: "Sci-Fi & Fantasy" },
                ].map((item) => (
                  <span
                    key={item.label}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-700/60 text-slate-300 text-sm border border-slate-700/80"
                  >
                    <span className="text-cyan-400">{item.icon}</span>
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="w-8 h-px bg-cyan-400" />
      <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">{label}</span>
    </div>
  );
}
