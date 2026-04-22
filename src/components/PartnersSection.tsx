import { Sparkles, Sword, Shield, Zap, Star, Flame, Crown } from "lucide-react"

const features = [
  { name: "Магия стихий", icon: Sparkles },
  { name: "PvP-арены", icon: Sword },
  { name: "Гильдии", icon: Shield },
  { name: "Быстрый старт", icon: Zap },
  { name: "Рейтинг игроков", icon: Star },
  { name: "Крафт артефактов", icon: Flame },
  { name: "Донат-привилегии", icon: Crown },
]

export function PartnersSection() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-6 md:gap-10 px-4 py-8">
      {features.map((feature) => (
        <div key={feature.name} className="flex items-center gap-2 text-gray-500">
          <feature.icon className="h-4 w-4" />
          <span className="text-sm font-medium">{feature.name}</span>
        </div>
      ))}
    </section>
  )
}