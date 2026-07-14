import { useState, useRef, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { initialProducts } from '../data/products';
import { categoryPath } from '../utils/navigation';
import { findSearchTarget, searchSuggestions } from '../utils/search';
import { getCategoryTheme } from '../data/categoryThemes';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Categories', href: '/#categories', dropdown: true },
  { label: 'About Us', href: '/#about' },
  { label: 'Visit Store', href: 'https://betterfoodfactory.in/', external: true },
];

/** Mobile drawer order matches reference */
const MOBILE_NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Visit Store', href: 'https://betterfoodfactory.in/', external: true },
  { label: 'Categories', href: '/#categories', dropdown: true },
];

const categories = [...new Set(initialProducts.map((p) => p.category))];

function ChevronDown({ className = '' }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75" className={className} aria-hidden="true">
      <path d="M2.5 4.5L6 8l3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" className={className} aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" className={className} aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

function SuggestionThumb({ item }) {
  if (item.type === 'category') {
    const theme = getCategoryTheme(item.category);
    return (
      <div className={`relative w-12 h-12 shrink-0 rounded-lg overflow-hidden ${theme.bg}`}>
        <span className={`absolute inset-0 flex items-center justify-center text-[10px] leading-tight font-['Finger_Paint'] text-center px-1 ${theme.titleText}`}>
          {item.category.split(' ')[0]}
        </span>
      </div>
    );
  }

  const product = item.product;
  const thumb = product.images?.[0];
  if (thumb) {
    return (
      <div className="relative w-12 h-12 shrink-0 rounded-lg overflow-hidden bg-stone-100">
        <img
          src={thumb}
          alt=""
          className="w-full h-full object-contain p-0.5"
          loading="lazy"
        />
      </div>
    );
  }
  return (
    <div className={`relative w-12 h-12 shrink-0 rounded-lg overflow-hidden ${product.themeColor} flex items-center justify-center`}>
      <span className={`text-[9px] font-black uppercase leading-tight text-center px-1 ${product.textColor}`}>
        {product.variant.split(' ')[0]}
      </span>
    </div>
  );
}

function NavLink({ item, onNavigate, className, children }) {
  if (item.external) {
    return (
      <a
        href={item.href}
        target={item.href.startsWith('tel:') || item.href.startsWith('mailto:') ? undefined : '_blank'}
        rel="noreferrer"
        className={className}
      >
        {children ?? item.label}
      </a>
    );
  }

  return (
    <button type="button" onClick={() => onNavigate(item.href)} className={className}>
      {children ?? item.label}
    </button>
  );
}

export default function Header({ hideOnScrollMobile = false }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [shopOpen, setShopOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileCatsOpen, setMobileCatsOpen] = useState(false);
  const [mobileHidden, setMobileHidden] = useState(false);
  const shopRef = useRef(null);
  const searchRef = useRef(null);
  const lastScrollY = useRef(0);

  const suggestions = useMemo(() => searchSuggestions(query, 8), [query]);
  const showSuggestions = searchOpen && query.trim().length > 0;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (shopRef.current && !shopRef.current.contains(e.target)) {
        setShopOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!drawerOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [drawerOpen]);

  // Mobile: hide header while scrolling down, show again when scrolling up
  useEffect(() => {
    if (!hideOnScrollMobile) return undefined;

    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      if (window.innerWidth >= 768 || drawerOpen) {
        setMobileHidden(false);
        lastScrollY.current = window.scrollY;
        return;
      }

      const y = window.scrollY;
      const delta = y - lastScrollY.current;

      if (y < 48) {
        setMobileHidden(false);
      } else if (delta > 8) {
        setMobileHidden(true);
      } else if (delta < -8) {
        setMobileHidden(false);
      }

      lastScrollY.current = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [hideOnScrollMobile, drawerOpen]);

  const closeDrawer = () => {
    setDrawerOpen(false);
    setMobileCatsOpen(false);
  };

  const handleNav = (href) => {
    setShopOpen(false);
    setSearchOpen(false);
    closeDrawer();
    navigate(href);
  };

  const goToSuggestion = (item) => {
    setQuery('');
    setSearchOpen(false);
    navigate(item.path);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      goToSuggestion(suggestions[0]);
      return;
    }
    const result = findSearchTarget(query);
    if (result) {
      navigate(result.path);
      setQuery('');
      setSearchOpen(false);
    }
  };

  const linkClass = (_href, open = false) =>
    `font-nav text-[16px] font-semibold tracking-tight transition-colors whitespace-nowrap ${
      open ? 'text-[#649e1e]' : 'text-black hover:text-[#649e1e]'
    }`;

  const drawerLinkClass =
    'flex w-full items-center text-left font-nav text-[17px] font-semibold leading-none tracking-tight text-black hover:text-[#649e1e] transition-colors h-12 border-b border-stone-100';

  const goToSuggestionAndClose = (item) => {
    goToSuggestion(item);
    closeDrawer();
  };

  const handleMobileSearch = (e) => {
    e.preventDefault();
    if (suggestions.length > 0) {
      goToSuggestionAndClose(suggestions[0]);
      return;
    }
    const result = findSearchTarget(query);
    if (result) {
      navigate(result.path);
      setQuery('');
      setSearchOpen(false);
      closeDrawer();
    }
  };

  const mobileDrawer = (
      <div
        className={`md:hidden fixed inset-0 z-[100] ${drawerOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        aria-hidden={!drawerOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/35 transition-opacity duration-300 ${drawerOpen ? 'opacity-100' : 'opacity-0'}`}
          aria-label="Close menu"
          onClick={closeDrawer}
        />

        <aside
          className={`absolute top-0 left-0 h-full w-[min(86vw,320px)] max-w-full bg-white shadow-[8px_0_40px_rgba(0,0,0,0.12)] flex flex-col transition-transform duration-300 ease-out ${
            drawerOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex items-center justify-between px-5 h-[72px] border-b border-[#649e1e]/25 shrink-0">
            <p className="font-nav text-sm font-bold uppercase tracking-[0.18em] text-[#67003f]">Menu</p>
            <button
              type="button"
              onClick={closeDrawer}
              className="p-1.5 text-black hover:text-[#649e1e] transition-colors"
              aria-label="Close menu"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>

          <div className="px-5 pt-4 pb-3 border-b border-stone-100 shrink-0">
            <form onSubmit={handleMobileSearch} className="relative">
              <input
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSearchOpen(true);
                }}
                onFocus={() => setSearchOpen(true)}
                placeholder="Search for products..."
                className="w-full h-11 pl-4 pr-11 rounded-full border border-stone-200 bg-white font-nav text-[15px] text-stone-800 placeholder:text-stone-400 outline-none focus:border-[#649e1e] focus:ring-2 focus:ring-[#649e1e]/20 transition-shadow"
                autoComplete="off"
                aria-label="Search products"
              />
              <button
                type="submit"
                aria-label="Search products"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-700 hover:text-[#649e1e] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
                </svg>
              </button>
            </form>

            {showSuggestions && (
              <div className="mt-2 rounded-xl border border-stone-200 bg-white overflow-hidden">
                {suggestions.length === 0 ? (
                  <p className="px-3 py-3 font-nav text-sm text-stone-400">
                    No products found for &ldquo;{query.trim()}&rdquo;
                  </p>
                ) : (
                  <ul className="max-h-[220px] overflow-y-auto py-1 custom-scrollbar" role="listbox">
                    {suggestions.map((item) => (
                      <li key={`mobile-${item.type}-${item.id}`}>
                        <button
                          type="button"
                          role="option"
                          onClick={() => goToSuggestionAndClose(item)}
                          className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-stone-50 transition-colors"
                        >
                          <SuggestionThumb item={item} />
                          <div className="min-w-0 flex-1">
                            <p className="font-nav text-[13px] font-semibold text-stone-900 truncate">{item.title}</p>
                            <p className="font-nav text-[11px] text-stone-400 mt-0.5">{item.subtitle}</p>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          <nav className="flex-1 overflow-y-auto px-5 pt-0 pb-2">
            {MOBILE_NAV_ITEMS.map((item) => {
              if (item.dropdown) {
                return (
                  <div key={item.label} className="border-b border-stone-100">
                    <button
                      type="button"
                      onClick={() => setMobileCatsOpen((o) => !o)}
                      className={`${drawerLinkClass} border-b-0 justify-between`}
                      aria-expanded={mobileCatsOpen}
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileCatsOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {mobileCatsOpen && (
                      <div className="pb-3 pl-1 flex flex-col gap-1">
                        <button
                          type="button"
                          onClick={() => handleNav('/#categories')}
                          className="text-left font-nav text-[14px] font-medium text-stone-500 hover:text-[#649e1e] py-2 px-2 rounded-lg hover:bg-stone-50"
                        >
                          All categories
                        </button>
                        {categories.map((category) => (
                          <button
                            key={category}
                            type="button"
                            onClick={() => {
                              closeDrawer();
                              navigate(categoryPath(category));
                            }}
                            className="text-left font-nav text-[15px] font-semibold text-[#1a1f16] hover:text-[#649e1e] py-2 px-2 rounded-lg hover:bg-stone-50"
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.label}
                  item={item}
                  onNavigate={handleNav}
                  className={drawerLinkClass}
                />
              );
            })}
          </nav>

          <div className="px-5 py-5 border-t border-stone-100 shrink-0">
            <a
              href="tel:+918341234440"
              className="flex items-center justify-center w-full h-11 rounded-full bg-[#67003f] text-white font-nav text-sm font-bold hover:bg-[#520032] transition-colors"
            >
              Call +91 83412 34440
            </a>
          </div>
        </aside>
      </div>
  );

  return (
    <>
    <header
      className={`sticky top-0 z-50 bg-white transition-transform duration-300 ease-out ${
        mobileHidden ? '-translate-y-full md:translate-y-0 will-change-transform' : ''
      }`}
    >
      {/* Mobile header — hamburger left, logo center (image 2) */}
      <div className="md:hidden relative w-full h-[104px] flex items-center justify-center px-4 border-b border-[#649e1e]/35">
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-1.5 text-black hover:text-[#649e1e] transition-colors"
          aria-label="Open menu"
          aria-expanded={drawerOpen}
        >
          <MenuIcon className="w-7 h-7" />
        </button>

        <button
          type="button"
          onClick={() => navigate('/')}
          className="hover:opacity-85 transition-opacity"
          aria-label="Go to home"
        >
          <Logo className="!h-[5.75rem] !object-center" />
        </button>
      </div>

      {/* Desktop header */}
      <div className="hidden md:flex w-full pl-5 sm:pl-6 pr-5 sm:pr-6 h-[100px] sm:h-[112px] items-center">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="shrink-0 hover:opacity-85 transition-opacity"
          aria-label="Go to home"
        >
          <Logo />
        </button>

        <nav className="relative flex items-center gap-6 lg:gap-7 xl:gap-8 ml-8 sm:ml-10">
          {NAV_ITEMS.map((item) => {
            if (item.dropdown) {
              return (
                <div
                  key={item.label}
                  ref={shopRef}
                  className="relative"
                  onMouseEnter={() => setShopOpen(true)}
                  onMouseLeave={() => setShopOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setShopOpen((o) => !o)}
                    className={`${linkClass(item.href, shopOpen)} inline-flex items-center gap-1.5`}
                    aria-expanded={shopOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown className={`w-3 h-3 transition-transform ${shopOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {shopOpen && (
                    <div className="absolute left-0 top-full pt-2 z-50">
                      <div className="rounded-xl bg-white border border-stone-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)] px-3.5 py-3 flex items-stretch gap-3">
                        {categories.map((category) => {
                          const theme = getCategoryTheme(category);
                          const count = initialProducts.filter((p) => p.category === category).length;

                          return (
                            <button
                              key={category}
                              type="button"
                              onClick={() => {
                                setShopOpen(false);
                                navigate(categoryPath(category));
                              }}
                              className={`group relative text-left rounded-lg w-[156px] h-[72px] shrink-0 overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${theme.shadow} ${theme.bg}`}
                            >
                              <svg
                                className="absolute top-0 left-0 w-14 h-14 -translate-x-4 -translate-y-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
                                viewBox="0 0 100 100"
                                fill={theme.blob1}
                                aria-hidden="true"
                              >
                                <path d="M0,0 L100,0 C100,60 60,100 0,100 Z" />
                              </svg>
                              <svg
                                className="absolute bottom-0 right-0 w-16 h-16 translate-x-3 translate-y-3 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12"
                                viewBox="0 0 100 100"
                                fill={theme.blob2}
                                aria-hidden="true"
                              >
                                <path d="M100,100 L0,100 C0,40 40,0 100,0 Z" />
                              </svg>

                              <div className="absolute top-2 right-2 z-10 w-6 h-6 rounded-md bg-white text-gray-900 flex items-center justify-center shadow-sm border border-white">
                                <span className="text-[10px] font-black leading-none">{count}</span>
                              </div>

                              <div className="absolute inset-x-0 bottom-0 z-10 px-2.5 py-2 pr-8">
                                <h3 className={`text-[13px] leading-snug font-['Finger_Paint'] ${theme.titleText}`}>
                                  {category}
                                </h3>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={item.label}
                item={item}
                onNavigate={handleNav}
                className={linkClass(item.href)}
              />
            );
          })}
        </nav>

        <div ref={searchRef} className="relative ml-auto w-full max-w-[280px] lg:max-w-[320px] shrink-0">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSearchOpen(true);
              }}
              onFocus={() => setSearchOpen(true)}
              placeholder="Search for products..."
              className="w-full h-11 pl-4 pr-11 rounded-full border border-stone-200 bg-white font-nav text-[15px] text-stone-800 placeholder:text-stone-400 outline-none focus:border-[#649e1e] focus:ring-2 focus:ring-[#649e1e]/20 transition-shadow"
              autoComplete="off"
              aria-autocomplete="list"
              aria-expanded={showSuggestions}
            />
            <button
              type="submit"
              aria-label="Search products"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-700 hover:text-[#649e1e] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
              </svg>
            </button>
          </form>

          {showSuggestions && (
            <div className="absolute left-0 right-0 top-full mt-2 z-50 rounded-xl border border-stone-200 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.12)] overflow-hidden">
              {suggestions.length === 0 ? (
                <p className="px-4 py-3.5 font-nav text-sm text-stone-400">
                  No products found for &ldquo;{query.trim()}&rdquo;
                </p>
              ) : (
                <ul className="max-h-[340px] overflow-y-auto py-1.5 custom-scrollbar" role="listbox">
                  {suggestions.map((item) => (
                    <li key={`${item.type}-${item.id}`}>
                      <button
                        type="button"
                        role="option"
                        onClick={() => goToSuggestion(item)}
                        className="w-full flex items-center gap-3 px-3 py-2.5 text-left hover:bg-stone-50 transition-colors"
                      >
                        <SuggestionThumb item={item} />
                        <div className="min-w-0 flex-1">
                          <p className="font-nav text-[14px] font-semibold text-stone-900 truncate">{item.title}</p>
                          <p className="font-nav text-[12px] text-stone-400 mt-0.5">{item.subtitle}</p>
                        </div>
                        {item.type === 'product' && item.product?.sellingPrice != null && (
                          <span className="shrink-0 font-nav text-[13px] font-bold text-[#649e1e]">
                            ₹{item.product.sellingPrice}
                          </span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>

    </header>
    {typeof document !== 'undefined' && createPortal(mobileDrawer, document.body)}
    </>
  );
}
