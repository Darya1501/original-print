import React, { useEffect, useState } from 'react'
import { AgeConfirm } from '../../age-confirm/age-confirm';
import { Footer } from '../../components/footer/footer'
import { Header } from '../../components/header/header'
import { ProductCard } from '../../components/product-card/product-card';
import { Loader } from '../../components/ui/loader';
import { useSelector } from '../../hooks/store-hooks';
import { isAgeCookieExist, isCoockieLegalAge } from '../../utils/age-functions';
import { NoAccess } from './no-access';
import styles from './unusual.module.css'

/*
  Человек первый раз заходит на страницу - требуется подтверждение
  Если возраст > 18 - показываем товары, если нет "У Вас нет доступа к данной категории товаров"

  Человек не первый раз заходит на страницу - проверяем существует ли кука,
  Если да проверяем куку, если старше 18 - показываем товары, младше - "Нет доступа"
  Если куки нет, показываем подтверждение
*/ 

export const UnusualPage = () => {
  const { isProductsRequest, unusualProducts } = useSelector(state => state.products);

  const [ isConfirmIsVisible, setIsConfirmIsVisible ] = useState(true)
  const [ isLegalAge, setIsLegalAge ] = useState(false)

  useEffect(() => {
    if (isAgeCookieExist()) {
      setIsConfirmIsVisible(false)
      if (isCoockieLegalAge()) {
        setIsLegalAge(true)
      }
    }
  }, [])

  const PageProducts = () => (
    <>
      <h2>Вы зашли на страницу с необычными товарами</h2>
      <div className={styles.products}>
        {
          isProductsRequest ? (<Loader />) :
          unusualProducts ?
          (unusualProducts.length ? (
            <>
              { 
                unusualProducts.map(product => (<ProductCard key={product.id} product={product} />))
              }
            </>
          ) : (<h2>В магазине пока нет товаров этой категории. Загляните к нам позже</h2>)) : null
        }
      </div>
    </>
  )

  return (
    <>
      <Header background={true} />
      <div className={`container ${styles.container}`}>
        {
          isConfirmIsVisible ?
          (<AgeConfirm changeStatus={setIsLegalAge} hide={() => setIsConfirmIsVisible(false)} />) :
          isLegalAge ? (<PageProducts />) : (<NoAccess />)
        }
      </div>
      <Footer />
    </>
  )
}
