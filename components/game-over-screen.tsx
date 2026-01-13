"use client"
import type { GameState, Card } from "@/lib/types"
import { useRouter } from "next/navigation"

interface GameOverScreenProps {
  gameState: GameState
  cardHistory: Array<{ card: Card; choice: "left" | "right" | string }>
  onRestart: () => void
}

export function GameOverScreen({ gameState, cardHistory, onRestart }: GameOverScreenProps) {
  const router = useRouter()
  
  const getDialecticalLesson = (reason: string | null) => {
    if (!reason) return null

    if (reason.includes("Finance")) {
      return "When greed becomes absolute, the realm's foundation crumbles. Yet without resources, nothing survives."
    } else if (reason.includes("People")) {
      return "The people are the state. Ignore them and they ignore you. Serve them blindly and they consume their master."
    } else if (reason.includes("Military")) {
      return "The sword that protects can destroy. Power unchecked becomes tyranny; weakness invites conquest."
    } else if (reason.includes("Religion")) {
      return "Belief shapes reality. Absolute faith creates zealotry; pure skepticism erodes meaning."
    }
    return "All systems contain their own contradiction. Mastery lies in the eternal tension between opposites."
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">Your Reign Ends</h1>
          <p className="text-lg md:text-xl text-accent-warn font-semibold">{gameState.gameOverReason}</p>
        </div>

        <div className="space-y-4 bg-card border border-border rounded-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground uppercase">Finance</p>
              <p className="text-3xl font-bold text-foreground">{gameState.finance}%</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground uppercase">People</p>
              <p className="text-3xl font-bold text-foreground">{gameState.people}%</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground uppercase">Military</p>
              <p className="text-3xl font-bold text-foreground">{gameState.military}%</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground uppercase">Religion</p>
              <p className="text-3xl font-bold text-foreground">{gameState.religion}%</p>
            </div>
          </div>

          <div className="pt-4 border-t border-border text-center">
            <p className="text-2xl font-bold text-foreground">{gameState.yearsReigned} Years Reigned</p>
            <p className="text-xs text-muted-foreground mt-1">
              {gameState.yearsReigned < 5
                ? "Barely a footnote in history"
                : gameState.yearsReigned < 15
                  ? "A brief moment in time"
                  : gameState.yearsReigned < 25
                    ? "A notable reign"
                    : "An extended legacy"}
            </p>
          </div>
        </div>

        <div className="bg-secondary border border-border rounded-lg p-6 space-y-3">
          <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">The Dialectical Lesson</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {getDialecticalLesson(gameState.gameOverReason)}
          </p>
        </div>

        <div className="space-y-3 max-h-48 overflow-y-auto">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase">Decision Timeline</h3>
          <div className="space-y-2 text-left text-xs">
            {cardHistory.slice(-10).map((entry, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 rounded bg-secondary">
                <span className="text-muted-foreground">Year {idx + 1}</span>
                <span className={entry.choice === "left" ? "text-accent-warn" : "text-accent-success"}>
                  {entry.choice === "left" ? "←" : "→"}
                </span>
                <span className="flex-1 text-muted-foreground truncate">{entry.card.situation.slice(0, 40)}...</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={onRestart}
            className="px-8 py-3 bg-foreground text-background font-semibold rounded-lg hover:bg-muted-foreground transition-colors text-base"
          >
            Chơi Lại
          </button>
          <button
            onClick={() => router.push('/')}
            className="px-8 py-3 bg-secondary border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors text-base"
          >
            Về Trang Chủ
          </button>
        </div>
      </div>
    </div>
  )
}
