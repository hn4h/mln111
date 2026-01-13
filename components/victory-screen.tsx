"use client"
import type { GameState, Card } from "@/lib/types"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

interface VictoryScreenProps {
  gameState: GameState
  cardHistory: Array<{ card: Card; choice: "left" | "right" | string }>
  onRestart: () => void
  dynastyName: string
}

export function VictoryScreen({ gameState, cardHistory, onRestart, dynastyName }: VictoryScreenProps) {
  const router = useRouter()

  useEffect(() => {
    // Lưu thông tin chiến thắng vào localStorage
    if (gameState.selectedDynasty) {
      const victories = JSON.parse(localStorage.getItem('dynastyVictories') || '{}')
      victories[gameState.selectedDynasty] = {
        date: new Date().toISOString(),
        yearsReigned: gameState.yearsReigned,
        finalStats: {
          finance: gameState.finance,
          people: gameState.people,
          military: gameState.military,
          religion: gameState.religion,
        },
        dynastyName: dynastyName,
      }
      localStorage.setItem('dynastyVictories', JSON.stringify(victories))
    }
  }, [gameState.selectedDynasty, gameState.yearsReigned, gameState.finance, gameState.people, gameState.military, gameState.religion, dynastyName])

  const getAverageScore = () => {
    return Math.round((gameState.finance + gameState.people + gameState.military + gameState.religion) / 4)
  }

  const getRating = () => {
    const avg = getAverageScore()
    if (avg >= 70) return { title: "Thánh Quân", desc: "Một vị vua xuất sắc trong lịch sử!", color: "text-yellow-500" }
    if (avg >= 60) return { title: "Minh Quân", desc: "Một triều đại phát triển rực rỡ", color: "text-green-500" }
    if (avg >= 50) return { title: "Quân Chủ Tài Giỏi", desc: "Duy trì được sự cân bằng tốt", color: "text-blue-500" }
    return { title: "Quân Chủ Đủ Năng Lực", desc: "Đã hoàn thành sứ mệnh", color: "text-purple-500" }
  }

  const rating = getRating()

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-500/10 to-background flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl space-y-8 text-center">
        {/* Tiêu đề chiến thắng */}
        <div className="space-y-4">
          <div className="text-6xl">👑</div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">Chiến Thắng!</h1>
          <p className="text-2xl md:text-3xl text-amber-500 font-bold">{dynastyName}</p>
          <p className="text-lg text-muted-foreground">
            Bạn đã dẫn dắt triều đại qua {gameState.yearsReigned} năm thịnh vượng
          </p>
        </div>

        {/* Rating */}
        <div className="bg-card border-2 border-amber-500 rounded-lg p-8 space-y-4">
          <h2 className={`text-4xl font-bold ${rating.color}`}>{rating.title}</h2>
          <p className="text-base text-muted-foreground">{rating.desc}</p>
          <div className="text-5xl font-bold text-foreground">{getAverageScore()}/100</div>
        </div>

        {/* Thống kê cuối cùng */}
        <div className="bg-card border border-border rounded-lg p-8 space-y-4">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Thống Kê Cuối Cùng</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground uppercase">Tài Chính</p>
              <p className="text-3xl font-bold text-foreground">{gameState.finance}/100</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground uppercase">Dân Sinh</p>
              <p className="text-3xl font-bold text-foreground">{gameState.people}/100</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground uppercase">Quân Sự</p>
              <p className="text-3xl font-bold text-foreground">{gameState.military}/100</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground uppercase">Tôn Giáo</p>
              <p className="text-3xl font-bold text-foreground">{gameState.religion}/100</p>
            </div>
          </div>
        </div>

        {/* Thành tựu */}
        <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-lg p-6 space-y-3">
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">🏆 Thành Tựu Mở Khóa</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>✓ Hoàn thành {dynastyName}</p>
            <p>✓ Trị vì {gameState.yearsReigned} năm</p>
            <p>✓ Đạt điểm trung bình {getAverageScore()}/100</p>
          </div>
        </div>

        {/* Dòng thời gian quyết định */}
        <div className="space-y-3 max-h-48 overflow-y-auto">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase">Lịch Sử Quyết Định</h3>
          <div className="space-y-2 text-left text-xs">
            {cardHistory.slice(-10).map((entry, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 rounded bg-secondary">
                <span className="text-muted-foreground">Năm {idx + 1}</span>
                <span className="text-green-500">✓</span>
                <span className="flex-1 text-muted-foreground truncate">{entry.card.situation.slice(0, 40)}...</span>
              </div>
            ))}
          </div>
        </div>

        {/* Nút hành động */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={onRestart}
            className="px-8 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors text-base"
          >
            Chơi Lại Triều Đại Này
          </button>
          <button
            onClick={() => router.push('/')}
            className="px-8 py-3 bg-foreground text-background font-semibold rounded-lg hover:bg-muted-foreground transition-colors text-base"
          >
            Chọn Triều Đại Khác
          </button>
        </div>
      </div>
    </div>
  )
}
