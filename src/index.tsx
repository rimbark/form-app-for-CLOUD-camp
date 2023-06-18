import './index.scss'
import { App } from 'app/App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { store } from 'redux/store'

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)
root.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
)
