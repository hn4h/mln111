"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { StatEffects } from "@/lib/types"

interface HistoricalPopupProps {
  isOpen: boolean
  onClose: () => void
  title: string
  historicalNote?: string
  historicalQuote?: string
  philosophicalExplanation?: string
  effects?: StatEffects
}

export function HistoricalPopup({
  isOpen,
  onClose,
  title,
  historicalNote,
  historicalQuote,
  philosophicalExplanation,
  effects,
}: HistoricalPopupProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="!max-w-[95vw] w-[95vw] max-h-[90vh] sm:!max-w-[95vw]">
        <DialogHeader>
          <DialogTitle className="text-3xl md:text-4xl font-bold">
            {title}
          </DialogTitle>
          <DialogDescription className="text-base md:text-lg text-muted-foreground">
            Bối cảnh lịch sử và triết học
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[70vh] pr-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Ảnh hưởng của lựa chọn */}
            {effects && (
              <div className="bg-green-500/10 border-l-4 border-green-500 rounded-lg p-6 lg:col-span-2">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 uppercase tracking-wide">
                  Kết Quả Lựa Chọn
                </h3>
                <div className="flex flex-wrap gap-4 text-lg md:text-xl">
                  {effects.finance !== 0 && (
                    <span
                      className={`font-semibold ${effects.finance > 0 ? "text-green-500" : "text-red-500"}`}
                    >
                      💰 Tài chính: {effects.finance > 0 ? "+" : ""}
                      {effects.finance}
                    </span>
                  )}
                  {effects.people !== 0 && (
                    <span
                      className={`font-semibold ${effects.people > 0 ? "text-green-500" : "text-red-500"}`}
                    >
                      🙂 Dân sinh: {effects.people > 0 ? "+" : ""}
                      {effects.people}
                    </span>
                  )}
                  {effects.military !== 0 && (
                    <span
                      className={`font-semibold ${effects.military > 0 ? "text-green-500" : "text-red-500"}`}
                    >
                      ⚔️ Quân sự: {effects.military > 0 ? "+" : ""}
                      {effects.military}
                    </span>
                  )}
                  {effects.religion !== 0 && (
                    <span
                      className={`font-semibold ${effects.religion > 0 ? "text-green-500" : "text-red-500"}`}
                    >
                      🛡️ Hệ tư tưởng: {effects.religion > 0 ? "+" : ""}
                      {effects.religion}
                    </span>
                  )}
                </div>
              </div>
            )}



            {/* Triếch dẫn nguyên văn từ sử sách */}
            {historicalQuote && (
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border-l-4 border-orange-500 rounded-lg p-6">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 uppercase tracking-wide">
                  Trích Dẫn Lịch Sử
                </h3>
                <div className="relative">
                  <div className="absolute top-0 left-0 text-6xl text-orange-500/20 leading-none select-none">"</div>
                  <div className="pl-10 pr-6 pt-2">
                    <p className="text-base md:text-lg text-foreground leading-relaxed italic">
                      {historicalQuote}
                    </p>
                  </div>
                  <div className="absolute bottom-0 right-0 text-6xl text-orange-500/20 leading-none select-none">"</div>
                </div>
              </div>
            )}

            {/* Trích dẫn lịch sử */}
            {historicalNote && (
              <div className="bg-amber-600/10 border-l-4 border-amber-600 dark:border-amber-500 rounded-lg p-6">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 uppercase tracking-wide">
                  Bối Cảnh Lịch Sử
                </h3>
                <div className="text-base md:text-lg text-foreground leading-relaxed space-y-3">
                  {historicalNote.split('\n').map((paragraph, index) => (
                    paragraph.trim() && (
                      <p key={index} className="text-justify">
                        {paragraph}
                      </p>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* Giải thích triết học */}
            {philosophicalExplanation && (
              <div className="bg-red-600/10 border-l-4 border-red-600 dark:border-red-500 rounded-lg p-6">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 uppercase tracking-wide">
                  Phân Tích Triết Học
                </h3>
                <div className="text-base md:text-lg text-foreground leading-relaxed space-y-3">
                  {philosophicalExplanation.split('\n').map((paragraph, index) => (
                    paragraph.trim() && (
                      <p key={index} className="text-justify">
                        {paragraph}
                      </p>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* Thông báo nếu không có thông tin */}
            {!historicalNote && !philosophicalExplanation && !historicalQuote && (
              <div className="text-center text-muted-foreground py-8 lg:col-span-2">
                <p className="text-lg">Không có thông tin bổ sung cho lựa chọn này</p>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="flex justify-end pt-4 border-t">
          <Button onClick={onClose} size="lg" className="px-10 text-base">
            Tiếp Tục →
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
