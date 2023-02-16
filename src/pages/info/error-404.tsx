import React from 'react'
import { Footer } from '../../components/footer/footer'
import { Header } from '../../components/header/header'
import styles from './info.module.css'

export const Error404 = () => {
  return (
    <>
      <Header background={true} />
      <div className={`container ${styles.container}`}>
        <h2>Упс! Страница не найдена</h2>
        <p>Привет! Как Вы сюда попали?</p>
        <p>Проверьте корректность введенного url-адреса или воспользуйтесь навигацией сайта, чтобы найти нужный Вам раздел. Если вам нужна помощь, вы всегда можете написать нам</p>
      </div>
      <Footer />
    </>
  )
}
