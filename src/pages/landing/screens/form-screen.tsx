import React, { FC } from 'react'
import { Form, TFormValues } from '../../../components/forms/form'
import styles from '../landing.module.css'

type TScreenProps = {
  formRef: React.RefObject<HTMLDivElement>
}

export const FormScreen: FC<TScreenProps> = ({ formRef }) => {

  const submitForm = (data: TFormValues) => {
    const title = 'Заявка на звонок с лендинга';
    const message = 
      `Имя: ${data.name}, номер телефона: ${data.phone}. Дополнительно: адрес - ${data.address}, комментарий - ${data.comment}`;

    fetch('send.php', {
      method: "POST",
      body: JSON.stringify({ title: title, message: message })
    })
  }

  return (
    <div className={`container ${styles.form}`} ref={formRef}>
      <div className={styles.question}>
        <h2>Уже определились с покупкой?</h2>
        <p>Оставьте свои контактные данные, мы Вам перезвоним</p>
      </div>

      <Form size='normal' onSubmit={submitForm} />
    </div>
  )
}
