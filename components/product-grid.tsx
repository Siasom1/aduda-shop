"use client"

import { ProductCard } from "./product-card"
import { products } from "@/lib/products"
import { useLanguage } from "./language-provider"

export function ProductGrid() {
  const { language } = useLanguage()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={{
            id: product.id,
            name: product.name[language],
            price: product.price,
            image: product.image,
            category: product.category[language],
          }} 
        />
      ))}
    </div>
  )
}
