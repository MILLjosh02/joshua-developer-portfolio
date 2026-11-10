import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Code2, Gamepad2 } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="section-anchor relative flex min-h-[760px] items-center overflow-hidden pt-28">
      <div className="grid-glow pointer-events-none absolute inset-0 opacity-70"/>
      <div className="pointer-events-none absolute -right-32 top-24 h-[440px] w-[440px] rounded-full bg-violet-600/15 blur-[120px]"/>
      <div className="section-wrap relative grid items-center gap-14 py-20 lg:grid-cols-[1.25fr_.75fr]">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[.06] px-3 py-2 text-xs text-emerald-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300"/> IT Support · Software Development · Game Development
          </div>
          <p className="mono mb-4 text-sm tracking-[.2em] text-violet-300">HELLO, I'M JOSHUA MILLONADO</p>
          <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.08] tracking-[-.05em] sm:text-6xl lg:text-7xl">Building at the intersection of <span className="gradient-text">technology</span> and creativity.</h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">IT support professional and aspiring software developer focused on building useful applications, exploring gameplay systems, and solving technical problems.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-violet-300 px-6 py-3 text-sm font-bold text-[#11101b] transition hover:bg-violet-200">Explore my work <ArrowUpRight size={17}/></a>
            <a href="#contact" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[.06]">Get in touch</a>
          </div>
          <div className="mt-10 flex items-center gap-5 text-slate-500">
            <a aria-label="GitHub" href="https://github.com/MILLjosh02" target="_blank" rel="noreferrer" className="hover:text-white"><Github size={19}/></a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/josh-millonado/" target="_blank" rel="noreferrer" className="hover:text-white"><Linkedin size={19}/></a>
            <span className="h-5 w-px bg-white/15"/><span className="mono text-xs">LOS ANGELES, CA</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }} className="relative mx-auto w-full max-w-[390px]">
          <div className="absolute -inset-5 rounded-[36px] bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-400/10 blur-2xl"/>
          <div className="glass relative overflow-hidden rounded-[28px] p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-5"><span className="mono text-xs text-slate-400">DEVELOPER_PROFILE.exe</span><span className="flex gap-1.5"><i className="h-2 w-2 rounded-full bg-rose-400"/><i className="h-2 w-2 rounded-full bg-amber-300"/><i className="h-2 w-2 rounded-full bg-emerald-300"/></span></div>
            <div className="py-9 text-center">
              <div className="mx-auto mb-5 grid h-28 w-28 place-items-center rounded-[30px] border border-violet-300/25 bg-gradient-to-br from-violet-400/20 to-cyan-300/10"><Code2 size={48} strokeWidth={1.2} className="text-violet-200"/></div>
              <h2 className="text-2xl font-extrabold">Curious by design.</h2><p className="mt-2 text-sm text-slate-400">Problem solver · Builder · Lifelong learner</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/[.04] p-4"><Gamepad2 className="mb-3 text-violet-300" size={20}/><p className="text-sm font-bold">Gameplay</p><p className="mt-1 text-xs text-slate-500">Programming focus</p></div>
              <div className="rounded-2xl bg-white/[.04] p-4"><Code2 className="mb-3 text-cyan-300" size={20}/><p className="text-sm font-bold">Software</p><p className="mt-1 text-xs text-slate-500">Building projects</p></div>
            </div>
            <p className="mono mt-5 text-[10px] tracking-wider text-slate-600">STATUS: ALWAYS LEARNING_</p>
          </div>
        </motion.div>
      </div>
      <a href="#about" aria-label="Scroll to about" className="absolute bottom-7 left-1/2 -translate-x-1/2 text-slate-500 transition hover:text-white"><ArrowDown size={20}/></a>
    </section>
  )
}