import React from 'react'

import Center from './components/center'
import Header from './components/header'
import Left from './components/left'
import Right from './components/right'
import './app.css'

function App() {
  return (
    <div className="app">
      <div className="top">
        <Header></Header>
      </div>
      <div className="bottom">
        <div className="bottom-left">
          <Left></Left>
        </div>
        <div className="bottom-center"><Center /></div>
        <div className="bottom-right"><Right></Right></div>
      </div>
    </div>
  )
}

export default App
