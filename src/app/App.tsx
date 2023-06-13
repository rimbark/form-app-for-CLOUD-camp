import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from '../routes/routes'
import styles from './App.module.scss'

export const App = () => {
  const { container } = styles
  return (
    <ChakraProvider>
      <div className={container}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.id} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </ChakraProvider>
  )
}
