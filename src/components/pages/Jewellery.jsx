import React, { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import Headers from "./Headers";
import { Link } from "react-router-dom";


const Jewellery = ({}) => {
  const [jewData, setJewData] = useState([]);
  const fetchJewlleryData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let actualData = await response.json();
      console.log(actualData);
      setJewData(actualData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJewlleryData();
  }, []);
  return (
    <div className="font-['inter'] ">
      <div>
        <Headers />
      </div>

      <div className="flex  flex-wrap gap-2 m-auto w-[1140px]">
        <div className="flex flex-col gap-5">
          <div>
            <h2 className="text-[40px] text-center font-thin ">Jewellery</h2>
          </div>
          <div className="text-justify ">
            <p className="text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="flex gap-5 justify-center">
            {
              jewData &&
                jewData
                  .filter((item) => item.category === "jewelery")
                  .map((item) => (
                    <Link to={`/product/${item.id}`}>
                  <Card
                    key={item.id}
                    title={item?.title}
                    image={item.image}
                    price={item?.price}
                   />
                  </Link>
                  ))
              // data&&data?.filter((item)=>console.log(item.category==="jewelery"))
              // data&&data.map((datass)=>(datass.category))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jewellery;
