import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux'
import { stepBack, stepForward } from '../../redux/reducers/stepSlice'
import styles from './Step2.module.scss'

export const Step2 = () => {
  const { container } = styles
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const onReady = () => {
    dispatch(stepForward())
    navigate('/registration/step_3/')
  }
  const onForget = () => {
    dispatch(stepBack())
    navigate(-1)
  }
  return (
    <div className={container}>
      STEP 2<button onClick={onForget}>nazad to home page</button>
      <button onClick={onReady}>to step 3</button>
    </div>
  )
}
