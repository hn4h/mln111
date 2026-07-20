"use client"

import type React from "react"
import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import type { Card } from "@/lib/types"

interface GameCardProps {
  card: Card
  onSwipe: (direction: "left" | "right" | string) => void
  decisionDirection: "left" | "right" | string | null
  currentStats?: { finance: number; people: number; military: number; religion: number }
}

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function GameCard({ card, onSwipe, decisionDirection, currentStats }: GameCardProps) {
  // Shuffle multipleChoices khi card thay đổi
  const shuffledChoices = useMemo(() => {
    if (card.multipleChoices && card.multipleChoices.length > 0) {
      return shuffleArray(card.multipleChoices)
    }
    return []
  }, [card.id])
  const handleChoice = (choice: "left" | "right" | string) => {
    if (decisionDirection) return
    onSwipe(choice)
  }

  // Kiểm tra xem có đủ tài nguyên để chọn không
  const canAfford = (cost?: { finance: number; people: number; military: number; religion: number }) => {
    if (!cost || !currentStats) return true
    return (
      currentStats.finance >= Math.abs(cost.finance) &&
      currentStats.people >= Math.abs(cost.people) &&
      currentStats.military >= Math.abs(cost.military) &&
      currentStats.religion >= Math.abs(cost.religion)
    )
  }

  const isMultiChoice = card.multipleChoices && card.multipleChoices.length > 0

  return (
    <div className="w-full max-w-6xl mx-auto space-y-3 animate-in fade-in duration-500" style={{ width: '75%' }}>
      {/* Card Content */}
      <div className="bg-card rounded-xl border border-border shadow-xl p-4 space-y-3">
        {/* Character/Title */}
        <div className="space-y-1 text-center border-b border-border pb-2">
          <p className="text-sm md:text-base font-bold text-foreground">{card.character}</p>
          {card.yearContext && (
            <p className="text-xs text-muted-foreground">Năm {card.yearContext}</p>
          )}
        </div>

        {/* Situation - Question */}
        <div className="space-y-2 py-2">
          <p className="text-base md:text-lg leading-relaxed text-foreground text-center">
            {card.situation}
          </p>
        </div>
      </div>

      {/* Choice Buttons */}
      <div className={`grid gap-4 ${isMultiChoice ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2'}`}>
        {isMultiChoice ? (
          // Hiển thị nhiều lựa chọn (3-4 options) - 2 cột
          shuffledChoices.map((choice, index) => {
            const affordable = canAfford(choice.cost)
            return (
              <button
                key={choice.id}
                onClick={() => handleChoice(choice.id)}
                disabled={!!decisionDirection || !affordable}
                className={`w-full text-left flex flex-col items-start gap-2.5 p-4 rounded-xl border transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer ${!affordable
                  ? 'opacity-40 cursor-not-allowed bg-muted/20 border-border/40'
                  : 'bg-card/65 backdrop-blur-sm border-border/60 hover:bg-primary/[0.03] hover:border-primary/45 hover:scale-[1.01] active:scale-[0.99]'
                  }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold flex items-center justify-center">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                      Lựa chọn {String.fromCharCode(65 + index)}
                    </span>
                  </div>
                  {choice.cost && (
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 tracking-wider">
                      💸 Chi phí: {Math.abs(choice.cost.finance + choice.cost.people + choice.cost.military + choice.cost.religion)}
                    </span>
                  )}
                </div>

                <span className="text-sm md:text-base font-bold text-foreground/90 leading-snug">
                  {choice.text}
                </span>

                {choice.description && (
                  <span className="text-xs text-muted-foreground italic leading-relaxed">
                    {choice.description}
                  </span>
                )}

                {/* Hiển thị giá phải trả */}
                {choice.cost && (
                  <div className="flex flex-wrap items-center gap-1.5 mt-1 pt-2 border-t border-border/30 w-full">
                    <span className="text-[10px] font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider mr-1">Trả trước:</span>
                    {choice.cost.finance !== 0 && (
                      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs border border-orange-500/25">
                        💰 -{Math.abs(choice.cost.finance)}
                      </span>
                    )}
                    {choice.cost.people !== 0 && (
                      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs border border-orange-500/25">
                        🙂 -{Math.abs(choice.cost.people)}
                      </span>
                    )}
                    {choice.cost.military !== 0 && (
                      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs border border-orange-500/25">
                        ⚔️ -{Math.abs(choice.cost.military)}
                      </span>
                    )}
                    {choice.cost.religion !== 0 && (
                      <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs border border-orange-500/25">
                        🛡️ -{Math.abs(choice.cost.religion)}
                      </span>
                    )}
                  </div>
                )}
              </button>
            )
          })
        ) : (
          // Hiển thị 2 lựa chọn cũ (left/right)
          <>
            <button
              onClick={() => handleChoice("left")}
              disabled={!!decisionDirection || !canAfford(card.leftChoice.cost)}
              className={`w-full text-left flex flex-col items-start gap-2.5 p-4 rounded-xl border transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer ${!canAfford(card.leftChoice.cost)
                ? 'opacity-40 cursor-not-allowed bg-muted/20 border-border/40'
                : 'bg-card/65 backdrop-blur-sm border-border/60 hover:bg-primary/[0.03] hover:border-primary/45 hover:scale-[1.01] active:scale-[0.99]'
                }`}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold flex items-center justify-center">
                    A
                  </span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    Lựa chọn A
                  </span>
                </div>
                {card.leftChoice.cost && (
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 tracking-wider">
                    💸 Chi phí: {Math.abs(card.leftChoice.cost.finance + card.leftChoice.cost.people + card.leftChoice.cost.military + card.leftChoice.cost.religion)}
                  </span>
                )}
              </div>

              <span className="text-sm md:text-base font-bold text-foreground/90 leading-snug">
                {card.leftChoice.text}
              </span>

              {card.leftChoice.cost && (
                <div className="flex flex-wrap items-center gap-1.5 mt-1 pt-2 border-t border-border/30 w-full">
                  <span className="text-[10px] font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider mr-1">Trả trước:</span>
                  {card.leftChoice.cost.finance !== 0 && (
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs border border-orange-500/25">
                      💰 -{Math.abs(card.leftChoice.cost.finance)}
                    </span>
                  )}
                  {card.leftChoice.cost.people !== 0 && (
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs border border-orange-500/25">
                      🙂 -{Math.abs(card.leftChoice.cost.people)}
                    </span>
                  )}
                  {card.leftChoice.cost.military !== 0 && (
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs border border-orange-500/25">
                      ⚔️ -{Math.abs(card.leftChoice.cost.military)}
                    </span>
                  )}
                  {card.leftChoice.cost.religion !== 0 && (
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs border border-orange-500/25">
                      🛡️ -{Math.abs(card.leftChoice.cost.religion)}
                    </span>
                  )}
                </div>
              )}

              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mt-2 w-full pt-2 border-t border-border/10">
                <span className="font-bold text-[10px] uppercase tracking-wider text-muted-foreground mr-1">Tác động dự kiến:</span>
                {card.leftChoice.effects.finance !== 0 && (
                  <span className={card.leftChoice.effects.finance > 0 ? "text-green-600 dark:text-green-400" : "text-red-500"}>
                    💰 {card.leftChoice.effects.finance > 0 ? "+" : ""}{card.leftChoice.effects.finance}
                  </span>
                )}
                {card.leftChoice.effects.people !== 0 && (
                  <span className={card.leftChoice.effects.people > 0 ? "text-green-600 dark:text-green-400" : "text-red-500"}>
                    🙂 {card.leftChoice.effects.people > 0 ? "+" : ""}{card.leftChoice.effects.people}
                  </span>
                )}
                {card.leftChoice.effects.military !== 0 && (
                  <span className={card.leftChoice.effects.military > 0 ? "text-green-600 dark:text-green-400" : "text-red-500"}>
                    ⚔️ {card.leftChoice.effects.military > 0 ? "+" : ""}{card.leftChoice.effects.military}
                  </span>
                )}
                {card.leftChoice.effects.religion !== 0 && (
                  <span className={card.leftChoice.effects.religion > 0 ? "text-green-600 dark:text-green-400" : "text-red-500"}>
                    🛡️ {card.leftChoice.effects.religion > 0 ? "+" : ""}{card.leftChoice.effects.religion}
                  </span>
                )}
              </div>
            </button>

            <button
              onClick={() => handleChoice("right")}
              disabled={!!decisionDirection || !canAfford(card.rightChoice.cost)}
              className={`w-full text-left flex flex-col items-start gap-2.5 p-4 rounded-xl border transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer ${!canAfford(card.rightChoice.cost)
                ? 'opacity-40 cursor-not-allowed bg-muted/20 border-border/40'
                : 'bg-card/65 backdrop-blur-sm border-border/60 hover:bg-primary/[0.03] hover:border-primary/45 hover:scale-[1.01] active:scale-[0.99]'
                }`}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <span className="h-5 w-5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold flex items-center justify-center">
                    B
                  </span>
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                    Lựa chọn B
                  </span>
                </div>
                {card.rightChoice.cost && (
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 tracking-wider">
                    💸 Chi phí: {Math.abs(card.rightChoice.cost.finance + card.rightChoice.cost.people + card.rightChoice.cost.military + card.rightChoice.cost.religion)}
                  </span>
                )}
              </div>

              <span className="text-sm md:text-base font-bold text-foreground/90 leading-snug">
                {card.rightChoice.text}
              </span>

              {card.rightChoice.cost && (
                <div className="flex flex-wrap items-center gap-1.5 mt-1 pt-2 border-t border-border/30 w-full">
                  <span className="text-[10px] font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider mr-1">Trả trước:</span>
                  {card.rightChoice.cost.finance !== 0 && (
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs border border-orange-500/25">
                      💰 -{Math.abs(card.rightChoice.cost.finance)}
                    </span>
                  )}
                  {card.rightChoice.cost.people !== 0 && (
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs border border-orange-500/25">
                      🙂 -{Math.abs(card.rightChoice.cost.people)}
                    </span>
                  )}
                  {card.rightChoice.cost.military !== 0 && (
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs border border-orange-500/25">
                      ⚔️ -{Math.abs(card.rightChoice.cost.military)}
                    </span>
                  )}
                  {card.rightChoice.cost.religion !== 0 && (
                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs border border-orange-500/25">
                      🛡️ -{Math.abs(card.rightChoice.cost.religion)}
                    </span>
                  )}
                </div>
              )}

              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mt-2 w-full pt-2 border-t border-border/10">
                <span className="font-bold text-[10px] uppercase tracking-wider text-muted-foreground mr-1">Tác động dự kiến:</span>
                {card.rightChoice.effects.finance !== 0 && (
                  <span className={card.rightChoice.effects.finance > 0 ? "text-green-600 dark:text-green-400" : "text-red-500"}>
                    💰 {card.rightChoice.effects.finance > 0 ? "+" : ""}{card.rightChoice.effects.finance}
                  </span>
                )}
                {card.rightChoice.effects.people !== 0 && (
                  <span className={card.rightChoice.effects.people > 0 ? "text-green-600 dark:text-green-400" : "text-red-500"}>
                    🙂 {card.rightChoice.effects.people > 0 ? "+" : ""}{card.rightChoice.effects.people}
                  </span>
                )}
                {card.rightChoice.effects.military !== 0 && (
                  <span className={card.rightChoice.effects.military > 0 ? "text-green-600 dark:text-green-400" : "text-red-500"}>
                    ⚔️ {card.rightChoice.effects.military > 0 ? "+" : ""}{card.rightChoice.effects.military}
                  </span>
                )}
                {card.rightChoice.effects.religion !== 0 && (
                  <span className={card.rightChoice.effects.religion > 0 ? "text-green-600 dark:text-green-400" : "text-red-500"}>
                    🛡️ {card.rightChoice.effects.religion > 0 ? "+" : ""}{card.rightChoice.effects.religion}
                  </span>
                )}
              </div>
            </button>
          </>
        )}
      </div>
    </div>
  )
}

