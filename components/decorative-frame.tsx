/**
 * DecorativeFrame - Khung trang trí cổ điển thời Lý
 * 
 * Bao gồm:
 * - Họa tiết lá bồ đề/vân mây ở 4 góc
 * - Viền kép (double border) màu đỏ son trầm
 * - Họa tiết kỷ hà đơn giản giữa hai đường viền
 */

import type React from "react"

interface DecorativeFrameProps {
    children: React.ReactNode
    /** Màu viền chính, mặc định đỏ son trầm */
    borderColor?: string
    /** Khoảng cách padding bên trong */
    padding?: string
}

/** SVG họa tiết vân mây cổ cho góc */
function CloudOrnament({
    className,
    style
}: {
    className?: string
    style?: React.CSSProperties
}) {
    return (
        <svg
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={style}
            aria-hidden="true"
        >
            {/* Vân mây xoắn chính */}
            <path
                d="M20 100 
           C30 90, 25 75, 40 70
           C50 65, 45 50, 60 50
           C70 50, 65 35, 80 35
           C90 35, 85 25, 100 20"
                stroke="currentColor"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
            />
            {/* Đường xoắn phụ */}
            <path
                d="M25 95 
           C35 88, 32 78, 45 75
           C52 72, 50 62, 58 58"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.7"
            />
            {/* Cuộn xoắn nhỏ */}
            <path
                d="M45 70 C48 65, 42 60, 48 55"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.6"
            />
            {/* Lá bồ đề nhỏ */}
            <path
                d="M85 30 
           C90 25, 95 28, 95 35 
           C95 42, 90 48, 85 50 
           C80 48, 75 42, 75 35 
           C75 28, 80 25, 85 30"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="currentColor"
                fillOpacity="0.15"
            />
            {/* Gân lá */}
            <path
                d="M85 32 L85 48"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.5"
            />
        </svg>
    )
}

/** SVG họa tiết kỷ hà cho viền */
function GeometricPattern({ color }: { color: string }) {
    return (
        <svg
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <defs>
                {/* Pattern kỷ hà đơn giản - hình thoi xen kẽ */}
                <pattern
                    id="geometric-border-pattern"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    patternUnits="userSpaceOnUse"
                >
                    {/* Hình thoi */}
                    <path
                        d="M12 2 L22 12 L12 22 L2 12 Z"
                        stroke={color}
                        strokeWidth="1"
                        fill="none"
                        opacity="0.4"
                    />
                    {/* Chấm tâm */}
                    <circle cx="12" cy="12" r="2" fill={color} opacity="0.3" />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#geometric-border-pattern)" />
        </svg>
    )
}

export function DecorativeFrame({
    children,
    borderColor = "#8B0000",
    padding = "2rem",
}: DecorativeFrameProps): React.ReactElement {
    const cornerSize = "80px"
    const ornamentOpacity = 0.6

    return (
        <div className="relative min-h-screen">
            {/* Lớp viền ngoài */}
            <div
                className="pointer-events-none fixed inset-2 z-10 md:inset-3 lg:inset-4"
                style={{
                    border: `3px solid ${borderColor}`,
                    borderRadius: "4px",
                }}
            >
                {/* Lớp pattern kỷ hà giữa 2 viền */}
                <div
                    className="absolute inset-0"
                    style={{
                        margin: "6px",
                        opacity: 0.06,
                    }}
                >
                    <GeometricPattern color={borderColor} />
                </div>

                {/* Lớp viền trong */}
                <div
                    className="absolute inset-0"
                    style={{
                        margin: "12px",
                        border: `2px solid ${borderColor}`,
                        borderRadius: "2px",
                    }}
                />

                {/* Họa tiết góc trên trái */}
                <CloudOrnament
                    className="absolute"
                    style={{
                        top: "-10px",
                        left: "-10px",
                        width: cornerSize,
                        height: cornerSize,
                        color: borderColor,
                        opacity: ornamentOpacity,
                        transform: "rotate(0deg)",
                    }}
                />

                {/* Họa tiết góc trên phải */}
                <CloudOrnament
                    className="absolute"
                    style={{
                        top: "-10px",
                        right: "-10px",
                        width: cornerSize,
                        height: cornerSize,
                        color: borderColor,
                        opacity: ornamentOpacity,
                        transform: "rotate(90deg)",
                    }}
                />

                {/* Họa tiết góc dưới phải */}
                <CloudOrnament
                    className="absolute"
                    style={{
                        bottom: "-10px",
                        right: "-10px",
                        width: cornerSize,
                        height: cornerSize,
                        color: borderColor,
                        opacity: ornamentOpacity,
                        transform: "rotate(180deg)",
                    }}
                />

                {/* Họa tiết góc dưới trái */}
                <CloudOrnament
                    className="absolute"
                    style={{
                        bottom: "-10px",
                        left: "-10px",
                        width: cornerSize,
                        height: cornerSize,
                        color: borderColor,
                        opacity: ornamentOpacity,
                        transform: "rotate(270deg)",
                    }}
                />
            </div>

            {/* Nội dung chính */}
            <div
                className="relative z-0"
                style={{
                    padding: `calc(${padding} + 0.5rem)`,
                    minHeight: "100vh",
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default DecorativeFrame
