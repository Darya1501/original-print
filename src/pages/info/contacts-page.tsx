import React from 'react'
import { Footer } from '../../components/footer/footer'
import { Header } from '../../components/header/header'
import { EMAIL, PHONE_NUMBER, PHONE_NUMBER_FORMATTED, VK } from '../../utils/constants'
import styles from './info.module.css'

export const ContactsPage = () => {
  return (
    <>
      <Header background={true} />
      <div className={`container ${styles.container}`}>
        <h2>Контакты</h2>
        <div className={styles.block}>
          <p>Номер телефона: <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER_FORMATTED}</a></p>
          <p>Почта: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        </div>
        <div className={styles.block}>
          <h3>Социальные сети и мессенджеры:</h3>
          <p>Группа вконтакте: <a href={VK} target="_blank" rel="noreferrer">original print</a></p>
          {/* <p>Телеграм: {TELEGRAM}</p> */}
        </div>
        {/* <div className={styles.block}>
          <h3>Юридическая информация:</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, molestiae.</p>
        </div> */}
      </div>
      <Footer />
    </>
  )
}
