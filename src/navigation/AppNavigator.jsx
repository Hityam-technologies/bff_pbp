import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import DashboardScreen from '../screens/dashboardScreen';
import CategoryDetailScreen from '../screens/categoryDetailScreen';
import ProductDetailScreen from '../screens/productDetailScreen';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

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
