import React, { FC } from 'react'
import { TCartProduct } from '../../utils/types'
import styles from './cart-item.module.css'
import plug from '../../images/no-photo.png'
import trash from '../../images/trash-icon.svg'
import { useDispatch, useSelector } from '../../hooks/store-hooks'
import { DECREMENT_PRODUCT_COUNT, INCREMENT_PRODUCT_COUNT, REMOVE_PRODUCT_FROM_CART } from '../../store/constants/cart'
import { updateCookieCart } from '../../utils/cart-functions'
import { Link } from 'react-router-dom'

type TItemProps = {
  product: TCartProduct
}

export const CartItem: FC<TItemProps> = ({ product }) => {
  const { products: cartProducts } = useSelector(store => store.cart)
  const dispatch = useDispatch()

  const changeCount = (action: 'increment' | 'decrement') => {
    dispatch({ 
      type: action === 'increment' ? INCREMENT_PRODUCT_COUNT : DECREMENT_PRODUCT_COUNT,
      id: product.id
    })

    const newCount = action === 'increment' ? product.count + 1 : product.count - 1;
    updateCookieCart(cartProducts.map(item => product.id === item.id ? ({ ...item, count: newCount }) : item))
  }

  const deleteProduct = () => {
    dispatch({ type: REMOVE_PRODUCT_FROM_CART, id: product.id })
    updateCookieCart(cartProducts.filter(item => product.id !== item.id))
  }

  return (
    <div className={styles.card}>
      <img className={styles.image} src={product.image ? product.image : plug} alt="" />
      <div className={styles.info}>
        <Link to={`/catalog/${product.id}`} className={styles.name}>{product.title}</Link>
        <div className={styles.quantity}>
          <button className={styles.minus} disabled={product.count === 1} onClick={() => changeCount('decrement')}></button>
          <span>{product.count}</span>
          <button className={styles.plus} onClick={() => changeCount('increment')}></button>
        </div>
        <span className={styles.price}>{product.price * product.count}₽</span>
      </div>
      <button className={styles.trash} onClick={deleteProduct}><img src={trash} alt="delete product" /></button>
    </div>
  )
}
