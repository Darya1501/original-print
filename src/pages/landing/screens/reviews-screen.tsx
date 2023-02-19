import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { get, child } from 'firebase/database';
import { dbRef } from '../../../app';

import { ReviewCard } from '../../../components/review-card/review-card'
import styles from '../landing.module.css'

export const ReviewsScreen = () => {
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
      {
        reviews && reviews.length !== 0 ? (
          <div className={styles.reviews}>
            <div className={`container ${styles.container}`}>
              <div className={styles.reviewsCards}>
                {
                  reviews.slice(0, 3).map((review, index) => (<ReviewCard key={index} review={review} />))
                }
              </div>
              <Link className={styles.link} to='/reviews'>Все отзывы {'->'}</Link>
            </div>
          </div>
        ) : null
      }
    </>
  )
}
