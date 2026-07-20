"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface RulesScreenProps {
  onBack: () => void
}

export function RulesScreen({ onBack }: RulesScreenProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-card border-2 border-border rounded-xl shadow-2xl">
        {/* Header với phong cách lịch sử */}
        <div className="bg-gradient-to-r from-amber-900/20 to-amber-700/20 border-b-2 border-border p-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            📜 Điều Lệ Cách Mạng
          </h1>
          <p className="text-sm md:text-base text-muted-foreground italic">
            "Lý luận cách mạng soi đường, đường lối đúng đắn dẫn lối thành công"
          </p>
        </div>

        <ScrollArea className="h-[60vh] md:h-[70vh]">
          <div className="p-6 md:p-8 space-y-6">
            {/* Giới thiệu */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <span className="text-2xl">🏛️</span>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">
                  Mục Đích Trò Chơi
                </h2>
              </div>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Bạn vào vai người lãnh đạo chèo lái con thuyền cách mạng Việt Nam. Nhiệm vụ của bạn là
                đưa ra các quyết định khôn ngoan, cân bằng giữa đóng góp vật chất, hỗ trợ nhân dân, sức mạnh vũ trang tự vệ và hệ tư tưởng vững chắc.
              </p>
            </section>

            {/* Bốn trụ cột vương quốc */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <span className="text-2xl">⚖️</span>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">
                  Bốn Trụ Cột Đất Nước
                </h2>
              </div>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Cách mạng đứng vững nhờ bốn trụ cột. Mỗi trụ cột có thang điểm
                từ <span className="font-bold text-foreground">0 đến 100</span>:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-border rounded-lg p-4 bg-secondary/50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">💰</span>
                    <h3 className="font-bold text-foreground">Tài Chính</h3>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Kho bạc quốc gia, nguồn lực kinh tế. Kinh tế ổn định là nền tảng vật chất để phát triển xã hội và củng cố cách mạng.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-4 bg-secondary/50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">🙂</span>
                    <h3 className="font-bold text-foreground">Dân Sinh</h3>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Lòng dân, sự ủng hộ của nhân dân. Ý dân là ý trời, gốc có vững cây mới bền. Cách mạng là sự nghiệp của quần chúng.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-4 bg-secondary/50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">⚔️</span>
                    <h3 className="font-bold text-foreground">Quân Sự</h3>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Sức mạnh quân đội, lực lượng vũ trang tự vệ. Bảo vệ Tổ quốc từ sớm, từ xa, giữ vững độc lập, chủ quyền lãnh thổ.
                  </p>
                </div>

                <div className="border border-border rounded-lg p-4 bg-secondary/50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">🛡️</span>
                    <h3 className="font-bold text-foreground">Hệ Tư Tưởng</h3>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Đường lối chính trị, hệ tư tưởng đúng đắn tạo sự đoàn kết nhất trí trong Đảng và toàn dân.
                  </p>
                </div>
              </div>
            </section>

            {/* Điều kiện thắng thua */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <span className="text-2xl">🎯</span>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">
                  Điều Kiện Thắng Thua
                </h2>
              </div>
              
              <div className="bg-amber-500/10 border-2 border-amber-500/30 rounded-lg p-4">
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <span>⚠️</span> Vùng An Toàn
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-3">
                  Bạn bắt đầu với <span className="font-bold text-foreground">50 điểm</span> cho mỗi trụ cột. 
                  Nhiệm vụ của bạn là giữ tất cả các trụ cột trong khoảng:
                </p>
                <div className="text-center text-lg font-bold text-foreground bg-background/50 rounded p-3 mb-3">
                  5 điểm ≤ Trụ Cột ≤ 95 điểm
                </div>
                <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">✗</span>
                    <span><span className="font-bold text-red-500">Thất bại:</span> Bất kỳ trụ cột nào <span className="font-bold">dưới 5</span> điểm → Trụ cột sụp đổ!</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-0.5">✗</span>
                    <span><span className="font-bold text-red-500">Thất bại:</span> Bất kỳ trụ cột nào <span className="font-bold">trên 95</span> điểm → Mất cân bằng!</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-0.5">✓</span>
                    <span>
                      <span className="font-bold text-green-500">
                        Chiến thắng:
                      </span>{" "}
                      Trả lời hết tất cả câu hỏi của chủ đề mà vẫn giữ được cân bằng!
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Cơ chế quyết định */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <span className="text-2xl">🤔</span>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">
                  Cơ Chế Quyết Định
                </h2>
              </div>
              
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Mỗi tình huống, bạn sẽ có các lựa chọn khác nhau. Mỗi lựa chọn có hai phần quan trọng:
              </p>

              {/* Giá phải trả */}
              <div className="border-2 border-orange-500/30 bg-orange-500/5 rounded-lg p-4">
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <span>💸</span> 1. Giá Phải Trả (Cost)
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-3">
                  Đây là <span className="font-bold text-orange-500">chi phí trước</span> khi thực hiện quyết định. 
                  Bạn phải có đủ điểm ở các trụ cột thì mới chọn được!
                </p>
                <div className="bg-background/50 rounded p-3 text-xs md:text-sm">
                  <div className="font-mono text-orange-500 mb-1">Trả trước:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-orange-500">💰 -15</span>
                    <span className="text-orange-500">🙂 -10</span>
                    <span className="text-orange-500">⚔️ -8</span>
                    <span className="text-orange-500">🛡️ -5</span>
                  </div>
                  <p className="text-muted-foreground mt-2 italic">
                    → Bạn cần có ít nhất 15 Tài chính, 10 Dân sinh, 8 Quân sự, 5 Hệ tư tưởng mới chọn được
                  </p>
                </div>
              </div>

              {/* Kết quả */}
              <div className="border-2 border-green-500/30 bg-green-500/5 rounded-lg p-4">
                <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                  <span>🎁</span> 2. Kết Quả (Effects)
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-3">
                  Đây là <span className="font-bold text-green-500">hiệu ứng sau</span> khi thực hiện quyết định. 
                  Hiệu ứng được áp dụng để thay đổi điểm số các trụ cột.
                </p>
                <div className="bg-background/50 rounded p-3 text-xs md:text-sm">
                  <div className="font-mono text-foreground mb-1">Kết quả:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-green-500">💰 +20</span>
                    <span className="text-green-500">🙂 +15</span>
                    <span className="text-red-500">⚔️ -10</span>
                    <span className="text-red-500">🛡️ -5</span>
                  </div>
                  <p className="text-muted-foreground mt-2 italic">
                    → Sau khi trả giá, bạn được +20 Tài chính, +15 Dân sinh, -10 Quân sự, -5 Hệ tư tưởng
                  </p>
                </div>
              </div>
            </section>

            {/* Mẹo chơi */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <span className="text-2xl">💡</span>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">
                  Mẹo Để Tồn Tại
                </h2>
              </div>
              
              <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">1.</span>
                  <span><span className="font-bold text-foreground">Đừng quá tham lam:</span> Không nhất thiết phải tăng mọi thứ lên 100. Giữ cân bằng quan trọng hơn!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">2.</span>
                  <span><span className="font-bold text-foreground">Kiểm tra giá trước khi chọn:</span> Một lựa chọn tốt nhưng không đủ điểm chọn cũng vô ích.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">3.</span>
                  <span><span className="font-bold text-foreground">Hy sinh chiến thuật:</span> Đôi khi phải chấp nhận giảm một trụ cột để cứu trụ cột khác.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">4.</span>
                  <span><span className="font-bold text-foreground">Đọc kỹ mô tả:</span> Mỗi lựa chọn có gợi ý về rủi ro và lợi ích.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold mt-0.5">5.</span>
                  <span><span className="font-bold text-foreground">Đọc kỹ hiệu ứng:</span> Chú ý tác động cụ thể của từng lựa chọn đến các trụ cột!</span>
                </li>
              </ul>
            </section>

            {/* Kết */}
            <section className="text-center space-y-3 border-t-2 border-border pt-6">
              <p className="text-base md:text-lg font-bold text-foreground italic">
                "Lãnh đạo cách mạng là nghệ thuật cân bằng và tôn trọng quy luật khách quan"
              </p>
              <p className="text-sm text-muted-foreground">
                Chúc bạn hoàn thành xuất sắc nhiệm vụ cách mạng! ⭐️
              </p>
            </section>
          </div>
          <div className="border-t-2 border-border p-4 bg-secondary/30">
            <Button onClick={onBack} className="w-full" size="lg">
              ← Trở Về Màn Hình Chính
            </Button>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
