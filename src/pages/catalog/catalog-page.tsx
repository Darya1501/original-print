import React, { useState } from 'react'
import { Footer } from '../../components/footer/footer'
import { Header } from '../../components/header/header'
import { ProductCard } from '../../components/product-card/product-card'
import { useSelector } from '../../hooks/store-hooks'
import { getCategories } from '../../utils/products-functions'
import styles from './catalog.module.css'

export const CatalogPage = () => {
  const { products } = useSelector(state => state.products);
  const categories = getCategories(products);

  const [ activeCategory, setActiveCategory ] = useState('Все')

  const categoryClick = (category: string) => {
    if (activeCategory === category) {
      setActiveCategory('')
    } else {
      setActiveCategory(category)
    }
  }

  return (
    <>
      <Header background={true} />
      <div className={`container ${styles.container}`}>
        <div className={styles.navigation}>
          {
            categories.map((category: string) => 
            (
              <span
                key={category}
                className={`${styles.category} ${category === activeCategory ? styles.active : ''}`}
                onClick={() => categoryClick(category)}
              >{category}</span>
            ))
          }
        </div>

        <div className={styles.products}>
          { 
            products.map(product => {
              if (activeCategory !== 'Все') {
                if (product.category === activeCategory) {
                  return (<ProductCard key={product.id} product={product} />)
                } else {
                  return null
                }
              } else {
                return (<ProductCard key={product.id} product={product} />)
              }
            }
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
