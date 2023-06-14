import React from 'react'
import { useAppDispatch } from '../../../hooks/redux'
import { stepBack, stepForward } from '../../../redux/reducers/stepperSlice'
import { StepsPropsTypes } from '../stepsProps.types'
import styles from './Step2.module.scss'

export const Step2 = ({ navigate }: StepsPropsTypes) => {
  const { container } = styles
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
      STEP 2<button onClick={onForget}>nazad to step1</button>
      <button onClick={onReady}>to step 3</button>
    </div>
  )
}
