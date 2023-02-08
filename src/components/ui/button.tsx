import React, { FC, ReactNode, SyntheticEvent } from 'react'
import styles from "./ui.module.css"

type TPropButton = {
  children: ReactNode,
  onClick?: (() => void) | ((e: SyntheticEvent) => void)
}
export const Button: FC<TPropButton> = ({ children, onClick }) => {
  return (
    <button type="submit" className={styles.button} onClick={onClick}>{children}</button>
  )
}
