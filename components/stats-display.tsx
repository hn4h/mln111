"use client"
import type { GameState } from "@/lib/types"

interface StatsDisplayProps {
  gameState: GameState
}

export function StatsDisplay({ gameState }: StatsDisplayProps) {
  const stats = [
    { label: "Finance", value: gameState.finance, icon: "💰", variable: "--stat-finance" },
    { label: "People", value: gameState.people, icon: "🙂", variable: "--stat-people" },
    { label: "Military", value: gameState.military, icon: "⚔️", variable: "--stat-military" },
    { label: "Religion", value: gameState.religion, icon: "⛪", variable: "--stat-religion" },
  ]

  const getDangerLevel = (value: number) => {
    if (value <= 15 || value >= 85) return "critical"
    if (value <= 25 || value >= 75) return "warning"
    return "safe"
  }

  return (
    <div className="bg-card border-b border-border p-4 md:p-6 space-y-4">
      <div className="flex justify-between items-center px-2">
        <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
          Trạng thái vương quốc - Năm {gameState.yearsReigned + 1}
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {stats.map((stat) => {
          const dangerLevel = getDangerLevel(stat.value)
          const isDanger = dangerLevel !== "safe"

          return (
            <div
              key={stat.label}
              className={`space-y-2 p-2 md:p-3 rounded-lg border transition-all ${
                isDanger ? "border-accent-warn bg-accent-warn/5" : "border-border bg-secondary"
              } ${isDanger && dangerLevel === "critical" ? "stat-danger" : ""}`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base md:text-lg">{stat.icon}</span>
                <span className="text-xs font-semibold text-foreground">{stat.label}</span>
              </div>

              <div className="space-y-1">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all rounded-full ${
                      dangerLevel === "critical"
                        ? "bg-accent-warn"
                        : dangerLevel === "warning"
                          ? "bg-yellow-500"
                          : "bg-accent-success"
                    }`}
                    style={{ width: `${stat.value}%` }}
                  />
                </div>
                <div className="text-right text-xs font-medium text-foreground">{stat.value}/100</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
