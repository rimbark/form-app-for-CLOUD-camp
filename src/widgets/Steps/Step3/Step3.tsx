import React from 'react'
import { useAppDispatch } from '../../../hooks/redux'
import { stepBack } from '../../../redux/reducers/stepperSlice'
import { StepsPropsTypes } from '../stepsProps.types'
import styles from './Step3.module.scss'

export const Step3 = ({ navigate }: StepsPropsTypes) => {
  const { container } = styles
  const dispatch = useAppDispatch()
  const onForget = () => {
    dispatch(stepBack())
    navigate(-1)
  }
  return (
    <div className={container}>
      STEP 3<button onClick={onForget}>nazad to step 2</button>
    </div>
  )
}
