import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from '../../hooks/store-hooks'
import logo from '../../images/logo.svg'
import { EMAIL, PHONE_NUMBER, PHONE_NUMBER_FORMATTED, VK } from '../../utils/constants'
import { getCategories } from '../../utils/products-functions'
import styles from './footer.module.css'

export const Footer = () => {
  const { products } = useSelector(state => state.products);
  const categories = getCategories(products);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.blocks}>
          <div className={styles.info}>
            <span>Информация</span>
            <Link to='/questions'>Как сделать заказ?</Link>
          </div>

          {
            categories.length !== 0 && (
              <div className={styles.info}>
                <span>Товары</span>
                { categories.slice(1, 3).map(category => (<Link to={`/catalog?category=${category}`} key={category}>{category}</Link>)) }
                <Link to='/catalog'>Прочее</Link>
              </div>
            )
          }

          <div className={styles.info}>
            <span>Контакты</span>
            <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER_FORMATTED}</a>
            <a href={VK} target="_blank" rel="noreferrer">vk.com/original-print</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            {/* <span>{TELEGRAM}</span> */}
          </div>
        </div>
          
        <Link to='/'>
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </footer>
  )
}
