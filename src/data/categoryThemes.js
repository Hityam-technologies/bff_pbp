export const categoryThemes = {
  'Trail Mix': {
    bg: 'bg-[#fbe5cb]',
    titleText: 'text-[#870024]',
    accent: '#870024',
    blob1: '#870024',
    blob2: '#f37500',
    doodle: '#f37500',
    light: '#fde8d4',
    shadow: 'hover:shadow-[#870024]/20',
  },
  'Seed Mix': {
    bg: 'bg-[#fff5cc]',
    titleText: 'text-[#a36800]',
    accent: '#a36800',
    blob1: '#a36800',
    blob2: '#ffb732',
    doodle: '#d98b00',
    light: '#fff9e0',
    shadow: 'hover:shadow-[#a36800]/20',
  },
  Edamame: {
    bg: 'bg-[#eefade]',
    titleText: 'text-[#36590b]',
    accent: '#36590b',
    blob1: '#36590b',
    blob2: '#8bc34a',
    doodle: '#649e1e',
    light: '#f4fce8',
    shadow: 'hover:shadow-[#36590b]/20',
  },
  'Energy Bars': {
    bg: 'bg-[#eae8f0]',
    titleText: 'text-[#2a2640]',
    accent: '#2a2640',
    blob1: '#2a2640',
    blob2: '#7a729e',
    doodle: '#4b4376',
    light: '#f0eef5',
    shadow: 'hover:shadow-[#2a2640]/20',
  },
  'Protein Bars': {
    bg: 'bg-[#ffe4e6]',
    titleText: 'text-[#881337]',
    accent: '#881337',
    blob1: '#881337',
    blob2: '#fb7185',
    doodle: '#e11d48',
    light: '#fff0f1',
    shadow: 'hover:shadow-[#881337]/20',
  },
};

export const categoryMeta = {
  'Trail Mix': {
    description: 'Crunchy, flavorful trail mixes with bold seasonings — perfect high-protein snacking.',
    tag: 'High Protein',
  },
  'Seed Mix': {
    description: 'Roasted seed blends packed with healthy fats, fibre, and natural goodness.',
    tag: 'High Fibre',
  },
  Edamame: {
    description: '11g protein per serving — a smarter alternative to regular chips and snacks.',
    tag: '11g Protein',
  },
  'Energy Bars': {
    description: 'Functional 40g energy bars with ashwagandha, ginseng, and gut-friendly inulin.',
    tag: '40g Bars',
  },
  'Protein Bars': {
    description: '10g plant-based protein in every 52g bar — perfect post-workout fuel.',
    tag: '10g Protein',
  },
};

export function getCategoryTheme(category) {
  return categoryThemes[category] || categoryThemes['Trail Mix'];
}

export function getCategoryMeta(category) {
  return categoryMeta[category] || categoryMeta['Trail Mix'];
}
