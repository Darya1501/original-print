import React from 'react'
import { Footer } from '../../components/footer/footer'
import { Header } from '../../components/header/header'
import { Button } from '../../components/ui/button'
import styles from './product.module.css'

export const ProductPage = () => {
  return (
    <>
      <Header background={true} />
      <div className={`container ${styles.container}`}>
        <img className={styles.image} src="https://sun9-34.userapi.com/impg/Z_6hkGUkMeLbMzzp7Nv-Sdmn89HpwDfM4ylGEA/oeBgkAb6DXI.jpg?size=660x680&quality=95&sign=452501b8b97a0fc3117e226bf7a0d1f8&type=album" alt="" />
        <div className={styles.description}>
          <span className={styles.category}>Футболка</span>
          <h2 className={styles.h2}>Планы на завтра</h2>
          <p className={styles.price}>2400р</p>
          <p className={styles.info}>Размеры: от 40 (XXS) до 70 (5XL)</p>
          <p className={styles.info}>Цвета: белый, черный и красный</p>
          <div className={styles.buttons}>
            <Button>В корзину</Button>
            <Button isSecondary>Купить 1 экземпляр</Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
