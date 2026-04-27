import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ManufacturingPage from './pages/ManufacturingPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import EnquiryPage from './pages/EnquiryPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster richColors position="top-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/manufacturing" element={<ManufacturingPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/enquiry" element={<EnquiryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Page not found</h1>
              <p className="text-muted-foreground mb-6">The page you're looking for doesn't exist.</p>
              <a 
                href="/"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-medium transition-all duration-200 hover:bg-primary/90 active:scale-[0.98]"
              >
                Back to home
              </a>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;