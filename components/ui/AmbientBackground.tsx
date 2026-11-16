import React from "react"

/**
 * AmbientBackground
 * Modern, subtle translucent canvas background inspired by Android UI layers.
 * Provides ambient depth with low-opacity electric purple/silver radial gradients.
 * Strictly non-interactive (pointer-events-none) to protect all click targets.
 */
export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Top Hero Ambient Aura (Soft Electric Purple) */}
      <div
        className="absolute -top-[15%] -left-[10%] w-[680px] h-[680px] rounded-full opacity-70 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 61, 255, 0.08) 0%, rgba(100, 37, 208, 0.03) 40%, transparent 70%)",
        }}
      />

      {/* Middle Right Ambient Aura (Deep Purple & Subtle Silver) */}
      <div
        className="absolute top-[32%] -right-[12%] w-[720px] h-[720px] rounded-full opacity-60 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(100, 37, 208, 0.06) 0%, rgba(217, 220, 229, 0.35) 45%, transparent 70%)",
        }}
      />

      {/* Lower Left Ambient Aura (Subtle Metallic & Purple Glow) */}
      <div
        className="absolute top-[68%] -left-[12%] w-[760px] h-[760px] rounded-full opacity-60 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 61, 255, 0.05) 0%, rgba(217, 220, 229, 0.3) 50%, transparent 70%)",
        }}
      />

      {/* Fine Architectural Grid Texture */}
      <div className="absolute inset-0 bg-grid-subtle opacity-45 pointer-events-none" />
    </div>
  )
}
