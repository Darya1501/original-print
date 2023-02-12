import React from 'react'
import { Header } from '../../components/header/header'
import { ProductCard } from '../../components/product-card/product-card'
import styles from './catalog.module.css'

export const CatalogPage = () => {
  const product = {
    id: '1',
    title: 'Футболка “Планы на завтра”',
    price: 2400
  }

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
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
          <ProductCard product={product} />
        </div>
      </div>
    </>
  )
}
