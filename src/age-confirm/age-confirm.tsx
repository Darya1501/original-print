import React, { FC } from 'react'
import { Button } from '../components/ui/button'
import { updateCookieAge } from '../utils/age-functions'
import styles from './age-confirm.module.css'

type TComponentProps = {
  changeStatus: (arg: boolean) => void,
  hide: () => void
}

export const AgeConfirm: FC<TComponentProps> = ({ changeStatus, hide }) => {
  const setConfirm = (confirm: boolean) => {
    if (confirm) {
      changeStatus(true)
      updateCookieAge(true)
    } else {
      changeStatus(false)
      updateCookieAge(false)
    }
    hide()
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.confirm}>
        <h2>Вы пытаетесь перейти в категорию, которая имеет возрастные ограничения</h2>
        <p>Вам уже есть 18?</p>
        <div className={styles.buttons}>
          <Button onClick={() => setConfirm(true)}>Да</Button>
          <Button onClick={() => setConfirm(false)} isSecondary>Нет</Button>
        </div>
      </div>
    </div>
  )
}
