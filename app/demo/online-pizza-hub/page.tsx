import React from "react"
import type { Metadata } from "next"
import PizzaHubDemoClient from "@/components/demo/pizza-hub/PizzaHubDemoClient"

export const metadata: Metadata = {
  title: "Online Pizza Hub Vehari — Interactive Demo",
  description:
    "Interactive prototype demonstration of Online Pizza Hub Vehari showcasing sample restaurant storefronts, pizza customization, cart controls, and simulated order dispatch.",
  alternates: {
    canonical: "/demo/online-pizza-hub",
  },
  openGraph: {
    title: "Online Pizza Hub Vehari — Interactive Storefront Demo",
    description:
      "Explore sample restaurants, customize pizzas with size & add-ons, and test the demo cart & checkout flow.",
    url: "https://usman-devs.com/demo/online-pizza-hub",
    type: "website",
    images: [
      {
        url: "/online-pizza-hub-preview.jpg",
        width: 1024,
        height: 576,
        alt: "Online Pizza Hub Vehari Interactive Demo Preview by Usman Dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Pizza Hub Vehari — Interactive Storefront Demo",
    description:
      "Explore sample restaurants, customize pizzas with size & add-ons, and test the demo cart & checkout flow.",
    images: ["/online-pizza-hub-preview.jpg"],
  },
}

export default function OnlinePizzaHubDemoPage() {
  return <PizzaHubDemoClient />
}
