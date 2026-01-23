"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import type { Card } from "@/lib/types"

interface GameCardProps {
  card: Card
  onSwipe: (direction: "left" | "right" | string) => void
  decisionDirection: "left" | "right" | string | null
  currentStats?: { finance: number; people: number; military: number; religion: number }
}

export function GameCard({ card, onSwipe, decisionDirection, currentStats }: GameCardProps) {
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
          {card.philosophicalContext && (
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <span className="px-3 py-1 bg-muted rounded-full">
                {card.philosophicalContext}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Choice Buttons */}
      <div className={`grid gap-4 ${isMultiChoice ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2'}`}>
        {isMultiChoice ? (
          // Hiển thị nhiều lựa chọn (3-4 options) - 2 cột
          card.multipleChoices?.map((choice, index) => {
            const affordable = canAfford(choice.cost)
            return (
              <Button
                key={choice.id}
                onClick={() => handleChoice(choice.id)}
                disabled={!!decisionDirection || !affordable}
                variant="outline"
                size="lg"
                className={`h-auto py-3 px-4 text-left flex flex-col items-start gap-1 hover:bg-primary/10 hover:border-primary transition-all ${!affordable ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Lựa chọn {String.fromCharCode(65 + index)}
                  </span>
                  {choice.cost && (
                    <span className="text-xs font-semibold text-orange-500">💸 Giá: {Math.abs(choice.cost.finance + choice.cost.people + choice.cost.military + choice.cost.religion)}</span>
                  )}
                </div>
                <span className="text-sm md:text-base font-medium text-foreground">
                  {choice.text}
                </span>
                {choice.description && (
                  <span className="text-xs text-muted-foreground italic">
                    {choice.description}
                  </span>
                )}
                {/* Hiển thị giá phải trả */}
                {choice.cost && (
                  <div className="flex gap-2 text-xs mt-1 pb-2 border-b border-border/50">
                    <span className="text-orange-500 font-semibold">Trả trước:</span>
                    {choice.cost.finance !== 0 && (
                      <span className="text-orange-500">💰 -{Math.abs(choice.cost.finance)}</span>
                    )}
                    {choice.cost.people !== 0 && (
                      <span className="text-orange-500">🙂 -{Math.abs(choice.cost.people)}</span>
                    )}
                    {choice.cost.military !== 0 && (
                      <span className="text-orange-500">⚔️ -{Math.abs(choice.cost.military)}</span>
                    )}
                    {choice.cost.religion !== 0 && (
                      <span className="text-orange-500">⛪ -{Math.abs(choice.cost.religion)}</span>
                    )}
                  </div>
                )}
                {/* Hiển thị hiệu ứng */}
                <div className="flex gap-2 text-xs text-muted-foreground">
                  <span className="font-semibold">Kết quả:</span>
                  {choice.effects.finance !== 0 && (
                    <span className={choice.effects.finance > 0 ? "text-green-500" : "text-red-500"}>
                      💰 {choice.effects.finance > 0 ? "+" : ""}{choice.effects.finance}
                    </span>
                  )}
                  {choice.effects.people !== 0 && (
                    <span className={choice.effects.people > 0 ? "text-green-500" : "text-red-500"}>
                      🙂 {choice.effects.people > 0 ? "+" : ""}{choice.effects.people}
                    </span>
                  )}
                  {choice.effects.military !== 0 && (
                    <span className={choice.effects.military > 0 ? "text-green-500" : "text-red-500"}>
                      ⚔️ {choice.effects.military > 0 ? "+" : ""}{choice.effects.military}
                    </span>
                  )}
                  {choice.effects.religion !== 0 && (
                    <span className={choice.effects.religion > 0 ? "text-green-500" : "text-red-500"}>
                      ⛪ {choice.effects.religion > 0 ? "+" : ""}{choice.effects.religion}
                    </span>
                  )}
                </div>
              </Button>
            )
          })
        ) : (
          // Hiển thị 2 lựa chọn cũ (left/right)
          <>
            <Button
              onClick={() => handleChoice("left")}
              disabled={!!decisionDirection || !canAfford(card.leftChoice.cost)}
              variant="outline"
              size="lg"
              className={`h-auto py-3 px-4 text-left flex flex-col items-start gap-1 hover:bg-primary/10 hover:border-primary transition-all ${!canAfford(card.leftChoice.cost) ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Lựa chọn A
                </span>
                {card.leftChoice.cost && (
                  <span className="text-xs font-semibold text-orange-500">💸 Giá: {Math.abs(card.leftChoice.cost.finance + card.leftChoice.cost.people + card.leftChoice.cost.military + card.leftChoice.cost.religion)}</span>
                )}
              </div>
              <span className="text-sm md:text-base font-medium text-foreground">
                {card.leftChoice.text}
              </span>
              {card.leftChoice.cost && (
                <div className="flex gap-2 text-xs mt-1 pb-2 border-b border-border/50">
                  <span className="text-orange-500 font-semibold">Trả trước:</span>
                  {card.leftChoice.cost.finance !== 0 && (
                    <span className="text-orange-500">💰 -{Math.abs(card.leftChoice.cost.finance)}</span>
                  )}
                  {card.leftChoice.cost.people !== 0 && (
                    <span className="text-orange-500">🙂 -{Math.abs(card.leftChoice.cost.people)}</span>
                  )}
                  {card.leftChoice.cost.military !== 0 && (
                    <span className="text-orange-500">⚔️ -{Math.abs(card.leftChoice.cost.military)}</span>
                  )}
                  {card.leftChoice.cost.religion !== 0 && (
                    <span className="text-orange-500">⛪ -{Math.abs(card.leftChoice.cost.religion)}</span>
                  )}
                </div>
              )}
              <div className="flex gap-2 text-xs text-muted-foreground mt-2">
                {card.leftChoice.effects.finance !== 0 && (
                  <span className={card.leftChoice.effects.finance > 0 ? "text-green-500" : "text-red-500"}>
                    💰 {card.leftChoice.effects.finance > 0 ? "+" : ""}{card.leftChoice.effects.finance}
                  </span>
                )}
                {card.leftChoice.effects.people !== 0 && (
                  <span className={card.leftChoice.effects.people > 0 ? "text-green-500" : "text-red-500"}>
                    🙂 {card.leftChoice.effects.people > 0 ? "+" : ""}{card.leftChoice.effects.people}
                  </span>
                )}
                {card.leftChoice.effects.military !== 0 && (
                  <span className={card.leftChoice.effects.military > 0 ? "text-green-500" : "text-red-500"}>
                    ⚔️ {card.leftChoice.effects.military > 0 ? "+" : ""}{card.leftChoice.effects.military}
                  </span>
                )}
                {card.leftChoice.effects.religion !== 0 && (
                  <span className={card.leftChoice.effects.religion > 0 ? "text-green-500" : "text-red-500"}>
                    ⛪ {card.leftChoice.effects.religion > 0 ? "+" : ""}{card.leftChoice.effects.religion}
                  </span>
                )}
              </div>
            </Button>

            <Button
              onClick={() => handleChoice("right")}
              disabled={!!decisionDirection || !canAfford(card.rightChoice.cost)}
              variant="outline"
              size="lg"
              className={`h-auto py-3 px-4 text-left flex flex-col items-start gap-1 hover:bg-primary/10 hover:border-primary transition-all ${!canAfford(card.rightChoice.cost) ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  Lựa chọn B
                </span>
                {card.rightChoice.cost && (
                  <span className="text-xs font-semibold text-orange-500">💸 Giá: {Math.abs(card.rightChoice.cost.finance + card.rightChoice.cost.people + card.rightChoice.cost.military + card.rightChoice.cost.religion)}</span>
                )}
              </div>
              <span className="text-sm md:text-base font-medium text-foreground">
                {card.rightChoice.text}
              </span>
              {card.rightChoice.cost && (
                <div className="flex gap-2 text-xs mt-1 pb-2 border-b border-border/50">
                  <span className="text-orange-500 font-semibold">Trả trước:</span>
                  {card.rightChoice.cost.finance !== 0 && (
                    <span className="text-orange-500">💰 -{Math.abs(card.rightChoice.cost.finance)}</span>
                  )}
                  {card.rightChoice.cost.people !== 0 && (
                    <span className="text-orange-500">🙂 -{Math.abs(card.rightChoice.cost.people)}</span>
                  )}
                  {card.rightChoice.cost.military !== 0 && (
                    <span className="text-orange-500">⚔️ -{Math.abs(card.rightChoice.cost.military)}</span>
                  )}
                  {card.rightChoice.cost.religion !== 0 && (
                    <span className="text-orange-500">⛪ -{Math.abs(card.rightChoice.cost.religion)}</span>
                  )}
                </div>
              )}
              <div className="flex gap-2 text-xs text-muted-foreground mt-2">
                {card.rightChoice.effects.finance !== 0 && (
                  <span className={card.rightChoice.effects.finance > 0 ? "text-green-500" : "text-red-500"}>
                    💰 {card.rightChoice.effects.finance > 0 ? "+" : ""}{card.rightChoice.effects.finance}
                  </span>
                )}
                {card.rightChoice.effects.people !== 0 && (
                  <span className={card.rightChoice.effects.people > 0 ? "text-green-500" : "text-red-500"}>
                    🙂 {card.rightChoice.effects.people > 0 ? "+" : ""}{card.rightChoice.effects.people}
                  </span>
                )}
                {card.rightChoice.effects.military !== 0 && (
                  <span className={card.rightChoice.effects.military > 0 ? "text-green-500" : "text-red-500"}>
                    ⚔️ {card.rightChoice.effects.military > 0 ? "+" : ""}{card.rightChoice.effects.military}
                  </span>
                )}
                {card.rightChoice.effects.religion !== 0 && (
                  <span className={card.rightChoice.effects.religion > 0 ? "text-green-500" : "text-red-500"}>
                    ⛪ {card.rightChoice.effects.religion > 0 ? "+" : ""}{card.rightChoice.effects.religion}
                  </span>
                )}
              </div>
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

