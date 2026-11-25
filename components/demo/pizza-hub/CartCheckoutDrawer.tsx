"use client"

import React, { useEffect, useState } from "react"
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Tag,
  Info,
  Bike,
} from "lucide-react"
import { CartItem, DemoOrder, ORDER_STATUS_STEPS } from "@/data/pizzaHubDemo"

interface CartCheckoutDrawerProps {
  open: boolean
  view: "cart" | "checkout" | "confirmation"
  onChangeView: (v: "cart" | "checkout" | "confirmation") => void
  onClose: () => void
  items: CartItem[]
  onUpdateQty: (key: string, delta: number) => void
  onRemoveItem: (key: string) => void
  promoCode: string
  onPromoChange: (code: string) => void
  promoApplied: boolean
  onApplyPromo: () => void
  subtotal: number
  deliveryFee: number
  discount: number
  total: number
  activeOrder: DemoOrder | null
  onPlaceOrder: (form: {
    customerName: string
    phone: string
    address: string
    paymentMethod: DemoOrder["paymentMethod"]
  }) => void
  onAdvanceOrderStatus: () => void
  onResetForNewOrder: () => void
}

const PAYMENT_OPTIONS: DemoOrder["paymentMethod"][] = [
  "Cash on Delivery (Demo)",
  "JazzCash Simulation",
  "Stripe Test Simulation",
]

