export interface Product {
  id: string
  name: {
    en: string
    nl: string
  }
  price: number
  image: string
  images?: string[]
  category: {
    en: string
    nl: string
  }
  description?: {
    en: string
    nl: string
  }
  details?: {
    en: string[]
    nl: string[]
  }
  sizes?: string[]
}

export const products: Product[] = [
  // Existing products
  {
    id: "1",
    name: {
      en: "Aduda Cocos Olie",
      nl: "Aduda Cocos Olie",
    },
    price: 12.95,
    image: "/images/aduda-cocos-olie.jpg",
    category: {
      en: "Oils",
      nl: "Oliën",
    },
    description: {
      en: "Pure coconut oil from Suriname, cold-pressed and unrefined. Perfect for cooking, skin care, and hair treatments.",
      nl: "Pure kokosolie uit Suriname, koudgeperst en ongeraffineerd. Perfect voor koken, huidverzorging en haarbehandelingen.",
    },
    details: {
      en: ["100% pure coconut oil", "Cold-pressed extraction", "Unrefined and natural", "Multi-purpose use"],
      nl: ["100% pure kokosolie", "Koudgeperste extractie", "Ongeraffineerd en natuurlijk", "Multifunctioneel gebruik"],
    },
    sizes: ["100ml", "250ml", "500ml"],
  },
  {
    id: "2",
    name: {
      en: "Natural Spice Blends",
      nl: "Natuurlijke Kruidenmix",
    },
    price: 8.95,
    image: "/images/aduda-spices.jpg",
    category: {
      en: "Spices",
      nl: "Specerijen",
    },
    description: {
      en: "Authentic Surinamese spice blends for traditional cooking. Hand-mixed with the finest ingredients.",
      nl: "Authentieke Surinaamse kruidenmixen voor traditioneel koken. Handgemengd met de beste ingrediënten.",
    },
    details: {
      en: ["Traditional recipe", "Hand-mixed spices", "No additives", "Authentic Surinamese flavor"],
      nl: ["Traditioneel recept", "Handgemengde kruiden", "Geen toevoegingen", "Authentieke Surinaamse smaak"],
    },
    sizes: ["50g", "100g", "200g"],
  },
  // New Surinamese products from provided images
  {
    id: "3",
    name: {
      en: "Moringa Seeds",
      nl: "Moringa Zaden",
    },
    price: 9.95,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0023.JPEG-oBp3Ll3axwW48yRulQfp9xhw3MecYZ.jpeg",
    category: {
      en: "Herbs",
      nl: "Kruiden",
    },
    description: {
      en: "Organic Moringa seeds known for their high nutritional value and medicinal properties. Rich in vitamins and minerals.",
      nl: "Biologische Moringa zaden bekend om hun hoge voedingswaarde en medicinale eigenschappen. Rijk aan vitamines en mineralen.",
    },
    details: {
      en: ["Organic and natural", "Rich in antioxidants", "Traditional Surinamese remedy", "High nutritional value"],
      nl: ["Biologisch en natuurlijk", "Rijk aan antioxidanten", "Traditioneel Surinaams middel", "Hoge voedingswaarde"],
    },
    sizes: ["50g", "100g", "200g"],
  },
  {
    id: "4",
    name: {
      en: "Kalebas Stroop",
      nl: "Kalebas Stroop",
    },
    price: 7.95,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0033.JPEG-IK4JhzIjgARdSIUUhXIs8F4cltN11Z.jpeg",
    category: {
      en: "Syrups",
      nl: "Siropen",
    },
    description: {
      en: "Traditional calabash syrup from Suriname. Used for respiratory health and as a natural remedy. 125ml bottle.",
      nl: "Traditionele kalebas siroop uit Suriname. Gebruikt voor de luchtwegen en als natuurlijk middel. 125ml fles.",
    },
    details: {
      en: ["Traditional recipe", "125ml bottle", "Natural ingredients", "Supports respiratory health"],
      nl: ["Traditioneel recept", "125ml fles", "Natuurlijke ingrediënten", "Ondersteunt de luchtwegen"],
    },
    sizes: ["125ml"],
  },
  {
    id: "5",
    name: {
      en: "Traditional Herbal Oil",
      nl: "Traditionele Kruidenolie",
    },
    price: 11.95,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0022.JPEG-0D4OAstSCfo3eScjxFVl6TiNjaXC1R.jpeg",
    category: {
      en: "Oils",
      nl: "Oliën",
    },
    description: {
      en: "Dark herbal oil made from traditional Surinamese herbs. Used for massage and traditional healing practices.",
      nl: "Donkere kruidenolie gemaakt van traditionele Surinaamse kruiden. Gebruikt voor massage en traditionele genezing.",
    },
    details: {
      en: ["Traditional Surinamese herbs", "For external use", "Natural ingredients", "Handcrafted"],
      nl: ["Traditionele Surinaamse kruiden", "Voor uitwendig gebruik", "Natuurlijke ingrediënten", "Handgemaakt"],
    },
    sizes: ["100ml", "250ml"],
  },
  {
    id: "6",
    name: {
      en: "Batana Oil",
      nl: "Batana Olie",
    },
    price: 14.95,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0025.JPEG-YKxxJ2dWuWYMLgvLDYk60BKCQr1elg.jpeg",
    category: {
      en: "Oils",
      nl: "Oliën",
    },
    description: {
      en: "Pure Batana oil for hair and skin care. Known for promoting hair growth and moisturizing properties.",
      nl: "Pure Batana olie voor haar- en huidverzorging. Bekend om haargroei te bevorderen en hydraterende eigenschappen.",
    },
    details: {
      en: ["Promotes hair growth", "Deep moisturizing", "100% natural", "Traditional recipe"],
      nl: ["Bevordert haargroei", "Diepe hydratatie", "100% natuurlijk", "Traditioneel recept"],
    },
    sizes: ["100ml", "200ml"],
  },
  {
    id: "7",
    name: {
      en: "Doe Dresie",
      nl: "Doe Dresie",
    },
    price: 8.95,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0032.JPEG-uB5p4flF3Lf80npWwSZdEIE898nCpL.jpeg",
    category: {
      en: "Wellness",
      nl: "Welzijn",
    },
    description: {
      en: "Traditional Doe Dresie herbal remedy made with water, herbs, and menthol. A Surinamese wellness product.",
      nl: "Traditioneel Doe Dresie kruidenmiddel gemaakt met water, kruiden en menthol. Een Surinaams welzijnsproduct.",
    },
    details: {
      en: ["Water, herbs & menthol", "Traditional formula", "M.K. Niamat recipe", "For wellness use"],
      nl: ["Water, kruiden & menthol", "Traditionele formule", "M.K. Niamat recept", "Voor welzijnsgebruik"],
    },
    sizes: ["100ml", "200ml"],
  },
  {
    id: "8",
    name: {
      en: "Dried Herb Leaves",
      nl: "Gedroogde Kruidenbladeren",
    },
    price: 6.95,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0024.JPEG-nDsYdabsDh4JSfPRcCxkWlBqLpVoUP.jpeg",
    category: {
      en: "Herbs",
      nl: "Kruiden",
    },
    description: {
      en: "Dried medicinal herb leaves from Suriname. Perfect for making traditional herbal teas and remedies.",
      nl: "Gedroogde medicinale kruidenbladeren uit Suriname. Perfect voor traditionele kruidenthee en remedies.",
    },
    details: {
      en: ["Sun-dried naturally", "Medicinal herbs", "For tea preparation", "Traditional use"],
      nl: ["Natuurlijk zongedroogd", "Medicinale kruiden", "Voor thee bereiding", "Traditioneel gebruik"],
    },
    sizes: ["50g", "100g"],
  },
  {
    id: "9",
    name: {
      en: "Traditional Bark & Roots",
      nl: "Traditionele Bast & Wortels",
    },
    price: 15.95,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0036.JPEG-qsYTHLFoCRuo9hkOh59Di8ZNzSSRUr.jpeg",
    category: {
      en: "Traditional",
      nl: "Traditioneel",
    },
    description: {
      en: "Collection of traditional Surinamese barks, roots and herbs used for making traditional remedies and teas.",
      nl: "Collectie van traditionele Surinaamse bast, wortels en kruiden voor traditionele remedies en thee.",
    },
    details: {
      en: ["Various barks and roots", "Traditional medicine", "Handpicked selection", "Authentic Surinamese"],
      nl: ["Diverse bast en wortels", "Traditionele geneeskunde", "Handgeselecteerd", "Authentiek Surinaams"],
    },
    sizes: ["Mixed pack"],
  },
  {
    id: "10",
    name: {
      en: "Wilde Sopropo",
      nl: "Wilde Sopropo",
    },
    price: 7.50,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0028.JPEG-rmq9uyRDanh3ELBWSElWwiUgDUZRa7.jpeg",
    category: {
      en: "Herbs",
      nl: "Kruiden",
    },
    description: {
      en: "Wild Bitter Melon herb - A Surinamese blood purifying herb. Body in Balance brand. For making medicinal tea.",
      nl: "Wilde Bittermeloen kruid - Een Surinaams bloedzuiverend kruid. Body in Balance merk. Voor medicinale thee.",
    },
    details: {
      en: ["Blood purifying herb", "Body in Balance brand", "Dried herb leaves", "Traditional remedy"],
      nl: ["Bloedzuiverend kruid", "Body in Balance merk", "Gedroogde kruidenbladeren", "Traditioneel middel"],
    },
    sizes: ["50g", "100g"],
  },
  {
    id: "11",
    name: {
      en: "Love Box Steam",
      nl: "Love Box Steam",
    },
    price: 12.95,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0029.JPEG-1UDsfUSM6mLDF32RCTKrcepcMiNoXZ.jpeg",
    category: {
      en: "Wellness",
      nl: "Welzijn",
    },
    description: {
      en: "Herbal steam treatment by Melanin Magic. Supports your female cycle, helps you heal and relax. 40 grams of dried medicinal herbs.",
      nl: "Kruiden stoombehandeling van Melanin Magic. Ondersteunt uw vrouwelijke cyclus, helpt bij herstel en ontspanning. 40 gram gedroogde medicinale kruiden.",
    },
    details: {
      en: ["40 grams dried herbs", "Female wellness support", "Organic ingredients", "12 months shelf life"],
      nl: ["40 gram gedroogde kruiden", "Ondersteuning vrouwelijk welzijn", "Biologische ingrediënten", "12 maanden houdbaar"],
    },
    sizes: ["40g"],
  },
  {
    id: "12",
    name: {
      en: "Calophylle Oil",
      nl: "Calophylle Olie",
    },
    price: 13.95,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0038.JPEG-ji6IG6BOBUK1jLUtrg7XkRCpBuDqVl.jpeg",
    category: {
      en: "Oils",
      nl: "Oliën",
    },
    description: {
      en: "ADUDA Calophylle oil made from tropical herbs following traditional recipes. Good for muscles and joints.",
      nl: "ADUDA Calophylle olie gemaakt van tropische kruiden volgens grootvaders recept. Goed voor spieren en gewrichten.",
    },
    details: {
      en: ["Tropical herbs", "Traditional recipe", "For muscles and joints", "ADUDA brand"],
      nl: ["Tropische kruiden", "Traditioneel recept", "Voor spieren en gewrichten", "ADUDA merk"],
    },
    sizes: ["100ml", "200ml"],
  },
  {
    id: "13",
    name: {
      en: "Natural Soaps Collection",
      nl: "Natuurlijke Zepen Collectie",
    },
    price: 4.95,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0026.JPEG-oDoSF3Vs8p38kG9XbjcTX928D4NX7T.jpeg",
    category: {
      en: "Soaps",
      nl: "Zepen",
    },
    description: {
      en: "Collection of natural soaps including Turmeric, Neem, Blackseed, Margo, Papaya Carrot, and Pine Tar varieties.",
      nl: "Collectie natuurlijke zepen inclusief Kurkuma, Neem, Zwarte Zaad, Margo, Papaja Wortel en Dennenteer variëteiten.",
    },
    details: {
      en: ["Various natural soaps", "Turmeric, Neem, Blackseed", "Cleanses and purifies", "75g - 100g bars"],
      nl: ["Diverse natuurlijke zepen", "Kurkuma, Neem, Zwart Zaad", "Reinigt en zuivert", "75g - 100g stukken"],
    },
    sizes: ["Turmeric", "Neem", "Blackseed", "Margo", "Pine Tar"],
  },
  {
    id: "14",
    name: {
      en: "Sjuru Tea",
      nl: "Sjuru Thee",
    },
    price: 8.95,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0030.JPEG-AhEnqoROydKqf8rLEzb6N6CVlBIHfo.jpeg",
    category: {
      en: "Teas",
      nl: "Thee",
    },
    description: {
      en: "Sjuru - A Surinamese Wonder Tea by Body in Balance. Traditional herbal tea blend for wellness.",
      nl: "Sjuru - Een Surinaamse Wonderthee van Body in Balance. Traditionele kruidenthee mix voor welzijn.",
    },
    details: {
      en: ["Surinamese wonder tea", "Body in Balance brand", "Herbal blend", "Wellness support"],
      nl: ["Surinaamse wonderthee", "Body in Balance merk", "Kruiden melange", "Welzijn ondersteuning"],
    },
    sizes: ["50g", "100g"],
  },
  {
    id: "15",
    name: {
      en: "Malasi Oil",
      nl: "Malasi Olie",
    },
    price: 10.95,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0027.JPEG-f4gPpXlnNuRJl1AXvoIhtTaOtte5xh.jpeg",
    category: {
      en: "Oils",
      nl: "Oliën",
    },
    description: {
      en: "Traditional Malasi oil from Suriname. A herbal oil used for various traditional wellness applications.",
      nl: "Traditionele Malasi olie uit Suriname. Een kruidenolie voor diverse traditionele welzijnstoepassingen.",
    },
    details: {
      en: ["Traditional formula", "Herbal infusion", "Multi-purpose oil", "Handcrafted"],
      nl: ["Traditionele formule", "Kruiden infusie", "Multifunctionele olie", "Handgemaakt"],
    },
    sizes: ["100ml", "200ml"],
  },
  {
    id: "16",
    name: {
      en: "Neem Leaves",
      nl: "Neem Bladeren",
    },
    price: 6.50,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0021.JPEG-eKPnT1wpw0wDNjsdKgWojsugnBICHv.jpeg",
    category: {
      en: "Herbs",
      nl: "Kruiden",
    },
    description: {
      en: "Dried Neem leaves and seeds. Known for their antibacterial and medicinal properties. Traditional Surinamese herb.",
      nl: "Gedroogde Neem bladeren en zaden. Bekend om hun antibacteriële en medicinale eigenschappen. Traditioneel Surinaams kruid.",
    },
    details: {
      en: ["Dried neem leaves", "Antibacterial properties", "Traditional medicine", "Multiple uses"],
      nl: ["Gedroogde neem bladeren", "Antibacteriële eigenschappen", "Traditionele geneeskunde", "Meerdere toepassingen"],
    },
    sizes: ["50g", "100g"],
  },
  {
    id: "17",
    name: {
      en: "Surinamese Honey",
      nl: "Surinaamse Honing",
    },
    price: 12.95,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0034.JPEG-jZ6E1FW1qHfOaXgQN4vg8x42WrO4ec.jpeg",
    category: {
      en: "Foods",
      nl: "Voedsel",
    },
    description: {
      en: "Pure Surinamese honey (Honing). Natural and unprocessed, collected from local beekeepers in Suriname.",
      nl: "Pure Surinaamse honing. Natuurlijk en onbewerkt, verzameld van lokale imkers in Suriname.",
    },
    details: {
      en: ["100% pure honey", "Unprocessed", "Local Surinamese", "Natural sweetener"],
      nl: ["100% pure honing", "Onbewerkt", "Lokaal Surinaams", "Natuurlijke zoetstof"],
    },
    sizes: ["250ml", "500ml"],
  },
  {
    id: "18",
    name: {
      en: "Cassava Bread",
      nl: "Cassave Brood",
    },
    price: 6.95,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0713.JPEG-QQ9Z5eWZphmoq3DZC4J4KLsv6rIC73.jpeg",
    category: {
      en: "Foods",
      nl: "Voedsel",
    },
    description: {
      en: "Traditional Surinamese cassava bread. A gluten-free flatbread made from cassava root, a staple in Surinamese cuisine.",
      nl: "Traditioneel Surinaams cassavebrood. Een glutenvrij platbrood gemaakt van cassavewortel, een basis in de Surinaamse keuken.",
    },
    details: {
      en: ["Gluten-free", "Traditional recipe", "Handmade", "Authentic Surinamese"],
      nl: ["Glutenvrij", "Traditioneel recept", "Handgemaakt", "Authentiek Surinaams"],
    },
    sizes: ["1 piece", "2 pieces"],
  },
  // Pangi Cloths
  {
    id: "19",
    name: {
      en: "Pangi Traditional",
      nl: "Pangi Traditioneel",
    },
    price: 24.95,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0710.JPEG-FIOiRKOk9htaeLMN2LXuU2ERG46c60.jpeg",
    category: {
      en: "Textiles",
      nl: "Textiel",
    },
    description: {
      en: "Traditional Surinamese Pangi cloth with colorful plaid patterns. Used for traditional ceremonies, wrapping, and home decoration. Available in various vibrant color combinations including yellow, blue, red, orange, and classic black & white patterns.",
      nl: "Traditionele Surinaamse Pangi doek met kleurrijke ruitpatronen. Gebruikt voor traditionele ceremonies, wikkelen en woondecoratie. Verkrijgbaar in diverse levendige kleurcombinaties waaronder geel, blauw, rood, oranje en klassieke zwart-wit patronen.",
    },
    details: {
      en: ["Traditional plaid patterns", "Vibrant colors", "Ceremonial use", "100% cotton", "Handwoven quality"],
      nl: ["Traditionele ruitpatronen", "Levendige kleuren", "Ceremonieel gebruik", "100% katoen", "Handgeweven kwaliteit"],
    },
    sizes: ["Standard", "Large"],
  },
  {
    id: "20",
    name: {
      en: "Pangi Cultural",
      nl: "Pangi Cultureel",
    },
    price: 34.95,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0709.JPEG-CEdGQ49r2BPdNOgfC6vvzKkcDlWf14.jpeg",
    category: {
      en: "Textiles",
      nl: "Textiel",
    },
    description: {
      en: "Cultural Surinamese Pangi cloth featuring beautiful floral applique designs. These elegant cloths combine traditional plaid backgrounds with handcrafted flower embellishments. Perfect for special occasions and cultural celebrations.",
      nl: "Culturele Surinaamse Pangi doek met prachtige bloemen applicatie ontwerpen. Deze elegante doeken combineren traditionele ruitachtergronden met handgemaakte bloemenversieringen. Perfect voor speciale gelegenheden en culturele vieringen.",
    },
    details: {
      en: ["Floral applique design", "Handcrafted embellishments", "Premium quality", "Cultural celebrations", "Blue or pink flowers available"],
      nl: ["Bloemen applicatie ontwerp", "Handgemaakte versieringen", "Premium kwaliteit", "Culturele vieringen", "Blauwe of roze bloemen beschikbaar"],
    },
    sizes: ["Blue Flowers", "Pink Flowers"],
  },
  // Calabash Gourds
  {
    id: "21",
    name: {
      en: "Calabash Gourds",
      nl: "Kalebassen",
    },
    price: 18.95,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0680.JPEG-HHotk0RMutzlGBDkQt7zGO5b0D8sjk.jpeg",
    category: {
      en: "Traditional",
      nl: "Traditioneel",
    },
    description: {
      en: "Authentic dried calabash gourds from Suriname. Traditionally used as containers, bowls, and for making musical instruments. Each piece is unique in shape and size.",
      nl: "Authentieke gedroogde kalebassen uit Suriname. Traditioneel gebruikt als containers, schalen en voor het maken van muziekinstrumenten. Elk stuk is uniek in vorm en grootte.",
    },
    details: {
      en: ["Natural dried gourd", "Traditional uses", "Unique shapes", "Multi-purpose", "Authentic Surinamese"],
      nl: ["Natuurlijk gedroogde kalebas", "Traditioneel gebruik", "Unieke vormen", "Multifunctioneel", "Authentiek Surinaams"],
    },
    sizes: ["Small", "Medium", "Large"],
  },
  // Borgoe Rum
  {
    id: "22",
    name: {
      en: "Borgoe 15 Year Rum",
      nl: "Borgoe 15 Jaar Rum",
    },
    price: 89.95,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0686.JPEG-gzlFACA7eB1hLkgIjNrEHTJy48RfcA.jpeg",
    category: {
      en: "Beverages",
      nl: "Dranken",
    },
    description: {
      en: "Borgoe 15 Year Old Reserve Collection Aged Rum. Premium Surinamese rum aged for 15 years. Smooth, rich, and full of character. A true collector's item for rum enthusiasts.",
      nl: "Borgoe 15 Jaar Oude Reserve Collectie Gerijpte Rum. Premium Surinaamse rum gerijpt voor 15 jaar. Zacht, rijk en vol karakter. Een echte verzamelitem voor rum liefhebbers.",
    },
    details: {
      en: ["15 years aged", "Reserve Collection", "Premium quality", "70cl bottle", "Collector's edition"],
      nl: ["15 jaar gerijpt", "Reserve Collectie", "Premium kwaliteit", "70cl fles", "Collectors editie"],
    },
    sizes: ["70cl"],
  },
  // Krappa Oil
  {
    id: "23",
    name: {
      en: "Krappa Oil",
      nl: "Krappa Olie",
    },
    price: 11.95,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0698.JPEG-cCGtvhYhILrSFwRdsp6ByMkrWRtbyY.jpeg",
    category: {
      en: "Oils",
      nl: "Oliën",
    },
    description: {
      en: "ADUDA Krappa Oil - 100% natural and pure. Helps with various skin conditions including eczema and rashes. Traditional Surinamese remedy for skin care and hair loss prevention.",
      nl: "ADUDA Krappa Olie - 100% natuurlijk en puur. Helpt bij diverse huidaandoeningen waaronder eczeem en uitslag. Traditioneel Surinaams middel voor huidverzorging en tegen haaruitval.",
    },
    details: {
      en: ["100% natural and pure", "ADUDA brand", "Helps with eczema", "Prevents hair loss", "Traditional remedy"],
      nl: ["100% natuurlijk en puur", "ADUDA merk", "Helpt bij eczeem", "Voorkomt haaruitval", "Traditioneel middel"],
    },
    sizes: ["100ml", "200ml"],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string, language: "en" | "nl" = "en"): Product[] {
  return products.filter((p) => p.category[language].toLowerCase() === category.toLowerCase())
}
