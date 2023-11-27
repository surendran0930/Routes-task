import React, { useEffect, useState } from "react";

const CardDetails = ({data}) => {
  const { category,image,description,id,price,rate,count,title } = data;
  // console.log(data,"hiiiiiiiiii");
  return (
    
    <div>
<img src={image} alt="images"  className=" w-[200px]"/>
       <p>{category}</p>
       <p>{description}</p>
       <p>{id}</p>
       <p>{price}</p>
       <p>{rate}</p>
       <p>{count}</p>
       <p>{title}</p>
      
    </div>
  );
};

export default CardDetails;