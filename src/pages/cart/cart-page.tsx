import React, { useMemo } from 'react'
import { CartItem } from '../../components/cart-item/cart-item'
import { Footer } from '../../components/footer/footer'
import { Header } from '../../components/header/header'
import { Button } from '../../components/ui/button'
import { useSelector } from '../../hooks/store-hooks'
import styles from './cart.module.css'

// TODO: !!! Добавить удаление товаров из корзины и очистку корзины

export const CartPage = () => {
  const { products } = useSelector(store => store.cart)

  const totalPrice = useMemo(() => {
    return products.reduce((acc, product) => acc + product.price * product.count, 0)
  }, [products])

  return (
    <>
      <Header background={true} />
      <div className={`container ${styles.container}`}>
        <div className={styles.items}>
          {products ? products.map(product => (<CartItem key={product.id} product={product} />)) : null}
        </div>
        <div className={styles.total}>
          <span className={styles.price}>Итого: {totalPrice} ₽</span>
          <Button>Оформить заказ</Button>
        </div>
      </div>
      <Footer />
    </>
  )
}
