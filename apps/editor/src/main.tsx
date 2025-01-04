import React, { StrictMode } from 'react'
import reactdom from 'react-dom'
import ReactDOM from 'react-dom/client'
import App from './app'

window.React = React
window.ReactDOM = reactdom
ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
