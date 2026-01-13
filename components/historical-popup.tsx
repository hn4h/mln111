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

interface HistoricalPopupProps {
  isOpen: boolean
  onClose: () => void
  title: string
  historicalNote?: string
  historicalQuote?: string
  philosophicalExplanation?: string
  dialecticLaw?: string
}

export function HistoricalPopup({
  isOpen,
  onClose,
  title,
  historicalNote,
  historicalQuote,
  philosophicalExplanation,
  dialecticLaw,
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
            {/* Quy luật biện chứng */}
            {dialecticLaw && (
              <div className="bg-amber-500/10 border-l-4 border-amber-500 rounded-lg p-6 lg:col-span-2">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 uppercase tracking-wide">
                  Quy Luật Biện Chứng
                </h3>
                <p className="text-lg md:text-xl text-foreground leading-relaxed italic font-medium">
                  "{dialecticLaw}"
                </p>
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
              <div className="bg-blue-500/10 border-l-4 border-blue-500 rounded-lg p-6">
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
              <div className="bg-purple-500/10 border-l-4 border-purple-500 rounded-lg p-6">
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
            {!historicalNote && !philosophicalExplanation && !dialecticLaw && !historicalQuote && (
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
