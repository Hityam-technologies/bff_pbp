export const STORE_URL = 'https://betterfoodfactory.in';

const CDN = 'https://cdn.shopify.com/s/files/1/0649/0416/7622/files';

export const initialProducts = [
  // Trail Mix — no store photos yet; UI falls back to color poster
  { id: 1, category: 'Trail Mix', name: 'Trail Mix', variant: 'Peri Peri',
    storeTitle: 'Peri Peri Trail Mix',
    description:
      'A spicy Peri Peri trail mix crafted for bold snacking — roasted nuts and mixes with fiery seasoning for energy on the go.',
    // pricing: [Costing/serving, Landing cost Mumbai]
    pricing: { '28g': [50, 30], '100g': ['-', '-'], '150g': [260, 156], '500g': [850, 510], '1000g': [1500, 900] },
    cartonQty: 24, shelfLife: 6, gst: 5, themeColor: 'bg-yellow-400', textColor: 'text-yellow-900',
    sellingPrice: 260, websiteUrl: STORE_URL,
  },
  { id: 2, category: 'Trail Mix', name: 'Trail Mix', variant: 'Korean Chilli',
    storeTitle: 'Korean Chilli Trail Mix',
    description:
      'Korean Chilli trail mix with a savoury heat — a flavourful, protein-forward snack for everyday munching and travel.',
    pricing: { '28g': [50, 30], '100g': ['-', '-'], '150g': [260, 156], '500g': [850, 510], '1000g': [1500, 900] },
    cartonQty: 24, shelfLife: 6, gst: 5, themeColor: 'bg-red-500', textColor: 'text-red-950',
    sellingPrice: 260, websiteUrl: STORE_URL,
  },
  { id: 3, category: 'Trail Mix', name: 'Trail Mix', variant: 'Katta Meeta',
    storeTitle: 'Katta Meeta Trail Mix',
    description:
      'Katta Meeta trail mix with the classic sweet-and-sour kick — a tangy mix that keeps snacking exciting without deep-fried junk.',
    pricing: { '28g': [50, 30], '100g': ['-', '-'], '150g': [260, 156], '500g': [850, 510], '1000g': [1500, 900] },
    cartonQty: 24, shelfLife: 6, gst: 5, themeColor: 'bg-orange-400', textColor: 'text-orange-950',
    sellingPrice: 260, websiteUrl: STORE_URL,
  },
  // Seed Mix — no store photos yet; UI falls back to color poster
  { id: 4, category: 'Seed Mix', name: 'Seed Mix', variant: 'Roasted',
    storeTitle: 'Roasted Seed Mix',
    description:
      'Lightly roasted seed mix for clean, crunchy snacking — packed with nutrient-dense seeds for a smarter everyday nibble.',
    pricing: { '28g': [45, 27], '100g': ['-', '-'], '150g': [210, 126], '500g': [700, 420], '1000g': [1350, 810] },
    cartonQty: 24, shelfLife: 6, gst: 5, themeColor: 'bg-amber-400', textColor: 'text-amber-950',
    sellingPrice: 210, websiteUrl: STORE_URL,
  },
  // Edamame — descriptions from betterfoodfactory.in
  { id: 5, category: 'Edamame', name: 'Edamame', variant: 'Peri Peri',
    storeTitle: 'Peri Peri Roasted Edamame',
    description:
      'Upgrade your snacking with our crunchy and flavorful Peri Peri Edamame — a high protein snack made with natural ingredients and 100% natural seasoning. With 11g of protein, 4g of dietary fibre, and low sodium in every serving, Edamame is a smarter alternative to regular chips and fried snacks. Crafted for clean and guilt-free snacking with no artificial flavors, colors, or preservatives.',
    pricing: { '28g': [50, 30], '100g': [210, 126], '150g': ['-', '-'], '500g': [980, 588], '1000g': [1900, 1140] },
    cartonQty: 24, shelfLife: 6, gst: 5, themeColor: 'bg-yellow-400', textColor: 'text-yellow-900',
    sellingPrice: 210, websiteUrl: `${STORE_URL}/products/edamame-seeds-peri-peri-flavour`,
    images: [
      `${CDN}/Edamame_PeriPeri_1_9bdbc580-3f6e-48ad-a99c-af2590cd0e96.png?v=1778933935`,
      `${CDN}/Edamame_PeriPeri_2_70488349-b8ee-4e69-bff6-3314086b2a38.png?v=1778933935`,
      `${CDN}/Edamame_PeriPeri_3.png?v=1778930295`,
      `${CDN}/Edamame_PeriPeri_4.png?v=1778930295`,
      `${CDN}/Edamame_PeriPeri_5.png?v=1778930294`,
    ],
  },
  { id: 6, category: 'Edamame', name: 'Edamame', variant: 'Korean Chilli',
    storeTitle: 'Korean Chilli Roasted Edamame',
    description:
      'Upgrade your snacking with our crunchy and flavorful Korean Chilli Edamame — a high protein snack made with natural ingredients and 100% natural seasoning. With 11g of protein, 4g of dietary fibre, and low sodium in every serving, Edamame is a smarter alternative to regular chips and fried snacks. Crafted for clean and guilt-free snacking with no artificial flavors, colors, or preservatives.',
    pricing: { '28g': [50, 30], '100g': [210, 126], '150g': ['-', '-'], '500g': [980, 588], '1000g': [1900, 1140] },
    cartonQty: 24, shelfLife: 6, gst: 5, themeColor: 'bg-red-500', textColor: 'text-red-950',
    sellingPrice: 210, websiteUrl: `${STORE_URL}/products/edamame-seeds-koreanchilli-flavour`,
    images: [
      `${CDN}/Edamame_KC_1.png?v=1778930234`,
      `${CDN}/Edamame_KC_2.png?v=1778930234`,
      `${CDN}/Edamame_KC_3.png?v=1778930234`,
      `${CDN}/Edamame_KC_4.png?v=1778930234`,
      `${CDN}/Edamame_KC_5.png?v=1778930234`,
    ],
  },
  { id: 7, category: 'Edamame', name: 'Edamame', variant: 'Katta Meeta',
    storeTitle: 'Khattameeta Roasted Edamame',
    description:
      'Upgrade your snacking with our crunchy and flavorful Khattameeta Edamame — a high protein snack made with natural ingredients and 100% natural seasoning. With 11g of protein, 4g of dietary fibre, and low sodium in every serving, Edamame is a smarter alternative to regular chips and fried snacks. Crafted for clean and guilt-free snacking with no artificial flavors, colors, or preservatives.',
    pricing: { '28g': [50, 30], '100g': [210, 126], '150g': ['-', '-'], '500g': [980, 588], '1000g': [1900, 1140] },
    cartonQty: 24, shelfLife: 6, gst: 5, themeColor: 'bg-green-500', textColor: 'text-green-950',
    sellingPrice: 210, websiteUrl: `${STORE_URL}/products/edamame-seeds-khattameeta-flavour`,
    images: [
      `${CDN}/Edamame_KhattaMeetha_1.png?v=1778929832`,
      `${CDN}/Edamame_KhattaMeetha_2.png?v=1778929832`,
      `${CDN}/Edamame_KhattaMeetha_3.png?v=1778929832`,
      `${CDN}/Edamame_KhattaMeetha_4.png?v=1778929836`,
      `${CDN}/Edamame_KhattaMeetha_5.png?v=1778929832`,
    ],
  },
  // Energy Bars — unique copy from betterfoodfactory.in
  { id: 8, category: 'Energy Bars', name: 'Energy Bar', variant: 'Cranberry',
    storeTitle: 'Cranberry Gut Health Energy Bar',
    description:
      'Our Cranberry Gut Health Bar is crafted to promote a healthy digestive system. With 6g of dietary fiber and prebiotic inulin, it nourishes your gut microbiome while delighting your taste buds with the natural sweetness of cranberries.',
    pricing: { '40g': [50, 30], '52g': ['-', '-'] }, cartonQty: 96, shelfLife: 6, gst: 5, themeColor: 'bg-pink-500', textColor: 'text-pink-950', sellingPrice: 50,
    websiteUrl: `${STORE_URL}/products/gut-health-energy-bar-copy`,
    images: [
      `${CDN}/Gut_Cranberry_1.png?v=1760118156`,
      `${CDN}/Gut_Cranberry_2.png?v=1760118157`,
      `${CDN}/Gut_Cranberry_3.png?v=1760118156`,
      `${CDN}/Gut_Cranberry_4.png?v=1760118156`,
      `${CDN}/Gut_Cranberry_5.webp?v=1771661258`,
    ],
  },
  { id: 9, category: 'Energy Bars', name: 'Energy Bar', variant: 'Orange',
    storeTitle: 'Orange Gut Health Energy Bar',
    description:
      'Our Orange Gut Health Bar is crafted to promote a healthy digestive system. With 6g of dietary fiber and prebiotic inulin, it nourishes your gut microbiome while delighting your taste buds with bright citrus flavour from orange peel.',
    pricing: { '40g': [50, 30], '52g': ['-', '-'] }, cartonQty: 96, shelfLife: 6, gst: 5, themeColor: 'bg-orange-500', textColor: 'text-orange-950', sellingPrice: 50,
    websiteUrl: `${STORE_URL}/products/orange-gut-health-energy-bar-6g-fibre`,
    images: [
      `${CDN}/Gut_Orange_1.png?v=1760117897`,
      `${CDN}/Gut_Orange_2.png?v=1760117897`,
      `${CDN}/Gut_Orange_3.png?v=1760117897`,
      `${CDN}/Gut_Orange_4.png?v=1760117897`,
      `${CDN}/Gut_Orange_5.png?v=1760117897`,
    ],
  },
  { id: 10, category: 'Energy Bars', name: 'Energy Bar', variant: 'Cocoa',
    storeTitle: 'Cocoa Stress Relief Energy Bar',
    description:
      'Our Cocoa Stress Relief Bar is your companion for moments when you need to de-stress. Infused with ashwagandha, a renowned adaptogen, it helps manage stress levels while providing a rich, chocolatey indulgence.',
    pricing: { '40g': [50, 30], '52g': ['-', '-'] }, cartonQty: 96, shelfLife: 6, gst: 5, themeColor: 'bg-amber-700', textColor: 'text-amber-100', sellingPrice: 50,
    websiteUrl: `${STORE_URL}/products/stress-relief-energy-bar-copy`,
    images: [
      `${CDN}/Stress_cocoa_1.png?v=1760118107`,
      `${CDN}/Stress_cocoa_2.png?v=1760118107`,
      `${CDN}/Stress_cocoa_3.png?v=1760118107`,
      `${CDN}/Stress_cocoa_4.png?v=1760118107`,
      `${CDN}/Stress_cocoa_5.webp?v=1771661472`,
    ],
  },
  { id: 11, category: 'Energy Bars', name: 'Energy Bar', variant: 'Coffee',
    storeTitle: 'Coffee Stress Relief Energy Bar',
    description:
      'Our Coffee Stress Relief Bar is your companion for moments when you need to de-stress. Infused with coffee powder and Ashwagandha, a renowned adaptogen, it helps manage stress levels while providing a rich, chocolatey indulgence.',
    pricing: { '40g': [50, 30], '52g': ['-', '-'] }, cartonQty: 96, shelfLife: 6, gst: 5, themeColor: 'bg-stone-600', textColor: 'text-stone-100', sellingPrice: 50,
    websiteUrl: `${STORE_URL}/products/coffee-stress-relief-energy-bar`,
    images: [
      `${CDN}/Stress_coffee_1.png?v=1760117837`,
      `${CDN}/Stress_coffee_2.png?v=1760117837`,
      `${CDN}/Stress_coffee_3.png?v=1760117837`,
      `${CDN}/Stress_coffee_4.png?v=1760117837`,
      `${CDN}/Stress_coffee_5.png?v=1760117837`,
    ],
  },
  { id: 12, category: 'Energy Bars', name: 'Energy Bar', variant: 'Nuts & Seeds',
    storeTitle: 'Nuts and Seeds Energy Booster Bar',
    description:
      'Our Nuts and Seeds Energy Booster Bar combines the goodness of whole grains, nuts, and seeds with the revitalizing properties of ashwagandha and Korean ginseng. This gluten-free bar is your go-to snack for sustained energy and mental clarity.',
    pricing: { '40g': [50, 30], '52g': ['-', '-'] }, cartonQty: 96, shelfLife: 6, gst: 5, themeColor: 'bg-lime-600', textColor: 'text-lime-100', sellingPrice: 50,
    websiteUrl: `${STORE_URL}/products/energy-booster-bar-copy`,
    images: [
      `${CDN}/Energy_Nuts_1_1.png?v=1760160051`,
      `${CDN}/Energy_Nuts_2.png?v=1760160051`,
      `${CDN}/Energy_Nuts_3.png?v=1760160051`,
      `${CDN}/Energy_Nuts_4.png?v=1760160051`,
      `${CDN}/Energy_Nuts_5.webp?v=1771661320`,
    ],
  },
  { id: 13, category: 'Energy Bars', name: 'Energy Bar', variant: 'Black currant',
    storeTitle: 'Black Currant Energy Booster Bar',
    description:
      'Our Black Currant Energy Booster Bar combines whole grains, nuts, and seeds with ashwagandha and Korean ginseng, plus dried black currants for a tart, fruity bite. A gluten-free snack built for sustained energy and mental clarity.',
    pricing: { '40g': [50, 30], '52g': ['-', '-'] }, cartonQty: 96, shelfLife: 6, gst: 5, themeColor: 'bg-purple-600', textColor: 'text-purple-100', sellingPrice: 50,
    websiteUrl: `${STORE_URL}/products/black-currant-energy-booster-bar`,
    images: [
      `${CDN}/Energy_bc_1_Test.png?v=1761376786`,
      `${CDN}/Energy_bc_2.png?v=1761376786`,
      `${CDN}/Energy_bc_3.png?v=1761376786`,
      `${CDN}/Energy_bc_4.png?v=1761376786`,
      `${CDN}/Energy_bc_5.png?v=1761376786`,
    ],
  },
  // Protein Bars — unique copy from betterfoodfactory.in
  { id: 14, category: 'Protein Bars', name: 'Protein Bar', variant: 'Cocoa Banana',
    storeTitle: 'Cocoa Banana 10G Protein Bar',
    description:
      'Packed with 10g of high-quality plant-based protein from soy and brown rice, our Cocoa Banana Protein Bar is your perfect post-workout snack or midday pick-me-up. Blended with wholesome oats, crunchy nuts, and a hint of banana, it delivers sustained energy without any artificial additives.',
    pricing: { '40g': ['-', '-'], '52g': [70, 42] }, cartonQty: 96, shelfLife: 6, gst: 5, themeColor: 'bg-yellow-600', textColor: 'text-yellow-100', sellingPrice: 70,
    websiteUrl: `${STORE_URL}/products/10-gm-protein-bar-copy`,
    images: [
      `${CDN}/Protein_banana_1.png?v=1760118537`,
      `${CDN}/Protein_banana_2_a61dcd87-fb2d-4f7a-bcb5-497186135a05.png?v=1760160521`,
      `${CDN}/Protein_banana_3_6601908e-43fe-4e25-8ba6-f26e1206d546.png?v=1760160521`,
      `${CDN}/Protein_banana_4.png?v=1760160521`,
      `${CDN}/Protein_banana_5.webp?v=1771661423`,
    ],
  },
  { id: 15, category: 'Protein Bars', name: 'Protein Bar', variant: 'Cocoa Peanut',
    storeTitle: 'Cocoa Peanut 10G Protein Bar',
    description:
      'Packed with 10g of high-quality plant-based protein from soy and brown rice, our Cocoa Peanut Protein Bar is your perfect post-workout snack or midday pick-me-up. Blended with wholesome oats, crunchy nuts, and a hint of peanuts, it delivers sustained energy without any artificial additives.',
    pricing: { '40g': ['-', '-'], '52g': [70, 42] }, cartonQty: 96, shelfLife: 6, gst: 5, themeColor: 'bg-amber-800', textColor: 'text-amber-100', sellingPrice: 70,
    websiteUrl: `${STORE_URL}/products/cocoa-peanut-10g-protein-bar`,
    images: [
      `${CDN}/Protein_peanut_1.png?v=1760117996`,
      `${CDN}/Protein_peanut_2.png?v=1760117995`,
      `${CDN}/Protein_peanut_3.png?v=1760117995`,
      `${CDN}/Protein_peanut_4.png?v=1760117995`,
      `${CDN}/Protein_peanut_5.png?v=1760117996`,
    ],
  },
];

export function getProductById(id) {
  return initialProducts.find((p) => p.id === Number(id)) ?? null;
}

export function getProductsByCategory(category) {
  return initialProducts.filter((p) => p.category === category);
}
