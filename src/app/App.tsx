import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  homePageRoutes,
  registrationPageRoutes,
  stepsRoutes,
} from '../routes/routes'
import styles from './App.module.scss'

export const App = () => {
  const { container } = styles
  return (
    <ChakraProvider>
      <div className={container}>
        <Routes>
          {homePageRoutes.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
          ))}
          {registrationPageRoutes.map((route) => (
            <Route key={route.id} path={route.path} element={route.element}>
              {stepsRoutes.map((route) => (
                <Route
                  key={route.id}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Route>
          ))}
        </Routes>
      </div>
    </ChakraProvider>
  )
}
