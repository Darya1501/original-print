import React from 'react'
import { Footer } from '../../components/footer/footer'
import { FormScreen } from './screens/form-screen'
import { MainScreen } from './screens/main-screen'
import { NoveltiesScreen } from './screens/novelties-screen'
import { ReviewsScreen } from './screens/reviews-screen'

export const LandingPage = () => {
  const formRef: React.RefObject<HTMLDivElement> = React.createRef()

  return (
    <div>
      <MainScreen formRef={formRef} />
      <NoveltiesScreen />
      <ReviewsScreen />
      <FormScreen formRef={formRef} />
      <Footer />
    </div>
  )
}
