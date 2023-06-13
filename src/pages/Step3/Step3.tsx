import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { stepBack } from '../../redux/reducers/stepSlice'
import styles from './Step3.module.scss'

export const Step3 = () => {
  const { container } = styles
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const onForget = () => {
    dispatch(stepBack())
    navigate(-1)
  }
  return (
    <div className={container}>
      STEP 3<button onClick={onForget}>nazad to home page</button>
    </div>
  )
}
