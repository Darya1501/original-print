import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

import { CartPage } from './pages/cart/cart-page';
import { CatalogPage } from './pages/catalog/catalog-page';
import { LandingPage } from './pages/landing/landing-page';
import { ProductPage } from './pages/product/product-page';
import { useDispatch } from './hooks/store-hooks';
import { getProducts } from './store/actions/products';


const app = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
})
export const dbRef = ref(getDatabase(app));


function App() {
  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(getProducts());
    },
    [dispatch]
  );

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <LandingPage /> } />
          <Route path="/catalog" element={ <CatalogPage /> } />
          <Route path="/catalog/:id" element={ <ProductPage /> } />
          <Route path="/cart" element={ <CartPage /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
