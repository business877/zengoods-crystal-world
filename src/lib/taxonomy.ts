import type { Pair } from '../i18n'
import stonesRaw from '../data/stones.json'
import stoneImages from '../data/stone-images.json'

export interface Stone {
  id: string
  name_en: string
  name_zh: string
  family: string
  categories: {
    intentions: string[]
    chakra: string[] | null
    zodiac: string[] | null
    element: string | null
    planet: string | null
  }
  nicknames: string[]
  lore_en: string
  lore_zh: string
  metaphysical_en: string
  metaphysical_zh: string
  uses_en: string
  uses_zh: string
  viral_hook_en: string
  viral_hook_zh: string
  gift_angle_en: string
  gift_angle_zh: string
  forms: string[]
  price_tier: 'low' | 'mid' | 'high' | null
  typical_cost_usd: string | null
  image: string | null
  sources: string[]
}

export const stones = stonesRaw as Stone[]
export const stoneImageMap = stoneImages as Record<string, string>

/* ---------------- Intentions ---------------- */

export interface IntentionMeta {
  id: string // matches categories.intentions value
  name: Pair
  tagline: Pair
  description: Pair
}

export const INTENTIONS: IntentionMeta[] = [
  {
    id: 'Calm & Anxiety Relief',
    name: { en: 'Calm & Anxiety Relief', zh: '平静与舒缓' },
    tagline: { en: 'The exhale stones', zh: '让人松一口气的石头' },
    description: {
      en: 'The largest shelf in the shop and the easiest entry point for new collectors. These are the stones people reach for on overwhelmed days — soft colors, gentle lore, and a ritual of simply holding something cool and steady in the palm.',
      zh: '店里最大的一排货架，也是新玩家最容易入门的品类。这些是人们在不堪重负的日子里会伸手去拿的石头——柔和的色泽、温柔的传说，以及"掌心握着一点清凉与稳定"的仪式感。',
    },
  },
  {
    id: 'Intuition & Spiritual Growth',
    name: { en: 'Intuition & Spiritual Growth', zh: '直觉与灵性成长' },
    tagline: { en: 'The inward-looking shelf', zh: '向内看的一排' },
    description: {
      en: 'Third-eye and crown territory. This bucket carries the mystique of the catalog — meditation companions, tarot-table staples, and the stones most often name-checked by the spiritual creator community.',
      zh: '眉心轮与顶轮的领地。这个类目承载了整个产品目录的神秘感——冥想伴侣、塔罗桌上的常客，也是灵性创作者社群中最常被点名的石头。',
    },
  },
  {
    id: 'Sleep & Dreams',
    name: { en: 'Sleep & Dreams', zh: '睡眠与梦境' },
    tagline: { en: 'The nightstand ritual', zh: '床头柜仪式' },
    description: {
      en: 'A small but deeply loyal niche: stones for the nightstand, the under-pillow ritual, and dream journaling. Gift-friendly and story-rich — the "I bought this for my sleepless friend" angle writes itself.',
      zh: '一个规模不大但忠诚度极高的细分：放在床头柜、枕头下、搭配梦境日记的石头。非常适合送礼场景、故事性极强——"买给睡不好的朋友"这个角度天然成立。',
    },
  },
  {
    id: 'Energy & Confidence',
    name: { en: 'Energy & Confidence', zh: '能量与自信' },
    tagline: { en: 'The fire shelf', zh: '火之架' },
    description: {
      en: 'Warm colors, bold lore, main-character energy. These stones sell the feeling of momentum — job interviews, first dates, big presentations. Strong performers in motivational content and "get ready with me" formats.',
      zh: '暖色调、气场全开的传说、主角光环。这些石头贩卖的是"势能"的感觉——面试、初次约会、重要演讲。在打鸡血类内容和"跟我一起准备"的视频形式里表现出色。',
    },
  },
  {
    id: 'Protection & Grounding',
    name: { en: 'Protection & Grounding', zh: '防护与接地' },
    tagline: { en: 'The anchor stones', zh: '锚定之石' },
    description: {
      en: 'The dark, heavy, steady stones of the catalog. Protection lore is among the oldest in the crystal tradition — carried for travel, kept by the front door, or held when the world feels loud. A cornerstone category for bundles.',
      zh: '目录里那些深色、沉重、稳定的石头。防护类传说是水晶传统中最古老的一支——旅行随身、玄关摆放、或在世界太吵的时候握在手里。是组合套装的基石类目。',
    },
  },
  {
    id: 'Abundance & Money',
    name: { en: 'Abundance & Money', zh: '丰盛与财富' },
    tagline: { en: 'The merchant stones', zh: '商人之石' },
    description: {
      en: 'Citrine-led and ritual-driven: cash-drawer stones, manifestation journals, desk altars for side hustles. This bucket converts aspiration into product — small ticket sizes, strong repeat purchase, excellent bundle logic.',
      zh: '以黄水晶为首、以仪式为驱动：收银抽屉石、显化手账、副业办公桌阵。这个类目把"向往"转化为商品——客单价低、复购强、组合逻辑极佳。',
    },
  },
  {
    id: 'Love & Relationships',
    name: { en: 'Love & Relationships', zh: '爱与关系' },
    tagline: { en: 'The heart shelf', zh: '心之架' },
    description: {
      en: 'Rose quartz anchors the most giftable category in the store. Self-love framing keeps it modern; romance framing keeps it classic. Peak seasons: Valentine\u2019s, Mother\u2019s Day, wedding season, and every breakup ever.',
      zh: '粉水晶撑起了全店最适合送礼的类目。"爱自己"的叙事让它保持现代感，"浪漫爱"的叙事让它永葆经典。旺季：情人节、母亲节、婚礼季，以及每一次分手。',
    },
  },
]

