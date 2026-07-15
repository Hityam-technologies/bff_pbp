import { useLayoutEffect } from 'react';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSheet from '../components/ProductSheet';
import CategoryPageDecor from '../components/CategoryPageDecor';
import { getProductsByCategory } from '../data/products';
import { getCategoryMeta, getCategoryTheme } from '../data/categoryThemes';
import { findCategoryBySlug, productPath } from '../utils/navigation';

export default function CategoryDetailScreen() {
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  const category = findCategoryBySlug(categorySlug);

  // Always open category pages from the top
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [categorySlug]);

  if (!category) {
    return <Navigate to="/" replace />;
  }

  const products = getProductsByCategory(category);
  const theme = getCategoryTheme(category);
  const meta = getCategoryMeta(category);
  const sizes = Array.from(new Set(products.flatMap((p) => Object.keys(p.pricing))));

  return (
    <div className="min-h-screen flex flex-col relative">
      <CategoryPageDecor category={category} theme={theme} />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header hideOnScrollMobile />

        <div className="flex-1 max-w-[1480px] mx-auto px-5 w-full pb-10">
          {/* Breadcrumb — inline, no separate bar */}
          <nav className="flex items-center gap-2 text-[12px] font-semibold text-stone-700 pt-5">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="hover:text-[#649e1e] transition-colors"
            >
              Home
            </button>
            <span className="text-stone-500">/</span>
            <span style={{ color: theme.accent }}>{category}</span>
          </nav>

          {/* Hero — title left, stats + variants right */}
          <div className="mt-6 md:mt-8 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="max-w-xl">


              <h1
                className={`mt-4 text-5xl md:text-7xl font-black leading-none tracking-tight animate-fade-up animate-fade-up-delay-1 font-['Finger_Paint'] ${theme.titleText}`}
              >
                {category}
              </h1>

              <p
                className={`mt-3 text-sm md:text-base font-semibold leading-relaxed animate-fade-up animate-fade-up-delay-2 ${theme.titleText} opacity-70`}
              >
                {meta.description}
              </p>
            </div>
          </div>

          {/* Soft transition — not a hard section divider */}
          <div
            className="my-4 md:my-5 h-px w-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${theme.accent}30, transparent)`,
            }}
          />

          {/* Product cards — same canvas, no extra section header */}
          <div className="space-y-6 md:space-y-8">
            {products.map((product, idx) => (
              <ProductSheet
                key={product.id}
                product={product}
                sizes={sizes}
                index={idx}
                reverse={idx % 2 === 1}
                themeAccent={theme.accent}
                onViewDetails={() => navigate(productPath(product.id))}
              />
            ))}
          </div>


        </div>

        <Footer />
      </div>
    </div>
  );
}


