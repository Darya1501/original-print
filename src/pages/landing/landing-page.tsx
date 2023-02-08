import React from 'react'
import { MainScreen } from './screens/main-screen'
import { NoveltiesScreen } from './screens/novelties-screen'
import { ReviewsScreen } from './screens/reviews-screen'

export const LandingPage = () => {
  return (
    <div>
      <MainScreen />
      <NoveltiesScreen />
      <ReviewsScreen />
    </div>
  )
}