/* ---------------- Family grouping ---------------- */

export type FamilyGroupId =
  | 'quartz'
  | 'chalcedony'
  | 'feldspar'
  | 'silicates'
  | 'carbonates'
  | 'glass'
  | 'rocks'
  | 'other'

export const FAMILY_GROUPS: { id: FamilyGroupId; name: Pair }[] = [
  { id: 'quartz', name: { en: 'Quartz Family', zh: '石英家族' } },
  { id: 'chalcedony', name: { en: 'Chalcedony, Agate & Jasper', zh: '玉髓、玛瑙与碧玉' } },
  { id: 'feldspar', name: { en: 'Feldspar Family', zh: '长石家族' } },
  { id: 'silicates', name: { en: 'Silicate Minerals', zh: '硅酸盐矿物' } },
  { id: 'carbonates', name: { en: 'Carbonates', zh: '碳酸盐矿物' } },
  { id: 'glass', name: { en: 'Glass & Tektites', zh: '玻璃与陨石玻璃' } },
  { id: 'rocks', name: { en: 'Rocks & Concretions', zh: '岩石与结核' } },
  { id: 'other', name: { en: 'Other Minerals', zh: '其他矿物' } },
]

export function familyGroup(family: string): FamilyGroupId {
  const f = family.toLowerCase()
  if (f.includes('quartz')) return 'quartz'
  if (f.includes('chalcedony')) return 'chalcedony'
  if (f.includes('feldspar') || f.includes('syenite')) return 'feldspar'
  if (f.includes('carbonate')) return 'carbonates'
  if (f.includes('volcanic glass') || f.includes('tektite') || f.includes('man-made')) return 'glass'
  if (f.includes('metamorphic rock') || f.includes('altered granite') || f.includes('sedimentary')) return 'rocks'
  if (
    f.includes('silicate') ||
    f.includes('garnet') ||
    f.includes('beryl') ||
    f.includes('olivine') ||
    f.includes('pyroxene') ||
    f.includes('mica') ||
    f.includes('pectolite') ||
    f.includes('tourmaline') ||
    f.includes('feldspathoid')
  )
    return 'silicates'
  return 'other'
}

