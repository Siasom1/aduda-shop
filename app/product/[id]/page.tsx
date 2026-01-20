import { Header } from "@/components/header"
import { ProductDetail } from "@/components/product-detail"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const products = [
  {
    id: "1",
    name: "Cassave brood",
    price: 10,
    images: ["/IMG_0713.JPEG",],
    category: "Diversen",
    description:
      "Surinaams Cassave brood.",
    details: ["100% Origineel", "Vers gebakken", "Traditioneel recept"],
    sizes: ["Standaard"],
  },
  {
    id: "2",
    name: "Kwak",
    price: 10,
    images: ["/thudarum-green-check-blazer.jpg", "/thudarum-green-check-detail.jpg", "/thudarum-green-check-side.jpg"],
    category: "Diversen",
    description:
      " Surinaams product.",
    details: ["Origineel", "Vers", "Traditioneel recept"],
    sizes: ["Standaard"],
  },
  {
    id: "3",
    name: "Podosirie",
    price: 35,
    images: [
      "/thudarum-burgundy-evening-suit.jpg",
      "/thudarum-burgundy-suit-detail.jpg",
      "/thudarum-burgundy-suit-side.jpg",
    ],
    category: "Diversen",
    description:
      "Podosirie ook wel Acai genoemd.",
    details: [
      "Originele Podosirie, Acai",
    ],
    sizes: ["liter, 330 ml 12,50"],
  },
  {
    id: "4",
    name: "Dosie",
    price: 4,
    images: ["/thudarum-sky-blue-blazer.jpg", "/thudarum-sky-blue-detail.jpg", "/thudarum-sky-blue-side.jpg"],
    category: "Diversen",
    description:
      " Dosie.",
    details: ["Origineele Dosie"],
    sizes: ["Standaard"],
  },
  {
    id: "5",
    name: "Stoom bladeren Poem",
    price: 15,
    images: [
      "/thudarum-burgundy-blazer-combo.jpg",
      "/thudarum-burgundy-combo-detail.jpg",
      "/thudarum-burgundy-combo-side.jpg",
    ],
    category: "Diversen",
    description:
      "Stoom bladeren voor poem poem voor vrouwen.",
    details: ["Stomen voor vrouwen verschillende werkingen"],
    sizes: ["Standaard"],
  },
  {
    id: "6",
    name: "Mang batra",
    price: 1095,
    images: ["/thudarum-navy-velvet-blazer.jpg", "/thudarum-navy-velvet-detail.jpg", "/thudarum-navy-velvet-side.jpg"],
    category: "Diversen",
    description:
      "Mang batra.",
    details: [" Originele Mang batra"],
    sizes: ["Standaard"],
  },
  {
    id: "7",
    name: "Pangi's Culturoe",
    price: 25,
    images: ["/thudarum-gray-suit-refined.jpg", "/thudarum-gray-suit-detail.jpg", "/thudarum-gray-suit-side.jpg"],
    category: "Pangi's",
    description:
      "Originele pangi's.",
    details: ["Cultuur"],
    sizes: ["2 mtr"],
  },
  {
    id: "8",
    name: "Pangi's gewoon",
    price: 15,
    images: ["/thudarum-slate-blazer-set.jpg", "/thudarum-slate-blazer-detail.jpg", "/thudarum-slate-blazer-side.jpg"],
    category: "Pangi's",
    description:
      "  Normale pangi's voor alledaags gebruik.",
    details: [" Alledaags gebruik, standaard"],
    sizes: ["1.5 mtr"],
  },
  {
    id: "9",
    name: "Cocos olie",
    price: 35,
    images: ["/thudarum-slate-blazer-set.jpg", "/thudarum-slate-blazer-detail.jpg", "/thudarum-slate-blazer-side.jpg"],
    category: "Olie",
    description:
      "  Originele Olien.",
    details: [" Alledaags gebruik, standaard"],
    sizes: ["ltr, 250 ml, 12,50" ],
  },
  {
    id: "10",
    name: "Krapa olie",
    price: 12.50,
    images: ["/thudarum-slate-blazer-set.jpg", "/thudarum-slate-blazer-detail.jpg", "/thudarum-slate-blazer-side.jpg"],
    category: "Olie",
    description:
      "  Originele Krapa olie.",
    details: [" Alledaags gebruik, standaard"],
    sizes: ["60 ml" ],
  },
  {
    id: "11",
    name: "Amana olie",
    price: 12.50, 
    images: ["/thudarum-slate-blazer-set.jpg", "/thudarum-slate-blazer-detail.jpg", "/thudarum-slate-blazer-side.jpg"],
    category: "Olie",
    description:
      "  Originele Amana olie.",
    details: [" Alledaags gebruik, standaard"],
    sizes: ["60 ml" ],
  },
  {
    id: "12",
    name: "Boma olie",
    price: 12.50,
    images: ["/thudarum-slate-blazer-set.jpg", "/thudarum-slate-blazer-detail.jpg", "/thudarum-slate-blazer-side.jpg"],
    category: "Olie",
    description:
      "  Originele Boma olie.",
    details: [" Alledaags gebruik, standaard"],
    sizes: ["60 ml" ],
  },
  {
    id: "13",
    name: "Awara olie",
    price: 12.50,
    images: ["/thudarum-slate-blazer-set.jpg", "/thudarum-slate-blazer-detail.jpg", "/thudarum-slate-blazer-side.jpg"],
    category: "Olie",
    description:
      "  Originele Awara olie.",
    details: [" Alledaags gebruik, standaard"],
    sizes: ["60 ml" ],
  },
  {
    id: "14",
    name: "Callophille olie",
    price: 60,
    images: ["/thudarum-slate-blazer-set.jpg", "/thudarum-slate-blazer-detail.jpg", "/thudarum-slate-blazer-side.jpg"],
    category: "Olie",
    description:
      "  Originele Callophille olie.",
    details: [" Alledaags gebruik, standaard"],
    sizes: ["60 ml" ],
  },
  {
    id: "15",
    name: "Kadekra",
    price: 17.50,
    images: ["/thudarum-slate-blazer-set.jpg", "/thudarum-slate-blazer-detail.jpg", "/thudarum-slate-blazer-side.jpg"],
    category: "Diversen",
    description:
      "  Originele Kadekra.",
    details: [" Ook wel Saba watra genaamd, standaard"],
    sizes: ["standaard" ],
  },
  {
    id: "16",
    name: "Maripa olie",
    price: 12.50,
    images: ["/thudarum-slate-blazer-set.jpg", "/thudarum-slate-blazer-detail.jpg", "/thudarum-slate-blazer-side.jpg"],
    category: "Olie",
    description:
      "  Originele Maripa olie.",
    details: [" Alledaags gebruik, standaard"],
    sizes: ["60 ml" ],
  },
  {
    id: "17",
    name: "Neem olie",
    price: 12.50,
    images: ["/thudarum-slate-blazer-set.jpg", "/thudarum-slate-blazer-detail.jpg", "/thudarum-slate-blazer-side.jpg"],
    category: "Olie",
    description:
      "  Originele Neem olie.",
    details: [" Alledaags gebruik, standaard"],
    sizes: ["60 ml" ],
  },
  {
    id: "18",
    name: "Papaya olie",
    price: 12.50,
    images: ["/thudarum-slate-blazer-set.jpg", "/thudarum-slate-blazer-detail.jpg", "/thudarum-slate-blazer-side.jpg"],
    category: "Olie",
    description:
      "  Originele Papaya olie.",
    details: [" Alledaags gebruik, standaard"],
    sizes: ["60 ml" ],
  },
{
    id: "19",
    name: "Mint olie",
    price: 15,
    images: ["/thudarum-slate-blazer-set.jpg", "/thudarum-slate-blazer-detail.jpg", "/thudarum-slate-blazer-side.jpg"],
    category: "Olie",
    description:
      "  Originele Mint olie.",
    details: [" Alledaags gebruik, standaard"],
    sizes: ["60 ml" ],
  },
  {
    id: "20",
    name: "Pimba groot",
    price: 25,
    images: ["/thudarum-slate-blazer-set.jpg", "/thudarum-slate-blazer-detail.jpg", "/thudarum-slate-blazer-side.jpg"],
    category: "Diversen",
    description:
      "  Originele Pimba groot.",
    details: [" Alledaags gebruik, standaard"],
    sizes: ["Grote bak, 3 klein 12.50" ],
  },
  {
    id: "21",
    name: "Bom tabak",
    price: 12.50,
    images: ["/thudarum-slate-blazer-set.jpg", "/thudarum-slate-blazer-detail.jpg", "/thudarum-slate-blazer-side.jpg"],
    category: "Tabak",
    description:
      "  Originele Bom tabak.",
    details: [" Alledaags gebruik, standaard"],
    sizes: ["standaard" ],
  },
  {
    id: "22",
    name: "Blackstone tabak",
    price: 12.50,
    images: ["/thudarum-slate-blazer-set.jpg", "/thudarum-slate-blazer-detail.jpg", "/thudarum-slate-blazer-side.jpg"],
    category: "Tabak",
    description:
      "  Originele Blackstone tabak.",
    details: [" Alledaags gebruik, standaard"],
    sizes: ["standaard" ],
  },

]

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <Button variant="ghost" asChild>
          <Link href="/shop">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Shop
          </Link>
        </Button>
      </div>
      <ProductDetail product={product} />
    </div>
  )
}
