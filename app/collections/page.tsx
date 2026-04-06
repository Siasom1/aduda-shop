import { Header } from "@/components/header"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function CollectionsPage() {
  const collections = [
    {
      id: "oils",
      name: "Natural Oils",
      description:
        "Pure, unrefined oils sourced directly from Suriname and West Africa. Cocos Olie, Batana Oil, Calophylle and Moringa oils for cooking, skin and hair care.",
      image: "/images/aduda-cocos-olie.jpg",
      items: "6 products",
    },
    {
      id: "foods",
      name: "Traditional Foods",
      description: "Authentic cassava bread, grain packages, and traditional food staples. Handmade using time-honored recipes from Suriname and the Caribbean.",
      image: "/images/aduda-cassava-bread.jpg",
      items: "8 products",
    },
    {
      id: "spices",
      name: "Spices & Seasonings",
      description: "Hand-ground spice blends and seasonings from West Africa. Authentic flavors for traditional and modern cooking.",
      image: "/images/aduda-spices.jpg",
      items: "5 products",
    },
    {
      id: "wellness",
      name: "Wellness & Body Care",
      description: "Natural body care products including pure shea butter, Podosiri Acai drinks, and herbal remedies for health and wellbeing.",
      image: "/images/aduda-podosiri-acai.jpg",
      items: "7 products",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 md:mb-24">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight">
            Collections
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-balance">
            Explore our curated collections of natural products, traditional foods, and wellness items sourced directly from Suriname and West Africa.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {collections.map((collection) => (
            <Link key={collection.id} href={`/shop?collection=${collection.id}`} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary mb-4">
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white/80 text-xs sm:text-sm mb-2">{collection.items}</p>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-2">
                    {collection.name}
                  </h2>
                  <p className="text-white/90 text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {collection.description}
                  </p>
                </div>
              </div>
              <Button variant="ghost" className="w-full justify-between text-sm sm:text-base group-hover:bg-secondary">
                View Collection
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Button>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-secondary py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">Rooted in Nature</h2>
            <p className="text-muted-foreground mb-8 text-base sm:text-lg leading-relaxed">
              Each collection is carefully sourced to bring you the most authentic natural products from Suriname and
              West Africa. From traditional foods to natural oils and wellness products, we bring the best of nature
              directly to your home.
            </p>
            <Button asChild size="lg" variant="outline" className="h-12 px-8 bg-transparent">
              <Link href="/shop">Browse All Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
