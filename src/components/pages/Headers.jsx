import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'react-ionicons';
import { useState } from 'react';
import { Close } from 'react-ionicons';
const Headers = () => {
  const [open, setOpen] = useState(true);
  useEffect(() => {
    console.log(open, 'changed');
  }, [open]);

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="px-[5px] py-[10px]  lg:hidden  "
      >
        {open ? <Menu /> : <Close />}
      </div>

      <div
        className={`${
          !open ? 'top-20' : 'max-sm:top-[-490px] '
        } max-md:absolute max-md:top-10 lg:flex lg:flex-row max-sm:w-[650px] md:w-[1200px] lg:w-[100%]  max-sm:gap-5  text-[#000] font-["inter"] bg-[#f4f4f4]  justify-center lg:gap-16 text-sm uppercase font-normal px-[10px] py-[15px] md:flex-col md:gap-1 max-sm:transition-all max-sm:duration-500 max-sm:ease-in  `}
      >
        <div className="hover:text-[red]  px-[5px] py-[10px]">
          <Link to="/">
            <span>Home</span>
          </Link>
        </div>
        <div className="hover:text-[red]  px-[5px] py-[10px]">
          <Link to="/jewelery">Jewelery</Link>
        </div>
        <div className="hover:text-[red] px-[5px] py-[10px]">
          <Link to="/electronics">Electronics</Link>
        </div>
        <div className="hover:text-[red] px-[5px] py-[10px]">
          <Link to="/mensClothing">MensClothing</Link>
        </div>
        <div className="hover:text-[red] px-[5px] py-[10px]">
          <Link to="/womensClothing">WomensClothing</Link>
        </div>
      </div>
    </>
  );
};

export default Headers;
