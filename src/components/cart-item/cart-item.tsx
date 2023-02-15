import React, { FC } from 'react'
import { TCartProduct } from '../../utils/types'
import styles from './cart-item.module.css'
import plug from '../../images/no-photo.png'
import { useDispatch } from '../../hooks/store-hooks'
import { DECREMENT_PRODUCT_COUNT, INCREMENT_PRODUCT_COUNT } from '../../store/constants/cart'

type TItemProps = {
  product: TCartProduct
}

export const CartItem: FC<TItemProps> = ({ product }) => {
  const dispatch = useDispatch()
  const increment = () => {
    dispatch({ type: INCREMENT_PRODUCT_COUNT, id: product.id })
  }
  const decrement = () => {
    dispatch({ type: DECREMENT_PRODUCT_COUNT, id: product.id })
  }

  return (
    <div className={styles.card}>
      <img className={styles.image} src={product.image ? product.image : plug} alt="" />
      <div className={styles.info}>
        <span className={styles.name}>{product.title}</span>
        <div className={styles.quantity}>
          <button className={styles.minus} disabled={product.count === 1} onClick={decrement}></button>
          <span>{product.count}</span>
          <button className={styles.plus} onClick={increment}></button>
        </div>
        <span className={styles.price}>{product.price * product.count}₽</span>
      </div>
    </div>
  )
}
