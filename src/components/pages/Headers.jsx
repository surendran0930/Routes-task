import React from 'react'
import { Link } from 'react-router-dom'

const Headers = () => {
  return (
    <div className='flex justify-around h-[100px]'>
        <Link to="/">Home</Link>
        <Link to="/jewelery">Jewelery</Link>
        <Link to="/electronics">Electronics</Link>
        <Link to="/mensClothing">MensClothing</Link>
        <Link to="/womensClothing">WomensClothing</Link>
    </div>
  )
}

export default Headers