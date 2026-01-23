import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { DragonWatermark } from "@/components/dragon-watermark"
import { PaperBackground } from "@/components/paper-background"
import { DecorativeFrame } from "@/components/decorative-frame"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vua Biện Chứng - Lịch Sử Việt Nam",
  description: "Trò chơi thẻ bài khám phá lịch sử Việt Nam qua tư duy biện chứng và sự cân bằng giữa các lực lượng đối lập",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className="font-sans antialiased">
        {/* Nền giấy cổ với texture và hiệu ứng vignette */}
        <PaperBackground
          paperColor="#F4EBD0"
          vignetteIntensity={0.12}
          textureIntensity={0.06}
        />
        {/* Watermark rồng thời Lý - ẩn nhẹ phía dưới trang */}
        <DragonWatermark opacity={0.04} position="bottom" />
        {/* Khung trang trí cổ điển với viền kép và họa tiết 4 góc */}
        <DecorativeFrame borderColor="#8B0000" padding="0.5rem">
          {children}
        </DecorativeFrame>
        <Analytics />
      </body>
    </html>
  )
}
