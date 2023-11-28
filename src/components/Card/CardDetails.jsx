import React, { useEffect, useState } from "react";

const CardDetails = ({ data }) => {
  console.log(data);
  const { category, image, description, id, price, rate, count, title } = data;
  // console.log(data,"hiiiiiiiiii");
  return (
    <div className="w-full flex">
      <div className="w-[50%] flex justify-center">
        <img src={image} alt="images" className=" w-[200px]" />
      </div>
      <div className="w-[50%]">
        <div>
          <h2 className="text-[27px] leading-[35px] font-bold">{title}</h2>
        </div>
        <div className="border-2 border-[#a98b71] max-w-max rounded-[10px]">
          <p className="px-1 py-[10px] ">{category}</p>
        </div>
        <div>
          <p >{price}</p>
        </div>
        <div>
          <div>
            <p>{rate}</p>
          </div>
          <div>
            <p>{count}</p>
          </div>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
