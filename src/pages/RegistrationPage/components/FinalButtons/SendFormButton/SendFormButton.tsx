import { useAppDispatch } from 'hooks/redux'
import React from 'react'
import { stepForward } from 'redux/reducers/stepperSlice'
import styles from './SendFormButton.module.scss'

export const SendFormButton = () => {
  const { sendFormButton } = styles
  const dispatch = useAppDispatch()
  const nextStep = () => {
    dispatch(stepForward())
  }
  return (
    <button
      id="button-send"
      type="submit"
      className={sendFormButton}
      onClick={nextStep}
    >
      Отправить
    </button>
  )
}
