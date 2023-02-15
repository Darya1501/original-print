import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartItem } from '../../components/cart-item/cart-item'
import { Footer } from '../../components/footer/footer'
import { Form } from '../../components/forms/form'
import { Header } from '../../components/header/header'
import { Modal } from '../../components/modal/modal'
import { Button } from '../../components/ui/button'
import { useDispatch, useSelector } from '../../hooks/store-hooks'
import { CLEAR_FORM } from '../../store/constants/form'
import styles from './cart.module.css'

export const CartPage = () => {
  const { products } = useSelector(store => store.cart)
  const { name, phone, address, comment } = useSelector(store => store.form);
  const [ isModal, setIsModal ] = useState(false)
  const dispatch = useDispatch()

  const totalPrice = useMemo(() => {
    return products.reduce((acc, product) => acc + product.price * product.count, 0)
  }, [products])

  const CartPlug = () => {
    return <span className={styles.plug}>
      В коризне пока ничего нет.
      Выберите товары <Link className={styles.link} to='/catalog'>в каталоге</Link>
    </span>
  }

  const submitOrder: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(`Новый заказ. Имя: ${name}, номер телефона: ${phone}. Дополнительно: адрес - ${address}, комментарий - ${comment}`)
    console.log(`Заказ:${products.map(product => ` id: ${product.id}, название: ${product.title}, количество ${product.count}`)}`);
    dispatch({ type: CLEAR_FORM })
  }

  return (
    <>
      <Header background={true} />
      <div className={`container ${styles.container}`}>
        <div className={styles.items}>
          { products && products.length ? products.map(product => (<CartItem key={product.id} product={product} />)) : <CartPlug /> }
        </div>
        <div className={styles.total}>
          <span className={styles.price}>Итого: {totalPrice} ₽</span>
          <Button isDisabled={!products?.length} onClick={() => setIsModal(true)}>Оформить заказ</Button>
        </div>
      </div>
      <Footer />
      { isModal && <Modal onClose={() => setIsModal(false)}><Form size='small' onSubmit={submitOrder}/></Modal> }
    </>
  )
}
