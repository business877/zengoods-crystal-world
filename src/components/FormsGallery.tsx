import Reveal from './Reveal'
import { useLang } from '../i18n'
import { FORM_CATEGORIES } from '../lib/taxonomy'

export default function FormsGallery() {
  const { tr } = useLang()

  return (
    <section id="forms" className="relative bg-ink-900 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-[11px] uppercase tracking-widest2 text-amethyst-400">
            {tr({ en: 'Chapter III', zh: '第三章' })}
          </p>
          <h2 className="mt-3 font-serif text-4xl font-medium text-parchment sm:text-5xl">
            {tr({ en: 'Forms & Sourcing', zh: '形态与货源' })}
          </h2>
          <p className="mt-4 max-w-2xl text-white/50">
            {tr({
              en: 'One stone, many bodies. The same rough becomes a pocket tumble, a polished tower, a wearable strand — each form with its own economics, audience and story. These are the ten forms of the zengoods line.',
              zh: '一种石头，万千形态。同一块原石可以变成口袋滚石、打磨晶柱、可穿戴的手串——每种形态都有自己的经济学、受众与故事。这就是 zengoods 产品线的十种形态。',
            })}
          </p>
        </Reveal>

        <div className="mt-16 space-y-20">
          {FORM_CATEGORIES.map((cat, idx) => {
            const flip = idx % 2 === 1
            return (
              <Reveal key={cat.id} delay={60}>
                <article className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14`}>
                  {/* images */}
                  <div className={`grid grid-cols-2 gap-4 ${flip ? 'lg:order-2' : ''}`}>
                    {cat.images.map((src, i) => (
                      <div
                        key={src}
                        className={`overflow-hidden rounded-2xl border border-white/10 ${i === 0 ? 'aspect-[3/4]' : 'aspect-[3/4] mt-8'}`}
                      >
                        <img
                          src={src}
                          alt={tr(cat.name)}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>

                  {/* copy */}
                  <div className={flip ? 'lg:order-1' : ''}>
                    <div className="flex items-baseline gap-4">
                      <span className="font-serif text-4xl font-light text-gold-400/70">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-serif text-3xl font-medium text-parchment">{tr(cat.name)}</h3>
                    </div>
                    <p className="mt-5 max-w-xl leading-relaxed text-white/60">{tr(cat.description)}</p>
                    <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span className="text-xs tracking-wide text-emerald-300">{tr(cat.priceFraming)}</span>
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
