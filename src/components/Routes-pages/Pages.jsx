import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../../App'
import Home from '../Home-page/Home'
import CardDetails from '../Card/CardDetails'

const Pages = () => {
  return (
    <div>
      {/* <Home/> */}
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route/>
        </Routes>
    </div>
  )
}

export default Pages