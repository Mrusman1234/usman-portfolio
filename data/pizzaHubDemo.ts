export type PizzaSize = "Small" | "Medium" | "Large"

export type PizzaCategory =
  | "All"
  | "Signature Pizzas"
  | "Desi Fusion"
  | "Deals & Combos"
  | "Sides & Drinks"

export interface DemoAddon {
  id: string
  name: string
  price: number
}

export interface DemoRestaurant {
  id: string
  name: string
  area: string
  cuisine: string
  deliveryZoneKm: number
  accentColor: string
}

export interface DemoPizza {
  id: string
  restaurantId: string
  restaurantName: string
  name: string
  category: Exclude<PizzaCategory, "All">
  description: string
  ingredients: string[]
  prices: Record<PizzaSize, number>
  addons: DemoAddon[]
  tag?: string
  accentGradient: string
}

export interface CartItem {
  key: string
  pizzaId: string
  name: string
  restaurantName: string
  size: PizzaSize
  addons: DemoAddon[]
  note: string
  unitPrice: number
  quantity: number
}

export interface DemoOrder {
  orderId: string
  customerName: string
  phone: string
  address: string
  paymentMethod: "Cash on Delivery (Demo)" | "JazzCash Simulation" | "Stripe Test Simulation"
  items: CartItem[]
  subtotal: number
  deliveryFee: number
  discount: number
  total: number
  createdAt: string
  statusIndex: number
}

export const ORDER_STATUS_STEPS = [
  { label: "Order Placed", detail: "Simulated order queued in Firebase Firestore" },
  { label: "Preparing", detail: "Kitchen accepted demo order & prepping dough" },
  { label: "Baking in Oven", detail: "Brick-oven bake in progress" },
  { label: "Out for Delivery", detail: "Sample rider dispatched via live map tracker" },
  { label: "Delivered", detail: "Demo delivery flow completed" },
] as const

export const DEMO_ADDONS: DemoAddon[] = [
  { id: "extra-cheese", name: "Extra Mozzarella", price: 220 },
  { id: "stuffed-crust", name: "Cheese Stuffed Crust", price: 320 },
  { id: "jalapenos", name: "Pickled Jalapenos", price: 110 },
  { id: "garlic-dip", name: "Roasted Garlic Dip", price: 120 },
]

export const DEMO_RESTAURANTS: DemoRestaurant[] = [
  {
    id: "vehari-woodfire",
    name: "Vehari Woodfire Kitchen (Demo)",
    area: "People's Colony, Vehari (Sample Area)",
    cuisine: "Artisan Hand-Tossed & Classic Pies",
    deliveryZoneKm: 6,
    accentColor: "#E8401C",
  },
  {
    id: "royal-crust",
    name: "Royal Crust Hub (Demo)",
    area: "Club Road, Vehari (Sample Area)",
    cuisine: "Pan Pizzas & Stuffed Crust Specials",
    deliveryZoneKm: 8,
    accentColor: "#F39C12",
  },
  {
    id: "spice-slice",
    name: "Spice & Slice Corner (Demo)",
    area: "Karkhana Bazar, Vehari (Sample Area)",
    cuisine: "Tandoori & Desi Fusion Creations",
    deliveryZoneKm: 5,
    accentColor: "#27AE60",
  },
]

