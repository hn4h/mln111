"use client"
import type { GameState } from "@/lib/types"

interface StatsDisplayProps {
  gameState: GameState
}

export function StatsDisplay({ gameState }: StatsDisplayProps) {
  const stats = [
    { label: "Tài Chính", value: gameState.finance, icon: "💰", color: "var(--stat-finance)", border: "hover:border-amber-500/30 hover:shadow-amber-500/5" },
    { label: "Dân Sinh", value: gameState.people, icon: "🙂", color: "var(--stat-people)", border: "hover:border-rose-500/30 hover:shadow-rose-500/5" },
    { label: "Quân Sự", value: gameState.military, icon: "⚔️", color: "var(--stat-military)", border: "hover:border-red-500/30 hover:shadow-red-500/5" },
    { label: "Hệ Tư Tưởng", value: gameState.religion, icon: "🛡️", color: "var(--stat-religion)", border: "hover:border-purple-500/30 hover:shadow-purple-500/5" },
  ]

  const getDangerLevel = (value: number) => {
    if (value <= 15 || value >= 85) return "critical"
    if (value <= 25 || value >= 75) return "warning"
    return "safe"
  }

  return (
    <div className="bg-card/75 backdrop-blur-md border-b border-border/80 p-4 md:p-5 space-y-4 shadow-sm relative z-10">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-2">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-600 animate-pulse" />
          <h2 className="text-xs md:text-sm font-bold text-foreground/80 uppercase tracking-widest">
            Trạng thái Cách mạng
          </h2>
        </div>
        <span className="px-3 py-1 text-xs font-bold rounded-full bg-primary/10 text-primary border border-primary/20 shadow-sm">
          Chặng đường thứ {gameState.yearsReigned + 1}
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
        {stats.map((stat) => {
          const dangerLevel = getDangerLevel(stat.value)
          const isDanger = dangerLevel !== "safe"
          
          // Determine the bar color
          const barColor = dangerLevel === "critical" 
            ? "var(--accent-warn)" 
            : dangerLevel === "warning" 
              ? "rgb(234, 179, 8)" // yellow-500
              : stat.color;

          return (
            <div
              key={stat.label}
              className={`space-y-3 p-3 rounded-xl border transition-all duration-300 shadow-sm ${stat.border} ${
                isDanger 
                  ? dangerLevel === "critical" 
                    ? "border-red-500/50 bg-red-500/[0.03] animate-pulse" 
                    : "border-yellow-500/50 bg-yellow-500/[0.02]"
                  : "border-border/60 bg-secondary/40 hover:bg-secondary/70"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-base md:text-lg filter drop-shadow-sm">{stat.icon}</span>
                  <span className="text-xs font-bold text-foreground/90 tracking-wide">{stat.label}</span>
                </div>
                {isDanger && (
                  <span className={`h-1.5 w-1.5 rounded-full ${dangerLevel === "critical" ? "bg-red-500 animate-ping" : "bg-yellow-500"}`} />
                )}
              </div>

              <div className="space-y-1">
                <div
                  role="progressbar"
                  aria-valuenow={stat.value}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={stat.label}
                  className="h-2.5 bg-muted/60 rounded-full p-[2px] shadow-inner"
                >
                  <div
                    className="h-full rounded-full transition-all duration-500 ease-out shadow-sm relative overflow-hidden"
                    style={{ 
                      width: `${stat.value}%`,
                      backgroundColor: barColor 
                    }}
                  >
                    <div className="absolute inset-0 bg-white/20 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:8px_8px] opacity-20" />
                  </div>
                </div>
                <div className="flex justify-between items-center px-0.5">
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                    {dangerLevel === "critical" ? "Nguy kịch" : dangerLevel === "warning" ? "Cảnh báo" : "An toàn"}
                  </span>
                  <span className="text-xs font-bold text-foreground/80">{stat.value}/100</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
