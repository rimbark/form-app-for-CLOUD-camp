import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { MyStepper } from '../../components/MyStepper/MyStepper'
import styles from './RegistrationPage.module.scss'

export const RegistrationPage = () => {
  const { container, changingContainer } = styles
  const navigate = useNavigate()
  return (
    <div className={container}>
      <MyStepper />
      <div className={changingContainer}>
        <Outlet context={navigate} />
      </div>
    </div>
  )
}
