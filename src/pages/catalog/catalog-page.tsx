import React from 'react'
import { Footer } from '../../components/footer/footer'
import { Header } from '../../components/header/header'
import { ProductCard } from '../../components/product-card/product-card'
import { useSelector } from '../../hooks/store-hooks'
import styles from './catalog.module.css'

export const CatalogPage = () => {
  const { products } = useSelector(state => state.products);

  return (
    <>
      <Header background={true} />
      <div className={`container ${styles.container}`}>
        <div className={styles.navigation}>
          <span>Футболки</span>
          <span>Поло</span>
          <span>Кружки</span>
        </div>
        <div className={styles.products}>
          { products.map(product => (<ProductCard key={product.id} product={product} />)) }
        </div>
      </div>
      <Footer />
    </>
  )
}
