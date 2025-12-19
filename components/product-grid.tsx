import { ProductCard } from "./product-card"

const products = [
  {
    id: "1",
    name: "Casave brood",
    price: 10,
    image: "/thudarum-taupe-suit-hero.jpg",
    category: "Diversen",
  },
  {
    id: "2",
    name: "Kwak",
    price: 10,
    image: "/thudarum-green-check-blazer.jpg",
    category: "Diversen",
  },
  {
    id: "3",
    name: "Podosirie",
    price: 35,
    image: "/thudarum-burgundy-evening-suit.jpg",
    category: "Diversen",
  },
  {
    id: "4",
    name: "Dosie",
    price: 4,
    image: "/thudarum-sky-blue-blazer.jpg",
    category: "Diversen",
  },
  {
    id: "5",
    name: "Stoom Bladeren Poem",
    price: 15,
    image: "/thudarum-burgundy-blazer-combo.jpg",
    category: "Diversen",
  },
  {
    id: "6",
    name: "Mang Batra",
    price: 50,
    image: "/thudarum-navy-velvet-blazer.jpg",
    category: "Diversen",
  },
  {
    id: "7",
    name: "Pangi Culturoe",
    price: 25,
    image: "/thudarum-gray-suit-refined.jpg",
    category: "Diversen",
  },
  {
    id: "8",
    name: "Pangi Normaal",
    price: 15,
    image: "/thudarum-slate-blazer-set.jpg",
    category: "Diversen ",
  },
]

export function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
