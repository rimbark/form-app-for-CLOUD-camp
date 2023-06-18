import React from 'react'
import { Outlet } from 'react-router-dom'
import { FormStepper } from './components/FormStepper/FormStepper'
import styles from './RegistrationPage.module.scss'

export const RegistrationPage = () => {
  const { container, changingContainer } = styles

  return (
    <div className={container}>
      <FormStepper />
      <div className={changingContainer}>
        <Outlet />
      </div>
    </div>
  )
}
