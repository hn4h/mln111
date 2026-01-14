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

    if (reason.includes("Finance") || reason.includes("Tài chính")) {
      return "Khi lòng tham trở nên tuyệt đối, nền tảng của vương triều sẽ sụp đổ. Nhưng không có tài nguyên, không gì có thể tồn tại."
    } else if (reason.includes("People") || reason.includes("Dân sinh")) {
      return "Dân là gốc nước. Phớt lờ họ và họ sẽ phớt lờ bạn. Phục vụ họ một cách mù quáng và họ sẽ tiêu tốn chủ nhân của mình."
    } else if (reason.includes("Military") || reason.includes("Quân sự")) {
      return "Thanh kiếm bảo vệ có thể hủy diệt. Quyền lực không kiềm chế trở thành bạo chúa; yếu đuối mời gọi chinh phục."
    } else if (reason.includes("Religion") || reason.includes("Tôn giáo")) {
      return "Niềm tin tạo nên hiện thực. Đức tin tuyệt đối tạo ra cuồng tín; hoài nghi thuần túy xói mòn ý nghĩa."
    }
    return "Tất cả hệ thống đều chứa đựng mâu thuẫn riêng của mình. Làm chủ nằm ở sự căng thẳng vĩnh cửu giữa các đối lập."
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground">Vương Triều Kết Thúc</h1>
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
              <p className="text-xs text-muted-foreground uppercase">Tôn Giáo</p>
              <p className="text-3xl font-bold text-foreground">{gameState.religion}%</p>
            </div>
          </div>

          <div className="pt-4 border-t border-border text-center">
            <p className="text-2xl font-bold text-foreground">Trị Vì {gameState.yearsReigned} Năm</p>
            <p className="text-xs text-muted-foreground mt-1">
              {gameState.yearsReigned < 5
                ? "Chỉ là một ghi chú nhỏ trong lịch sử"
                : gameState.yearsReigned < 15
                  ? "Một khoảnh khắc ngắn ngủi"
                  : gameState.yearsReigned < 25
                    ? "Một triều đại đáng chú ý"
                    : "Một di sản lâu dài"}
            </p>
          </div>
        </div>

        <div className="bg-secondary border border-border rounded-lg p-6 space-y-3">
          <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Bài Học Biện Chứng</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {getDialecticalLesson(gameState.gameOverReason)}
          </p>
        </div>

        <div className="space-y-3 max-h-48 overflow-y-auto">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase">Dòng Thời Gian Quyết Định</h3>
          <div className="space-y-2 text-left text-xs">
            {cardHistory.slice(-10).map((entry, idx) => (
              <div key={idx} className="flex items-center gap-2 p-2 rounded bg-secondary">
                <span className="text-muted-foreground">Năm {idx + 1}</span>
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
