import SectionHeading from './SectionHeading'
import { skillGroups } from '../data'
export default function Skills() {
  return <section id="skills" className="section-anchor border-y border-white/[.06] bg-white/[.015] py-28">
    <div className="section-wrap"><SectionHeading eyebrow="02 / TOOLKIT" title="Tools I work with" description="A snapshot of my current technical foundation. Skills marked as learning or fundamentals are intentionally represented as such."/>
      <div className="grid gap-5 md:grid-cols-3">{skillGroups.map(group => <div key={group.title} className="glass rounded-2xl p-6"><h3 className="mb-5 text-sm font-bold text-white">{group.title}</h3><div className="flex flex-wrap gap-2">{group.items.map(item => <span key={item} className="rounded-lg border border-white/[.08] bg-white/[.035] px-3 py-2 text-xs text-slate-300">{item}</span>)}</div></div>)}</div>
    </div>
  </section>
}