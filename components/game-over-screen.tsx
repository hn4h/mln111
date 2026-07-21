"use client"
import type { GameState, Card } from "@/lib/types"
import { Button } from "@/components/ui/button"

interface GameOverScreenProps {
  gameState: GameState
  cardHistory: Array<{ card: Card; choice: "left" | "right" | string }>
  onRestart: () => void
  onHome: () => void
}

export function GameOverScreen({ gameState, cardHistory, onRestart, onHome }: GameOverScreenProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl space-y-8 text-center w-full">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">Chặng Đường Tạm Dừng</h1>
          <p className="text-lg md:text-xl text-accent-warn font-semibold">{gameState.gameOverReason}</p>
        </div>

        <div className="space-y-4 bg-card border border-border rounded-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground uppercase">Tài Chính</p>
              <p className="text-3xl font-bold text-foreground">{gameState.finance}%</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground uppercase">Dân Sinh</p>
              <p className="text-3xl font-bold text-foreground">{gameState.people}%</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground uppercase">Quân Sự</p>
              <p className="text-3xl font-bold text-foreground">{gameState.military}%</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground uppercase">Hệ Tư Tưởng</p>
              <p className="text-3xl font-bold text-foreground">{gameState.religion}%</p>
            </div>
          </div>

          <div className="pt-4 border-t border-border text-center">
            <p className="text-2xl font-bold text-foreground">Vượt Qua {gameState.yearsReigned} Thử Thách</p>
            <p className="text-xs text-muted-foreground mt-1">
              {gameState.yearsReigned < 5
                ? "Chỉ là một ghi chú nhỏ trong lịch sử"
                : gameState.yearsReigned < 15
                  ? "Một khoảnh khắc ngắn ngủi"
                  : gameState.yearsReigned < 25
                    ? "Một chặng đường đáng chú ý"
                    : "Một di sản lâu dài"}
            </p>
          </div>
        </div>

        <div className="space-y-3 max-h-48 overflow-y-auto">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase">Dòng Thời Gian Quyết Định</h3>
          <div className="space-y-2 text-left text-xs">
            {cardHistory.slice(-10).map((entry, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 rounded bg-secondary min-w-0">
                <span className="text-muted-foreground shrink-0">Năm {idx + 1}</span>
                <span className={`shrink-0 ${entry.choice === "left" ? "text-accent-warn" : "text-accent-success"}`}>
                  {entry.choice === "left" ? "←" : "→"}
                </span>
                <span className="flex-1 text-muted-foreground truncate min-w-0">{entry.card.situation.slice(0, 40)}…</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Button
            onClick={onRestart}
            size="lg"
            className="px-8 text-base font-semibold"
          >
            Chơi Lại
          </Button>
          <Button
            onClick={onHome}
            variant="outline"
            size="lg"
            className="px-8 text-base font-semibold"
          >
            Về Trang Chủ
          </Button>
        </div>
      </div>
    </div>
  )
}
