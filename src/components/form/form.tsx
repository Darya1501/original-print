import React from 'react'
import { Button } from '../ui/button'
import styles from './form.module.css'

export const Form = () => {
  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label className={styles.label}>
          <span>Имя</span>
          <input type="text" placeholder='Иван'/>
        </label>
        <label className={styles.label}>
          <span>Номер телефона</span>
          <input type="text" placeholder='+7 (900) 000-00-00'/>
        </label>
      </div>

      <label className={styles.label}>
        <span>Адрес доставки</span>
        <input type="text" placeholder='Введите адрес'/>
      </label>

      <label className={styles.label}>
        <span>Комментарий</span>
        <textarea></textarea>
      </label>

      <Button>Заказать</Button>
    </form>
  )
}
