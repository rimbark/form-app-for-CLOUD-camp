import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './ToHomePageButton.module.scss'

export const ToHomePageButton = () => {
  const { container } = styles
  const navigate = useNavigate()
  const toHomePage = () => {
    navigate('/')
  }
  return (
    <button id="button-to-main" onClick={toHomePage} className={container}>
      На главную
    </button>
  )
}
