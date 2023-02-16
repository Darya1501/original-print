import React, { FC } from 'react'
import { Header } from '../../../components/header/header'
import { Button } from '../../../components/ui/button'
import styles from '../landing.module.css'

type TScreenProps = {
  formRef: React.RefObject<HTMLDivElement>
}

export const MainScreen: FC<TScreenProps> = ({ formRef }) => {
  const scrollToRef = () => {
    if (formRef && formRef.current) formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  return (
    <div className={styles.main}>
      <Header background={false} />
      <div className={`container ${styles.first}`}>
        <div className={styles.USP}>
          <h1 className={styles.h1}>Креативная одежда и сувенирная продукция</h1>
          <div>
          <p className={styles.description}>Original Print - магазин оригинальных вещей для тех, кто любит модную и эксклюзивную одежду, а также уникальные товары и cувениры.</p>
          <p className={styles.description}>Наносим Ваши изображения на кружки футболки и многое другое. Работаем качественно и быстро. Возможна бесплатная доставка по Челябинску</p>
          </div>
          <Button onClick={() => {setTimeout(scrollToRef)}}>Заказать</Button>
        </div>
      </div>
    </div>
  )
}
