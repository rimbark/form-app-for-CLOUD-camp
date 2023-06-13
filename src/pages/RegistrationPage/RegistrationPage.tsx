import React from 'react'
import { Outlet } from 'react-router-dom'
import { MyStepper } from '../../components/MyStepper/MyStepper'
import styles from './RegistrationPage.module.scss'

export const RegistrationPage = () => {
  const { container, changingContainer } = styles

  return (
    <div className={container}>
      <MyStepper />
      <div className={changingContainer}>
        <Outlet />
      </div>
    </div>
  )
}
