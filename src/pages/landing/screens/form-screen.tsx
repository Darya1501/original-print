import React from 'react'
import { Form } from '../../../components/form/form'
import styles from '../landing.module.css'

export const FormScreen = () => {
  return (
    <div className={`container ${styles.form}`}>
      <div className={styles.question}>
        <h2>Уже определились с покупкой?</h2>
        <p>Оставьте свои контактные данные, мы Вам перезвоним</p>
      </div>

      <Form />
    </div>
  )
}
