import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { FormStepper } from './components/FormStepper/FormStepper'
import styles from './RegistrationPage.module.scss'

export const RegistrationPage = () => {
  const { container, changingContainer } = styles
  const navigate = useNavigate()
  return (
    <div className={container}>
      <FormStepper />
      <div className={changingContainer}>
        <Outlet context={navigate} />
      </div>
    </div>
  )
}
