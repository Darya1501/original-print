import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from '../../hooks/store-hooks'
import { CLEAR_CART } from '../../store/constants/cart'

import { deleteCookie } from '../../utils/cookies'
import { COOKIE_CART_NAME } from '../../utils/constants'

import { CartItem } from '../../components/cart-item/cart-item'
import { Footer } from '../../components/footer/footer'
import { Form, TFormValues } from '../../components/forms/form'
import { Header } from '../../components/header/header'
import { Modal } from '../../components/modal/modal'
import { Button } from '../../components/ui/button'
import { Loader } from '../../components/ui/loader'
import { ApplicationSent } from '../../components/ui/application-sent'
import styles from './cart.module.css'

export const CartPage = () => {
  const { isProductsRequest } = useSelector(store => store.products)
  const { products } = useSelector(store => store.cart)

  const [ isModal, setIsModal ] = useState(false)
  const [ isSentModal, setIsSentModal ] = useState(false)
  
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

  const submitOrder = async (data: TFormValues) => {
    const title = 'Новый заказ';
    const message = 
    `Имя: ${data.name}, номер телефона: ${data.phone}. Дополнительно: адрес - ${data.address}, комментарий - ${data.comment}.
    Заказ:${products.map(product => ` id: ${product.id}, название: ${product.title}, количество ${product.count}`)}`;

    await fetch('send.php', {
      method: "POST",
      body: JSON.stringify({ title: title, message: message })
    })

    dispatch({ type: CLEAR_CART })
    deleteCookie(COOKIE_CART_NAME)
    setIsModal(false)
    setIsSentModal(true)
  }

  return (
    <>
      <Header background={true} />
      <div className={`container ${styles.container}`}>
        {
          isProductsRequest ? (<Loader />) : 
          (
            <div className={styles.items}>
              { products && products.length ? products.map(product => (<CartItem key={product.id} product={product} />)) : <CartPlug /> }
            </div>
          )
        }
        <div className={styles.total}>
          <span className={styles.price}>Итого: {totalPrice} ₽</span>
          <Button isDisabled={!products?.length} onClick={() => setIsModal(true)}>Оформить заказ</Button>
        </div>
      </div>
      <Footer />
      { isModal && <Modal onClose={() => setIsModal(false)}><Form size='small' onSubmit={submitOrder}/></Modal> }
      { isSentModal && <Modal onClose={() => setIsSentModal(false)}><ApplicationSent /></Modal> }
    </>
  )
}
