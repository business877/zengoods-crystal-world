import { useLang } from '../i18n'

const DISCLAIMER_EN =
  'The metaphysical properties described are based on traditional beliefs and the crystal healing community. They are offered for educational and entertainment purposes only, are not evaluated by the FDA, and are not intended to diagnose, treat, cure, or prevent any disease. Crystals are not a substitute for professional medical advice — please consult a licensed healthcare provider for any health concerns. zengoods assumes no responsibility for use or misuse of this product.'

const DISCLAIMER_ZH =
  '文中所述玄学属性基于传统信仰与水晶疗愈社群的说法，仅供教育与娱乐目的，未经 FDA 评估，不可用于诊断、治疗、治愈或预防任何疾病。水晶不能替代专业医疗建议，任何健康问题请咨询持证医师。zengoods 对本产品的使用或误用不承担任何责任。'

export default function Footer() {
  const { tr } = useLang()

  return (
    <footer className="border-t border-white/10 bg-ink-950 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-serif text-3xl font-semibold text-parchment">zengoods</p>
            <p className="mt-1 text-[11px] uppercase tracking-widest2 text-gold-400/80">
              {tr({ en: 'The Crystal World', zh: '水晶世界' })}
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/40">
              {tr({
                en: 'An internal showcase of the crystal universe — taxonomy, stone stories and product forms. For team browsing and content reference only; not a customer-facing storefront.',
                zh: '一座内部水晶宇宙展馆——分类体系、石头故事与产品形态。仅供团队浏览与内容参考，并非面向顾客的商店。',
              })}
            </p>
          </div>

          <div className="lg:col-span-8">
            <p className="text-[10px] uppercase tracking-widest2 text-white/35">
              {tr({ en: 'Disclaimer', zh: '免责声明' })}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-white/40">{DISCLAIMER_EN}</p>
            <p className="mt-3 text-xs leading-relaxed text-white/40">{DISCLAIMER_ZH}</p>

            <div className="rule-gold my-8" />

            <div className="flex flex-col gap-3 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
              <p>
                {tr({
                  en: 'Stone portraits: Wikimedia Commons contributors (CC licenses) and supplier photography — see 04-images/SOURCES.md for full credits.',
                  zh: '石头影像：Wikimedia Commons 贡献者（CC 许可）与供应商摄影——完整署名见 04-images/SOURCES.md。',
                })}
              </p>
              <p>© {new Date().getFullYear()} zengoods · {tr({ en: 'Internal use only', zh: '仅限内部使用' })}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
