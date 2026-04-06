"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ProductGrid } from "@/components/product-grid"
import { useLanguage } from "@/components/language-provider"

const homeContent = {
  en: {
    heroTitle: "Pure Nature, Authentic Roots",
    heroSubtitle: "Natural oils, traditional foods, and wellness products from Suriname and West Africa",
    shopProducts: "Shop Products",
    newArrivals: "New Arrivals",
    viewAll: "View All",
    footerDesc: "Premium natural products and traditional wellness for the discerning individual.",
    shop: "Shop",
    allProducts: "All Products",
    collections: "Collections",
    newArrivalsLink: "New Arrivals",
    support: "Support",
    contact: "Contact",
    shipping: "Shipping",
    returns: "Returns",
    legal: "Legal",
    privacy: "Privacy",
    terms: "Terms",
    copyright: "2026 ADUDA NATURAL SERVICE. All rights reserved.",
  },
  nl: {
    heroTitle: "Pure Natuur, Authentieke Wortels",
    heroSubtitle: "Natuurlijke oliën, traditioneel voedsel en welzijnsproducten uit Suriname en West-Afrika",
    shopProducts: "Bekijk Producten",
    newArrivals: "Nieuw Binnen",
    viewAll: "Bekijk Alles",
    footerDesc: "Premium natuurlijke producten en traditioneel welzijn voor de veeleisende consument.",
    shop: "Winkel",
    allProducts: "Alle Producten",
    collections: "Collecties",
    newArrivalsLink: "Nieuw Binnen",
    support: "Ondersteuning",
    contact: "Contact",
    shipping: "Verzending",
    returns: "Retourneren",
    legal: "Juridisch",
    privacy: "Privacy",
    terms: "Voorwaarden",
    copyright: "2026 ADUDA NATURAL SERVICE. Alle rechten voorbehouden.",
  },
}

export default function Home() {
  const { language } = useLanguage()
  const content = homeContent[language]

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center bg-black overflow-hidden">
        {/* Local video background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
            src="/IMG_0671.MOV"
            autoPlay
            muted
            loop
            playsInline
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-4 text-white">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 sm:mb-6 tracking-tight text-balance drop-shadow-lg">
            {content.heroTitle}
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto text-balance drop-shadow-md text-white/90">
            {content.heroSubtitle}
          </p>
          <Button asChild size="lg" className="h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base">
            <Link href="/shop">{content.shopProducts}</Link>
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold">{content.newArrivals}</h2>
          <Button variant="ghost" asChild className="text-sm sm:text-base">
            <Link href="/shop">{content.viewAll}</Link>
          </Button>
        </div>
        <ProductGrid />
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-16 sm:mt-24">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <h3 className="font-serif text-xl font-semibold mb-4">ADUDA NATURAL SERVICE</h3>
              <p className="text-sm text-muted-foreground">
                {content.footerDesc}
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">{content.shop}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/shop">{content.allProducts}</Link>
                </li>
                <li>
                  <Link href="/collections">{content.collections}</Link>
                </li>
                <li>
                  <Link href="/new">{content.newArrivalsLink}</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">{content.support}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/contact">{content.contact}</Link>
                </li>
                <li>
                  <Link href="/shipping">{content.shipping}</Link>
                </li>
                <li>
                  <Link href="/returns">{content.returns}</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">{content.legal}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/privacy">{content.privacy}</Link>
                </li>
                <li>
                  <Link href="/terms">{content.terms}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
            <p>&copy; {content.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
