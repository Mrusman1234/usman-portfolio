"use client"

import React, { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowLeft,
  Pizza,
  Search,
  ShoppingBag,
  Store,
  MapPin,
  Plus,
  Bike,
  ShieldCheck,
  Utensils,
  Sparkles,
  CheckCircle2,
} from "lucide-react"
import {
  CartItem,
  DEMO_PIZZAS,
  DEMO_RESTAURANTS,
  DemoAddon,
  DemoOrder,
  DemoPizza,
  ORDER_STATUS_STEPS,
  PizzaCategory,
  PizzaSize,
} from "@/data/pizzaHubDemo"
import ProductDetailModal from "./ProductDetailModal"
import CartCheckoutDrawer from "./CartCheckoutDrawer"

const MENU_CATEGORIES: PizzaCategory[] = [
  "All",
  "Signature Pizzas",
  "Desi Fusion",
  "Deals & Combos",
  "Sides & Drinks",
]

const DEMO_DELIVERY_FEE = 150

export default function PizzaHubDemoClient() {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<string>("all")
  const [selectedCategory, setSelectedCategory] = useState<PizzaCategory>("All")
  const [searchQuery, setSearchQuery] = useState("")

  const [activePizza, setActivePizza] = useState<DemoPizza | null>(null)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerView, setDrawerView] = useState<"cart" | "checkout" | "confirmation">("cart")

  const [promoCode, setPromoCode] = useState("")
  const [promoApplied, setPromoApplied] = useState(false)
  const [activeOrder, setActiveOrder] = useState<DemoOrder | null>(null)
  const [addedToast, setAddedToast] = useState<string | null>(null)

  const filteredPizzas = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return DEMO_PIZZAS.filter((p) => {
      const matchRestaurant =
        selectedRestaurantId === "all" || p.restaurantId === selectedRestaurantId
      const matchCategory =
        selectedCategory === "All" || p.category === selectedCategory
      const matchQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.restaurantName.toLowerCase().includes(q)
      return matchRestaurant && matchCategory && matchQuery
    })
  }, [selectedRestaurantId, selectedCategory, searchQuery])

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  )

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0),
    [cartItems]
  )

  const deliveryFee = cartItems.length > 0 ? DEMO_DELIVERY_FEE : 0
  const discount = promoApplied ? Math.round(subtotal * 0.1) : 0
  const total = Math.max(0, subtotal + deliveryFee - discount)

  const handleAddToCart = ({
    pizza,
    size,
    addons,
    note,
    quantity,
  }: {
    pizza: DemoPizza
    size: PizzaSize
    addons: DemoAddon[]
    note: string
    quantity: number
  }) => {
    const addonIds = addons
      .map((a) => a.id)
      .sort()
      .join(",")
    const key = `${pizza.id}::${size}::${addonIds}::${note}`
    const unitPrice = pizza.prices[size] + addons.reduce((s, a) => s + a.price, 0)

    setCartItems((prev) => {
      const existing = prev.find((item) => item.key === key)
      if (existing) {
        return prev.map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + quantity } : item
        )
      }
      return [
        ...prev,
        {
          key,
          pizzaId: pizza.id,
          name: pizza.name,
          restaurantName: pizza.restaurantName,
          size,
          addons,
          note,
          unitPrice,
          quantity,
        },
      ]
    })

    setAddedToast(`${pizza.name} (${size}) added to demo cart`)
    window.setTimeout(() => setAddedToast(null), 2600)
  }

  const handleUpdateQty = (key: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.key === key ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const handleRemoveItem = (key: string) => {
    setCartItems((prev) => prev.filter((item) => item.key !== key))
  }

  const handleApplyPromo = () => {
    setPromoApplied(promoCode.trim().toUpperCase() === "PIZZA10")
  }

  const handlePlaceOrder = (form: {
    customerName: string
    phone: string
    address: string
    paymentMethod: DemoOrder["paymentMethod"]
  }) => {
    const order: DemoOrder = {
      orderId: `DEMO-${Math.floor(100000 + Math.random() * 900000)}`,
      customerName: form.customerName,
      phone: form.phone,
      address: form.address,
      paymentMethod: form.paymentMethod,
      items: cartItems,
      subtotal,
      deliveryFee,
      discount,
      total,
      createdAt: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      statusIndex: 0,
    }
    setActiveOrder(order)
    setCartItems([])
    setPromoApplied(false)
    setPromoCode("")
    setDrawerView("confirmation")
  }

  const handleAdvanceOrderStatus = () => {
    setActiveOrder((prev) =>
      prev && prev.statusIndex < ORDER_STATUS_STEPS.length - 1
        ? { ...prev, statusIndex: prev.statusIndex + 1 }
        : prev
    )
  }

  const openCart = () => {
    setDrawerView(cartItems.length > 0 ? "cart" : activeOrder ? "confirmation" : "cart")
    setDrawerOpen(true)
  }

  return (
    <div className="relative z-10 min-h-screen bg-[#111111] text-[#F0F0F0]">
      {/* Demo Disclaimer Strip */}
      <div className="bg-[#1A1A1A] border-b border-[#2A2A2A] px-4 py-2 text-center text-xs text-neutral-300">
        <span className="inline-flex items-center gap-2 flex-wrap justify-center">
          <span className="px-2 py-0.5 rounded-full bg-[#E8401C]/20 text-[#F39C12] font-bold text-[10px] uppercase tracking-wider">
            Interactive Prototype Demo
          </span>
          <span>
            Simulated web storefront modeled on the{" "}
            <strong className="text-white">Online Pizza Hub Vehari</strong> Flutter/Firebase architecture — sample menus &amp; demo checkout only.
          </span>
        </span>
      </div>

      {/* Demo Header Navigation */}
      <header className="sticky top-0 z-30 bg-[#111111]/90 backdrop-blur-md border-b border-[#2A2A2A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/projects/online-pizza-hub"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#F39C12]/60 text-xs font-semibold text-neutral-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Back to Case Study</span>
            </Link>

            <div className="hidden sm:flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#E8401C] flex items-center justify-center text-white">
                <Pizza className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <div className="text-sm font-bold text-white leading-tight">
                  Online Pizza Hub
                </div>
                <div className="text-[10px] font-semibold text-[#F39C12] uppercase tracking-wider">
                  Vehari • Interactive Demo
                </div>
              </div>
            </div>
          </div>

          <nav aria-label="Demo Navigation" className="hidden md:flex items-center gap-6 text-xs font-semibold text-neutral-300">
            <a href="#demo-home" className="hover:text-[#F39C12] transition-colors">
              Home
            </a>
            <a href="#demo-restaurants" className="hover:text-[#F39C12] transition-colors">
              Restaurants
            </a>
            <a href="#demo-menu" className="hover:text-[#F39C12] transition-colors">
              Pizza Menu
            </a>
            <a href="#demo-tracker" className="hover:text-[#F39C12] transition-colors">
              Demo Order Status
            </a>
          </nav>

          <button
            type="button"
            onClick={openCart}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8401C] hover:bg-[#d13716] text-white text-xs font-bold transition-colors cursor-pointer shadow-md shadow-[#E8401C]/20"
          >
            <ShoppingBag className="w-4 h-4" aria-hidden="true" />
            <span>Cart</span>
            <span className="px-1.5 py-0.5 rounded-full bg-black/30 text-[11px]">
              {cartCount}
            </span>
          </button>
        </div>
      </header>

      {/* Added-to-cart Toast */}
      {addedToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 px-4 py-2.5 rounded-full bg-[#27AE60] text-white text-xs font-bold shadow-xl flex items-center gap-2"
        >
          <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
          <span>{addedToast}</span>
        </div>
      )}

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* 1. Demo Homepage Hero */}
        <section
          id="demo-home"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1C1412] via-[#171717] to-[#1A1A1A] border border-[#2A2A2A]"
        >
          <div className="lg:col-span-6 space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8401C]/20 border border-[#E8401C]/40 text-[#F39C12] text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Welcome to Online Pizza Hub Vehari (Demo)</span>
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Delicious Pizza{" "}
              <span className="text-[#F39C12]">Just a Click Away!</span>
            </h1>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Explore sample local kitchen storefronts, customize pizza sizes and toppings, manage your cart, and walk through our simulated order confirmation and rider dispatch pipeline.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#demo-menu"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#E8401C] hover:bg-[#d13716] text-white font-bold text-sm transition-colors"
              >
                <Utensils className="w-4 h-4" aria-hidden="true" />
                <span>Order Now</span>
              </a>
              <a
                href="#demo-restaurants"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#222222] hover:bg-[#2A2A2A] border border-[#333333] text-neutral-200 font-semibold text-sm transition-colors"
              >
                <Store className="w-4 h-4 text-[#F39C12]" aria-hidden="true" />
                <span>Browse Restaurants</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2 border-t border-[#2A2A2A] text-xs text-neutral-300">
              <div className="flex items-center gap-1.5">
                <Store className="w-3.5 h-3.5 text-[#F39C12] shrink-0" aria-hidden="true" />
                <span>Multi-Kitchen</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Bike className="w-3.5 h-3.5 text-[#E8401C] shrink-0" aria-hidden="true" />
                <span>Simulated Dispatch</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#27AE60] shrink-0" aria-hidden="true" />
                <span>Safe Demo Mode</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-[#2A2A2A] shadow-2xl">
              <Image
                src="/online-pizza-hub-preview.jpg"
                alt="Online Pizza Hub Vehari multi-restaurant food ordering Flutter and Firebase showcase by Usman Dev"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* 2. Restaurant Listing */}
        <section id="demo-restaurants" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#F39C12] mb-1">
                Sample Kitchen Storefronts
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Vehari Partner Storefronts (Demo Data)
              </h2>
            </div>
            {selectedRestaurantId !== "all" && (
              <button
                type="button"
                onClick={() => setSelectedRestaurantId("all")}
                className="text-xs font-bold text-[#F39C12] hover:underline self-start sm:self-auto cursor-pointer"
              >
                Show All Restaurants
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {DEMO_RESTAURANTS.map((rest) => {
              const selected = selectedRestaurantId === rest.id
              return (
                <button
                  key={rest.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() =>
                    setSelectedRestaurantId((prev) =>
                      prev === rest.id ? "all" : rest.id
                    )
                  }
                  className={`text-left p-5 rounded-2xl border transition-all cursor-pointer ${
                    selected
                      ? "bg-[#E8401C]/12 border-[#E8401C] shadow-lg shadow-[#E8401C]/10"
                      : "bg-[#1A1A1A] border-[#2A2A2A] hover:border-neutral-600"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                      style={{ backgroundColor: `${rest.accentColor}26`, color: rest.accentColor }}
                    >
                      <Store className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#222222] text-[11px] font-semibold text-neutral-300">
                      Zone: {rest.deliveryZoneKm} km
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">{rest.name}</h3>
                  <p className="text-xs text-neutral-400 mb-2">{rest.cuisine}</p>
                  <div className="flex items-center gap-1.5 text-[11px] text-neutral-400">
                    <MapPin className="w-3.5 h-3.5 text-[#F39C12] shrink-0" aria-hidden="true" />
                    <span>{rest.area}</span>
                  </div>
                </button>
              )
            })}
          </div>
        </section>

        {/* 3. Pizza Menu Grid */}
        <section id="demo-menu" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#F39C12] mb-1">
                Sample Menu Catalog
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Explore Pizzas &amp; Deals
              </h2>
            </div>

            <div className="relative w-full md:w-72">
              <Search
                className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                aria-label="Search sample menu items"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pizzas, tikka, deals..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] text-xs sm:text-sm text-white placeholder-neutral-500 focus:border-[#F39C12] focus:outline-none"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {MENU_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat
              return (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    active
                      ? "bg-[#E8401C] text-white"
                      : "bg-[#1A1A1A] border border-[#2A2A2A] text-neutral-300 hover:border-neutral-500"
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          {filteredPizzas.length === 0 ? (
            <div className="p-10 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] text-center text-sm text-neutral-400">
              No menu items match the selected filter.{" "}
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All")
                  setSelectedRestaurantId("all")
                  setSearchQuery("")
                }}
                className="text-[#F39C12] font-bold hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredPizzas.map((pizza) => (
                <article
                  key={pizza.id}
                  className="rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#F39C12]/50 transition-all overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className={`p-5 bg-gradient-to-br ${pizza.accentGradient} border-b border-[#2A2A2A] flex items-start justify-between gap-2`}>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#F39C12]">
                          {pizza.category}
                        </span>
                        <h3 className="text-base font-bold text-white mt-0.5">
                          {pizza.name}
                        </h3>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-black/35 flex items-center justify-center text-[#F39C12] shrink-0">
                        <Pizza className="w-5 h-5" aria-hidden="true" />
                      </div>
                    </div>

                    <div className="p-5 space-y-3">
                      <p className="text-[11px] font-semibold text-neutral-400 flex items-center gap-1.5">
                        <Store className="w-3.5 h-3.5 text-[#E8401C]" aria-hidden="true" />
                        <span>{pizza.restaurantName}</span>
                      </p>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {pizza.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {pizza.ingredients.slice(0, 3).map((ing) => (
                          <span
                            key={ing}
                            className="px-2 py-0.5 rounded-md bg-[#222222] text-[10px] text-neutral-300"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-3 border-t border-[#2A2A2A] flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-neutral-400 block">Starts from</span>
                      <span className="text-sm font-extrabold text-[#F39C12]">
                        Rs. {pizza.prices.Small.toLocaleString()}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActivePizza(pizza)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#E8401C] hover:bg-[#d13716] text-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Customize &amp; Order</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* 4. Order Status Simulator Section */}
        <section
          id="demo-tracker"
          className="p-6 sm:p-8 rounded-3xl bg-[#1A1A1A] border border-[#2A2A2A] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F39C12]">
              Demonstration Order Status
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {activeOrder
                ? `Active Demo Order: ${activeOrder.orderId}`
                : "No Demo Order Placed Yet"}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
              {activeOrder
                ? `Current simulated stage: ${ORDER_STATUS_STEPS[activeOrder.statusIndex].label} — ${ORDER_STATUS_STEPS[activeOrder.statusIndex].detail}.`
                : "Add any sample pizza to your cart and complete the demo checkout to inspect the simulated dispatch status workflow."}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            {activeOrder ? (
              <>
                <button
                  type="button"
                  onClick={() => {
                    setDrawerView("confirmation")
                    setDrawerOpen(true)
                  }}
                  className="px-4 py-2.5 rounded-xl bg-[#27AE60] hover:bg-[#229954] text-white text-xs font-bold cursor-pointer"
                >
                  View Demo Receipt
                </button>
                <button
                  type="button"
                  onClick={handleAdvanceOrderStatus}
                  disabled={activeOrder.statusIndex >= ORDER_STATUS_STEPS.length - 1}
                  className="px-4 py-2.5 rounded-xl bg-[#E8401C] hover:bg-[#d13716] disabled:opacity-40 text-white text-xs font-bold cursor-pointer"
                >
                  Advance Demo Stage
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={openCart}
                className="px-5 py-2.5 rounded-xl bg-[#222222] hover:bg-[#2A2A2A] border border-[#333333] text-white text-xs font-bold cursor-pointer"
              >
                Open Demo Cart ({cartCount})
              </button>
            )}
          </div>
        </section>
      </main>

      {/* Modals & Drawers */}
      <ProductDetailModal
        key={activePizza?.id ?? "closed"}
        pizza={activePizza}
        onClose={() => setActivePizza(null)}
        onAddToCart={handleAddToCart}
      />

      <CartCheckoutDrawer
        open={drawerOpen}
        view={drawerView}
        onChangeView={setDrawerView}
        onClose={() => setDrawerOpen(false)}
        items={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        promoCode={promoCode}
        onPromoChange={setPromoCode}
        promoApplied={promoApplied}
        onApplyPromo={handleApplyPromo}
        subtotal={subtotal}
        deliveryFee={deliveryFee}
        discount={discount}
        total={total}
        activeOrder={activeOrder}
        onPlaceOrder={handlePlaceOrder}
        onAdvanceOrderStatus={handleAdvanceOrderStatus}
        onResetForNewOrder={() => {
          setDrawerView("cart")
          setDrawerOpen(false)
        }}
      />
    </div>
  )
}
