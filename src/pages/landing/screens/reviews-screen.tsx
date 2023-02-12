import React from 'react'
import { ReviewCard } from '../../../components/review-card/review-card'
import styles from '../landing.module.css'

export const ReviewsScreen = () => {
  const review = {
    name: 'Мария Иванова',
    text: 'Заказывала неделю назад футболку “Её величество”. Сделали за 4 дня, привезли в удобное мне время. Качество отличное, рекомендую!'
  }

  return (
    <div className={styles.reviews}>
      <div className={`container ${styles.container}`}>
        <ReviewCard review={review} />
        <ReviewCard review={review} />
        <ReviewCard review={review} />
      </div>
    </div>
  )
}
