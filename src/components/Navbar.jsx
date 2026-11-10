import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Experience', '#experience'], ['Contact', '#contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[.07] bg-[#090b12]/80 backdrop-blur-xl">
      <nav className="section-wrap flex h-[76px] items-center justify-between">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-violet-300/30 bg-violet-400/10 text-sm font-extrabold text-violet-200">JM</span>
          <span className="text-sm font-bold tracking-wide">JOSHUA<span className="text-violet-300">.DEV</span></span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => <a key={label} href={href} className="text-sm text-slate-400 transition hover:text-white">{label}</a>)}
          <a href="#contact" className="flex items-center gap-2 rounded-full border border-violet-300/30 px-4 py-2 text-sm text-violet-200 transition hover:bg-violet-300/10">Let's talk <ArrowUpRight size={15}/></a>
        </div>
        <button className="text-slate-200 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
      </nav>
      {open && <div className="glass border-x-0 border-b-0 px-6 py-5 md:hidden">{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)} className="block py-3 text-sm text-slate-300">{label}</a>)}</div>}
    </header>
  )
}