/* ---------------- Chakras ---------------- */

export const CHAKRAS: { id: string; name: Pair; color: string }[] = [
  { id: 'Root', name: { en: 'Root', zh: '海底轮' }, color: '#c0392b' },
  { id: 'Sacral', name: { en: 'Sacral', zh: '脐轮' }, color: '#e67e22' },
  { id: 'Solar Plexus', name: { en: 'Solar Plexus', zh: '太阳轮' }, color: '#d4af37' },
  { id: 'Heart', name: { en: 'Heart', zh: '心轮' }, color: '#4d9d7d' },
  { id: 'Throat', name: { en: 'Throat', zh: '喉轮' }, color: '#5b8fd6' },
  { id: 'Third Eye', name: { en: 'Third Eye', zh: '眉心轮' }, color: '#6f47a3' },
  { id: 'Crown', name: { en: 'Crown', zh: '顶轮' }, color: '#b48ec9' },
  { id: 'All', name: { en: 'All Chakras', zh: '全脉轮' }, color: '#e8d5a8' },
]

export function chakraName(id: string): Pair {
  return CHAKRAS.find((c) => c.id === id)?.name ?? { en: id, zh: id }
}
export function chakraColor(id: string): string {
  return CHAKRAS.find((c) => c.id === id)?.color ?? '#8f63c4'
}

/* ---------------- Forms (stone-level, 8 values) ---------------- */

export const FORM_NAMES: Record<string, Pair> = {
  tumbled: { en: 'Tumbled', zh: '滚石' },
  tower: { en: 'Tower / Point', zh: '晶柱' },
  palm: { en: 'Palm Stone', zh: '掌心石' },
  bracelet: { en: 'Bracelet', zh: '手串' },
  cluster: { en: 'Cluster', zh: '晶簇' },
  sphere: { en: 'Sphere', zh: '水晶球' },
  raw: { en: 'Raw / Rough', zh: '原石' },
  carving: { en: 'Carving', zh: '雕件' },
}

export function formName(id: string): Pair {
  return FORM_NAMES[id] ?? { en: id, zh: id }
}

/* ---------------- Zodiac / element / planet ---------------- */

export const ZODIAC_ZH: Record<string, string> = {
  Aries: '白羊座', Taurus: '金牛座', Gemini: '双子座', Cancer: '巨蟹座',
  Leo: '狮子座', Virgo: '处女座', Libra: '天秤座', Scorpio: '天蝎座',
  Sagittarius: '射手座', Capricorn: '摩羯座', Aquarius: '水瓶座', Pisces: '双鱼座',
}

export const ELEMENT_ZH: Record<string, string> = {
  Earth: '土', Fire: '火', Air: '风', Water: '水',
}
export function elementPair(e: string): Pair {
  const zh = e.split(',').map((x) => ELEMENT_ZH[x.trim()] ?? x.trim()).join('、')
  return { en: e, zh }
}

export const PLANET_ZH: Record<string, string> = { Moon: '月亮', Venus: '金星' }

/* ---------------- Price tiers ---------------- */

export const PRICE_TIERS: Record<string, Pair> = {
  low: { en: 'Accessible', zh: '入门价位' },
  mid: { en: 'Mid-range', zh: '中端价位' },
  high: { en: 'Premium', zh: '高端价位' },
}

/* ---------------- Form gallery (10 sourcing categories) ---------------- */

export interface FormCategory {
  id: string
  name: Pair
  description: Pair
  priceFraming: Pair
  images: string[]
  stoneForm?: string // maps to stone.forms value when applicable
}

