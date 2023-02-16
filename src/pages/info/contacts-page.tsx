import React from 'react'
import { Footer } from '../../components/footer/footer'
import { Header } from '../../components/header/header'
import { EMAIL, PHONE_NUMBER, TELEGRAM, VK } from '../../utils/constants'
import styles from './info.module.css'

export const ContactsPage = () => {
  return (
    <>
      <Header background={true} />
      <div className={`container ${styles.container}`}>
        <h2>Контакты</h2>
        <div>
          <p>Номер телефона: {PHONE_NUMBER}</p>
          <p>Почта: {EMAIL}</p>
        </div>
        <div>
          <h3>Социальные сети и мессенджеры:</h3>
          <p>Группа вконтакте: {VK}</p>
          <p>Телеграм: {TELEGRAM}</p>
        </div>
        <div>
          <h3>Юридическая информация:</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, molestiae.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}
