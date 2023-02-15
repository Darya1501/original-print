import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from '../../hooks/store-hooks'

import { Footer } from '../../components/footer/footer'
import { Header } from '../../components/header/header'
import { Button } from '../../components/ui/button'
import { TProduct } from '../../utils/types'

import styles from './product.module.css'
import plug from '../../images/no-photo.png'
import { ADD_PRODUCT_TO_CART } from '../../store/constants/cart'
import { isProductInCart } from '../../utils/products-functions'
import { updateCookieCart } from '../../utils/cart-functions'

export const ProductPage = () => {
  const { products } = useSelector(store => store.products)
  const { products : cartProducts } = useSelector(store => store.cart)
  const { id } = useParams<{ id?: string }>();
  const currentProduct = products.find((product: TProduct) => product.id === id)

  const [ isInCart, setIsInCart ] = useState(isProductInCart(currentProduct, cartProducts))

  const dispatch = useDispatch()

  const addToCart = () => {
    if (currentProduct) {
      dispatch({ type: ADD_PRODUCT_TO_CART, product: currentProduct })
      setIsInCart(true)
      updateCookieCart([ ...cartProducts, { ...currentProduct, count: 1 } ])
    }
  }

  return (
    <>
      <Header background={true} />
      <div className={`container ${styles.container}`}>
      {
        currentProduct &&
        (
          <>
            <img className={styles.image} src={currentProduct.image ? currentProduct.image : plug} alt="" />
            <div className={styles.description}>
              <span className={styles.category}>Категория: {currentProduct.category}</span>
              <h2 className={styles.h2}>{currentProduct.title}</h2>
              <p className={styles.price}>{currentProduct.price} ₽</p>
              <p className={styles.info}>Размеры: {currentProduct.sizes}</p>
              <p className={styles.info}>Цвета: {currentProduct.colors}</p>
              <div className={styles.buttons}>
                <Button onClick={addToCart} isDisabled={isInCart}>
                  { isInCart ? 'Товар в корзинe' : 'В корзину' }
                </Button>
                <Button isSecondary>Купить 1 экземпляр</Button>
              </div>
            </div>
          </>
        )
      }
      </div>
      <Footer />
    </>
  )
}
