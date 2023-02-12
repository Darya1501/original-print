import React, { FC } from 'react'
import logo from '../../images/logo.svg'
import cart from '../../images/cart.svg'
import styles from './header.module.css'
import { Link } from 'react-router-dom'

type THeaderProps = {
  background: boolean
}

export const Header: FC<THeaderProps> = ({ background }) => {
  return (
    <div className={background ? styles.background : ''}>
      <div className='container'>
        <header className={styles.header}>
          <Link to='/'>
            <img className={styles.logo} src={logo} alt="logo" />
          </Link>
          <div className={styles.desctop}>
            <div className={styles.navigation}>
              <Link to='/catalog'>Каталог</Link>
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
      </div>
      
    </div>
  )
}
