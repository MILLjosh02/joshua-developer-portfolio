import { ArrowUp } from 'lucide-react'
export default function Footer() {
  return <footer className="border-t border-white/[.07] py-7"><div className="section-wrap flex flex-col items-center justify-between gap-4 text-xs text-slate-500 sm:flex-row"><p>© {new Date().getFullYear()} Joshua Millonado. Built with React & Tailwind CSS.</p><a href="#home" className="inline-flex items-center gap-2 hover:text-white">Back to top <ArrowUp size={13}/></a></div></footer>
}