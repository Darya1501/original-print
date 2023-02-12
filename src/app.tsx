import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { CatalogPage } from './pages/catalog/catalog-page';
import { LandingPage } from './pages/landing/landing-page';
import { ProductPage } from './pages/product/product-page';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <LandingPage /> } />
          <Route path="/catalog" element={ <CatalogPage /> } />
          <Route path="/catalog/:id" element={ <ProductPage /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
