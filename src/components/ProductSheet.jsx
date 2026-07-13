function getLowestLanding(product) {
  const prices = Object.values(product.pricing)
    .map((p) => p[1])
    .filter((v) => v !== '-' && typeof v === 'number');
  return prices.length ? Math.min(...prices) : null;
}

export default function ProductSheet({ product, sizes, index, reverse = false, onViewDetails, themeAccent }) {
  const lowest = getLowestLanding(product);
  const [primaryImage, hoverImage] = product.images ?? [];
  const hasImages = Boolean(primaryImage);

  return (
    <article
      id={`variant-${product.id}`}
      className={`product-sheet group w-full rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.05)] border animate-fade-up ${
        themeAccent ? 'bg-white/80 backdrop-blur-md' : 'bg-white border-black/[0.04]'
      }`}
      style={{
        animationDelay: `${index * 0.1}s`,
        ...(themeAccent && {
          borderColor: `${themeAccent}22`,
          boxShadow: `0 8px 32px ${themeAccent}12`,
        }),
      }}
    >
      <div className={`grid lg:grid-cols-[minmax(0,34%)_minmax(0,66%)] ${reverse ? 'lg:[direction:rtl]' : ''}`}>
        {/* ── Product poster (narrower) — image 1 default, image 2 on hover ── */}
        <div
          className={`${hasImages ? 'bg-stone-50' : product.themeColor} relative aspect-square sm:aspect-auto sm:min-h-[240px] lg:min-h-[190px] flex items-center justify-center overflow-hidden lg:[direction:ltr]`}
        >
          {hasImages ? (
            <>
              <img
                src={primaryImage}
                alt={`${product.variant} ${product.name}`}
                className={`absolute inset-0 w-full h-full object-cover sm:object-contain sm:p-5 transition-opacity duration-300 ${
                  hoverImage ? 'group-hover:opacity-0' : ''
                }`}
                loading="lazy"
                decoding="async"
              />
              {hoverImage && (
                <img
                  src={hoverImage}
                  alt={`${product.variant} ${product.name} alternate view`}
                  className="absolute inset-0 w-full h-full object-cover sm:object-contain sm:p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  loading="lazy"
                  decoding="async"
                />
              )}
            </>
          ) : (
            <>
              <div className="absolute inset-0 product-poster-shine" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] sm:w-[130px] sm:h-[130px] md:w-[108px] md:h-[108px] rounded-full border-2 border-white/20" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[86px] h-[86px] sm:w-[94px] sm:h-[94px] md:w-[80px] md:h-[80px] rounded-full bg-white/10 blur-sm" />
              <div className="relative z-10 text-center px-4 py-8">
                <p className={`font-black text-3xl sm:text-4xl lg:text-3xl uppercase leading-tight ${product.textColor}`}>
                  {product.variant}
                </p>
                <p className={`mt-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.35em] ${product.textColor} opacity-70`}>
                  {product.name}
                </p>
              </div>
            </>
          )}

          {lowest && (
            <div className="absolute bottom-4 right-4 z-10 bg-white rounded-xl px-3 py-2 shadow-lg text-center">
              <p className="text-[8px] font-bold uppercase tracking-widest text-gray-400">From</p>
              <p className="text-xl font-black text-[#649e1e] leading-none">₹{lowest}</p>
            </div>
          )}
        </div>

        {/* ── Pricing panel ── */}
        <div className="p-4 md:p-5 flex flex-col justify-center lg:[direction:ltr]">
          <div className="mb-3">
            <h2 className="text-xl md:text-2xl font-black text-stone-900 leading-tight tracking-tight">
              {product.variant}
            </h2>
            <p className="text-stone-500 text-sm font-medium mt-1">{product.name} · MRP ₹{product.sellingPrice}</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-3">
            <MetaChip value={product.cartonQty} label="pcs / carton" />
            <MetaChip value={`${product.shelfLife} mo`} label="shelf life" />
            <MetaChip value={`${product.gst}%`} label="GST" highlight />
          </div>

          {/* Pricing table */}
          <div className="rounded-xl border border-stone-300 overflow-hidden bg-white">
            <div className="grid grid-cols-3 bg-stone-100 px-4 py-2.5 text-[10px] font-black uppercase tracking-widest text-stone-500 border-b border-stone-300">
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
                  className={`grid grid-cols-3 px-4 py-2.5 items-center text-[15px] md:text-base border-b border-stone-200 last:border-b-0 ${
                    ok ? 'hover:bg-[#649e1e]/[0.03] transition-colors' : 'opacity-40'
                  }`}
                >
                  <span className="font-black text-gray-900">{size}</span>
                  <span className={`text-center font-bold ${cost === '—' ? 'text-gray-300' : 'text-gray-700'}`}>{cost}</span>
                  <span className={`text-right font-black text-lg ${land === '—' ? 'text-gray-300' : 'text-[#649e1e]'}`}>{land}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-5 flex flex-col gap-3">
            {product.websiteUrl && (
              <a
                href={product.websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 h-11 rounded-full bg-stone-900 text-white text-[13px] font-bold hover:bg-stone-800 transition-colors"
              >
                View on Website →
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function MetaChip({ value, label, highlight = false }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold border ${
        highlight
          ? 'border-[#649e1e]/30 bg-[#649e1e]/10 text-[#4a7a14]'
          : 'border-stone-200 bg-stone-50 text-stone-500'
      }`}
    >
      <span className={`font-black ${highlight ? 'text-[#649e1e]' : 'text-stone-800'}`}>{value}</span>
      <span className="uppercase tracking-wide">{label}</span>
    </span>
  );
}

export { getLowestLanding };
