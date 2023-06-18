import { HomePage } from 'pages/HomePage/HomePage'
import { AboutStep } from 'pages/RegistrationPage/components/RegistrationSteps/AboutStep/AboutStep'
import { AdvantagesStep } from 'pages/RegistrationPage/components/RegistrationSteps/AdvantagesStep/AdvantagesStep'
import { UserInformationStep } from 'pages/RegistrationPage/components/RegistrationSteps/UserInformationStep/UserInformationStep'
import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage'
import React from 'react'
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

export const mainRouter = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path={'registration/*'} element={<RegistrationPage />}>
        <Route path="step_1/" element={<UserInformationStep />} />
        <Route path="step_2/" element={<AdvantagesStep />} />
        <Route path="step_3" element={<AboutStep />} />
      </Route>
    </>
  )
)
