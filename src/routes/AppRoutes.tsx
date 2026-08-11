import { Navigate, Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Product from '../pages/Product'
import ProductDetail from '../pages/ProductDetail'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/gallery" element={<Navigate to="/" replace />} />
      <Route path="/news" element={<News />} />
      <Route path="/research" element={<Navigate to="/about" replace />} />
      <Route path="/research/introduction" element={<Navigate to="/about" replace />} />
      <Route path="/research/areas" element={<Navigate to="/" replace />} />
      <Route path="/publication" element={<Navigate to="/" replace />} />
      <Route path="/members" element={<Navigate to="/" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
