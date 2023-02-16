import React from 'react'
import { Footer } from '../../components/footer/footer'
import { Header } from '../../components/header/header'
import styles from './info.module.css'

export const QuestionsPage = () => {
  return (
    <>
      <Header background={true} />
      <div className={`container ${styles.container}`}>
        <h2>Как сделать заказ?</h2>
        <p>Привет! Мы работаем по полной предоплате</p>
        <p>Чтобы заказать понравившийся товар, кликните на странице товара на кнопку “В корзину”. Как только вы определитесь с набором товаров - переходите в корзину и нажимайте на кнопку “Заказать”. После заполнения Вами контактных данных, мы свяжемся с Вами и уточним детали заказа.</p>
      </div>
      <Footer />
    </>
  )
}
