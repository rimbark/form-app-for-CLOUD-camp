import { useAppDispatch } from 'hooks/redux'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { hereWeGoAgain } from 'redux/reducers/stepperSlice'
import styles from './ToHomePageButton.module.scss'

export const ToHomePageButton = () => {
  const { container } = styles
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const toHomePage = () => {
    navigate('/')
    dispatch(hereWeGoAgain())
  }
  return (
    <button id="button-to-main" onClick={toHomePage} className={container}>
      На главную
    </button>
  )
}
