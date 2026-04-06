import { Header } from "@/components/header"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 sm:px-6 py-4">
        <Button variant="ghost" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] flex items-center justify-center bg-secondary">
        <div className="absolute inset-0 bg-[url('/images/aduda-full-display.jpg')] bg-cover bg-center opacity-80" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 tracking-tight text-white drop-shadow-lg">
            About ADUDA Natural Service
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-white/90 drop-shadow-md">
            Bringing the best of nature from Suriname and West Africa to your home
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ADUDA Natural Service is an import and export business dedicated to bringing authentic natural products
                from Suriname and West Africa to customers across Europe. We specialize in pure, unrefined oils,
                traditional foods, hand-ground spices, and natural wellness products.
              </p>
              <p>
                Every product we offer is carefully sourced from trusted local producers who use traditional methods
                passed down through generations. From our pure Cocos Olie from Coronie to our Batana Oil and
                Calophylle oils, we ensure that each item meets the highest standards of quality and authenticity.
              </p>
              <p>
                We believe in the power of nature and tradition. Our mission is to make these exceptional products
                accessible to everyone who values natural, chemical-free alternatives for cooking, body care, and
                wellness.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] bg-secondary overflow-hidden">
            <Image
              src="/images/aduda-oils-boat.jpg"
              alt="ADUDA Natural Service products"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            <div className="text-center">
              <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-4">Authenticity</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every product is sourced directly from trusted local producers in Suriname and West Africa, ensuring
                genuine quality and tradition.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-4">Purity</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We offer only natural, unrefined products with no chemicals, additives, or preservatives. Pure nature,
                as it was meant to be.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl sm:text-2xl font-semibold mb-4">Tradition</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our products are made using ancestral recipes and time-honored methods passed down through generations,
                preserving cultural heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
            Experience ADUDA Natural Service
          </h2>
          <p className="text-muted-foreground mb-8 text-base sm:text-lg">
            Discover our range of natural oils, traditional foods, spices, and wellness products sourced directly from Suriname and West Africa.
          </p>
          <Button asChild size="lg" className="h-12 px-8">
            <Link href="/shop">Explore Collection</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
