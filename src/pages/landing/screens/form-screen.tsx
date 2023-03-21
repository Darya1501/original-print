import React, { FC, useState } from 'react'
import { Form, TFormValues } from '../../../components/forms/form'
import { Modal } from '../../../components/modal/modal'
import { ApplicationSent } from '../../../components/ui/application-sent'
import styles from '../landing.module.css'

type TScreenProps = {
  formRef: React.RefObject<HTMLDivElement>
}

export const FormScreen: FC<TScreenProps> = ({ formRef }) => {
  const [ isSentModal, setIsSentModal ] = useState(false)

  const submitForm = async (data: TFormValues) => {
    const title = 'Заявка на звонок с лендинга';
    let message = `<strong>Заявка на звонок с лендинга</strong>\n\nИмя: ${data.name}\nНомер телефона: ${data.phone}\n\n`;
    if (data.address) message += `Адрес доставки: ${data.address}\n`
    if (data.comment) message += `Комментарий: ${data.comment}`

    await fetch('send.php', {
      method: "POST",
      body: JSON.stringify({ title: title, message: message })
    })
    setIsSentModal(true)
  }

  return (
    <>
      <div className={`container ${styles.form}`} ref={formRef}>
        <div className={styles.question}>
          <h2>Уже определились с покупкой?</h2>
          <p>Оставьте свои контактные данные, мы Вам перезвоним</p>
        </div>

        <Form size='normal' onSubmit={submitForm} />
      </div>
      { isSentModal && <Modal onClose={() => setIsSentModal(false)}><ApplicationSent /></Modal> }
    </>
  )
}
