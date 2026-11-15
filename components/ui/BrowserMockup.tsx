import React from "react"
import Image from "next/image"
import { Lock } from "lucide-react"

interface BrowserMockupProps {
  src?: string
  alt?: string
  url?: string
  children?: React.ReactNode
  className?: string
}

export default function BrowserMockup({
  src,
  alt = "Project Preview",
  url = "https://app.preview",
  children,
  className = "",
}: BrowserMockupProps) {
  return (
    <div
      className={`rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-xl shadow-slate-900/5 ${className}`}
    >
      {/* Browser Navigation Chrome Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100/90 border-b border-slate-200 select-none">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
        </div>
        
        {/* URL Pill */}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200/80 text-[11px] text-slate-500 font-medium max-w-[220px] sm:max-w-xs truncate text-center shadow-2xs">
          <Lock className="w-3 h-3 text-slate-400 shrink-0" />
          <span className="truncate">{url}</span>
        </div>
        
        <div className="w-8" />
      </div>

      {/* Viewport Content */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            priority={false}
          />
        ) : (
          children
        )}
      </div>
    </div>
  )
}
