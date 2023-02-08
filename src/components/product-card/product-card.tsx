import React, { FC } from 'react'
import { TProduct } from '../../utils/types'
import styles from './product-card.module.css'

type TProductCardProps = {
  product: TProduct
}

export const ProductCard: FC<TProductCardProps>= ({ product }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src="https://sun9-34.userapi.com/impg/Z_6hkGUkMeLbMzzp7Nv-Sdmn89HpwDfM4ylGEA/oeBgkAb6DXI.jpg?size=660x680&quality=95&sign=452501b8b97a0fc3117e226bf7a0d1f8&type=album" alt="" />
      <div className={styles.description}>
        <span className={styles.price}>{product.price}р</span>
        <span className={styles.title}>{product.title}</span>
      </div>
    </div>
  )
}
