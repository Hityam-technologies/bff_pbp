import { initialProducts } from '../data/products';

export function categoryToSlug(category) {
  return category.toLowerCase().replace(/\s+/g, '-');
}

export function findCategoryBySlug(slug) {
  const categories = [...new Set(initialProducts.map((p) => p.category))];
  return categories.find((c) => categoryToSlug(c) === slug) ?? null;
}

export function categoryPath(category) {
  return `/category/${categoryToSlug(category)}`;
}

export function productPath(productId) {
  return `/product/${productId}`;
}
