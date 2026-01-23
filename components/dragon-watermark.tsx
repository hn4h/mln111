/**
 * DragonWatermark - Hình rồng thời Lý làm watermark
 * 
 * Rồng thời Lý đặc trưng:
 * - Thân dài uốn khúc hình sin (S-shape)
 * - Không có vảy, thanh thoát mềm mại
 * - Đầu nhỏ, bờm dài bay lượn
 */

import type React from "react"

interface DragonWatermarkProps {
    /** Opacity của watermark (0-1), mặc định 0.03 */
    opacity?: number
    /** Vị trí: 'center' hoặc 'bottom' */
    position?: "center" | "bottom"
    /** Màu rồng, mặc định kế thừa từ foreground */
    color?: string
    /** Kích thước tương đối, mặc định 80% chiều rộng viewport */
    size?: string
}

export function DragonWatermark({
    opacity = 0.03,
    position = "bottom",
    color = "currentColor",
    size = "min(80vw, 800px)",
}: DragonWatermarkProps): React.ReactElement {
    const positionStyles =
        position === "center"
            ? { top: "50%", left: "50%", transform: "translate(-50%, -50%)" }
            : { bottom: "5%", left: "50%", transform: "translateX(-50%)" }

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed z-0 select-none"
            style={{
                ...positionStyles,
                width: size,
                opacity,
                color,
            }}
        >
            <svg
                viewBox="0 0 800 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-auto w-full"
                aria-label="Rồng thời Lý watermark"
            >
                {/* Thân rồng chính - đường cong sin uốn lượn */}
                <path
                    d="M50 150 
             C100 80, 150 220, 200 150 
             C250 80, 300 220, 350 150 
             C400 80, 450 220, 500 150 
             C550 80, 600 220, 650 150 
             C700 80, 750 150, 780 130"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    fill="none"
                />

                {/* Đường viền thân mềm mại - tạo độ dày */}
                <path
                    d="M50 150 
             C100 90, 150 210, 200 150 
             C250 90, 300 210, 350 150 
             C400 90, 450 210, 500 150 
             C550 90, 600 210, 650 150 
             C700 90, 750 150, 780 135"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.5"
                />

                {/* Đầu rồng - nhỏ thanh thoát */}
                <ellipse cx="45" cy="150" rx="15" ry="10" fill="currentColor" opacity="0.8" />

                {/* Mắt rồng */}
                <circle cx="38" cy="147" r="3" fill="currentColor" />

                {/* Bờm dài bay lượn từ đầu */}
                <path
                    d="M55 145 C70 120, 60 100, 80 90 M55 148 C75 130, 65 105, 90 95 M55 152 C80 140, 70 115, 100 105"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.7"
                />

                {/* Râu rồng */}
                <path
                    d="M30 150 C10 145, 5 160, 15 170 M30 152 C15 155, 10 175, 25 180"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.6"
                />

                {/* Đuôi rồng - mảnh và xoắn */}
                <path
                    d="M780 130 C790 120, 795 110, 785 100 C775 90, 790 80, 780 70"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                />

                {/* Chân rồng - 4 chân nhỏ thanh mảnh */}
                <g opacity="0.7">
                    {/* Chân 1 */}
                    <path
                        d="M150 165 C155 190, 145 200, 155 210 M155 210 L150 215 M155 210 L160 215"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                    />
                    {/* Chân 2 */}
                    <path
                        d="M300 165 C305 185, 295 195, 305 205 M305 205 L300 210 M305 205 L310 210"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                    />
                    {/* Chân 3 */}
                    <path
                        d="M450 165 C455 185, 445 195, 455 205 M455 205 L450 210 M455 205 L460 210"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                    />
                    {/* Chân 4 */}
                    <path
                        d="M600 165 C605 185, 595 195, 605 205 M605 205 L600 210 M605 205 L610 210"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                    />
                </g>

                {/* Vân mây trang trí nhẹ */}
                <g opacity="0.3">
                    <path
                        d="M120 80 C130 75, 140 80, 135 90 C145 85, 150 95, 140 100"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                    />
                    <path
                        d="M380 70 C390 65, 400 70, 395 80 C405 75, 410 85, 400 90"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                    />
                    <path
                        d="M620 75 C630 70, 640 75, 635 85 C645 80, 650 90, 640 95"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                    />
                </g>
            </svg>
        </div>
    )
}

export default DragonWatermark
