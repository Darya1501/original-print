import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

import { CartPage } from './pages/cart/cart-page';
import { CatalogPage } from './pages/catalog/catalog-page';
import { LandingPage } from './pages/landing/landing-page';
import { ProductPage } from './pages/product/product-page';
import { useDispatch, useSelector } from './hooks/store-hooks';
import { getProducts } from './store/actions/products';
import { getCookieCart } from './utils/cart-functions';
import { FILL_CART } from './store/constants/cart';
import { ContactsPage } from './pages/info/contacts-page';
import { QuestionsPage } from './pages/info/questions-page';
import { Error404 } from './pages/info/error-404';
import { ReviewsPage } from './pages/reviews/reviews-page';
import { UnusualPage } from './pages/unusual-page/unusual-page';


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
  const { products } = useSelector(store => store.products)
  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(getProducts());
    },
    [dispatch]
  );

  useEffect(
    () => {
      const cart = getCookieCart(products)
      dispatch({ type: FILL_CART, products: cart })
    }, [products, dispatch]
  )

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={ <LandingPage /> } />
          <Route path="/catalog" element={ <CatalogPage /> } />
          <Route path="/catalog/:id" element={ <ProductPage /> } />
          <Route path="/reviews" element={ <ReviewsPage /> } />
          <Route path="/cart" element={ <CartPage /> } />
          <Route path="/contacts" element={ <ContactsPage /> } />
          <Route path="/questions" element={ <QuestionsPage /> } />
          <Route path="/unusual" element={ <UnusualPage /> } />
          <Route path="*" element={ <Error404 /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;