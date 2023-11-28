import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../../App'
import Home from '../pages/Home'
import CardDetails from '../Card/CardDetails'
import Electronics from '../pages/Electronics'
import Jewellery from '../pages/Jewellery'
import MensClothing from '../pages/MensClothing'
import WomensClothing from '../pages/WomensClothing'

const Pages = () => {
  return (
    <div>
      {/* <Home/> */}
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/electronics' element={<Electronics/>}/>
            <Route path='/jewelery' element={<Jewellery/>}/>
            <Route path='/mensClothing' element={<MensClothing/>}/>
            <Route path='/womensClothing' element={<WomensClothing/>}/>
           
        </Routes>
    </div>
  )
}

export default Pages