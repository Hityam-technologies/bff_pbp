import { initialProducts } from '../data/products';
import { categoryPath, productPath } from './navigation';

function matchesQuery(text, q) {
  return text.toLowerCase().includes(q);
}

/** Best single target for Enter / submit. */
export function findSearchTarget(query) {
  const suggestions = searchSuggestions(query, 1);
  if (!suggestions.length) return null;
  return { path: suggestions[0].path };
}

/**
 * Live search suggestions for products and categories.
 * @returns {{ type: 'product'|'category', id: string|number, path: string, title: string, subtitle: string, product?: object, category?: string }[]}
 */
export function searchSuggestions(query, limit = 8) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results = [];
  const categories = [...new Set(initialProducts.map((p) => p.category))];

  for (const category of categories) {
    if (matchesQuery(category, q)) {
      results.push({
        type: 'category',
        id: `cat-${category}`,
        path: categoryPath(category),
        title: category,
        subtitle: 'Category',
        category,
      });
    }
  }

  for (const product of initialProducts) {
    const haystack = `${product.name} ${product.variant} ${product.category}`;
    if (matchesQuery(haystack, q)) {
      results.push({
        type: 'product',
        id: product.id,
        path: productPath(product.id),
        title: `${product.name} — ${product.variant}`,
        subtitle: product.category,
        product,
      });
    }
  }

  return results.slice(0, limit);
}
