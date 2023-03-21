import React, { FC, useEffect, useState } from 'react'
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
import { Form, TFormValues } from '../../components/forms/form'
import { Modal } from '../../components/modal/modal'
import { ApplicationSent } from '../../components/ui/application-sent'
import { isAgeCookieExist, isCoockieLegalAge } from '../../utils/age-functions'
import { AgeConfirm } from '../../age-confirm/age-confirm'
import { NoAccess } from '../unusual-page/no-access'

export const ProductPage = () => {
  const { isProductsRequest, products, unusualProducts } = useSelector(store => store.products)
  const { products : cartProducts } = useSelector(store => store.cart)

  const { id } = useParams<{ id?: string }>();
  const currentProduct = products.concat(unusualProducts).find((product: TProduct) => product.id === id)

  const [ isUnusual, setIsUnusual ] = useState(false)
  const [ isConfirmIsVisible, setIsConfirmIsVisible ] = useState(true)
  const [ isLegalAge, setIsLegalAge ] = useState(false)

  useEffect(() => {
    if (id && id[0] === 'u') {
      if (isAgeCookieExist()) {
        setIsConfirmIsVisible(false)
        if (isCoockieLegalAge()) {
          setIsLegalAge(true)
        }
      }
      setIsUnusual(true)
    }
  }, [id])

  const [ isModal, setIsModal ] = useState(false)
  const [ isSentModal, setIsSentModal ] = useState(false)
  const [ isInCart, setIsInCart ] = useState(isProductInCart(currentProduct, cartProducts))

  const dispatch = useDispatch()

  const addToCart = () => {
    if (currentProduct) {
      dispatch({ type: ADD_PRODUCT_TO_CART, product: currentProduct })
      setIsInCart(true)
      updateCookieCart([ ...cartProducts, { ...currentProduct, count: 1 } ])
    }
  }

  const submitOrder = async (data: TFormValues) => {
    if (currentProduct) {
      const title = 'Новый заказ (со страницы товара)';
      let message = `<p>Имя: ${data.name}</p><p>Номер телефона: ${data.phone}</p><br>`;
      if (data.address) message += `<p>Адрес доставки: ${data.address}</p>`
      if (data.comment) message += `<p>Комментарий: ${data.comment}</p>`
      message += `<br><p>Заказ: ${currentProduct.title} (id: ${currentProduct.id}), количество: 1</p>`;

      await fetch('/send.php', {
        method: "POST",
        body: JSON.stringify({ title: title, message: message })
      })

      setIsModal(false)
      setIsSentModal(true)
    }
  }

  const Product: FC<{product: TProduct}> = ({ product }) => (
    <>
      <img className={styles.image} src={product.image ? product.image : plug} alt="" />
      <div className={styles.description}>
        <span className={styles.category}>Категория: {product.category}</span>
        <h2 className={styles.h2}>{product.title}</h2>
        <p className={styles.price}>{product.price} ₽</p>
        <p className={styles.info}>Размеры: {product.sizes}</p>
        <p className={styles.info}>Цвета: {product.colors}</p>
        <div className={styles.buttons}>
          <Button onClick={addToCart} isDisabled={isInCart}>
            { isInCart ? 'Товар в корзинe' : 'В корзину' }
          </Button>
          <Button isSecondary onClick={() => setIsModal(true)}>Купить 1 экземпляр</Button>
        </div>
      </div>
    </>
  )

  return (
    <>
      <Header background={true} />
      <div className={`container ${styles.container}`}>
        {
          isProductsRequest ? (<Loader />) : 
          currentProduct ?
          (
            isUnusual ?
            ( 
              isConfirmIsVisible ? 
              (<AgeConfirm changeStatus={setIsLegalAge} hide={() => setIsConfirmIsVisible(false)} />) :
              (
                isLegalAge ? (<Product product={currentProduct} />) : (<NoAccess />)
              )
            ) : (<Product product={currentProduct} />) 
          ) :
          (
            <div>
              <h2>Вы попали на страницу не существующего товара</h2>
              <p>Проверьте корректность ссылки или загляните <Link to='/catalog'>в каталог</Link></p>
            </div>
          )
        }
      </div>
      <Footer />
      { isModal && <Modal onClose={() => setIsModal(false)}><Form size='small' onSubmit={submitOrder}/></Modal> }
      { isSentModal && <Modal onClose={() => setIsSentModal(false)}><ApplicationSent /></Modal> }
    </>
  )
}
