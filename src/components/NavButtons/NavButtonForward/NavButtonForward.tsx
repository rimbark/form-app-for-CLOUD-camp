import React from 'react'
import styles from './NavButtonForward.module.scss'

export const NavButtonForward = () => {
  const { buttonNext } = styles

  return (
    <button id="button-next" type="submit" className={buttonNext}>
      Далее
    </button>
  )
}
