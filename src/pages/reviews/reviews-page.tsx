import React, { useEffect, useState } from 'react'
import { Footer } from '../../components/footer/footer'
import { Header } from '../../components/header/header'
import { SmtWentWrong } from '../../components/ui/smt-went-wrong'
import styles from './reviews.module.css'
import { get, child } from 'firebase/database';
import { dbRef } from '../../app'
import { TReview } from '../../utils/types'
import { ReviewCard } from '../../components/review-card/review-card'


export const ReviewsPage = () => {
  const [ reviews, setReviews ] = useState([])

  useEffect(() => {
    get(child(dbRef, `/reviews`)).then((snapshot) => {
      if (snapshot.exists()) {
        setReviews(snapshot.val())
      }
    }).catch((error) => {
      console.error(error);
    });
  }, [])

  return (
    <>
      <Header background={true} />
      <div className={`container ${styles.container}`}>
        <h2 className={styles.h2}>Отзывы</h2>
        <div className={styles.reviews}>
          {
            reviews ?
            (reviews.length ? (
              <>
                { reviews.map((review: TReview, index) => (<ReviewCard key={index} review={review} />)) }
              </>
            ) : (<h2>В магазине пока нет отзывов. Загляните к нам позже</h2>)) : <SmtWentWrong />
          }
        </div>
      </div>
      <Footer />
    </>
  )
}
