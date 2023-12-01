import React from "react";
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <div className=' max-sm:hidden flex  text-[#000] font-["inter"] bg-[#f4f4f4]  justify-center gap-16 text-sm uppercase font-normal px-[10px] py-[15px]'>
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
  );
};

export default Headers;
