import React from 'react'
import { Footer } from '../../components/footer/footer'
import { FormScreen } from './screens/form-screen'
import { MainScreen } from './screens/main-screen'
import { NoveltiesScreen } from './screens/novelties-screen'
import { ReviewsScreen } from './screens/reviews-screen'

export const LandingPage = () => {
  return (
    <div>
      <MainScreen />
      <NoveltiesScreen />
      <ReviewsScreen />
      <FormScreen />
      <Footer />
    </div>
  )
}
