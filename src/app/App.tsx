import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { HomePage } from '../pages/HomePage/HomePage'
import { RegistrationPage } from '../pages/RegistrationPage/RegistrationPage'
import { Step1 } from '../widgets/Steps/Step1/Step1'
import { Step2 } from '../widgets/Steps/Step2/Step2'
import { Step3 } from '../widgets/Steps/Step3/Step3'
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
            <Route path="step_1" element={<Step1 navigate={navigate} />} />
            <Route path="step_2" element={<Step2 navigate={navigate} />} />
            <Route path="step_3" element={<Step3 navigate={navigate} />} />
          </Route>
        </Routes>
      </div>
    </ChakraProvider>
  )
}
