import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'en' | 'zh'
export interface Pair {
  en: string
  zh: string
}

interface LangCtx {
  lang: Lang
  setLang: (l: Lang) => void
  tr: (p: Pair) => string
}

const Ctx = createContext<LangCtx>({ lang: 'en', setLang: () => {}, tr: (p) => p.en })
const STORAGE_KEY = 'zengoods-lang'

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY)
      return v === 'zh' ? 'zh' : 'en'
    } catch {
      return 'en'
    }
  })

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* ignore */
    }
  }

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
  }, [lang])

  const tr = (p: Pair) => (lang === 'zh' ? p.zh : p.en)
  return <Ctx.Provider value={{ lang, setLang, tr }}>{children}</Ctx.Provider>
}

export function useLang() {
  return useContext(Ctx)
}