export default function CartCheckoutDrawer({
  open,
  view,
  onChangeView,
  onClose,
  items,
  onUpdateQty,
  onRemoveItem,
  promoCode,
  onPromoChange,
  promoApplied,
  onApplyPromo,
  subtotal,
  deliveryFee,
  discount,
  total,
  activeOrder,
  onPlaceOrder,
  onAdvanceOrderStatus,
  onResetForNewOrder,
}: CartCheckoutDrawerProps) {
  const [customerName, setCustomerName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [paymentMethod, setPaymentMethod] =
    useState<DemoOrder["paymentMethod"]>("Cash on Delivery (Demo)")
  const [formError, setFormError] = useState("")

  useEffect(() => {
    if (!open) return
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [open, onClose])

  if (!open) return null

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (customerName.trim().length < 2) {
      setFormError("Please enter a sample customer name (at least 2 characters).")
      return
    }
    if (phone.trim().length < 7) {
      setFormError("Please enter a valid sample phone number.")
      return
    }
    if (address.trim().length < 5) {
      setFormError("Please enter a sample delivery address in Vehari.")
      return
    }
    setFormError("")
    onPlaceOrder({
      customerName: customerName.trim(),
      phone: phone.trim(),
      address: address.trim(),
      paymentMethod,
    })
  }

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label="Order Cart and Demo Checkout"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-[#161616] border-l border-[#2A2A2A] text-[#F0F0F0] h-full flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#2A2A2A] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {view === "checkout" && (
              <button
                type="button"
                onClick={() => onChangeView("cart")}
                aria-label="Back to cart"
                className="p-1.5 rounded-lg bg-[#222222] hover:bg-[#2A2A2A] text-neutral-300 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              </button>
            )}
            <ShoppingBag className="w-5 h-5 text-[#E8401C]" aria-hidden="true" />
            <h2 className="text-base font-bold text-white">
              {view === "cart" && "Your Demo Cart"}
              {view === "checkout" && "Demo Checkout"}
              {view === "confirmation" && "Demo Order Confirmed"}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart drawer"
            className="p-2 rounded-full bg-[#222222] hover:bg-[#2A2A2A] text-neutral-300 cursor-pointer"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Notice Banner */}
        <div className="px-5 py-2.5 bg-amber-500/10 border-b border-amber-500/20 flex items-center gap-2 text-[11px] text-amber-200">
          <Info className="w-3.5 h-3.5 text-[#F39C12] shrink-0" aria-hidden="true" />
          <span>Demo Simulation Only — No real payment or live delivery is dispatched.</span>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-5">
          {view === "cart" && (
            <>
              {items.length === 0 ? (
                <div className="text-center py-16 px-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#222222] border border-[#2A2A2A] mx-auto flex items-center justify-center mb-4 text-[#F39C12]">
                    <ShoppingBag className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-1.5">
                    Your demo cart is empty
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-5">
                    Select any pizza from the sample menu, pick a size or toppings, and add it to test the full cart and checkout experience.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-xl bg-[#E8401C] hover:bg-[#d13716] text-white text-xs font-bold cursor-pointer"
                  >
                    Browse Sample Menu
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.key}
                      className="p-4 rounded-2xl bg-[#1F1F1F] border border-[#2A2A2A] space-y-2.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-[11px] text-[#F39C12] font-semibold">
                            {item.restaurantName}
                          </p>
                          <h3 className="text-sm font-bold text-white">{item.name}</h3>
                          <p className="text-xs text-neutral-400 mt-0.5">Size: {item.size}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.key)}
                          aria-label={`Remove ${item.name}`}
                          className="p-1.5 rounded-lg text-neutral-400 hover:text-red-400 hover:bg-red-500/10 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                      </div>

                      {item.addons.length > 0 && (
                        <p className="text-[11px] text-neutral-400">
                          Add-ons: {item.addons.map((a) => a.name).join(", ")}
                        </p>
                      )}
                      {item.note && (
                        <p className="text-[11px] text-neutral-400 italic">
                          Note: &ldquo;{item.note}&rdquo;
                        </p>
                      )}

                      <div className="pt-2 border-t border-[#2A2A2A] flex items-center justify-between">
                        <div className="flex items-center gap-2.5 bg-[#111111] border border-[#2A2A2A] rounded-lg px-2 py-1">
                          <button
                            type="button"
                            aria-label={`Decrease quantity for ${item.name}`}
                            onClick={() => onUpdateQty(item.key, -1)}
                            className="p-1 text-neutral-300 hover:text-white cursor-pointer"
                          >
                            <Minus className="w-3 h-3" aria-hidden="true" />
                          </button>
                          <span className="text-xs font-bold min-w-[16px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            aria-label={`Increase quantity for ${item.name}`}
                            onClick={() => onUpdateQty(item.key, 1)}
                            className="p-1 text-neutral-300 hover:text-white cursor-pointer"
                          >
                            <Plus className="w-3 h-3" aria-hidden="true" />
                          </button>
                        </div>
                        <span className="text-sm font-bold text-white">
                          Rs. {(item.unitPrice * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}

                  {/* Promo Code Box */}
                  <div className="p-3.5 rounded-2xl bg-[#1F1F1F] border border-[#2A2A2A] space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-300">
                      <Tag className="w-3.5 h-3.5 text-[#F39C12]" aria-hidden="true" />
                      <span>Demo Promo Code (try PIZZA10)</span>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => onPromoChange(e.target.value.toUpperCase())}
                        placeholder="PIZZA10"
                        className="flex-1 px-3 py-2 rounded-lg bg-[#111111] border border-[#2A2A2A] text-xs text-white uppercase focus:border-[#F39C12] focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={onApplyPromo}
                        className="px-3.5 py-2 rounded-lg bg-[#2A2A2A] hover:bg-[#363636] text-xs font-bold text-white cursor-pointer"
                      >
                        Apply
                      </button>
                    </div>
                    {promoApplied && (
                      <p className="text-[11px] text-[#27AE60] font-semibold">
                        10% demo discount (PIZZA10) applied!
                      </p>
                    )}
                  </div>
                </div>
              )}
            </>
          )}

          {view === "checkout" && (
            <form id="demo-checkout-form" onSubmit={handleCheckoutSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="demo-customer-name"
                  className="block text-xs font-bold text-neutral-300 mb-1.5"
                >
                  Sample Customer Name *
                </label>
                <input
                  id="demo-customer-name"
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Ayesha Khan (Demo)"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#111111] border border-[#2A2A2A] text-sm text-white focus:border-[#E8401C] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="demo-customer-phone"
                  className="block text-xs font-bold text-neutral-300 mb-1.5"
                >
                  Sample Contact Number *
                </label>
                <input
                  id="demo-customer-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="03XX-XXXXXXX"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#111111] border border-[#2A2A2A] text-sm text-white focus:border-[#E8401C] focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="demo-customer-address"
                  className="block text-xs font-bold text-neutral-300 mb-1.5"
                >
                  Sample Delivery Address (Vehari) *
                </label>
                <textarea
                  id="demo-customer-address"
                  rows={2}
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. Street 4, People's Colony, Vehari"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#111111] border border-[#2A2A2A] text-sm text-white focus:border-[#E8401C] focus:outline-none resize-none"
                />
              </div>

              <div>
                <p className="block text-xs font-bold text-neutral-300 mb-2">
                  Simulated Payment Method (No Real Charge)
                </p>
                <div className="space-y-2">
                  {PAYMENT_OPTIONS.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      aria-pressed={paymentMethod === opt}
                      onClick={() => setPaymentMethod(opt)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                        paymentMethod === opt
                          ? "bg-[#E8401C]/15 border-[#E8401C] text-white"
                          : "bg-[#1F1F1F] border-[#2A2A2A] text-neutral-400 hover:border-neutral-600"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {formError && (
                <p role="alert" className="text-xs text-red-400 font-medium">
                  {formError}
                </p>
              )}
            </form>
          )}

          {view === "confirmation" && activeOrder && (
            <div className="space-y-5">
              <div className="p-5 rounded-2xl bg-[#27AE60]/10 border border-[#27AE60]/30 text-center">
                <CheckCircle2
                  className="w-10 h-10 text-[#27AE60] mx-auto mb-2.5"
                  aria-hidden="true"
                />
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#27AE60]/20 text-[#27AE60] text-[10px] font-bold uppercase tracking-wider mb-2">
                  Demonstration Order Confirmed
                </span>
                <h3 className="text-lg font-bold text-white">{activeOrder.orderId}</h3>
                <p className="text-xs text-neutral-300 mt-1">
                  Simulated for {activeOrder.customerName} • {activeOrder.paymentMethod}
                </p>
              </div>

              {/* Simulated Live Dispatch Tracker */}
              <div className="p-4 rounded-2xl bg-[#1F1F1F] border border-[#2A2A2A] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Bike className="w-4 h-4 text-[#F39C12]" aria-hidden="true" />
                    <span>Simulated Dispatch Tracker</span>
                  </div>
                  <button
                    type="button"
                    onClick={onAdvanceOrderStatus}
                    disabled={activeOrder.statusIndex >= ORDER_STATUS_STEPS.length - 1}
                    className="px-2.5 py-1 rounded-lg bg-[#E8401C] hover:bg-[#d13716] disabled:opacity-40 text-[11px] font-bold text-white cursor-pointer"
                  >
                    Simulate Next Step
                  </button>
                </div>

                <div className="space-y-2.5">
                  {ORDER_STATUS_STEPS.map((st, idx) => {
                    const done = idx <= activeOrder.statusIndex
                    return (
                      <div key={st.label} className="flex items-start gap-2.5">
                        <span
                          className={`mt-1 w-2.5 h-2.5 rounded-full shrink-0 ${
                            done ? "bg-[#27AE60]" : "bg-[#333333]"
                          }`}
                        />
                        <div>
                          <div
                            className={`text-xs font-bold ${
                              done ? "text-white" : "text-neutral-500"
                            }`}
                          >
                            {st.label}
                          </div>
                          <div className="text-[11px] text-neutral-400">{st.detail}</div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Order Receipt Summary */}
              <div className="p-4 rounded-2xl bg-[#1F1F1F] border border-[#2A2A2A] space-y-2 text-xs">
                <p className="font-bold text-neutral-300 uppercase tracking-wider text-[11px] mb-2">
                  Demo Receipt
                </p>
                {activeOrder.items.map((item) => (
                  <div key={item.key} className="flex justify-between text-neutral-300">
                    <span>
                      {item.quantity}x {item.name} ({item.size})
                    </span>
                    <span className="font-semibold">
                      Rs. {(item.unitPrice * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
                <div className="pt-2 border-t border-[#2A2A2A] flex justify-between text-white font-bold text-sm">
                  <span>Demo Total</span>
                  <span>Rs. {activeOrder.total.toLocaleString()}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={onResetForNewOrder}
                className="w-full py-2.5 rounded-xl bg-[#222222] hover:bg-[#2A2A2A] text-white text-xs font-bold cursor-pointer"
              >
                Start Another Demo Order
              </button>
            </div>
          )}
        </div>

        {/* Footer Summary & Action */}
        {view !== "confirmation" && items.length > 0 && (
          <div className="p-5 border-t border-[#2A2A2A] bg-[#141414] space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-neutral-400">
                <span>Subtotal</span>
                <span>Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Sample Delivery Rate</span>
                <span>Rs. {deliveryFee.toLocaleString()}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-[#27AE60]">
                  <span>Demo Promo (10%)</span>
                  <span>-Rs. {discount.toLocaleString()}</span>
                </div>
              )}
              <div className="pt-1.5 border-t border-[#2A2A2A] flex justify-between text-sm font-bold text-white">
                <span>Order Total</span>
                <span className="text-[#F39C12]">Rs. {total.toLocaleString()}</span>
              </div>
            </div>

            {view === "cart" ? (
              <button
                type="button"
                onClick={() => onChangeView("checkout")}
                className="w-full py-3 px-4 rounded-xl bg-[#E8401C] hover:bg-[#d13716] text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <span>Proceed to Demo Checkout</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            ) : (
              <button
                type="submit"
                form="demo-checkout-form"
                className="w-full py-3 px-4 rounded-xl bg-[#27AE60] hover:bg-[#229954] text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <span>Confirm Demo Order</span>
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
