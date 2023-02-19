import React, { FC } from 'react'
import logo from '../../images/logo.svg'
import cart from '../../images/cart.svg'
import styles from './header.module.css'
import { Link, NavLink } from 'react-router-dom'
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
              <NavLink to='/catalog' className={({ isActive }) =>
              isActive ? styles.active : undefined}>Каталог</NavLink>
              <NavLink to='/contacts' className={({ isActive }) =>
              isActive ? styles.active : undefined}>Контакты</NavLink>
              <NavLink to='/questions' className={({ isActive }) =>
              isActive ? styles.active : undefined}>Как сделать заказ?</NavLink>
            </div>
          </div>
          <Link to='/cart' className={styles.cart}>
            <img src={cart} alt="Корзина" />
            { products && products.length !== 0 && <span className={styles.counter}>{products.length}</span>}
          </Link>
        </header>
        <div className={styles.mobile}>
          <div className={styles.navigation}>
            <NavLink to='/catalog' className={({ isActive }) =>
            isActive ? styles.active : undefined}>Каталог</NavLink>
            <NavLink to='/contacts' className={({ isActive }) =>
            isActive ? styles.active : undefined}>Контакты</NavLink>
            <NavLink to='/questions' className={({ isActive }) =>
            isActive ? styles.active : undefined}>Как сделать заказ?</NavLink>
          </div>
        </div>
      </div>
      
    </div>
  )
}
