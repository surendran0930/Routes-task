import React from "react";

const Card = ({ image, title, price }) => {
  // console.log(image);
  return (
    <div className=" w-[200px] shadow-xl ">
      <div className="flex justify-center">
        <img src={image} className="w-[115px] h-[115px]" />
      </div>
      <div className="overflow-hidden text-ellipsis whitespace-nowrap bg-[#fefaef]">
        <p >{title}</p>
      </div>
      <div className="bg-[#f6f1ea]">
        <p className="text-[#999] hover:text-[#000]">{price}</p>
      </div>
    </div>
  );
};

export default Card;
