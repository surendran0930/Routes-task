import React from "react";
import { useEffect,useState } from "react";
import Headers from "./Headers";
import { Link } from "react-router-dom";



import Card from "../Card/Card";

const WomensClothing = () => {
  const [womenClothing, setWomenClothing] = useState([]);
  const fetchWomenClothingData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let actualData = await response.json();
      console.log(actualData);
      setWomenClothing(actualData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchWomenClothingData();
  }, []);
  return (
    <div className="flex flex-col font-['inter']  gap-7">
    <div>
      <Headers />
    </div>

    <div className="flex  flex-wrap gap-2 m-auto justify-center w-[1140px]">
      <div className="flex flex-col gap-5">
        <div>
          <h2 className="text-[40px] text-center font-thin ">WomenClothing</h2>
        </div>
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex gap-5 justify-center">
          {
            womenClothing &&
            womenClothing
                .filter((item) => item.category === "women's clothing")
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

export default WomensClothing;
