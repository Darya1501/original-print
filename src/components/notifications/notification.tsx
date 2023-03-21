import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import styles from './notification.module.css'
import { COOKIE_NOTICE_NAME } from '../../utils/constants';
import { isCookie, setCookie } from '../../utils/cookies';

export const Notification = () => {
  const [ isVisiable, setIsVisiable ] = useState(!isCookie(COOKIE_NOTICE_NAME))

  const onClick = () => {
    setCookie(COOKIE_NOTICE_NAME, 'true', 30)
    setIsVisiable(false)
  }

  if (isVisiable) {
    return ReactDOM.createPortal(
      <div className={styles.notification}>
        <p>Пользуясь нашим сайтом, вы соглашаетесь с тем, что мы используем куки 🍪</p>
        <button onClick={onClick}>Ок</button>
      </div>, 
      document.getElementById('react-notifications') as HTMLElement
    )
  } else {
    return null
  }
}
