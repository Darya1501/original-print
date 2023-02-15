import React, { FC } from 'react'
import logo from '../../images/logo.svg'
import cart from '../../images/cart.svg'
import styles from './header.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from '../../hooks/store-hooks'

type THeaderProps = {
  background: boolean
}

export const Header: FC<THeaderProps> = ({ background }) => {
  const  { products } = useSelector(store => store.cart)

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
          <Link to='/cart' className={styles.cart}>
            <img src={cart} alt="Корзина" />
            {products.length !== 0 && <span className={styles.counter}>{products.length}</span>}
          </Link>
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