export const DEMO_PIZZAS: DemoPizza[] = [
  {
    id: "crown-pepperoni",
    restaurantId: "vehari-woodfire",
    restaurantName: "Vehari Woodfire Kitchen (Demo)",
    name: "Smoked Beef Pepperoni Classic",
    category: "Signature Pizzas",
    tag: "Sample Favorite",
    description:
      "Slow-fermented hand-stretched crust topped with San Marzano style tomato sauce, layered beef pepperoni, olives, and melted mozzarella.",
    ingredients: ["Aged Mozzarella", "Beef Pepperoni", "Tomato Basil Sauce", "Black Olives", "Oregano"],
    prices: { Small: 850, Medium: 1350, Large: 1850 },
    addons: DEMO_ADDONS,
    accentGradient: "from-[#E8401C]/25 via-[#F39C12]/10 to-[#1A1A1A]",
  },
  {
    id: "vehari-tikka-fire",
    restaurantId: "spice-slice",
    restaurantName: "Spice & Slice Corner (Demo)",
    name: "Tandoori Chicken Tikka Special",
    category: "Desi Fusion",
    tag: "Spicy Option",
    description:
      "Char-grilled chicken tikka chunks glazed in house spices, red onions, green bell peppers, and smoky cheddar-mozzarella blend.",
    ingredients: ["Charred Chicken Tikka", "Red Onions", "Bell Peppers", "Spiced Pizza Sauce", "Mozzarella"],
    prices: { Small: 790, Medium: 1290, Large: 1790 },
    addons: DEMO_ADDONS,
    accentGradient: "from-[#F39C12]/25 via-[#E8401C]/10 to-[#1A1A1A]",
  },
  {
    id: "royal-fajita-supreme",
    restaurantId: "royal-crust",
    restaurantName: "Royal Crust Hub (Demo)",
    name: "Royal Creamy Fajita Supreme",
    category: "Signature Pizzas",
    description:
      "Juicy fajita-marinated chicken, sweet corn, mushrooms, onions, and signature garlic ranch drizzle on golden pan crust.",
    ingredients: ["Fajita Chicken", "Mushrooms", "Sweet Corn", "Garlic Ranch", "Cheddar & Mozzarella"],
    prices: { Small: 820, Medium: 1320, Large: 1820 },
    addons: DEMO_ADDONS,
    accentGradient: "from-amber-500/20 via-red-500/10 to-[#1A1A1A]",
  },
  {
    id: "malai-boti-melt",
    restaurantId: "spice-slice",
    restaurantName: "Spice & Slice Corner (Demo)",
    name: "Creamy Malai Boti Melt",
    category: "Desi Fusion",
    description:
      "Velvety cardamom-herb malai boti chicken topped with green chilies, capsicum, and bubbly mozzarella cheese.",
    ingredients: ["Malai Boti Chicken", "Creamy White Base", "Green Chilies", "Capsicum", "Mozzarella"],
    prices: { Small: 850, Medium: 1390, Large: 1890 },
    addons: DEMO_ADDONS,
    accentGradient: "from-emerald-500/20 via-amber-500/10 to-[#1A1A1A]",
  },
  {
    id: "four-cheese-margherita",
    restaurantId: "vehari-woodfire",
    restaurantName: "Vehari Woodfire Kitchen (Demo)",
    name: "Four-Cheese Basil Margherita",
    category: "Signature Pizzas",
    description:
      "Blend of fresh mozzarella, aged cheddar, provolone, and parmesan finished with basil leaves and cold-pressed olive oil.",
    ingredients: ["Fresh Mozzarella", "Aged Cheddar", "Provolone", "Parmesan", "Fresh Basil"],
    prices: { Small: 750, Medium: 1190, Large: 1650 },
    addons: DEMO_ADDONS,
    accentGradient: "from-orange-500/20 via-yellow-500/10 to-[#1A1A1A]",
  },
  {
    id: "family-feast-combo",
    restaurantId: "royal-crust",
    restaurantName: "Royal Crust Hub (Demo)",
    name: "Weekend Family Demo Box",
    category: "Deals & Combos",
    tag: "Sample Bundle",
    description:
      "Bundle sized for group orders: 1 Large signature pizza customization, garlic breadsticks, 2 signature dips, and a 1.5L chilled drink.",
    ingredients: ["Choice of Pizza Style", "4pc Garlic Bread", "2 Garlic Herb Dips", "1.5L Cold Drink"],
    prices: { Small: 1950, Medium: 2350, Large: 2790 },
    addons: DEMO_ADDONS.slice(0, 2),
    accentGradient: "from-[#E8401C]/30 via-[#F39C12]/15 to-[#1A1A1A]",
  },
  {
    id: "loaded-cheese-sticks",
    restaurantId: "vehari-woodfire",
    restaurantName: "Vehari Woodfire Kitchen (Demo)",
    name: "Herb & Mozzarella Garlic Bread",
    category: "Sides & Drinks",
    description:
      "Fresh-baked dough strips brushed with roasted garlic butter, parsley, chili flakes, and warm mozzarella pull.",
    ingredients: ["Roasted Garlic Butter", "Mozzarella Pull", "Parsley", "Marinara Dip"],
    prices: { Small: 450, Medium: 620, Large: 790 },
    addons: [DEMO_ADDONS[0], DEMO_ADDONS[3]],
    accentGradient: "from-amber-400/20 via-orange-500/10 to-[#1A1A1A]",
  },
  {
    id: "mint-lime-cooler",
    restaurantId: "royal-crust",
    restaurantName: "Royal Crust Hub (Demo)",
    name: "Fresh Mint Lime Cooler",
    category: "Sides & Drinks",
    description:
      "Crushed garden mint, fresh lemon splash, and chilled sparkling fizz crafted to balance smoky spice flavors.",
    ingredients: ["Fresh Mint", "Pressed Lemon", "Sparkling Water", "Crushed Ice"],
    prices: { Small: 220, Medium: 280, Large: 350 },
    addons: [],
    accentGradient: "from-emerald-500/25 via-teal-500/10 to-[#1A1A1A]",
  },
]
