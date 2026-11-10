import SectionHeading from './SectionHeading'
import { Compass, Headphones, Terminal } from 'lucide-react'

const points = [
  { icon: Headphones, title: 'Real-world support', text: 'Hands-on experience supporting users, troubleshooting devices, and helping technology work reliably.' },
  { icon: Terminal, title: 'Engineering mindset', text: 'Computer engineering coursework and a growing foundation in programming, systems, and software development.' },
  { icon: Compass, title: 'Creative direction', text: 'A long-term interest in gameplay programming and interactive experiences, alongside general software engineering.' },
]
export default function About() {
  return <section id="about" className="section-anchor section-wrap py-28">
    <SectionHeading eyebrow="01 / ABOUT ME" title="Technical support roots. Developer mindset." description="I enjoy understanding how systems work, solving problems, and turning ideas into practical experiences. My background combines professional IT support with ongoing software and game development learning."/>
    <div className="grid gap-4 md:grid-cols-3">{points.map(({icon: Icon, title, text}) => <article key={title} className="glass card-hover rounded-2xl p-6"><Icon className="mb-5 text-violet-300" size={24}/><h3 className="mb-3 font-bold">{title}</h3><p className="text-sm leading-7 text-slate-400">{text}</p></article>)}</div>
  </section>
}