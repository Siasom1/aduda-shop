"use client"

import { Header } from "@/components/header"
import { ProductDetailClient } from "@/components/product-detail-client"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { products as productsData } from "@/lib/products"
import { use } from "react"

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const { language, t } = useLanguage()
  const productData = productsData.find((p) => p.id === id)

  if (!productData) {
    notFound()
  }

  const product = {
    id: productData.id,
    name: productData.name[language],
    price: productData.price,
    images: productData.images || [productData.image, productData.image, productData.image],
    category: productData.category[language],
    description: productData.description?.[language] || "",
    details: productData.details?.[language] || [],
    sizes: productData.sizes || ["Standard"],
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <Button variant="ghost" asChild>
          <Link href="/shop">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t("backToHome")}
          </Link>
        </Button>
      </div>
      <ProductDetailClient product={product} />
    </div>
  )
}
