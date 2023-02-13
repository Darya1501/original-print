import React, { FC } from 'react'
import styles from './cart-item.module.css'

type TItemProps = {
  name: string,
  price: number,
  count: number
}

export const CartItem: FC<TItemProps> = ({ name, price, count }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src="https://sun9-34.userapi.com/impg/Z_6hkGUkMeLbMzzp7Nv-Sdmn89HpwDfM4ylGEA/oeBgkAb6DXI.jpg?size=660x680&quality=95&sign=452501b8b97a0fc3117e226bf7a0d1f8&type=album" alt="" />
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <div className={styles.quantity}>
          <button className={styles.minus} disabled></button>
          <span>{count}</span>
          <button className={styles.plus}></button>
        </div>
        <span className={styles.price}>{price}р</span>
      </div>
    </div>
  )
}