export const FORM_CATEGORIES: FormCategory[] = [
  {
    id: 'tumbled',
    name: { en: 'Tumbled Stones', zh: '滚石' },
    description: {
      en: 'The gateway form of the crystal world — pocket-sized, tumbled silky smooth, and priced for impulse. The backbone of scoop bins, starter sets, and "pick your three" live-sale formats.',
      zh: '水晶世界的入门形态——口袋大小、打磨如丝、定价适合冲动消费。是舀取桶、新手套装和"任选三颗"直播形式的基石。',
    },
    priceFraming: {
      en: 'Volume driver · lowest unit cost · the basket-builder',
      zh: '走量主力 · 单件成本最低 · 凑单神器',
    },
    images: ['/images/forms/tumbled-1.jpg', '/images/forms/tumbled-2.jpg'],
    stoneForm: 'tumbled',
  },
  {
    id: 'towers',
    name: { en: 'Towers & Points', zh: '晶柱与尖塔' },
    description: {
      en: 'Architectural and photogenic, towers are the "statement shelf" form — cut and polished to a point that collectors style on desks and altars. Fluorite and clear quartz lead this category.',
      zh: '极具建筑感与上镜感的形态——切割打磨出尖顶，是收藏者摆在书桌与祭坛上的"宣言式"单品。萤石与白水晶领衔这个类目。',
    },
    priceFraming: {
      en: 'Mid-range hero · strong AOV lift · size scales price fast',
      zh: '中端主角 · 显著拉高客单价 · 尺寸越大价格跃升越快',
    },
    images: ['/images/forms/towers-1.jpg', '/images/forms/towers-2.jpg'],
    stoneForm: 'tower',
  },
  {
    id: 'raw',
    name: { en: 'Raw & Rough', zh: '原石' },
    description: {
      en: 'Straight from the earth, unpolished and untamed. Raw pieces sell authenticity — the "as nature made it" story — and pair beautifully with the geology-curious audience.',
      zh: '直接来自大地，未经打磨、野性十足。原石贩卖的是"天然去雕饰"的真实感，与对地质学好奇的受众天然契合。',
    },
    priceFraming: {
      en: 'Entry to mid · story-rich margin · great bundle texture',
      zh: '入门至中端 · 故事溢价高 · 组合装里的质感担当',
    },
    images: ['/images/forms/raw-1.jpg', '/images/forms/raw-2.jpg'],
    stoneForm: 'raw',
  },
  {
    id: 'clusters',
    name: { en: 'Clusters & Geodes', zh: '晶簇与晶洞' },
    description: {
      en: 'Nature\u2019s sculpture. Clusters and geodes are display pieces first and foremost — amethyst cathedrals and citrine plates anchor the premium end of the line.',
      zh: '大自然的雕塑。晶簇与晶洞首先是陈列品——紫水晶"大教堂"与黄水晶晶片撑起了产品线的 premium 高端段。',
    },
    priceFraming: {
      en: 'Premium anchor · collector pieces · hero photography subject',
      zh: '高端锚点 · 收藏级单品 · 主图摄影的最佳主角',
    },
    images: ['/images/forms/clusters-1.jpg', '/images/forms/clusters-2.jpg'],
    stoneForm: 'cluster',
  },
  {
    id: 'palm-stones',
    name: { en: 'Palm Stones', zh: '掌心石' },
    description: {
      en: 'Shaped for the hand, made for the ritual. Palm stones are the tactile meditation form — smooth, weighty, and endlessly holdable. Labradorite flash performs especially well here.',
      zh: '为手掌而塑形、为仪式而存在。掌心石是触感冥想的代表形态——光滑、有分量、让人忍不住一直握着。拉长石的晕彩在这个形态上尤其出彩。',
    },
    priceFraming: {
      en: 'Mid-range comfort object · high gift conversion',
      zh: '中端治愈单品 · 送礼转化率极高',
    },
    images: ['/images/forms/palm-stones-1.jpg', '/images/forms/palm-stones-2.jpg'],
    stoneForm: 'palm',
  },
  {
    id: 'carvings',
    name: { en: 'Carvings', zh: '雕件' },
    description: {
      en: 'Where stone meets storytelling: skulls, animals, moons and hearts. Carvings add craftsmanship value and collectibility, and give content creators endless personality to work with.',
      zh: '石头与故事相遇之处：骷髅、动物、月亮与爱心。雕件叠加了工艺价值与收藏属性，也为内容创作者提供了无穷的人格化素材。',
    },
    priceFraming: {
      en: 'Craft premium · collectible hooks · strong gifting seasonality',
      zh: '工艺溢价 · 收藏钩子 · 送礼季表现强劲',
    },
    images: ['/images/forms/carvings-1.jpg', '/images/forms/carvings-2.jpg'],
    stoneForm: 'carving',
  },
  {
    id: 'spheres',
    name: { en: 'Spheres', zh: '水晶球' },
    description: {
      en: 'The classic fortune-teller silhouette — perfectly round, endlessly hypnotic. Spheres signal "serious collector" and photograph beautifully on stands and in bowls.',
      zh: '经典的占卜师剪影——浑圆完美、百看不厌。水晶球自带"资深玩家"气场，配上底座或碗盏拍照极其出片。',
    },
    priceFraming: {
      en: 'Mid to premium · display-led · material-efficient pricing',
      zh: '中端至高端 · 陈列导向 · 用料扎实、定价有据',
    },
    images: ['/images/forms/spheres-1.jpg', '/images/forms/spheres-2.jpg'],
    stoneForm: 'sphere',
  },
  {
    id: 'mystery-mix',
    name: { en: 'Mystery Mix & Scoops', zh: '盲盒混搭' },
    description: {
      en: 'The gamified form: mystery bags, scoop jars, and chakra assortments. Uncertainty is the product here — perfect for live selling, unboxing content, and moving mixed inventory.',
      zh: '游戏化的形态：盲袋、舀取罐、脉轮套装。"不确定性"本身就是商品——天然适配直播带货、开箱内容与混合库存消化。',
    },
    priceFraming: {
      en: 'High-margin mechanic · inventory blender · live-sale fuel',
      zh: '高毛利玩法 · 库存搅拌器 · 直播销售的燃料',
    },
    images: ['/images/forms/mystery-mix-1.jpg', '/images/forms/mystery-mix-2.jpg'],
  },
  {
    id: 'bracelets',
    name: { en: 'Bracelets', zh: '手串' },
    description: {
      en: 'Wearable intention. Beaded bracelets turn the metaphysical story into a daily accessory — the form most likely to be bought in multiples and stacked by intention.',
      zh: '可穿戴的"意图"。串珠手串把玄学故事变成日常配饰——是最容易被多件购买、按"意图"叠戴的形态。',
    },
    priceFraming: {
      en: 'Accessory pricing · multi-buy behavior · low shipping cost',
      zh: '配饰定价 · 多件购买行为 · 运费友好',
    },
    images: ['/images/forms/bracelets-1.jpg', '/images/forms/bracelets-2.jpg'],
    stoneForm: 'bracelet',
  },
  {
    id: 'chips',
    name: { en: 'Chips & Crushed Stone', zh: '碎石' },
    description: {
      en: 'The utilitarian end of the line: chip beads, crushed gravel for planters, candles, resin art, and ritual jars. Sells by the bag to crafters and the DIY community.',
      zh: '产品线里最实用主义的一端：碎石串珠、铺面碎石，用于盆栽、蜡烛、树脂手作与仪式瓶。按袋卖给手作与 DIY 社群。',
    },
    priceFraming: {
      en: 'Craft supply economics · by-the-bag volume · byproduct upcycle',
      zh: '手作原料经济 · 按袋走量 · 边角料的价值再造',
    },
    images: ['/images/forms/chips-1.jpg', '/images/forms/chips-2.jpg'],
  },
]

/* ---------------- helpers ---------------- */

export function stonesByIntention(intentionId: string): Stone[] {
  return stones.filter((s) => s.categories.intentions.includes(intentionId))
}

export function sourceDomain(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}
