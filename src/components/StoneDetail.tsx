import { useEffect } from 'react'
import StoneImage from './StoneImage'
import { useLang } from '../i18n'
import {
  INTENTIONS,
  PRICE_TIERS,
  chakraName,
  chakraColor,
  elementPair,
  formName,
  sourceDomain,
  ZODIAC_ZH,
  PLANET_ZH,
  type Stone,
} from '../lib/taxonomy'

interface Props {
  stone: Stone
  onClose: () => void
}

export default function StoneDetail({ stone, onClose }: Props) {
  const { lang, tr } = useLang()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const s = stone
  const pick = (en: string, zh: string) => (lang === 'zh' ? zh : en)

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6" role="dialog" aria-modal="true">
      <div className="modal-backdrop absolute inset-0 bg-ink-950/85 backdrop-blur-sm" onClick={onClose} />

      <div className="modal-panel relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-t-3xl border border-white/10 bg-ink-900 sm:rounded-3xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink-950/60 text-white/70 backdrop-blur transition-colors hover:bg-ink-950/90 hover:text-gold-300"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="grid overflow-y-auto md:grid-cols-5">
          {/* image column */}
          <div className="relative md:col-span-2">
            <StoneImage stone={s} className="aspect-[4/3] w-full md:sticky md:top-0 md:aspect-auto md:h-full md:min-h-[560px]" />
          </div>

          {/* content column */}
          <div className="p-7 sm:p-9 md:col-span-3">
            <p className="text-[10px] uppercase tracking-widest2 text-amethyst-400">{s.family}</p>
            <h3 className="mt-2 font-serif text-4xl font-medium text-parchment">
              {pick(s.name_en, s.name_zh)}
            </h3>
            <p className="mt-1 font-serif text-xl italic text-white/40">{pick(s.name_zh, s.name_en)}</p>

            {s.nicknames.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {s.nicknames.map((n) => (
                  <span key={n} className="rounded-full border border-gold-400/30 bg-gold-400/10 px-3 py-1 text-xs italic text-gold-300">
                    “{n}”
                  </span>
                ))}
              </div>
            )}

            {/* meta grid */}
            <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
              <Meta label={tr({ en: 'Intentions', zh: '意图' })}>
                {s.categories.intentions.map((iid) => (
                  <div key={iid} className="text-sm text-white/75">
                    {tr(INTENTIONS.find((i) => i.id === iid)?.name ?? { en: iid, zh: iid })}
                  </div>
                ))}
              </Meta>
              <Meta label={tr({ en: 'Chakra', zh: '脉轮' })}>
                {(s.categories.chakra ?? []).map((c) => (
                  <div key={c} className="flex items-center gap-1.5 text-sm text-white/75">
                    <span className="h-2 w-2 rounded-full" style={{ background: chakraColor(c) }} />
                    {tr(chakraName(c))}
                  </div>
                ))}
              </Meta>
              <Meta label={tr({ en: 'Zodiac', zh: '星座' })}>
                {(s.categories.zodiac ?? []).map((z) => (
                  <div key={z} className="text-sm text-white/75">
                    {lang === 'zh' ? ZODIAC_ZH[z] ?? z : z}
                  </div>
                ))}
              </Meta>
              {s.categories.element && (
                <Meta label={tr({ en: 'Element', zh: '元素' })}>
                  <div className="text-sm text-white/75">{tr(elementPair(s.categories.element))}</div>
                </Meta>
              )}
              {s.categories.planet && (
                <Meta label={tr({ en: 'Planet', zh: '行星' })}>
                  <div className="text-sm text-white/75">
                    {lang === 'zh' ? PLANET_ZH[s.categories.planet] ?? s.categories.planet : s.categories.planet}
                  </div>
                </Meta>
              )}
              <Meta label={tr({ en: 'Forms', zh: '常见形态' })}>
                <div className="text-sm text-white/75">
                  {s.forms.map((f) => tr(formName(f))).join(lang === 'zh' ? '、' : ', ')}
                </div>
              </Meta>
            </div>

            <div className="rule-gold my-8" />

            <Section title={tr({ en: 'The Story', zh: '石头的故事' })} text={pick(s.lore_en, s.lore_zh)} serif />
            <Section title={tr({ en: 'In the Crystal Tradition', zh: '水晶疗愈传统中的说法' })} text={pick(s.metaphysical_en, s.metaphysical_zh)} />
            <Section title={tr({ en: 'How It\u2019s Used', zh: '日常使用方式' })} text={pick(s.uses_en, s.uses_zh)} />
            <Section title={tr({ en: 'The Gift Angle', zh: '送礼角度' })} text={pick(s.gift_angle_en, s.gift_angle_zh)} accent="gold" />
            <Section title={tr({ en: 'Content & Virality', zh: '内容与传播' })} text={pick(s.viral_hook_en, s.viral_hook_zh)} accent="emerald" />

            {/* price */}
            {(s.price_tier || s.typical_cost_usd) && (
              <div className="mt-8 rounded-2xl border border-white/10 bg-ink-800/60 p-5">
                <p className="text-[10px] uppercase tracking-widest2 text-white/35">
                  {tr({ en: 'Sourcing notes', zh: '采购参考' })}
                </p>
                <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  {s.price_tier && (
                    <span className="font-serif text-lg text-gold-300">
                      {tr(PRICE_TIERS[s.price_tier] ?? { en: s.price_tier, zh: s.price_tier })}
                    </span>
                  )}
                  {s.typical_cost_usd && (
                    <span className="text-sm text-white/60">
                      {tr({ en: 'Typical cost', zh: '典型成本' })}: {s.typical_cost_usd}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* sources */}
            {s.sources.length > 0 && (
              <div className="mt-8">
                <p className="text-[10px] uppercase tracking-widest2 text-white/35">
                  {tr({ en: 'Sources', zh: '资料来源' })}
                </p>
                <ol className="mt-3 space-y-1.5">
                  {s.sources.map((src, i) => (
                    <li key={src} className="text-xs text-white/45">
                      <span className="mr-2 text-gold-400/70">{String(i + 1).padStart(2, '0')}</span>
                      <a href={src} target="_blank" rel="noreferrer" className="underline-offset-4 hover:text-gold-300 hover:underline">
                        {sourceDomain(src)}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function Meta({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-1.5 text-[10px] uppercase tracking-widest2 text-white/35">{label}</p>
      {children}
    </div>
  )
}

function Section({ title, text, serif, accent }: { title: string; text: string; serif?: boolean; accent?: 'gold' | 'emerald' }) {
  const bar = accent === 'gold' ? 'bg-gold-400/70' : accent === 'emerald' ? 'bg-emerald-400/70' : 'bg-amethyst-400/70'
  return (
    <div className="mt-7">
      <div className="flex items-center gap-3">
        <span className={`h-4 w-0.5 rounded ${bar}`} />
        <h4 className="text-xs uppercase tracking-widest2 text-white/50">{title}</h4>
      </div>
      <p className={`mt-3 leading-relaxed text-white/70 ${serif ? 'font-serif text-lg' : 'text-sm'}`}>{text}</p>
    </div>
  )
}
