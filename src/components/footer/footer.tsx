import React from 'react'
import logo from '../../images/logo.svg'
import styles from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.blocks}>
          <div className={styles.info}>
            <span>Информация</span>
            <span>О компании</span>
            <span>Доставка</span>
            <span>Оплата</span>
          </div>

          <div className={styles.info}>
            <span>Товары</span>
            <span>Футболки</span>
            <span>Кружки</span>
            <span>Прочее</span>
          </div>

          <div className={styles.info}>
            <span>Контакты</span>
            <span>г. Челябинск, ул. Уличная, д. 15</span>
            <span>+7 900 000 00 00</span>
            <span>vk.com/...</span>
            <span>t.me/@...</span>
          </div>
        </div>

        <img src={logo} alt="logo" />
      </div>
    </footer>
  )
}
