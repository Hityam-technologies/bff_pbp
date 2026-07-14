import { useEffect, useLayoutEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import DashboardScreen from '../screens/dashboardScreen';
import CategoryDetailScreen from '../screens/categoryDetailScreen';
import ProductDetailScreen from '../screens/productDetailScreen';

function scrollWindowToTop() {
  // Bypass css `scroll-behavior: smooth` so route changes jump to top instantly
  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = 'auto';
  window.scrollTo(0, 0);
  html.scrollTop = 0;
  document.body.scrollTop = 0;
  html.style.scrollBehavior = previous;
}

function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Layout phase — before paint, so you don't flash mid-page
  useLayoutEffect(() => {
    if (hash) return;
    scrollWindowToTop();
  }, [pathname, key, hash]);

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      // Wait a tick so target exists after route render
      const t = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
      return () => window.clearTimeout(t);
    }

    scrollWindowToTop();
    // Images/layout can shift height — re-pin top once more after paint
    const raf = requestAnimationFrame(() => scrollWindowToTop());
    const t = window.setTimeout(scrollWindowToTop, 0);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(t);
    };
  }, [pathname, hash, key]);

  return null;
}

export default function AppNavigator() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<DashboardScreen />} />
        <Route path="/category/:categorySlug" element={<CategoryDetailScreen />} />
        <Route path="/product/:productId" element={<ProductDetailScreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
