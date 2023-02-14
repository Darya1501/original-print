import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from '../../hooks/store-hooks'

import { Footer } from '../../components/footer/footer'
import { Header } from '../../components/header/header'
import { Button } from '../../components/ui/button'
import { TProduct } from '../../utils/types'

import styles from './product.module.css'
import plug from '../../images/no-photo.png'

export const ProductPage = () => {
  const { products } = useSelector(store => store.products)
  const { id } = useParams<{ id?: string }>();
  const cuttentProduct = products.find((product: TProduct) => product.id === id)

  return (
    <>
      <Header background={true} />
      {
        cuttentProduct &&
        (
          <div className={`container ${styles.container}`}>
            <img className={styles.image} src={cuttentProduct.image ? cuttentProduct.image : plug} alt="" />
            <div className={styles.description}>
              <span className={styles.category}>Категория: {cuttentProduct.category}</span>
              <h2 className={styles.h2}>{cuttentProduct.title}</h2>
              <p className={styles.price}>{cuttentProduct.price} ₽</p>
              <p className={styles.info}>Размеры: {cuttentProduct.sizes}</p>
              <p className={styles.info}>Цвета: {cuttentProduct.colors}</p>
              <div className={styles.buttons}>
                <Button>В корзину</Button>
                <Button isSecondary>Купить 1 экземпляр</Button>
              </div>
            </div>
          </div>
        )
      }
      <Footer />
    </>
  )
}
