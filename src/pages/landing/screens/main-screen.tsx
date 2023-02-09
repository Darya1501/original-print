import React from 'react'
import { Header } from '../../../components/header/header'
import { Button } from '../../../components/ui/button'
import styles from '../landing.module.css'

export const MainScreen = () => {
  return (
    <div className={styles.main}>
      <div className={styles.first}>
        <Header />
        <div className={styles.USP}>
          <h1 className={styles.h1}>Креативная одежда и сувенирная продукция</h1>
          <div>
          <p className={styles.description}>Original Print - магазин оригинальных вещей для тех, кто любит модную и эксклюзивную одежду, а также уникальные товары и cувениры.</p>
          <p className={styles.description}>Наносим Ваши изображения на кружки футболки и многое другое. Работаем качественно и быстро. Возможна бесплатная доставка по Челябинску</p>
          </div>
          <Button>Заказать</Button>
        </div>
      </div>
    </div>
  )
}
