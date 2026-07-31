import { useMemo, useState } from 'react'
import Reveal from './Reveal'
import StoneImage from './StoneImage'
import { useLang } from '../i18n'
import {
  stones,
  INTENTIONS,
  FAMILY_GROUPS,
  familyGroup,
  CHAKRAS,
  FORM_NAMES,
  formName,
  type Stone,
  type FamilyGroupId,
} from '../lib/taxonomy'

interface Props {
  onSelect: (stone: Stone) => void
}

export default function Library({ onSelect }: Props) {
  const { lang, tr } = useLang()
  const [query, setQuery] = useState('')
  const [intention, setIntention] = useState<string | null>(null)
  const [family, setFamily] = useState<FamilyGroupId | null>(null)
  const [form, setForm] = useState<string | null>(null)
  const [chakra, setChakra] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return stones.filter((s) => {
      if (intention && !s.categories.intentions.includes(intention)) return false
      if (family && familyGroup(s.family) !== family) return false
      if (form && !s.forms.includes(form)) return false
      if (chakra && !(s.categories.chakra ?? []).includes(chakra)) return false
      if (q) {
        const hay = [s.name_en, s.name_zh, s.id, ...s.nicknames].join(' ').toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
  }, [query, intention, family, form, chakra])

  const hasFilter = intention || family || form || chakra || query.trim()

  const clearAll = () => {
    setQuery('')
    setIntention(null)
    setFamily(null)
    setForm(null)
    setChakra(null)
  }

  const chipCls = (active: boolean) =>
    `chip cursor-pointer rounded-full border px-3.5 py-1.5 text-xs tracking-wide ${
      active
        ? 'border-amethyst-400 bg-amethyst-600/80 text-white'
        : 'border-white/10 text-white/55 hover:border-amethyst-400/60 hover:text-white/85'
    }`

  return (
    <section id="library" className="relative bg-ink-900 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-[11px] uppercase tracking-widest2 text-amethyst-400">
            {tr({ en: 'Chapter I', zh: '第一章' })}
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium text-parchment sm:text-5xl">
            {tr({ en: 'The Crystal Library', zh: '水晶图书馆' })}
          </h2>
          <p className="mt-4 max-w-2xl text-white/50">
            {tr({
              en: 'Forty-nine stones, each with its own geology, lore and place in the collection. Filter by intention, family, form or chakra — or simply wander.',
              zh: '四十九种石头，各有自己的地质出身、传说与在馆藏中的位置。按意图、家族、形态或脉轮筛选——或者，随意漫游。',
            })}
          </p>
        </Reveal>

        {/* search */}
        <Reveal delay={100}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={tr({ en: 'Search a stone, nickname, or 中文名…', zh: '搜索石头、别名或英文名…' })}
                className="w-full rounded-full border border-white/10 bg-ink-800/70 px-5 py-3 text-sm text-parchment placeholder-white/30 outline-none transition-all focus:border-amethyst-400/70 focus:bg-ink-800"
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-white/30">⌕</span>
            </div>
            <div className="text-sm text-white/40">
              {tr({ en: `${filtered.length} of ${stones.length} stones`, zh: `${filtered.length} / ${stones.length} 种` })}
            </div>
            {hasFilter && (
              <button onClick={clearAll} className="text-sm text-gold-400 underline-offset-4 hover:underline">
                {tr({ en: 'Clear all', zh: '清除筛选' })}
              </button>
            )}
          </div>
        </Reveal>

        {/* filters */}
        <Reveal delay={160}>
          <div className="mt-8 space-y-5">
            <FilterRow label={tr({ en: 'Intention', zh: '意图' })}>
              {INTENTIONS.map((i) => (
                <button key={i.id} className={chipCls(intention === i.id)} onClick={() => setIntention(intention === i.id ? null : i.id)}>
                  {tr(i.name)}
                </button>
              ))}
            </FilterRow>
            <FilterRow label={tr({ en: 'Family', zh: '矿物家族' })}>
              {FAMILY_GROUPS.map((g) => (
                <button key={g.id} className={chipCls(family === g.id)} onClick={() => setFamily(family === g.id ? null : g.id)}>
                  {tr(g.name)}
                </button>
              ))}
            </FilterRow>
            <FilterRow label={tr({ en: 'Form', zh: '形态' })}>
              {Object.keys(FORM_NAMES).map((f) => (
                <button key={f} className={chipCls(form === f)} onClick={() => setForm(form === f ? null : f)}>
                  {tr(formName(f))}
                </button>
              ))}
            </FilterRow>
            <FilterRow label={tr({ en: 'Chakra', zh: '脉轮' })}>
              {CHAKRAS.map((c) => (
                <button key={c.id} className={chipCls(chakra === c.id)} onClick={() => setChakra(chakra === c.id ? null : c.id)}>
                  <span className="mr-1.5 inline-block h-2 w-2 rounded-full align-middle" style={{ background: c.color }} />
                  {tr(c.name)}
                </button>
              ))}
            </FilterRow>
          </div>
        </Reveal>

        {/* grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((s, idx) => (
            <Reveal key={s.id} delay={(idx % 8) * 60}>
              <button
                onClick={() => onSelect(s)}
                className="stone-card group block w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-800/60 text-left hover:border-amethyst-400/40 hover:shadow-xl hover:shadow-amethyst-600/10"
              >
                <StoneImage stone={s} className="aspect-[4/3] w-full" />
                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-xl font-medium text-parchment group-hover:text-gold-300">
                      {lang === 'zh' ? s.name_zh : s.name_en}
                    </h3>
                    <span className="shrink-0 text-xs text-white/35">
                      {lang === 'zh' ? s.name_en : s.name_zh}
                    </span>
                  </div>
                  {s.nicknames[0] && (
                    <p className="mt-1 truncate text-xs italic text-amethyst-300/80">
                      “{s.nicknames[0]}”
                    </p>
                  )}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {s.categories.intentions.map((iid) => {
                      const meta = INTENTIONS.find((i) => i.id === iid)
                      return (
                        <span key={iid} className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] tracking-wide text-white/55">
                          {meta ? tr(meta.name) : iid}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-16 text-center text-white/40">
            <p className="font-serif text-2xl italic">
              {tr({ en: 'No stones match — the earth is still forming them.', zh: '没有匹配的石头——大地还在孕育它们。' })}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-2 w-20 shrink-0 text-[10px] uppercase tracking-widest2 text-white/35">{label}</span>
      {children}
    </div>
  )
}
