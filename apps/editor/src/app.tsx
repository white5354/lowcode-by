import React from 'react'

import Center from './components/center'
import Header from './components/header'
import Left from './components/left'
import Right from './components/right'
import UmdComponent from './UmdComponed'
import { loadScript } from './utils'
import './app.css'

function App() {
  return (
    <div>
      <UmdComponent url="/by-text.umd.js" />
    </div>
  )
}

export default App
