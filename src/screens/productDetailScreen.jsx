import { useNavigate, useParams, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getLowestLanding } from '../components/ProductSheet';
import { getProductById } from '../data/products';
import { categoryPath } from '../utils/navigation';

export default function ProductDetailScreen() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = getProductById(productId);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  const sizes = Object.keys(product.pricing);
  const lowest = getLowestLanding(product);
  const [primaryImage, hoverImage] = product.images ?? [];
  const hasImages = Boolean(primaryImage);

  return (
    <div className="min-h-screen bg-[#fafaf8] flex flex-col">
      <Header />

      {/* Breadcrumb stack */}
      <div className="bg-white border-b border-stone-100">
        <div className="max-w-[1480px] mx-auto px-5 py-3">
          <nav className="flex items-center gap-2 text-[12px] font-semibold text-stone-700 flex-wrap">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="hover:text-[#649e1e] transition-colors"
            >
              Home
            </button>
            <span className="text-stone-500">/</span>
            <button
              type="button"
              onClick={() => navigate(categoryPath(product.category))}
              className="hover:text-[#649e1e] transition-colors"
            >
              {product.category}
            </button>
            <span className="text-stone-500">/</span>
            <span className="text-stone-900">{product.variant}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className={`${hasImages ? 'bg-white' : product.themeColor} relative overflow-hidden border-b border-stone-100`}>
        {!hasImages && <div className="absolute inset-0 product-poster-shine" />}
        <div className="max-w-[1480px] mx-auto px-5 py-10 md:py-14 relative z-10">
          <button
            type="button"
            onClick={() => navigate(categoryPath(product.category))}
            className={`mb-6 text-[12px] font-bold uppercase tracking-wider ${
              hasImages ? 'text-stone-500 hover:text-[#649e1e]' : `${product.textColor} opacity-70 hover:opacity-100`
            } transition-colors`}
          >
            ← Back to {product.category}
          </button>

          <div className={`grid gap-8 md:gap-12 items-center ${hasImages ? 'md:grid-cols-[minmax(0,42%)_minmax(0,58%)]' : ''}`}>
            {hasImages && (
              <div className="group relative aspect-square max-w-md mx-auto md:mx-0 w-full rounded-2xl bg-stone-50 overflow-hidden border border-stone-100">
                <img
                  src={primaryImage}
                  alt={`${product.variant} ${product.name}`}
                  className={`absolute inset-0 w-full h-full object-contain p-6 transition-opacity duration-300 ${
                    hoverImage ? 'group-hover:opacity-0' : ''
                  }`}
                />
                {hoverImage && (
                  <img
                    src={hoverImage}
                    alt={`${product.variant} ${product.name} alternate view`}
                    className="absolute inset-0 w-full h-full object-contain p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                )}
              </div>
            )}

            <div>
              <p className={`text-[10px] font-bold uppercase tracking-[0.3em] mb-2 ${
                hasImages ? 'text-[#649e1e]' : `${product.textColor} opacity-70`
              }`}>
                {product.category}
              </p>
              <h1 className={`text-4xl md:text-6xl font-black leading-tight ${
                hasImages ? 'text-stone-900' : product.textColor
              }`}>
                {product.variant}
              </h1>
              <p className={`text-lg font-semibold mt-2 ${
                hasImages ? 'text-stone-500' : `${product.textColor} opacity-80`
              }`}>
                {product.name} · MRP ₹{product.sellingPrice}
              </p>

              {lowest && (
                <div className="mt-6 inline-flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-lg border border-stone-100">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-stone-400">Landing from</p>
                    <p className="text-3xl font-black text-[#649e1e] leading-none">₹{lowest}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <main className="max-w-[1480px] mx-auto px-5 py-8 md:py-10 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Meta chips */}
          <div className="lg:col-span-1 space-y-4">
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <h2 className="text-sm font-black uppercase tracking-wider text-stone-400 mb-4">Logistics</h2>
              <dl className="space-y-4">
                <DetailRow label="Carton Qty" value={`${product.cartonQty} pcs`} />
                <DetailRow label="Shelf Life" value={`${product.shelfLife} months`} />
                <DetailRow label="GST" value={`${product.gst}%`} />
                <DetailRow label="MRP" value={`₹${product.sellingPrice}`} highlight />
              </dl>
            </div>
          </div>

          {/* Pricing table */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-stone-100">
                <h2 className="text-xl font-black text-stone-900">Pricing Breakdown</h2>
                <p className="text-stone-500 text-sm font-medium mt-1">Costing and landing prices by pack size.</p>
              </div>

              <div className="grid grid-cols-3 bg-stone-50 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-stone-400">
                <span>Pack</span>
                <span className="text-center">Costing</span>
                <span className="text-right">Landing</span>
              </div>

              {sizes.map((size) => {
                const pricing = product.pricing[size];
                const ok = pricing && pricing[0] !== '-';
                const cost = ok ? `₹${pricing[0]}` : '—';
                const land = pricing && pricing[1] !== '-' ? `₹${pricing[1]}` : '—';

                return (
                  <div
                    key={size}
                    className={`grid grid-cols-3 px-6 py-4 items-center border-t border-stone-50 ${
                      ok ? 'hover:bg-[#649e1e]/[0.03] transition-colors' : 'opacity-40'
                    }`}
                  >
                    <span className="font-black text-stone-900 text-lg">{size}</span>
                    <span className={`text-center font-bold ${cost === '—' ? 'text-stone-300' : 'text-stone-700'}`}>{cost}</span>
                    <span className={`text-right font-black text-xl ${land === '—' ? 'text-stone-300' : 'text-[#649e1e]'}`}>{land}</span>
                  </div>
                );
              })}
            </div>

            {product.websiteUrl && (
              <a
                href={product.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 h-12 rounded-xl bg-stone-900 text-white text-[13px] font-bold hover:bg-stone-800 transition-colors shadow-sm"
              >
                View on Website <span className="opacity-50 text-base">↗</span>
              </a>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function DetailRow({ label, value, highlight = false }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-sm font-semibold text-stone-500">{label}</dt>
      <dd className={`text-sm font-black ${highlight ? 'text-[#649e1e]' : 'text-stone-900'}`}>{value}</dd>
    </div>
  );
}
