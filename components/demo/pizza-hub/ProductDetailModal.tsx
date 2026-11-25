"use client"

import React, { useEffect, useState } from "react"
import { X, Plus, Minus, ShoppingBag, Store, Flame } from "lucide-react"
import { DemoAddon, DemoPizza, PizzaSize } from "@/data/pizzaHubDemo"

interface ProductDetailModalProps {
  pizza: DemoPizza | null
  onClose: () => void
  onAddToCart: (payload: {
    pizza: DemoPizza
    size: PizzaSize
    addons: DemoAddon[]
    note: string
    quantity: number
  }) => void
}

const SIZES: PizzaSize[] = ["Small", "Medium", "Large"]

export default function ProductDetailModal({
  pizza,
  onClose,
  onAddToCart,
}: ProductDetailModalProps) {
  const [size, setSize] = useState<PizzaSize>("Medium")
  const [selectedAddons, setSelectedAddons] = useState<DemoAddon[]>([])
  const [note, setNote] = useState("")
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    if (!pizza) return
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [pizza, onClose])

  if (!pizza) return null

  const toggleAddon = (addon: DemoAddon) => {
    setSelectedAddons((prev) =>
      prev.some((a) => a.id === addon.id)
        ? prev.filter((a) => a.id !== addon.id)
        : [...prev, addon]
    )
  }

  const addonTotal = selectedAddons.reduce((sum, a) => sum + a.price, 0)
  const unitPrice = pizza.prices[size] + addonTotal
  const lineTotal = unitPrice * quantity

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddToCart({
      pizza,
      size,
      addons: selectedAddons,
      note: note.trim(),
      quantity,
    })
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pizza-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-3xl bg-[#1A1A1A] border border-[#2A2A2A] text-[#F0F0F0] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Visual Header Banner */}
        <div className={`relative p-6 bg-gradient-to-br ${pizza.accentGradient} border-b border-[#2A2A2A]`}>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close product details"
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2 text-xs">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E8401C]/20 border border-[#E8401C]/40 text-[#F39C12] font-semibold">
              <Store className="w-3 h-3" aria-hidden="true" />
              {pizza.restaurantName}
            </span>
            {pizza.tag && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-semibold">
                <Flame className="w-3 h-3" aria-hidden="true" />
                {pizza.tag}
              </span>
            )}
          </div>

          <h2 id="pizza-modal-title" className="text-xl sm:text-2xl font-bold text-white pr-8">
            {pizza.name}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
            {pizza.description}
          </p>
        </div>

        {/* Scrollable Customization Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 overflow-y-auto">
          {/* Ingredients */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Ingredients
            </p>
            <div className="flex flex-wrap gap-1.5">
              {pizza.ingredients.map((ing) => (
                <span
                  key={ing}
                  className="px-2.5 py-1 rounded-lg bg-[#222222] border border-[#2A2A2A] text-xs text-neutral-300"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2.5">
              Select Size *
            </p>
            <div className="grid grid-cols-3 gap-2.5">
              {SIZES.map((s) => {
                const active = size === s
                return (
                  <button
                    key={s}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setSize(s)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      active
                        ? "bg-[#E8401C]/15 border-[#E8401C] text-white"
                        : "bg-[#222222] border-[#2A2A2A] text-neutral-400 hover:border-neutral-600"
                    }`}
                  >
                    <div className="text-xs font-bold">{s}</div>
                    <div className="text-xs font-semibold text-[#F39C12] mt-0.5">
                      Rs. {pizza.prices[s].toLocaleString()}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Optional Add-ons */}
          {pizza.addons.length > 0 && (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2.5">
                Optional Add-Ons
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {pizza.addons.map((addon) => {
                  const checked = selectedAddons.some((a) => a.id === addon.id)
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      aria-pressed={checked}
                      onClick={() => toggleAddon(addon)}
                      className={`px-3 py-2.5 rounded-xl border flex items-center justify-between text-xs transition-all cursor-pointer ${
                        checked
                          ? "bg-[#F39C12]/15 border-[#F39C12] text-white"
                          : "bg-[#222222] border-[#2A2A2A] text-neutral-300 hover:border-neutral-600"
                      }`}
                    >
                      <span className="font-medium">{addon.name}</span>
                      <span className="text-[#F39C12] font-semibold">
                        +Rs. {addon.price}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Special Kitchen Note */}
          <div>
            <label
              htmlFor="pizza-kitchen-note"
              className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2"
            >
              Special Kitchen Note (Optional)
            </label>
            <input
              id="pizza-kitchen-note"
              type="text"
              maxLength={80}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="e.g. Light spice, extra crispy crust..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#111111] border border-[#2A2A2A] text-sm text-white placeholder-neutral-500 focus:border-[#E8401C] focus:outline-none"
            />
          </div>

          {/* Quantity & Add CTA */}
          <div className="pt-3 border-t border-[#2A2A2A] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="flex items-center justify-between sm:justify-start gap-3 bg-[#111111] border border-[#2A2A2A] rounded-xl px-3 py-2">
              <span className="text-xs text-neutral-400 font-semibold sm:hidden">Qty:</span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-1 rounded-lg bg-[#222222] hover:bg-[#2A2A2A] text-white cursor-pointer"
                >
                  <Minus className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
                <span className="text-sm font-bold min-w-[20px] text-center">{quantity}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => Math.min(20, q + 1))}
                  className="p-1 rounded-lg bg-[#222222] hover:bg-[#2A2A2A] text-white cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#E8401C] hover:bg-[#d13716] text-white font-bold text-sm transition-colors cursor-pointer shadow-lg shadow-[#E8401C]/20"
            >
              <ShoppingBag className="w-4 h-4" aria-hidden="true" />
              <span>Add to Cart — Rs. {lineTotal.toLocaleString()}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
