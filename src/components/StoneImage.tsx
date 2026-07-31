import { useState } from 'react'
import type { Stone } from '../lib/taxonomy'
import { stoneImageMap } from '../lib/taxonomy'

/* deterministic gem-toned gradient per stone */
const PALETTES: [string, string][] = [
  ['#3a2f5c', '#8f63c4'],
  ['#173a34', '#4d9d7d'],
  ['#3d2b1f', '#b99a52'],
  ['#1d2a44', '#5b8fd6'],
  ['#40202c', '#c96f8e'],
  ['#233026', '#7ba05b'],
]

function paletteFor(id: string): [string, string] {
  let h = 0
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0
  return PALETTES[h % PALETTES.length]
}

interface Props {
  stone: Stone
  className?: string
  imgClassName?: string
}

export default function StoneImage({ stone, className = '', imgClassName = '' }: Props) {
  const src = stoneImageMap[stone.id]
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    const [c1, c2] = paletteFor(stone.id)
    return (
      <div
        className={`flex items-center justify-center ${className}`}
        style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
        aria-label={stone.name_en}
      >
        <span className="font-serif text-6xl font-medium text-white/70 select-none">
          {stone.name_en.charAt(0)}
        </span>
      </div>
    )
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={stone.name_en}
        loading="lazy"
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  )
}
