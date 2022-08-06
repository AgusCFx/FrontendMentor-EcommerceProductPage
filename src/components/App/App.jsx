import React from 'react'
import './App.css'
import {Header} from './Header/Header'
import { Main } from './Main/Main'

function App() {

  return (
    <>
      <Header />      
      {/*
        $125.00
        50%
        $250.00

        0
        Add to cart */}
        <Main />
    </>
  )
}

export default App
