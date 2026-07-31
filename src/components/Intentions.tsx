import Reveal from './Reveal'
import { useLang } from '../i18n'
import { INTENTIONS, stonesByIntention, type Stone } from '../lib/taxonomy'

interface Props {
  onSelect: (stone: Stone) => void
}

export default function Intentions({ onSelect }: Props) {
  const { lang, tr } = useLang()

  return (
    <section id="intentions" className="relative bg-ink-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-[11px] uppercase tracking-widest2 text-amethyst-400">
            {tr({ en: 'Chapter II', zh: '第二章' })}
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium text-parchment sm:text-5xl">
            {tr({ en: 'The Seven Intentions', zh: '七大意图' })}
          </h2>
          <p className="mt-4 max-w-2xl text-white/50">
            {tr({
              en: 'In the US crystal market, people rarely shop by mineral — they shop by feeling. These seven intention buckets are the emotional taxonomy of the catalog, and the way shelves, bundles and content are organized.',
              zh: '在美国水晶市场，人们很少按矿物学购物——他们按"感受"购物。这七大意图品类是整个产品目录的情感分类学，也是货架、套装与内容的组织方式。',
            })}
          </p>
        </Reveal>

        <div className="mt-16 space-y-8">
          {INTENTIONS.map((intent, idx) => {
            const list = stonesByIntention(intent.id)
            return (
              <Reveal key={intent.id} delay={80}>
                <article className="grid gap-6 rounded-3xl border border-white/10 bg-ink-900/70 p-7 sm:p-10 lg:grid-cols-12 lg:gap-10">
                  <div className="lg:col-span-1">
                    <span className="font-serif text-5xl font-light text-amethyst-500/60">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="lg:col-span-5">
                    <h3 className="font-serif text-3xl font-medium text-parchment">{tr(intent.name)}</h3>
                    <p className="mt-1 text-sm italic text-gold-400/90">{tr(intent.tagline)}</p>
                    <p className="mt-4 text-sm leading-relaxed text-white/55">{tr(intent.description)}</p>
                  </div>
                  <div className="lg:col-span-6">
                    <p className="mb-3 text-[10px] uppercase tracking-widest2 text-white/35">
                      {tr({ en: `${list.length} stones`, zh: `${list.length} 种石头` })}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {list.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => onSelect(s)}
                          className="chip rounded-full border border-white/10 px-3.5 py-1.5 text-xs text-white/65 hover:border-amethyst-400/60 hover:bg-amethyst-600/20 hover:text-white"
                        >
                          {lang === 'zh' ? s.name_zh : s.name_en}
                        </button>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
