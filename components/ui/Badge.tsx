import React from "react"

interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "accent" | "success" | "warning" | "outline"
  className?: string
  size?: "sm" | "md"
}

export default function Badge({
  children,
  variant = "default",
  className = "",
  size = "sm",
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-semibold tracking-wide rounded-md transition-colors"

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[11px] leading-tight",
    md: "px-2.5 py-1 text-xs leading-normal",
  }

  const variantStyles = {
    default:
      "bg-white text-slate-700 border border-[#D9DCE5] hover:border-slate-400 shadow-2xs",
    accent:
      "bg-[#8B3DFF]/10 text-[#6425D0] border border-[#8B3DFF]/25 hover:bg-[#8B3DFF]/15",
    success:
      "bg-emerald-50 text-emerald-700 border border-emerald-200/80 hover:bg-emerald-100/60",
    warning:
      "bg-amber-50 text-amber-700 border border-amber-200/80 hover:bg-amber-100/60",
    outline:
      "bg-transparent text-slate-600 border border-[#D9DCE5] hover:text-slate-900 hover:border-slate-400",
  }

  return (
    <span
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
