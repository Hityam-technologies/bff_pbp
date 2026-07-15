import { useLayoutEffect, useState } from 'react';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getProductById } from '../data/products';
import { categoryPath } from '../utils/navigation';

function firstAvailableSize(product) {
  const sizes = Object.keys(product.pricing);
  return (
    sizes.find((size) => {
      const row = product.pricing[size];
      return row && row[0] !== '-' && typeof row[0] === 'number';
    }) ?? sizes[0]
  );
}

export default function ProductDetailScreen() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = getProductById(productId);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [productId]);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return <ProductDetailContent key={product.id} product={product} navigate={navigate} />;
}

function ProductDetailContent({ product, navigate }) {
  const images = product.images ?? [];
  const hasImages = images.length > 0;
  const sizes = Object.keys(product.pricing);

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(() => firstAvailableSize(product));
  const [zoomed, setZoomed] = useState(false);
  const [cartons, setCartons] = useState(1);

  const title = product.storeTitle ?? `${product.variant} ${product.name}`;
  const description =
    product.description ??
    `${product.variant} ${product.name} from Better Food Factory — priced for trade with costing and Mumbai landing rates by pack size.`;

  const selectedPricing = product.pricing[selectedSize];
  const costing = selectedPricing?.[0];
  const landing = selectedPricing?.[1];
  const hasCosting = typeof costing === 'number';
  const hasLanding = typeof landing === 'number';
  const hasProfit = hasCosting && hasLanding;
  const unitProfit = hasProfit ? costing - landing : null;
  const pcsPerCarton = product.cartonQty;
  const isBar =
    product.category === 'Energy Bars' ||
    product.category === 'Protein Bars' ||
    /bar/i.test(product.name);
  const unitLabel = isBar ? 'Per bar' : 'Per pack';

  // Per carton (one carton) and order total (N cartons)
  const perCartonCosting = hasCosting ? costing * pcsPerCarton : null;
  const perCartonLanding = hasLanding ? landing * pcsPerCarton : null;
  const perCartonProfit = hasProfit ? unitProfit * pcsPerCarton : null;
  const orderCosting = perCartonCosting != null ? perCartonCosting * cartons : null;
  const orderLanding = perCartonLanding != null ? perCartonLanding * cartons : null;
  const orderProfit = perCartonProfit != null ? perCartonProfit * cartons : null;
  const totalUnits = pcsPerCarton * cartons;
  const mainImage = images[activeImage] ?? images[0];

  const decreaseCartons = () => setCartons((n) => Math.max(1, n - 1));
  const increaseCartons = () => setCartons((n) => Math.min(999, n + 1));

  const formatRs = (value) =>
    `₹${value.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;

  const goPrev = () => {
    if (images.length < 2) return;
    setActiveImage((i) => (i === 0 ? images.length - 1 : i - 1));
    setZoomed(false);
  };

  const goNext = () => {
    if (images.length < 2) return;
    setActiveImage((i) => (i === images.length - 1 ? 0 : i + 1));
    setZoomed(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header hideOnScrollMobile />

      <div className="bg-white border-b border-stone-100">
        <div className="max-w-[1400px] mx-auto px-5 py-3">
          <nav className="flex items-center gap-2 text-[12px] font-semibold text-stone-600 flex-wrap">
            <button type="button" onClick={() => navigate('/')} className="hover:text-[#649e1e] transition-colors">
              Home
            </button>
            <span className="text-stone-400">/</span>
            <button
              type="button"
              onClick={() => navigate(categoryPath(product.category))}
              className="hover:text-[#649e1e] transition-colors"
            >
              {product.category}
            </button>
            <span className="text-stone-400">/</span>
            <span className="text-stone-900">{product.variant}</span>
          </nav>
        </div>
      </div>

      <main className="max-w-[1400px] mx-auto px-5 py-8 md:py-10 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-start">
          {/* ── Left: gallery + logistics badge below ── */}
          <div className="flex flex-col gap-3 w-full min-w-0">
            <div className="flex gap-3 sm:gap-4 w-full min-w-0">
              {hasImages && images.length > 1 && (
                <div className="flex flex-col gap-2.5 shrink-0 max-h-[480px] overflow-y-auto custom-scrollbar">
                  {images.map((src, idx) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => {
                        setActiveImage(idx);
                        setZoomed(false);
                      }}
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-sm overflow-hidden border-2 bg-[#f7f7f5] transition-colors ${
                        activeImage === idx ? 'border-stone-900' : 'border-stone-200 hover:border-stone-400'
                      }`}
                      aria-label={`View image ${idx + 1}`}
                    >
                      <img
                        src={src}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                  ))}
                </div>
              )}

              <div
                className={`group/gallery relative flex-1 w-full min-w-0 aspect-square overflow-hidden border border-stone-200 ${
                  hasImages ? 'bg-[#f7f7f5]' : `${product.themeColor}`
                }`}
              >
                {hasImages ? (
                  <>
                    <img
                      src={mainImage}
                      alt={title}
                      className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 ${
                        zoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
                      }`}
                      onClick={() => setZoomed((z) => !z)}
                    />

                    {images.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={goPrev}
                          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black text-white flex items-center justify-center shadow-md opacity-0 pointer-events-none group-hover/gallery:opacity-100 group-hover/gallery:pointer-events-auto focus-visible:opacity-100 focus-visible:pointer-events-auto hover:bg-stone-800 transition-all duration-200"
                          aria-label="Previous image"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 18l-6-6 6-6" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          onClick={goNext}
                          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black text-white flex items-center justify-center shadow-md opacity-0 pointer-events-none group-hover/gallery:opacity-100 group-hover/gallery:pointer-events-auto focus-visible:opacity-100 focus-visible:pointer-events-auto hover:bg-stone-800 transition-all duration-200"
                          aria-label="Next image"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 18l6-6-6-6" />
                          </svg>
                        </button>
                      </>
                    )}

                    <button
                      type="button"
                      onClick={() => setZoomed((z) => !z)}
                      className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/95 border border-stone-200 flex items-center justify-center text-stone-600 hover:text-stone-900 shadow-sm"
                      aria-label={zoomed ? 'Zoom out' : 'Zoom in'}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                      </svg>
                    </button>
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 product-poster-shine" />
                    <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
                      <div>
                        <p className={`font-black text-4xl uppercase leading-tight ${product.textColor}`}>
                          {product.variant}
                        </p>
                        <p className={`mt-2 text-xs font-bold uppercase tracking-[0.35em] ${product.textColor} opacity-70`}>
                          {product.name}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Logistics — separate boxes under gallery */}
            <div className="w-full grid grid-cols-3 gap-2 sm:gap-2.5">
              <div className="rounded-lg border border-[#649e1e]/35 bg-[#f3f9eb] px-2.5 py-2.5 sm:px-3 sm:py-3 text-center">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#649e1e]/80">Carton</p>
                <p className="mt-0.5 text-[13px] sm:text-[14px] font-black text-[#4a7a14] tabular-nums">
                  {product.cartonQty} pcs
                </p>
              </div>
              <div className="rounded-lg border border-[#649e1e]/35 bg-[#f3f9eb] px-2.5 py-2.5 sm:px-3 sm:py-3 text-center">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#649e1e]/80">Shelf life</p>
                <p className="mt-0.5 text-[13px] sm:text-[14px] font-black text-[#4a7a14] tabular-nums">
                  {product.shelfLife} mo
                </p>
              </div>
              <div className="rounded-lg border border-[#649e1e]/35 bg-[#f3f9eb] px-2.5 py-2.5 sm:px-3 sm:py-3 text-center">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#649e1e]/80">GST</p>
                <p className="mt-0.5 text-[13px] sm:text-[14px] font-black text-[#4a7a14] tabular-nums">
                  {product.gst}%
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: product info (B2B pricing context) ── */}
          <div className="lg:pt-1 font-product-body">
            <h1 className="font-['Finger_Paint'] text-[1.85rem] sm:text-[2.35rem] leading-[1.15] text-[#8B3A2F] tracking-tight">
              {title}
            </h1>

            <p className="mt-4 font-product-body text-[15px] sm:text-[16px] font-medium leading-[1.7] text-stone-900">
              {description}
            </p>

            {/* Pack size + pricing */}
            <div className="mt-6 w-full space-y-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-stone-500">
                  Pack size: <span className="text-stone-800">{selectedSize}</span>
                </p>
                <div className="mt-3 grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {sizes.map((size) => {
                    const row = product.pricing[size];
                    const available = row && row[0] !== '-';
                    const selected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        type="button"
                        disabled={!available}
                        onClick={() => setSelectedSize(size)}
                        className={`w-full px-2 py-2.5 rounded-md border text-[13px] font-semibold transition-colors ${
                          !available
                            ? 'border-stone-100 text-stone-300 cursor-not-allowed'
                            : selected
                              ? 'border-stone-900 bg-white text-stone-900 shadow-[inset_0_0_0_1px_#1c1917]'
                              : 'border-stone-300 text-stone-700 hover:border-stone-500'
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Per bar / per pack */}
              <section className="w-full rounded-xl border border-stone-200 overflow-hidden">
                <header className="px-4 py-3 bg-stone-50 border-b border-stone-200">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-stone-600">
                    {unitLabel}
                  </p>
                </header>
                <div className="grid grid-cols-3 divide-x divide-stone-100">
                  <PriceCell label="Costing" value={hasCosting ? formatRs(costing) : '—'} tone="default" />
                  <PriceCell label="Landing" value={hasLanding ? formatRs(landing) : '—'} tone="green" />
                  <PriceCell label="Profit" value={unitProfit != null ? formatRs(unitProfit) : '—'} tone="amber" />
                </div>
              </section>

              {/* Cartons control — same width as tables */}
              <div className="w-full flex flex-wrap items-center justify-between gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3 min-h-[58px]">
                <div className="flex items-center border border-stone-300 rounded-md overflow-hidden">
                  <span className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-stone-400 border-r border-stone-200">
                    Cartons
                  </span>
                  <button
                    type="button"
                    onClick={decreaseCartons}
                    disabled={cartons <= 1}
                    className="w-9 h-9 text-lg font-bold text-stone-700 hover:bg-stone-50 disabled:opacity-30 disabled:cursor-not-allowed border-r border-stone-200"
                    aria-label="Decrease cartons"
                  >
                    −
                  </button>
                  <span className="px-3 py-2 text-[15px] font-bold text-stone-800 tabular-nums min-w-[2.75rem] text-center">
                    {String(cartons).padStart(2, '0')}
                  </span>
                  <button
                    type="button"
                    onClick={increaseCartons}
                    className="w-9 h-9 text-lg font-bold text-stone-700 hover:bg-stone-50 border-l border-stone-200"
                    aria-label="Increase cartons"
                  >
                    +
                  </button>
                </div>
                <p className="text-[12px] font-medium text-stone-500 text-right">
                  {pcsPerCarton} pcs / carton
                  <span className="text-stone-400"> · </span>
                  <span className="text-stone-700 font-semibold">{totalUnits} pcs</span>
                </p>
              </div>

              {/* Per carton */}
              <section className="w-full rounded-xl border border-stone-200 overflow-hidden">
                <header className="px-4 py-3 bg-[#f7fbf0] border-b border-[#649e1e]/20">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#4a7a14]">
                    Per carton
                  </p>
                </header>
                <div className="grid grid-cols-3 divide-x divide-stone-100">
                  <PriceCell
                    label="Costing"
                    value={orderCosting != null ? formatRs(orderCosting) : '—'}
                    tone="default"
                  />
                  <PriceCell
                    label="Landing"
                    value={orderLanding != null ? formatRs(orderLanding) : '—'}
                    tone="green"
                  />
                  <PriceCell
                    label="Profit"
                    value={orderProfit != null ? formatRs(orderProfit) : '—'}
                    tone="amber"
                  />
                </div>
              </section>

              {product.websiteUrl && (
                <a
                  href={product.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex w-full items-center justify-center h-12 rounded-md bg-stone-900 text-white text-[13px] font-bold tracking-wide hover:bg-stone-800 transition-colors"
                >
                  VIEW ON WEBSITE
                </a>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function PriceCell({ label, value, tone = 'default', hint = null }) {
  const tones = {
    default: {
      box: 'bg-white',
      label: 'text-stone-400',
      value: value === '—' ? 'text-stone-300' : 'text-stone-800',
    },
    green: {
      box: 'bg-[#f7fbf0]',
      label: 'text-[#649e1e]',
      value: value === '—' ? 'text-stone-300' : 'text-[#4a7a14]',
    },
    amber: {
      box: 'bg-amber-50/90',
      label: 'text-amber-700/80',
      value: value === '—' ? 'text-stone-300' : 'text-amber-800',
    },
  };
  const t = tones[tone] ?? tones.default;

  return (
    <div className={`min-w-0 px-3 py-3.5 flex flex-col ${t.box}`}>
      <p className={`text-[10px] font-bold uppercase tracking-widest ${t.label}`}>{label}</p>
      <p className={`mt-1 text-[15px] sm:text-lg font-black leading-none tabular-nums tracking-tight break-all ${t.value}`}>
        {value}
      </p>
      <p
        className={`mt-1.5 text-[10px] font-medium leading-tight min-h-[1.25rem] ${
          hint && hint !== '—' ? 'text-stone-400' : 'text-transparent'
        }`}
      >
        {hint || '—'}
      </p>
    </div>
  );
}
