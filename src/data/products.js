export const STORE_URL = 'https://betterfoodfactory.in';

const CDN = 'https://cdn.shopify.com/s/files/1/0649/0416/7622/files';

export const initialProducts = [
  // Trail Mix — no store photos yet; UI falls back to color poster
  { id: 1, category: 'Trail Mix', name: 'Trail Mix', variant: 'Peri Peri',
    pricing: { '28g': [50, 30], '100g': ['-', '-'], '150g': [260, 156], '500g': [510, 850], '1000g': [900, 1500] },
    cartonQty: 24, shelfLife: 6, gst: 5, themeColor: 'bg-yellow-400', textColor: 'text-yellow-900',
    sellingPrice: 260, websiteUrl: STORE_URL,
  },
  { id: 2, category: 'Trail Mix', name: 'Trail Mix', variant: 'Korean Chilli',
    pricing: { '28g': [50, 30], '100g': ['-', '-'], '150g': [260, 156], '500g': [510, 850], '1000g': [900, 1500] },
    cartonQty: 24, shelfLife: 6, gst: 5, themeColor: 'bg-red-500', textColor: 'text-red-950',
    sellingPrice: 260, websiteUrl: STORE_URL,
  },
  { id: 3, category: 'Trail Mix', name: 'Trail Mix', variant: 'Katta Meeta',
    pricing: { '28g': [50, 30], '100g': ['-', '-'], '150g': [260, 156], '500g': [510, 850], '1000g': [900, 1500] },
    cartonQty: 24, shelfLife: 6, gst: 5, themeColor: 'bg-orange-400', textColor: 'text-orange-950',
    sellingPrice: 260, websiteUrl: STORE_URL,
  },
  // Seed Mix — no store photos yet; UI falls back to color poster
  { id: 4, category: 'Seed Mix', name: 'Seed Mix', variant: 'Roasted',
    pricing: { '28g': [45, 27], '100g': ['-', '-'], '150g': [210, 126], '500g': [420, 700], '1000g': [810, 1350] },
    cartonQty: 24, shelfLife: 6, gst: 5, themeColor: 'bg-amber-400', textColor: 'text-amber-950',
    sellingPrice: 210, websiteUrl: STORE_URL,
  },
  // Edamame
  { id: 5, category: 'Edamame', name: 'Edamame', variant: 'Peri Peri',
    pricing: { '28g': [50, 30], '100g': [210, 126], '150g': ['-', '-'], '500g': [588, 980], '1000g': [1140, 1900] },
    cartonQty: 24, shelfLife: 6, gst: 5, themeColor: 'bg-yellow-400', textColor: 'text-yellow-900',
    sellingPrice: 210, websiteUrl: `${STORE_URL}/products/edamame-seeds-peri-peri-flavour`,
    images: [
      `${CDN}/Edamame_PeriPeri_1_9bdbc580-3f6e-48ad-a99c-af2590cd0e96.png?v=1778933935`,
      `${CDN}/Edamame_PeriPeri_2_70488349-b8ee-4e69-bff6-3314086b2a38.png?v=1778933935`,
    ],
  },
  { id: 6, category: 'Edamame', name: 'Edamame', variant: 'Korean Chilli',
    pricing: { '28g': [50, 30], '100g': [210, 126], '150g': ['-', '-'], '500g': [588, 980], '1000g': [1140, 1900] },
    cartonQty: 24, shelfLife: 6, gst: 5, themeColor: 'bg-red-500', textColor: 'text-red-950',
    sellingPrice: 210, websiteUrl: `${STORE_URL}/products/edamame-seeds-koreanchilli-flavour`,
    images: [
      `${CDN}/Edamame_KC_1.png?v=1778930234`,
      `${CDN}/Edamame_KC_2.png?v=1778930234`,
    ],
  },
  { id: 7, category: 'Edamame', name: 'Edamame', variant: 'Katta Meeta',
    pricing: { '28g': [50, 30], '100g': [210, 126], '150g': ['-', '-'], '500g': [588, 980], '1000g': [1140, 1900] },
    cartonQty: 24, shelfLife: 6, gst: 5, themeColor: 'bg-green-500', textColor: 'text-green-950',
    sellingPrice: 210, websiteUrl: `${STORE_URL}/products/edamame-seeds-khattameeta-flavour`,
    images: [
      `${CDN}/Edamame_KhattaMeetha_1.png?v=1778929832`,
      `${CDN}/Edamame_KhattaMeetha_2.png?v=1778929832`,
    ],
  },
  // Energy Bars
  { id: 8, category: 'Energy Bars', name: 'Energy Bar', variant: 'Cranberry',
    pricing: { '40g': [50, 30], '52g': ['-', '-'] }, cartonQty: 96, shelfLife: 6, gst: 5, themeColor: 'bg-pink-500', textColor: 'text-pink-950', sellingPrice: 50,
    websiteUrl: `${STORE_URL}/products/gut-health-energy-bar-copy`,
    images: [
      `${CDN}/Gut_Cranberry_1.png?v=1760118156`,
      `${CDN}/Gut_Cranberry_2.png?v=1760118157`,
    ],
  },
  { id: 9, category: 'Energy Bars', name: 'Energy Bar', variant: 'Orange',
    pricing: { '40g': [50, 30], '52g': ['-', '-'] }, cartonQty: 96, shelfLife: 6, gst: 5, themeColor: 'bg-orange-500', textColor: 'text-orange-950', sellingPrice: 50,
    websiteUrl: `${STORE_URL}/products/orange-gut-health-energy-bar-6g-fibre`,
    images: [
      `${CDN}/Gut_Orange_1.png?v=1760117897`,
      `${CDN}/Gut_Orange_2.png?v=1760117897`,
    ],
  },
  { id: 10, category: 'Energy Bars', name: 'Energy Bar', variant: 'Cocoa',
    pricing: { '40g': [50, 30], '52g': ['-', '-'] }, cartonQty: 96, shelfLife: 6, gst: 5, themeColor: 'bg-amber-700', textColor: 'text-amber-100', sellingPrice: 50,
    websiteUrl: `${STORE_URL}/products/stress-relief-energy-bar-copy`,
    images: [
      `${CDN}/Stress_cocoa_1.png?v=1760118107`,
      `${CDN}/Stress_cocoa_2.png?v=1760118107`,
    ],
  },
  { id: 11, category: 'Energy Bars', name: 'Energy Bar', variant: 'Coffee',
    pricing: { '40g': [50, 30], '52g': ['-', '-'] }, cartonQty: 96, shelfLife: 6, gst: 5, themeColor: 'bg-stone-600', textColor: 'text-stone-100', sellingPrice: 50,
    websiteUrl: `${STORE_URL}/products/coffee-stress-relief-energy-bar`,
    images: [
      `${CDN}/Stress_coffee_1.png?v=1760117837`,
      `${CDN}/Stress_coffee_2.png?v=1760117837`,
    ],
  },
  { id: 12, category: 'Energy Bars', name: 'Energy Bar', variant: 'Nuts & Seeds',
    pricing: { '40g': [50, 30], '52g': ['-', '-'] }, cartonQty: 96, shelfLife: 6, gst: 5, themeColor: 'bg-lime-600', textColor: 'text-lime-100', sellingPrice: 50,
    websiteUrl: `${STORE_URL}/products/energy-booster-bar-copy`,
    images: [
      `${CDN}/Energy_Nuts_1_1.png?v=1760160051`,
      `${CDN}/Energy_Nuts_2.png?v=1760160051`,
    ],
  },
  { id: 13, category: 'Energy Bars', name: 'Energy Bar', variant: 'Black currant',
    pricing: { '40g': [50, 30], '52g': ['-', '-'] }, cartonQty: 96, shelfLife: 6, gst: 5, themeColor: 'bg-purple-600', textColor: 'text-purple-100', sellingPrice: 50,
    websiteUrl: `${STORE_URL}/products/black-currant-energy-booster-bar`,
    images: [
      `${CDN}/Energy_bc_1_Test.png?v=1761376786`,
      `${CDN}/Energy_bc_2.png?v=1761376786`,
    ],
  },
  // Protein Bars
  { id: 14, category: 'Protein Bars', name: 'Protein Bar', variant: 'Cocoa Banana',
    pricing: { '40g': ['-', '-'], '52g': [70, 42] }, cartonQty: 96, shelfLife: 6, gst: 5, themeColor: 'bg-yellow-600', textColor: 'text-yellow-100', sellingPrice: 70,
    websiteUrl: `${STORE_URL}/products/10-gm-protein-bar-copy`,
    images: [
      `${CDN}/Protein_banana_1.png?v=1760118537`,
      `${CDN}/Protein_banana_2_a61dcd87-fb2d-4f7a-bcb5-497186135a05.png?v=1760160521`,
    ],
  },
  { id: 15, category: 'Protein Bars', name: 'Protein Bar', variant: 'Cocoa Peanut',
    pricing: { '40g': ['-', '-'], '52g': [70, 42] }, cartonQty: 96, shelfLife: 6, gst: 5, themeColor: 'bg-amber-800', textColor: 'text-amber-100', sellingPrice: 70,
    websiteUrl: `${STORE_URL}/products/cocoa-peanut-10g-protein-bar`,
    images: [
      `${CDN}/Protein_peanut_1.png?v=1760117996`,
      `${CDN}/Protein_peanut_2.png?v=1760117995`,
    ],
  },
];

export function getProductById(id) {
  return initialProducts.find((p) => p.id === Number(id)) ?? null;
}

export function getProductsByCategory(category) {
  return initialProducts.filter((p) => p.category === category);
}
