import { ChakraProvider } from '@chakra-ui/react'
import { HomePage } from 'pages/HomePage/HomePage'
import { AboutStep } from 'pages/RegistrationPage/components/RegistrationSteps/AboutStep/AboutStep'
import { AdvantagesStep } from 'pages/RegistrationPage/components/RegistrationSteps/AdvantagesStep/AdvantagesStep'
import { UserInformationStep } from 'pages/RegistrationPage/components/RegistrationSteps/UserInformationStep/UserInformationStep'
import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage'
import React from 'react'
import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom'
import styles from './App.module.scss'

export const App = () => {
  const { container } = styles
  const navigate = useNavigate()
  return (
    <ChakraProvider>
      <div className={container}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path={'registration/*'} element={<RegistrationPage />}>
              <Route
                path="step_1"
                element={<UserInformationStep navigate={navigate} />}
              />
              <Route
                path="step_2"
                element={<AdvantagesStep navigate={navigate} />}
              />
              <Route
                path="step_3"
                element={<AboutStep navigate={navigate} />}
              />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    </ChakraProvider>
  )
}
