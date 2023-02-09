import React from 'react'
import logo from '../../images/logo.svg'
import cart from '../../images/cart.svg'
import styles from './header.module.css'

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <img src={logo} alt="logo" />
        <div className={styles.desctop}>
          <div className={styles.navigation}>
            <span>Каталог</span>
            <span>Контакты</span>
            <span>Как сделать заказ?</span>
          </div>
        </div>
        <img src={cart} alt="Корзина" />
      </header>
      <div className={styles.mobile}>
        <div className={styles.navigation}>
          <span>Каталог</span>
          <span>Контакты</span>
          <span>Как сделать заказ?</span>
        </div>
      </div>
    </>
  )
}
