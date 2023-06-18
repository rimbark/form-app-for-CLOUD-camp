import React from 'react'
import styles from './SendFormButton.module.scss'

export const SendFormButton = () => {
  const { sendFormButton } = styles
  return (
    <button id="button-send" type="submit" className={sendFormButton}>
      Отправить
    </button>
  )
}
