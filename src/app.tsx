import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { CatalogPage } from './pages/catalog/catalog-page';
import { LandingPage } from './pages/landing/landing-page';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <LandingPage /> } />
          <Route path="/catalog" element={ <CatalogPage /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
