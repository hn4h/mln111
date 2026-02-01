"use client"

import { useState, useEffect } from "react"
import { vietnamDynasties } from "@/lib/vietnam-dynasties"
import type { Dynasty } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RulesScreen } from "./rules-screen"

interface DynastySelectionProps {
  onSelectDynasty: (dynastyId: string) => void
}

export function DynastySelection({ onSelectDynasty }: DynastySelectionProps) {
  const [showRules, setShowRules] = useState(false)
  const [completedDynasties, setCompletedDynasties] = useState<Record<string, any>>({})

  useEffect(() => {
    // Đọc thông tin các triều đại đã hoàn thành từ localStorage
    const victories = JSON.parse(localStorage.getItem('dynastyVictories') || '{}')
    setCompletedDynasties(victories)
  }, [])

  if (showRules) {
    return <RulesScreen onBack={() => setShowRules(false)} />
  }

  return (
    <div className="h-screen bg-transparent flex items-center justify-center px-4 py-4 overflow-hidden">
      <div className="max-w-5xl w-full space-y-4">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
            Lịch Sử Việt Nam
          </h1>
          <p className="text-lg md:text-xl" style={{ color: '#222222' }}>
            Chọn một triều đại để bắt đầu hành trình khám phá
          </p>
          <p className="text-sm max-w-3xl mx-auto" style={{ color: '#222222', lineHeight: 1.6 }}>
            Mỗi triều đại sẽ đưa bạn qua 15 tình huống lịch sử thực tế, kết hợp với các quy luật cơ bản của phép
            biện chứng duy vật. Quyết định của bạn sẽ ảnh hưởng đến 4 yếu tố: Tài chính, Dân sinh, Quân sự và Tôn
            giáo.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Button
              onClick={() => setShowRules(true)}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              📜 Luật Chơi
            </Button>
            {/* <Button
              onClick={() => {
                const victories = JSON.parse(localStorage.getItem('dynastyVictories') || '{}')
                const count = Object.keys(victories).length
                alert(`Bạn đã hoàn thành ${count}/3 triều đại!\n\n${Object.values(victories).map((v: any) =>
                  `✓ ${v.dynastyName}: ${v.yearsReigned} năm`
                ).join('\n')
                  }`)
              }}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              🏆 Thành Tích ({Object.keys(completedDynasties).length}/3)
            </Button> */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {vietnamDynasties.map((dynasty: Dynasty) => {
            const isCompleted = completedDynasties[dynasty.id]
            return (
              <Card
                key={dynasty.id}
                className={`hover:shadow-lg transition-all duration-300 cursor-pointer group relative ${isCompleted ? 'border-2 border-amber-500' : 'border border-border/50'
                  }`}
                style={{
                  backgroundColor: 'rgba(250, 247, 240, 0.95)',
                  border: '1px solid #4A3728',
                }}
                onClick={() => onSelectDynasty(dynasty.id)}
              >
                {isCompleted && (
                  <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                    <span>✓</span> Đã hoàn thành
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{dynasty.icon}</div>
                  <CardTitle className="text-2xl">{dynasty.name}</CardTitle>
                  <CardDescription className="text-sm font-medium">{dynasty.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center" style={{ color: '#222222', lineHeight: 1.6 }}>{dynasty.description}</p>
                  {isCompleted && (
                    <div className="mt-3 p-2 bg-amber-500/10 rounded text-xs text-center space-y-1">
                      <p className="font-semibold text-amber-700 dark:text-amber-400">
                        Điểm: {completedDynasties[dynasty.id].finalStats ?
                          Math.round((completedDynasties[dynasty.id].finalStats.finance +
                            completedDynasties[dynasty.id].finalStats.people +
                            completedDynasties[dynasty.id].finalStats.military +
                            completedDynasties[dynasty.id].finalStats.religion) / 4) : 0}/100
                      </p>
                      <p className="text-muted-foreground">
                        {completedDynasties[dynasty.id].yearsReigned} năm
                      </p>
                    </div>
                  )}
                  <Button className={`w-full mt-4 group-hover:bg-primary/90 ${isCompleted ? 'bg-amber-500 hover:bg-amber-600' : ''}`} variant="outline">
                    {isCompleted ? 'Chơi lại' : 'Chọn triều đại'}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Quy Luật Biện Chứng - Compact inline */}
        {/* <div className="border-t border-border/50 pt-3">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-1 text-xs text-muted-foreground">
            <span className="font-semibold text-foreground uppercase tracking-wide">Các Quy Luật Biện Chứng:</span>
            <span><span className="font-medium text-foreground">Thống nhất và đấu tranh</span> của các mặt đối lập</span>
            <span className="hidden md:inline">•</span>
            <span><span className="font-medium text-foreground">Chuyển hóa</span> từ lượng sang chất</span>
            <span className="hidden md:inline">•</span>
            <span><span className="font-medium text-foreground">Phủ định</span> của phủ định</span>
          </div>
        </div> */}
      </div>
    </div>
  )
}
