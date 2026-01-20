import { ProductCard } from "./product-card"

const products = [
  {
    id: "1",
    name: "Casave brood",
    price: 10,
    image: "/IMG_0713.JPEG",
    category: "Diversen",
  },
  {
    id: "2",
    name: "Kwak",
    price: 10,
    image: "/IMG_0715.JPEG",
    category: "Diversen",
  },
  {
    id: "3",
    name: "Podosirie",
    price: 35,
    image: "/IMG_0716.JPEG",
    category: "Diversen",
  },
  {
    id: "4",
    name: "Dosie",
    price: 4,
    image: "/IMG_0715.JPEG",
    category: "Diversen",
  },
  {
    id: "5",
    name: "Stoom Bladeren Poem",
    price: 15,
    image: "/IMG_0669.JPEG",
    category: "Diversen",
  },
  {
    id: "6",
    name: "Mang Batra",
    price: 50,
    image: "/IMG_0688.JPEG",
    category: "Diversen",
  },
  {
    id: "7",
    name: "Pangi Culturu",
    price: 25,
    image: "/IMG_0709.JPEG",
    category: "Diversen",
  },
  {
    id: "8",
    name: "Pangi Normaal",
    price: 15,
    image: "/IMG_0710.JPEG",
    category: "Diversen ",
  },
  {
    id: "9",
    name: "Cocos Olie",
    price: 35,
    image: "/IMG_0711.JPEG",
    category: "Diversen ",
  },
  {
    id: "10",
    name: "Krapa Olie",
    price: 12.50,
    image: "/IMG_0706.JPEG",
    category: "Diversen ",
  },
  {
    id: "11",
    name: "Amana Olie",
    price: 12.50,
    image: "/IMG_0696.JPEG",
    category: "Diversen ",
  },
  {
    id: "12",
    name: "Awara Olie",
    price: 12.50,
    image: "/IMG_0704.JPEG",
    category: "Diversen ",
  },
  {
    id: "13",
    name: "Boma Olie",
    price: 12.50,
    image: "/IMG_0705.JPEG",
    category: "Diversen ",
  },
  {
    id: "14",
    name: "Callophile Olie",
    price: 25,
    image: "/IMG_0707.JPEG",
    category: "Diversen ",
  },
  {
    id: "15",
    name: "Kadekra",
    price: 17.50,
    image: "/IMG_0718.JPEG",
    category: "Diversen ",
  },
  {
    id: "16",
    name: "Maripa Olie",
    price: 12.50,
    image: "/IMG_0674.JPEG",
    category: "Diversen ",
  },
  {
    id: "17",
    name: "Neem Olie",
    price: 12.50,
    image: "/IMG_0712.JPEG",
    category: "Diversen ",
  },
  {
    id: "18",
    name: "Mint Olie",
    price: 15,
    image: "/IMG_0674.JPEG",
    category: "Diversen ",
  },
  {
    id: "19",
    name: "Pimba",
    price: 12.50,
    image: "/IMG_0679.JPEG",
    category: "Diversen ",
  },
  {
    id: "20",
    name: "Blackstone",
    price: 10,
    image: "/IMG_0670.JPEG",
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
