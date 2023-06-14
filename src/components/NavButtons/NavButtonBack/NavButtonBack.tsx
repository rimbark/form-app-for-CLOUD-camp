import cn from 'classnames'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './NavButtonBack.module.scss'

export const NavButtonBack = () => {
  const { container, emptyButton } = styles
  const navigate = useNavigate()
  const stepBack = () => {
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
