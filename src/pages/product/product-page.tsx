import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from '../../hooks/store-hooks'

import { Footer } from '../../components/footer/footer'
import { Header } from '../../components/header/header'
import { Button } from '../../components/ui/button'
import { TProduct } from '../../utils/types'

import styles from './product.module.css'
import plug from '../../images/no-photo.png'
import { ADD_PRODUCT_TO_CART } from '../../store/constants/cart'
import { isProductInCart } from '../../utils/products-functions'
import { updateCookieCart } from '../../utils/cart-functions'
import { Loader } from '../../components/ui/loader'
import { CLEAR_FORM } from '../../store/constants/form'
import { Form, TFormValues } from '../../components/forms/form'
import { Modal } from '../../components/modal/modal'

export const ProductPage = () => {
  const { isProductsRequest, products } = useSelector(store => store.products)
  const { products : cartProducts } = useSelector(store => store.cart)

  const { id } = useParams<{ id?: string }>();
  const currentProduct = products.find((product: TProduct) => product.id === id)

  const [ isModal, setIsModal ] = useState(false)
  const [ isInCart, setIsInCart ] = useState(isProductInCart(currentProduct, cartProducts))

  const dispatch = useDispatch()

  const addToCart = () => {
    if (currentProduct) {
      dispatch({ type: ADD_PRODUCT_TO_CART, product: currentProduct })
      setIsInCart(true)
      updateCookieCart([ ...cartProducts, { ...currentProduct, count: 1 } ])
    }
  }

  const submitOrder = (data: TFormValues) => {
    if (currentProduct) {
      const title = 'Новый заказ';
      const message = 
      `Имя: ${data.name}, номер телефона: ${data.phone}. Дополнительно: адрес - ${data.address}, комментарий - ${data.comment}.
      Заказ: ${currentProduct.title}, количество: 1 штука)}`;

      fetch('send.php', {
        method: "POST",
        body: JSON.stringify({ title: title, message: message })
      })
      dispatch({ type: CLEAR_FORM })
      setIsModal(false)
    }
  }

  return (
    <>
      <Header background={true} />
      <div className={`container ${styles.container}`}>
        {
          isProductsRequest ? (<Loader />) : 
          currentProduct ?
            (
              <>
                <img className={styles.image} src={currentProduct.image ? currentProduct.image : plug} alt="" />
                <div className={styles.description}>
                  <span className={styles.category}>Категория: {currentProduct.category}</span>
                  <h2 className={styles.h2}>{currentProduct.title}</h2>
                  <p className={styles.price}>{currentProduct.price} ₽</p>
                  <p className={styles.info}>Размеры: {currentProduct.sizes}</p>
                  <p className={styles.info}>Цвета: {currentProduct.colors}</p>
                  <div className={styles.buttons}>
                    <Button onClick={addToCart} isDisabled={isInCart}>
                      { isInCart ? 'Товар в корзинe' : 'В корзину' }
                    </Button>
                    <Button isSecondary onClick={() => setIsModal(true)}>Купить 1 экземпляр</Button>
                  </div>
                </div>
              </>
            ) : (
              <div>
                <h2>Вы попали на страницу не существующего товара</h2>
                <p>Проверьте корректность ссылки или загляните <Link to='/catalog'>в каталог</Link></p>
              </div>
            )
        }
      </div>
      <Footer />
      { isModal && <Modal onClose={() => setIsModal(false)}><Form size='small' onSubmit={submitOrder}/></Modal> }
    </>
  )
}
