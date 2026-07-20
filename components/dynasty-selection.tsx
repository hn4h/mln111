"use client"

import { useState, useEffect } from "react";
import { vietnamDynasties } from "@/lib/party-history";
import type { Dynasty } from "@/lib/types";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RulesScreen } from "./rules-screen";
import GameLogo from "../public/anhlogo.png";
import BackgroundImage from "../public/anhnen1.png";

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
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8">
      <div className="max-w-5xl w-full space-y-8">
        <div className="text-center space-y-4">
          {/* <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
            ĐẠI VIỆT: THIÊN MỆNH TRUNG DUNG
          </h1> */}
          {/* <img
            src={typeof GameLogo === "string" ? GameLogo : GameLogo.src}
            alt="ĐẠI VIỆT: THIÊN MỆNH TRUNG DUNG"
            className="h-64 md:h-60 w-auto object-contain mx-auto"
          /> */}
          <p className="text-lg md:text-xl pt-25" style={{ color: "#222222" }}>
            Chọn một chủ đề để bắt đầu hành trình khám phá
          </p>
          <p
            className="text-sm max-w-3xl mx-auto"
            style={{ color: "#222222", lineHeight: 1.6 }}
          >
            Mỗi chặng đường lịch sử sẽ đưa bạn qua các tình huống thực tế của Cách mạng Việt Nam dưới sự chèo lái của Đảng Cộng sản Việt Nam, kết hợp với các quy luật cơ bản của phép biện chứng duy vật. Quyết định của bạn sẽ ảnh hưởng đến 4 yếu tố: Tài chính, Dân sinh, Lực lượng vũ trang và Hệ tư tưởng.
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
            <Button
              onClick={() => {
                const victories = JSON.parse(localStorage.getItem('dynastyVictories') || '{}')
                const count = Object.keys(victories).length
                alert(`Bạn đã hoàn thành ${count}/3 triều đại!\n\n${
                  Object.values(victories).map((v: any) => 
                    `✓ ${v.dynastyName}: ${v.yearsReigned} năm`
                  ).join('\n')
                }`)
              }}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              🏆 Thành Tích ({Object.keys(completedDynasties).length}/3)
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vietnamDynasties.map((dynasty: Dynasty) => {
            const isCompleted = completedDynasties[dynasty.id]
            return (
              <Card
                key={dynasty.id}
                className={`hover:shadow-lg transition-all duration-300 cursor-pointer group relative ${
                  isCompleted ? 'border-2 border-amber-500' : ''
                }`}
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
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">{dynasty.description}</p>
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
                  <Button
                    className={`w-full mt-4 group-hover:bg-amber-700/90 ${isCompleted ? "bg-amber-500 hover:bg-amber-600" : ""}`}
                    variant="outline"
                  >
                    {isCompleted ? "Chơi lại" : "Chọn chủ đề"}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="border-t border-border pt-6 space-y-4">
          <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide text-center">
            Các Quy Luật Biện Chứng
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div className="text-center space-y-1">
              <p className="font-medium text-foreground">Thống nhất và đấu tranh</p>
              <p className="text-xs">của các mặt đối lập</p>
            </div>
            <div className="text-center space-y-1">
              <p className="font-medium text-foreground">Chuyển hóa</p>
              <p className="text-xs">từ lượng sang chất</p>
            </div>
            <div className="text-center space-y-1">
              <p className="font-medium text-foreground">Phủ định</p>
              <p className="text-xs">của phủ định</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
