"use client"

import { useState } from "react"
import type { GameState, Card, Dynasty } from "@/lib/types"
import { vietnamDynasties } from "@/lib/vietnam-dynasties"
import { GameCard } from "./game-card"
import { StatsDisplay } from "./stats-display"
import { GameOverScreen } from "./game-over-screen"
import { VictoryScreen } from "./victory-screen"
import { TitleScreen } from "./title-screen"
import { DynastySelection } from "./dynasty-selection"
import { HistoricalPopup } from "./historical-popup"

export function GameContainer() {
  const [gameState, setGameState] = useState<GameState>({
    finance: 50,
    people: 50,
    military: 50,
    religion: 50,
    yearsReigned: 0,
    isGameOver: false,
    gameOverReason: null,
    currentCardIndex: 0,
    decision: null,
    hasStarted: false,
    selectedDynasty: null,
  })
  const [isVictory, setIsVictory] = useState(false)

  const [currentCard, setCurrentCard] = useState<Card | null>(null)
  const [cardHistory, setCardHistory] = useState<Array<{ card: Card; choice: "left" | "right" | string }>>([])
  const [selectedDynastyData, setSelectedDynastyData] = useState<Dynasty | null>(null)
  const [availableCards, setAvailableCards] = useState<Card[]>([])
  const [showHistoricalPopup, setShowHistoricalPopup] = useState(false)
  const [popupData, setPopupData] = useState<{
    title: string
    historicalNote?: string
    historicalQuote?: string
    philosophicalExplanation?: string
    dialecticLaw?: string
  } | null>(null)

  const selectDynasty = (dynastyId: string) => {
    const dynasty = vietnamDynasties.find((d) => d.id === dynastyId)
    if (dynasty) {
      setSelectedDynastyData(dynasty)
      const cards = [...dynasty.cards]
      setAvailableCards(cards)
      setGameState((prev) => ({
        ...prev,
        selectedDynasty: dynastyId,
        hasStarted: true
      }))
      // Show first card immediately
      setCurrentCard(cards[0])
    }
  }

  const makeDecision = (choice: "left" | "right" | string) => {
    if (!currentCard || gameState.isGameOver) return

    let selectedChoice
    const isMultiChoice = currentCard.multipleChoices && currentCard.multipleChoices.length > 0

    if (isMultiChoice) {
      const chosenOption = currentCard.multipleChoices?.find((c) => c.id === choice)
      if (!chosenOption) return
      selectedChoice = chosenOption
    } else {
      selectedChoice = choice === "left" ? currentCard.leftChoice : currentCard.rightChoice
    }

    // Hiển thị popup nếu có thông tin lịch sử hoặc triết học, hoặc nếu chọn đáp án đúng
    const isCorrectAnswer = isMultiChoice && 'isCorrect' in selectedChoice && selectedChoice.isCorrect
    const shouldShowPopup = selectedChoice.historicalNote ||
      selectedChoice.philosophicalExplanation ||
      (isCorrectAnswer && currentCard.historicalQuote)

    if (shouldShowPopup) {
      setPopupData({
        title: currentCard.character,
        historicalNote: selectedChoice.historicalNote,
        historicalQuote: isCorrectAnswer ? currentCard.historicalQuote : selectedChoice.historicalQuote,
        philosophicalExplanation: selectedChoice.philosophicalExplanation,
        dialecticLaw: currentCard.dialecticLaw,
      })
      setShowHistoricalPopup(true)
    }

    // Trừ giá (cost) trước nếu có
    let statsAfterCost = { ...gameState }
    if (selectedChoice.cost) {
      statsAfterCost = {
        ...statsAfterCost,
        finance: Math.max(0, gameState.finance - Math.abs(selectedChoice.cost.finance)),
        people: Math.max(0, gameState.people - Math.abs(selectedChoice.cost.people)),
        military: Math.max(0, gameState.military - Math.abs(selectedChoice.cost.military)),
        religion: Math.max(0, gameState.religion - Math.abs(selectedChoice.cost.religion)),
      }
    }

    // Calculate new stats - Hiệu ứng x1.0 để cân bằng độ khó
    const effectMultiplier = 1.0
    const newStats = {
      finance: Math.max(0, Math.min(100, statsAfterCost.finance + (selectedChoice.effects.finance * effectMultiplier))),
      people: Math.max(0, Math.min(100, statsAfterCost.people + (selectedChoice.effects.people * effectMultiplier))),
      military: Math.max(0, Math.min(100, statsAfterCost.military + (selectedChoice.effects.military * effectMultiplier))),
      religion: Math.max(0, Math.min(100, statsAfterCost.religion + (selectedChoice.effects.religion * effectMultiplier))),
    }

    // Check for game over conditions - Vùng an toàn rộng hơn
    let gameOverReason = null
    let isGameOver = false
    const minSafeValue = 5   // Vùng an toàn: 5-95 để dễ hơn
    const maxSafeValue = 95

    Object.entries(newStats).forEach(([key, value]) => {
      if (value <= minSafeValue) {
        isGameOver = true
        const statNames: Record<string, string> = {
          finance: "Tài chính",
          people: "Dân sinh",
          military: "Quân sự",
          religion: "Tôn giáo",
        }
        gameOverReason = `${statNames[key]} sụp đổ hoàn toàn! (Dưới ${minSafeValue})`
      } else if (value >= maxSafeValue) {
        isGameOver = true
        const statNames: Record<string, string> = {
          finance: "Tài chính",
          people: "Dân sinh",
          military: "Quân sự",
          religion: "Tôn giáo",
        }
        gameOverReason = `${statNames[key]} phát triển quá mức, mất cân bằng! (Trên ${maxSafeValue})`
      }
    })

    // Get remaining cards
    const newAvailableCards = availableCards.slice(1)

    // Kiểm tra nếu đã hoàn thành tất cả câu hỏi
    if (newAvailableCards.length === 0 && !isGameOver) {
      setIsVictory(true)
      isGameOver = true
      gameOverReason = "Bạn đã hoàn thành triều đại! Chúc mừng!"
    }

    // Update game state
    const newGameState: GameState = {
      ...newStats,
      yearsReigned: gameState.yearsReigned + 1,
      isGameOver,
      gameOverReason,
      currentCardIndex: gameState.currentCardIndex + 1,
      decision: choice,
      hasStarted: gameState.hasStarted,
      selectedDynasty: gameState.selectedDynasty,
    }

    setGameState(newGameState)
    setCardHistory([...cardHistory, { card: currentCard, choice }])
    setAvailableCards(newAvailableCards)

    // Clear current card for animation
    setCurrentCard(null)

    // Show next card after animation
    if (!isGameOver && newAvailableCards.length > 0) {
      setTimeout(() => {
        setCurrentCard(newAvailableCards[0])
        // Reset decision để các nút không bị disable
        setGameState((prev) => ({ ...prev, decision: null }))
      }, 400)
    }
  }

  const startGame = () => {
    setGameState((prev) => ({ ...prev, hasStarted: true }))
    setCardHistory([])
  }

  const restartGame = () => {
    setGameState({
      finance: 50,
      people: 50,
      military: 50,
      religion: 50,
      yearsReigned: 0,
      isGameOver: false,
      gameOverReason: null,
      currentCardIndex: 0,
      decision: null,
      hasStarted: false,
      selectedDynasty: null,
    })
    setCurrentCard(null)
    setCardHistory([])
    setSelectedDynastyData(null)
    setAvailableCards([])
    setIsVictory(false)
  }

  // Show title screen first
  if (!gameState.selectedDynasty) {
    return <TitleScreen onStart={() => { }} onSelectDynasty={selectDynasty} />
  }

  if (gameState.isGameOver) {
    if (isVictory) {
      return (
        <VictoryScreen
          gameState={gameState}
          cardHistory={cardHistory}
          onRestart={restartGame}
          dynastyName={selectedDynastyData?.name || ""}
        />
      )
    }
    return <GameOverScreen gameState={gameState} cardHistory={cardHistory} onRestart={restartGame} />
  }

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      <div className="flex-shrink-0">
        <StatsDisplay gameState={gameState} />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-2 overflow-hidden">
        {currentCard ? (
          <>
            {currentCard.dialecticLaw && (
              <div className="text-center text-xs md:text-sm text-muted-foreground border border-border rounded-lg p-2 bg-muted/30 mb-2 max-w-3xl w-full">
                <span className="font-semibold">⚖️ Quy luật biện chứng: </span>
                {currentCard.dialecticLaw}
              </div>
            )}
            <GameCard
              card={currentCard}
              onSwipe={makeDecision}
              decisionDirection={gameState.decision}
              currentStats={{
                finance: gameState.finance,
                people: gameState.people,
                military: gameState.military,
                religion: gameState.religion
              }}
            />
          </>
        ) : (
          <div className="text-center text-muted-foreground animate-pulse">Đang tải câu hỏi tiếp theo...</div>
        )}
      </div>

      <div className="flex-shrink-0 pb-2 text-center space-y-0 bg-background/80 backdrop-blur">
        <div className="text-xs text-muted-foreground font-medium">
          Câu hỏi {gameState.currentCardIndex + 1} / {selectedDynastyData?.cards.length || 15}
        </div>
        {/* <div className="text-xs text-muted-foreground">Năm thứ {gameState.yearsReigned + 1}</div> */}
      </div>

      {/* Historical Popup */}
      {popupData && (
        <HistoricalPopup
          isOpen={showHistoricalPopup}
          onClose={() => setShowHistoricalPopup(false)}
          title={popupData.title}
          historicalNote={popupData.historicalNote}
          historicalQuote={popupData.historicalQuote}
          philosophicalExplanation={popupData.philosophicalExplanation}
          dialecticLaw={popupData.dialecticLaw}
        />
      )}
    </div>
  )
}
