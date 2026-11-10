import SectionHeading from './SectionHeading'
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
export default function Contact() {
  return <section id="contact" className="section-anchor section-wrap py-28">
    <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12"><div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-violet-500/15 blur-[90px]"/>
      <div className="relative max-w-2xl"><SectionHeading eyebrow="05 / CONTACT" title="Let's build something meaningful." description="Interested in connecting about software development, gameplay programming, IT opportunities, or a collaborative project? I'd be glad to hear from you."/>
        <div className="flex flex-wrap gap-3"><a href="mailto:your.email@example.com" className="inline-flex items-center gap-2 rounded-full bg-violet-300 px-5 py-3 text-sm font-bold text-[#11101b] hover:bg-violet-200"><Mail size={16}/> Email me <ArrowUpRight size={15}/></a><a href="https://github.com/MILLjosh02" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white hover:bg-white/[.06]"><Github size={16}/> GitHub</a><a href="https://www.linkedin.com/in/josh-millonado/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white hover:bg-white/[.06]"><Linkedin size={16}/> LinkedIn</a></div>
        <p className="mt-5 text-xs text-amber-200/80">Before publishing: replace your.email@example.com with your preferred contact email.</p>
      </div>
    </div>
  </section>
}