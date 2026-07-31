import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Library from './components/Library'
import Intentions from './components/Intentions'
import FormsGallery from './components/FormsGallery'
import Footer from './components/Footer'
import StoneDetail from './components/StoneDetail'
import type { Stone } from './lib/taxonomy'

export default function App() {
  const [selected, setSelected] = useState<Stone | null>(null)

  return (
    <div className="min-h-screen bg-ink-950">
      <Nav />
      <main>
        <Hero />
        <Library onSelect={setSelected} />
        <Intentions onSelect={setSelected} />
        <FormsGallery />
      </main>
      <Footer />
      {selected && <StoneDetail stone={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
