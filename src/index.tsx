import './index.scss'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { store } from 'redux/store'
import { mainRouter } from './router/MainRouter'

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)
root.render(
  <Provider store={store}>
    <ChakraProvider>
      <RouterProvider router={mainRouter} />
    </ChakraProvider>
  </Provider>
)
