import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { stepForward } from '../../redux/reducers/stepSlice'
import styles from './Step1.module.scss'

export const Step1 = () => {
  const { container } = styles
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const onReady = () => {
    dispatch(stepForward())
    navigate('/registration/step_2/')
  }
  const onForget = () => {
    navigate(-1)
  }
  return (
    <div className={container}>
      STEP 1<button onClick={onForget}>nazad to home page</button>
      <button onClick={onReady}>to step 2</button>
    </div>
  )
}
