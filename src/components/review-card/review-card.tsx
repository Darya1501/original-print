import React, { FC } from 'react'
import { TReview } from '../../utils/types'
import styles from './review-card.module.css'

type TReviewCardProps = {
  review: TReview
}

const url = "https://images.unsplash.com/photo-1674376890916-7e742a12a943?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

export const ReviewCard: FC<TReviewCardProps>= ({ review }) => {
  return (
    <div className={styles.card}>
      <div className={styles.user}>
        <img className={styles.image} src={url} alt="" />
        <span>{review.name}</span>
      </div>
      <p className={styles.text}>{review.comment}</p>
    </div>
  )
}
