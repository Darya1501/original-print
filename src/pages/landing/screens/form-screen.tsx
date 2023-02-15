import React from 'react'
import { Form } from '../../../components/forms/form'
import { useDispatch, useSelector } from '../../../hooks/store-hooks';
import { CLEAR_FORM } from '../../../store/constants/form';
import styles from '../landing.module.css'

export const FormScreen = () => {
  const { name, phone, address, comment } = useSelector(store => store.form);
  const dispatch = useDispatch()

  const submitForm: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(`Новая заявка. Имя: ${name}, номер телефона: ${phone}. Дополнительно: адрес - ${address}, комментарий - ${comment}`)
    dispatch({ type: CLEAR_FORM })
  }

  return (
    <div className={`container ${styles.form}`}>
      <div className={styles.question}>
        <h2>Уже определились с покупкой?</h2>
        <p>Оставьте свои контактные данные, мы Вам перезвоним</p>
      </div>

      <Form size='normal' onSubmit={submitForm} />
    </div>
  )
}
