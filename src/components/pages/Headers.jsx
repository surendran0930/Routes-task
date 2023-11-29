import React from 'react'
import { Link } from 'react-router-dom'

const Headers = () => {
  
  return (
    <div className='flex bg-[#f4f4f4]  justify-evenly text-sm uppercase font-normal px-[10px] py-[15px]'>
      <div  className='hover:text-[red] hover:bg-[#ffffff]  px-[5px] py-[10px]'>

        <Link to="/">Home</Link>
      </div>
      <div  className='hover:text-[red] hover:bg-[#ffffff]  px-[5px] py-[10px]'>

        <Link to="/jewelery">Jewelery</Link>

      </div>
         <div  className='hover:text-[red] hover:bg-[#ffffff] px-[5px] py-[10px]'>


        <Link to="/electronics">Electronics</Link>
      </div>
         <div  className='hover:text-[red] hover:bg-[#ffffff] px-[5px] py-[10px]'>


        <Link to="/mensClothing">MensClothing</Link>
      </div>
         <div  className='hover:text-[red] hover:bg-[#ffffff] px-[5px] py-[10px]'>


        <Link to="/womensClothing">WomensClothing</Link>
      </div>
    </div>
  )
}

export default Headers