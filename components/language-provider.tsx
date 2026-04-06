"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "nl"

interface Translations {
  [key: string]: {
    en: string
    nl: string
  }
}

export const translations: Translations = {
  // Navigation
  shop: { en: "Shop", nl: "Winkel" },
  collections: { en: "Collections", nl: "Collecties" },
  about: { en: "About", nl: "Over Ons" },
  contact: { en: "Contact", nl: "Contact" },
  profile: { en: "Profile", nl: "Profiel" },
  cart: { en: "Cart", nl: "Winkelwagen" },
  
  // Shop page
  allProducts: { en: "All Products", nl: "Alle Producten" },
  backToHome: { en: "Back to Home", nl: "Terug naar Home" },
  
  // Product actions
  addToCart: { en: "Quick Add", nl: "Toevoegen" },
  addedToCart: { en: "Added!", nl: "Toegevoegd!" },
  selectSize: { en: "Select Size", nl: "Selecteer Maat" },
  pleaseSelectSize: { en: "Please select a size", nl: "Selecteer een maat" },
  sizeRequired: { en: "Size Required", nl: "Maat Vereist" },
  pleaseSelectSizeDesc: { en: "Please select a size before adding to cart", nl: "Selecteer een maat voordat u toevoegt" },
  
  // Product details
  productDetails: { en: "Product Details", nl: "Product Details" },
  freeShipping: { en: "Free Shipping", nl: "Gratis Verzending" },
  freeShippingDesc: { en: "Complimentary shipping on all orders over €50", nl: "Gratis verzending bij bestellingen boven €50" },
  returnsExchanges: { en: "Returns & Exchanges", nl: "Retourneren & Ruilen" },
  returnsDesc: { en: "30-day return policy for unopened items", nl: "30 dagen retourbeleid voor ongeopende artikelen" },
  
  // Categories
  oils: { en: "Oils", nl: "Oliën" },
  herbs: { en: "Herbs", nl: "Kruiden" },
  teas: { en: "Teas", nl: "Thee" },
  soaps: { en: "Soaps", nl: "Zepen" },
  syrups: { en: "Syrups", nl: "Siropen" },
  foods: { en: "Foods", nl: "Voedsel" },
  wellness: { en: "Wellness", nl: "Welzijn" },
  bodyCare: { en: "Body Care", nl: "Lichaamsverzorging" },
  traditional: { en: "Traditional", nl: "Traditioneel" },
  textiles: { en: "Textiles", nl: "Textiel" },
  beverages: { en: "Beverages", nl: "Dranken" },
  spices: { en: "Spices", nl: "Specerijen" },
  
  // Home page
  heroTitle: { en: "Natural Surinamese Products", nl: "Natuurlijke Surinaamse Producten" },
  heroSubtitle: { en: "Authentic herbs, oils, and traditional remedies from Suriname", nl: "Authentieke kruiden, oliën en traditionele remedies uit Suriname" },
  shopNow: { en: "Shop Now", nl: "Winkel Nu" },
  viewCollections: { en: "View Collections", nl: "Bekijk Collecties" },
  featuredProducts: { en: "Featured Products", nl: "Uitgelichte Producten" },
  viewAll: { en: "View All", nl: "Bekijk Alles" },
  
  // Footer / Shipping ticker
  freeShippingOver: { en: "Free shipping on orders over €50", nl: "Gratis verzending bij bestellingen boven €50" },
  
  // Cart
  yourCart: { en: "Your Cart", nl: "Uw Winkelwagen" },
  emptyCart: { en: "Your cart is empty", nl: "Uw winkelwagen is leeg" },
  continueShopping: { en: "Continue Shopping", nl: "Verder Winkelen" },
  checkout: { en: "Checkout", nl: "Afrekenen" },
  subtotal: { en: "Subtotal", nl: "Subtotaal" },
  total: { en: "Total", nl: "Totaal" },
  remove: { en: "Remove", nl: "Verwijderen" },
  
  // Language
  language: { en: "Language", nl: "Taal" },
  english: { en: "English", nl: "Engels" },
  dutch: { en: "Dutch", nl: "Nederlands" },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    const translation = translations[key]
    if (!translation) return key
    return translation[language]
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
