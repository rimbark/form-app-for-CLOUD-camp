import { ChakraProvider } from '@chakra-ui/react'
import { HomePage } from 'pages/HomePage/HomePage'
import { RegistrationStep1 } from 'pages/RegistrationPage/components/RegistrationSteps/RegistrationStep1/RegistrationStep1'
import { RegistrationStep2 } from 'pages/RegistrationPage/components/RegistrationSteps/RegistrationStep2/RegistrationStep2'
import { RegistrationStep3 } from 'pages/RegistrationPage/components/RegistrationSteps/RegistrationStep3/RegistrationStep3'
import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage'
import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import styles from './App.module.scss'

export const App = () => {
  const { container } = styles
  const navigate = useNavigate()
  return (
    <ChakraProvider>
      <div className={container}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path={'registration/*'} element={<RegistrationPage />}>
            <Route
              path="step_1"
              element={<RegistrationStep1 navigate={navigate} />}
            />
            <Route
              path="step_2"
              element={<RegistrationStep2 navigate={navigate} />}
            />
            <Route
              path="step_3"
              element={<RegistrationStep3 navigate={navigate} />}
            />
          </Route>
        </Routes>
      </div>
    </ChakraProvider>
  )
}
