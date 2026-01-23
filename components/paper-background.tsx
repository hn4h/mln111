/**
 * PaperBackground - Nền giấy cổ với texture và hiệu ứng vignette
 * 
 * Tạo hiệu ứng:
 * - Màu giấy bản (#F4EBD0)
 * - Texture giấy nhám với vết loang lổ
 * - Vignette đổ bóng tối ở 4 góc
 */

import type React from "react"

interface PaperBackgroundProps {
    /** Màu nền giấy, mặc định #F4EBD0 */
    paperColor?: string
    /** Độ đậm của vignette (0-1), mặc định 0.15 */
    vignetteIntensity?: number
    /** Độ đậm của texture (0-1), mặc định 0.08 */
    textureIntensity?: number
}

export function PaperBackground({
    paperColor = "#F4EBD0",
    vignetteIntensity = 0.15,
    textureIntensity = 0.08,
}: PaperBackgroundProps): React.ReactElement {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 select-none"
            style={{ backgroundColor: paperColor }}
        >
            {/* Lớp texture giấy cũ với noise pattern */}
            <div
                className="absolute inset-0"
                style={{
                    opacity: textureIntensity,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    mixBlendMode: "multiply",
                }}
            />

            {/* Lớp vết loang lổ nhẹ của thời gian */}
            <div
                className="absolute inset-0"
                style={{
                    opacity: 0.04,
                    background: `
            radial-gradient(ellipse 80% 50% at 20% 30%, rgba(139, 90, 43, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 75% 70%, rgba(139, 90, 43, 0.3) 0%, transparent 45%),
            radial-gradient(ellipse 40% 30% at 50% 85%, rgba(139, 90, 43, 0.35) 0%, transparent 40%),
            radial-gradient(ellipse 50% 35% at 85% 20%, rgba(139, 90, 43, 0.25) 0%, transparent 45%),
            radial-gradient(ellipse 35% 25% at 10% 80%, rgba(139, 90, 43, 0.3) 0%, transparent 40%)
          `,
                    mixBlendMode: "multiply",
                }}
            />

            {/* Lớp các đốm nhỏ như vết ố vàng trên giấy cũ */}
            <svg
                className="absolute inset-0 h-full w-full"
                style={{ opacity: 0.03, mixBlendMode: "multiply" }}
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern id="aged-spots" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="30" r="8" fill="#8B5A2B" opacity="0.4" />
                        <circle cx="80" cy="60" r="5" fill="#8B5A2B" opacity="0.3" />
                        <circle cx="150" cy="40" r="6" fill="#8B5A2B" opacity="0.35" />
                        <circle cx="40" cy="120" r="4" fill="#8B5A2B" opacity="0.25" />
                        <circle cx="120" cy="150" r="7" fill="#8B5A2B" opacity="0.3" />
                        <circle cx="180" cy="100" r="3" fill="#8B5A2B" opacity="0.4" />
                        <circle cx="60" cy="180" r="5" fill="#8B5A2B" opacity="0.35" />
                        <circle cx="140" cy="80" r="4" fill="#8B5A2B" opacity="0.25" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#aged-spots)" />
            </svg>

            {/* Lớp texture sợi giấy nhẹ */}
            <div
                className="absolute inset-0"
                style={{
                    opacity: 0.02,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 Q25 18, 50 22 T100 20' stroke='%238B5A2B' fill='none' stroke-width='0.5' opacity='0.5'/%3E%3Cpath d='M0 45 Q30 42, 60 48 T100 45' stroke='%238B5A2B' fill='none' stroke-width='0.4' opacity='0.4'/%3E%3Cpath d='M0 70 Q20 68, 45 73 T100 70' stroke='%238B5A2B' fill='none' stroke-width='0.5' opacity='0.5'/%3E%3Cpath d='M0 90 Q35 87, 70 93 T100 90' stroke='%238B5A2B' fill='none' stroke-width='0.3' opacity='0.4'/%3E%3C/svg%3E")`,
                    backgroundSize: "150px 150px",
                }}
            />

            {/* Hiệu ứng Vignette - đổ bóng tối ở 4 góc */}
            <div
                className="absolute inset-0"
                style={{
                    background: `radial-gradient(ellipse 80% 80% at center, transparent 40%, rgba(60, 40, 20, ${vignetteIntensity}) 100%)`,
                }}
            />

            {/* Thêm gradient nhẹ ở các cạnh để tăng hiệu ứng cổ điển */}
            <div
                className="absolute inset-0"
                style={{
                    opacity: 0.5,
                    background: `
            linear-gradient(to right, rgba(60, 40, 20, 0.08) 0%, transparent 5%, transparent 95%, rgba(60, 40, 20, 0.08) 100%),
            linear-gradient(to bottom, rgba(60, 40, 20, 0.06) 0%, transparent 5%, transparent 95%, rgba(60, 40, 20, 0.06) 100%)
          `,
                }}
            />
        </div>
    )
}

export default PaperBackground
