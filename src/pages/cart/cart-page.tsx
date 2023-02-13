import React from 'react'
import { CartItem } from '../../components/cart-item/cart-item'
import { Footer } from '../../components/footer/footer'
import { Header } from '../../components/header/header'
import { Button } from '../../components/ui/button'
import styles from './cart.module.css'

export const CartPage = () => {
  const item = {
    name: 'Футболка “Планы на завтра”',
    price: 2400,
    count: 1
  }
  return (
    <>
      <Header background={true} />
      <div className={`container ${styles.container}`}>
        <div className={styles.items}>
          <CartItem {...item} />
          <CartItem {...item} />
          <CartItem {...item} />
          <CartItem {...item} />
        </div>
        <div className={styles.total}>
          <span className={styles.price}>Итого: 8100р</span>
          <Button>Оформить заказ</Button>
        </div>
      </div>
      <Footer />
    </>
  )
}
