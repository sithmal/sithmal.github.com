import { Mail, Phone, Linkedin, Github, Gitlab as GitlabIcon, Globe, MapPin, Send } from "lucide-react";
import { personal } from "../data/portfolio";
import { SectionLabel } from "./About";

const links = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: <Phone size={18} />,
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone}`,
  },
  {
    icon: <Globe size={18} />,
    label: "Website",
    value: "www.sithmal.info",
    href: personal.website,
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/sithmal-k-61281147/",
    href: personal.linkedin,
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    value: "github.com/sithmal",
    href: personal.github,
  },
  {
    icon: <GitlabIcon size={18} />,
    label: "GitLab",
    value: "gitlab.com/sithmal",
    href: personal.gitlab,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel label="Contact" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Let's <span className="text-cyan-400">Connect</span>
        </h2>
        <p className="text-slate-400 mb-14 text-base max-w-xl">
          Whether it's a new opportunity, a collaboration, or just a chat about cloud-native
          infrastructure — I'm always happy to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-4 hover:border-cyan-400/30 hover:bg-slate-900 transition-all duration-200 group"
              >
                <span className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400/10 group-hover:border-cyan-400/30 transition-colors flex-shrink-0">
                  {link.icon}
                </span>
                <div>
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-0.5">
                    {link.label}
                  </p>
                  <p className="text-slate-200 text-sm group-hover:text-cyan-400 transition-colors">
                    {link.value}
                  </p>
                </div>
                <Send
                  size={14}
                  className="ml-auto text-slate-700 group-hover:text-cyan-400/60 transition-colors"
                />
              </a>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 flex flex-col justify-center items-start">
            <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-5">
              <MapPin size={22} className="text-cyan-400" />
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Based in Espoo, Finland</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Open to opportunities across Finland and remote roles globally. Experienced in
              working across time zones with distributed, international teams.
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5"
            >
              <Mail size={15} />
              Send an Email
            </a>
          </div>
        </div>
      </div>

      <div className="mt-20 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} Sithmal Kariyawasam. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
}
