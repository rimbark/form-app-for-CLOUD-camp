import { useAppDispatch } from 'hooks/redux'
import React from 'react'
import { stepBack } from 'redux/reducers/stepperSlice'
import { RegistrationStepsPropsTypes } from '../registrationStepsProps.types'
import styles from './RegistrationStep3.module.scss'

export const RegistrationStep3 = ({
  navigate,
}: RegistrationStepsPropsTypes) => {
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
