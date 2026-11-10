import SectionHeading from './SectionHeading'
import { projects } from '../data'
import { ArrowUpRight, Github, MessageSquare, Gamepad2, Utensils } from 'lucide-react'
const icons = { menu: Utensils, chat: MessageSquare, game: Gamepad2 }
export default function Projects() {
  return <section id="projects" className="section-anchor section-wrap py-28">
    <SectionHeading eyebrow="03 / SELECTED WORK" title="Projects in progress and in production" description="A selection of projects that demonstrate what I'm building and what I'm learning. Each project is an opportunity to sharpen my engineering skills."/>
    <div className="grid gap-5 lg:grid-cols-3">{projects.map(project => { const Icon = icons[project.icon]; return <article key={project.number} className="glass card-hover flex flex-col rounded-2xl p-6">
      <div className="mb-8 flex items-center justify-between"><span className="mono text-xs text-violet-300">{project.number} / PROJECT</span><span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-slate-400">{project.status}</span></div>
      <div className="mb-6 grid h-36 place-items-center overflow-hidden rounded-xl border border-white/[.06] bg-gradient-to-br from-violet-500/15 via-[#171a28] to-cyan-400/10"><Icon size={48} strokeWidth={1.2} className="text-violet-200"/></div>
      <p className="mono text-[10px] tracking-[.16em] text-cyan-200">{project.type}</p><h3 className="mt-2 text-xl font-extrabold">{project.name}</h3><p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">{project.stack.map(s => <span key={s} className="rounded-md bg-white/[.05] px-2 py-1 text-[10px] text-slate-400">{s}</span>)}</div>
      <div className="mt-6 flex gap-4 border-t border-white/[.08] pt-5 text-sm">{project.github && <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-300 hover:text-white"><Github size={15}/> Source <ArrowUpRight size={13}/></a>}{project.live && <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-violet-200 hover:text-white">Live demo <ArrowUpRight size={13}/></a>}</div>
    </article>})}</div>
    <p className="mt-5 text-xs text-slate-500">Replace placeholder repository links for EchoChat and Unreal Engine projects when those repositories are ready.</p>
  </section>
}