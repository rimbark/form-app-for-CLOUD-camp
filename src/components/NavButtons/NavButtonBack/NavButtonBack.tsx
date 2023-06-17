import cn from 'classnames'
import { useAppDispatch } from 'hooks/redux'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { stepperBack } from 'redux/reducers/stepperSlice'
import styles from './NavButtonBack.module.scss'

export const NavButtonBack = () => {
  const { container, emptyButton } = styles
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const stepBack = () => {
    dispatch(stepperBack())
    navigate(-1)
  }
  return (
    <button
      id="button-back"
      value="Назад"
      className={cn(container, emptyButton)}
      type="button"
      onClick={stepBack}
    >
      Назад
    </button>
  )
}
