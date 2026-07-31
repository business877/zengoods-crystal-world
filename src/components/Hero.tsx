import Reveal from './Reveal'
import { useLang } from '../i18n'
import { stones, INTENTIONS, FORM_CATEGORIES } from '../lib/taxonomy'

export default function Hero() {
  const { tr } = useLang()

  const stats = [
    { n: String(stones.length), label: tr({ en: 'Stones in the library', zh: '馆藏石头' }) },
    { n: String(INTENTIONS.length), label: tr({ en: 'Intention categories', zh: '意图品类' }) },
    { n: String(FORM_CATEGORIES.length), label: tr({ en: 'Product forms', zh: '产品形态' }) },
    { n: '49', label: tr({ en: 'Stone portraits', zh: '石头影像' }) },
  ]

  return (
    <section id="top" className="hero-glow relative flex min-h-screen flex-col justify-center overflow-hidden bg-ink-950">
      {/* faint serif watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="float-slow select-none font-serif text-[26vw] font-semibold leading-none text-white/[0.025]">
          ✦
        </span>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-36 lg:px-10">
        <Reveal>
          <p className="mb-6 text-[11px] uppercase tracking-widest2 text-gold-400">
            {tr({ en: 'zengoods · internal showcase', zh: 'zengoods · 内部展馆' })}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="max-w-4xl font-serif text-5xl font-medium leading-[1.08] text-parchment sm:text-6xl lg:text-7xl">
            {tr({ en: 'Every stone carries a story', zh: '每一颗石头，' })}
            <br />
            <span className="shimmer-text italic">
              {tr({ en: 'millions of years in the making.', zh: '都藏着跨越数百万年的故事。' })}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={260}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
            {tr({
              en: 'A curated atlas of the zengoods crystal universe — forty-nine stones, their lore and traditions, the intentions they serve, and the forms they take on their way from the earth to the shelf.',
              zh: '一册精心编排的 zengoods 水晶宇宙图鉴——四十九种石头，它们的传说与传统，所承载的意图，以及从大地到货架之间所呈现的种种形态。',
            })}
          </p>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-14 grid max-w-3xl grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="border-l border-white/10 pl-4">
                <div className="font-serif text-4xl font-medium text-gold-300">{s.n}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/40">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={560}>
          <div className="mt-16 flex items-center gap-4">
            <a
              href="#library"
              className="rounded-full bg-amethyst-600 px-7 py-3 text-sm tracking-wide text-white transition-all hover:bg-amethyst-500 hover:shadow-lg hover:shadow-amethyst-600/30"
            >
              {tr({ en: 'Enter the Library', zh: '进入水晶图书馆' })}
            </a>
            <a
              href="#forms"
              className="rounded-full border border-white/20 px-7 py-3 text-sm tracking-wide text-white/70 transition-all hover:border-gold-400/60 hover:text-gold-300"
            >
              {tr({ en: 'Browse the Forms', zh: '浏览产品形态' })}
            </a>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest2">
            {tr({ en: 'scroll', zh: '下滑' })}
          </span>
          <span className="float-slow text-lg">↓</span>
        </div>
      </div>
    </section>
  )
}
