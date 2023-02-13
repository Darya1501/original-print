import React, { FC, ReactNode, SyntheticEvent } from 'react'
import styles from "./ui.module.css"

type TPropButton = {
  children: ReactNode,
  isSecondary?: boolean,
  onClick?: (() => void) | ((e: SyntheticEvent) => void)
}
export const Button: FC<TPropButton> = ({ children, isSecondary, onClick }) => {
  return (
    <button type="submit" className={`${styles.button} ${isSecondary ? styles.secondary : ''}`} onClick={onClick}>{children}</button>
  )
}
