"use client"

import { Header } from "@/components/header"
import { ProductGrid } from "@/components/product-grid"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function ShopPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t("backToHome")}
          </Link>
        </Button>

        <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-8">{t("allProducts")}</h1>
        <ProductGrid />
      </div>
    </div>
  )
}
