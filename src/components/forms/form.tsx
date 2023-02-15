import React, { FC } from 'react'
import { useSelector } from '../../hooks/store-hooks'
import { useForm } from '../../hooks/use-form'
import { Button } from '../ui/button'
import styles from './form.module.css'

type TFormProps = {
  size: 'small' | 'normal',
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

export const Form: FC<TFormProps> = ({ size, onSubmit }) => {
  const { handleChange } = useForm({ name: '', phone: '', address: '', comment: '' });
  const { name, phone, address, comment } = useSelector(store => store.form);

  return (
    <form className={ size === 'normal' ? styles.form : styles.small } onSubmit={onSubmit}>
      <div className={ size === 'normal' ? styles.row : styles.column }>
        <label className={styles.label}>
          <span>Имя</span>
          <input onChange={handleChange} name="name" value={name} type="text" placeholder='Иван' />
        </label>
        <label className={styles.label}>
          <span>Номер телефона</span>
          <input onChange={handleChange} name="phone" value={phone} type="text" placeholder='+7 (900) 000-00-00'/>
        </label>
      </div>

      <label className={styles.label}>
        <span>Адрес доставки</span>
        <input onChange={handleChange} name="address" value={address} type="text" placeholder='Введите адрес'/>
      </label>

      <label className={styles.label}>
        <span>Комментарий</span>
        <textarea onChange={handleChange} name="comment" value={comment} className={styles.textarea} placeholder='Если у вас есть какие-нибудь пожелания, напишите их здесь'></textarea>
      </label>

      <Button>Заказать</Button>
    </form>
  )
}
