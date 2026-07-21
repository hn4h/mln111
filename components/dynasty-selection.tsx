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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RulesScreen } from "./rules-screen";
import GameLogo from "../public/anhlogo.png";
import BackgroundImage from "../public/anhnen1.png";

interface DynastySelectionProps {
  onSelectDynasty: (dynastyId: string) => void
}

export function DynastySelection({ onSelectDynasty }: DynastySelectionProps) {
  const [showRules, setShowRules] = useState(false)
  const [showAchievements, setShowAchievements] = useState(false)
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
    <div className="h-[100dvh] w-full bg-background overflow-y-auto flex items-start justify-center px-4 py-8">
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
          <p className="text-lg md:text-xl font-medium text-foreground/80 pt-4">
            Chọn một chủ đề để bắt đầu hành trình khám phá
          </p>
          <p
            className="text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Mỗi chặng đường lịch sử sẽ đưa bạn qua các tình huống thực tế của Cách mạng Việt Nam dưới sự chèo lái của Đảng Cộng sản Việt Nam. Quyết định của bạn sẽ ảnh hưởng đến 4 yếu tố: Tài chính, Dân sinh, Lực lượng vũ trang và Hệ tư tưởng.
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
              onClick={() => setShowAchievements(true)}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              🏆 Thành Tích ({Object.keys(completedDynasties).length}/3)
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {vietnamDynasties.map((dynasty: Dynasty) => {
            const isCompleted = completedDynasties[dynasty.id]
            return (
              <Card
                key={dynasty.id}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onSelectDynasty(dynasty.id);
                  }
                }}
                className={`w-full max-w-sm hover:shadow-2xl hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none focus-visible:ring-offset-2 transition-all duration-300 cursor-pointer group relative ${
                  isCompleted ? 'border-2 border-amber-500 bg-amber-500/[0.01]' : 'bg-card/50 backdrop-blur-sm'
                }`}
                onClick={() => onSelectDynasty(dynasty.id)}
              >
                {isCompleted && (
                  <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <span>✓</span> Đã hoàn thành
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 select-none">{dynasty.icon}</div>
                  <CardTitle className="text-2xl font-bold tracking-tight">{dynasty.name}</CardTitle>
                  <CardDescription className="text-sm font-semibold text-amber-600 dark:text-amber-500 mt-1">{dynasty.period}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center leading-relaxed px-2">{dynasty.description}</p>
                  {isCompleted && (
                    <div className="mt-3 p-3 bg-amber-500/10 rounded-xl text-xs text-center space-y-1 border border-amber-500/15">
                      <p className="font-bold text-amber-700 dark:text-amber-400 text-sm">
                        Điểm: {completedDynasties[dynasty.id].finalStats ? 
                          Math.round((completedDynasties[dynasty.id].finalStats.finance + 
                                     completedDynasties[dynasty.id].finalStats.people + 
                                     completedDynasties[dynasty.id].finalStats.military + 
                                     completedDynasties[dynasty.id].finalStats.religion) / 4) : 0}/100
                      </p>
                      <p className="text-muted-foreground font-medium">
                        {completedDynasties[dynasty.id].yearsReigned} chặng đường
                      </p>
                    </div>
                  )}
                  <div
                    className={`w-full mt-2 font-semibold py-2 px-4 text-center rounded-md border text-sm transition-all duration-300 flex items-center justify-center ${
                      isCompleted 
                        ? "bg-amber-500 border-amber-500 hover:bg-amber-600 text-white" 
                        : "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 text-foreground group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-600"
                    }`}
                  >
                    {isCompleted ? "Chơi lại" : "Chọn chủ đề"}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      <Dialog open={showAchievements} onOpenChange={setShowAchievements}>
        <DialogContent className="max-w-md w-[90vw] bg-card border-2 border-amber-500 rounded-xl shadow-2xl p-6">
          <DialogHeader className="text-center pb-4 border-b border-border">
            <DialogTitle className="text-2xl font-bold flex items-center justify-center gap-2">
              🏆 Bảng Thành Tích
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm mt-1">
              Hành trình cách mạng bạn đã hoàn thành
            </DialogDescription>
          </DialogHeader>

          <div className="py-6 space-y-4">
            <div className="text-center">
              <span className="text-4xl font-bold text-amber-500">
                {Object.keys(completedDynasties).length} / 3
              </span>
              <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-semibold">
                Chủ đề đã hoàn thành
              </p>
            </div>

            {Object.keys(completedDynasties).length > 0 ? (
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {Object.values(completedDynasties).map((v: any, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-amber-500/5 border border-amber-500/20">
                    <div className="space-y-0.5">
                      <p className="text-sm font-bold text-foreground">
                        {v.dynastyName}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Hoàn thành: {new Date(v.date).toLocaleDateString("vi-VN")}
                      </p>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded bg-amber-500/10 text-amber-600 dark:text-amber-500 border border-amber-500/15">
                      {v.yearsReigned} chặng
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-center text-muted-foreground py-4 italic">
                Chưa có thành tích nào được ghi nhận. Hãy bắt đầu cuộc chơi!
              </p>
            )}
          </div>

          <div className="flex justify-end pt-4 border-t border-border">
            <Button onClick={() => setShowAchievements(false)} size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold">
              Đóng
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
