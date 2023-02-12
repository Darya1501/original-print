import React from 'react'
import { ProductCard } from '../../../components/product-card/product-card'
import styles from '../landing.module.css'

export const NoveltiesScreen = () => {
  const product = {
    id: '1',
    title: 'Футболка “Планы на завтра”',
    price: 2400
  }
  return (
    <div className={`container ${styles.container}`}>
      <h2 className={styles.h2}>Новинки</h2>
      <div className={styles.products}>
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
        <ProductCard product={product} />
      </div>
      <a className={styles.link} href='/catalog'>Все товары {'->'}</a>
    </div>
  )
}
