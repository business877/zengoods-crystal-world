import { useEffect, useState } from 'react'
import { useLang } from '../i18n'

export default function Nav() {
  const { lang, setLang, tr } = useLang()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#library', label: tr({ en: 'The Library', zh: '水晶图书馆' }) },
    { href: '#intentions', label: tr({ en: 'Intentions', zh: '意图品类' }) },
    { href: '#forms', label: tr({ en: 'Forms & Sourcing', zh: '形态与货源' }) },
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-ink-950/85 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="group flex items-baseline gap-3">
          <span className="font-serif text-2xl font-semibold tracking-wide text-parchment">
            zengoods
          </span>
          <span className="hidden text-[11px] uppercase tracking-widest2 text-gold-400/80 sm:inline">
            {tr({ en: 'The Crystal World', zh: '水晶世界' })}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/60 transition-colors hover:text-gold-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
          className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs tracking-wider text-white/80 transition-all hover:border-gold-400/60 hover:text-gold-300"
          aria-label="Toggle language"
        >
          <span className={lang === 'en' ? 'text-gold-300' : 'text-white/40'}>EN</span>
          <span className="text-white/25">·</span>
          <span className={lang === 'zh' ? 'text-gold-300' : 'text-white/40'}>中文</span>
        </button>
      </div>
    </header>
  )
}
