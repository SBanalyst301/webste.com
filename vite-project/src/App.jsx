import { useState } from 'react'
import './App.css'
import Navup from './components/Navup'
import React from 'react'
import Navdown from './components/Navdown'
import Hometext from './components/Hometext'
import Homecard from './components/Homecard'
function App() {

  return(
    <>
    <div className='appnav'>
    <Navup/>
    <Navdown/>
    </div>
    <div className='apphome'>
       <Hometext/>
       <Homecard/>

    </div>
    
    </>
  )
  
}

export default App
