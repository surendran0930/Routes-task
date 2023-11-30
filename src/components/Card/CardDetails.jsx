import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Headers from "../pages/Headers";

const CardDetails = ({}) => {
  // const { category, image, description,  price, rate, count, title } = data;

  const { id } = useParams();
  console.log(id, "jjjj");

  const [cardDetails, setCardDetails] = useState([]);
  const fetchProductsData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      let actualData = await response.json();
      console.log(actualData);
      setCardDetails(actualData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProductsData();
  }, [id]);

  {
    console.log(cardDetails, "jiiiiiii");
  }
  return (
    <>
      {/* {console.log(cardDetails,"jiiiiiii")}
    {cardDetails.map((data)=>{
      console.log(data,"jjjjjjj");
      return( */}
      <div className="flex font-['inter']  flex-col gap-7">
        <div>
          <Headers />
        </div>

        <div className="w-full">
          <div className="w-[80%] mx-auto  flex">
            <div className="w-[50%] flex justify-center">
              <img src={cardDetails.image} alt="images" className=" w-[45%]" />
            </div>
            <div className="w-[50%] flex flex-col justify-center gap-6">
              <div>
                <h2 className="text-[27px] leading-[35px] font-bold">
                  {cardDetails.title}
                </h2>
              </div>
              <div className="border-2 border-[#a98b71] max-w-max rounded-[10px]">
                <p className="px-4 py-[5px] ">{cardDetails.category}</p>
              </div>
              <div>
                <p className="text-[#a98b71] font-bold text-[18px] leading-[25px]">
                  Rs:{cardDetails.price}
                </p>
              </div>
              <div>
                <div className="flex gap-9">
                  <div className="inline-flex gap-2">
                    <p className="text-[#a98b71]  font-bold text-[16px] leading-[25px]">
                      Rating:
                    </p>
                    <span className="text-[black]">
                      {cardDetails.rating?.rate}
                    </span>
                  </div>
                  <div className="inline-flex gap-2">
                    <p className="text-[#a98b71] font-bold text-[16px] leading-[25px]">
                      Count:
                    </p>
                    <span className="text-[black]">
                      {cardDetails.rating?.count}
                    </span>
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col w-full">
                <p className="text-[#a98b71] font-['inter'] font-bold text-[16px] leading-[25px]">
                  Product Description :
                </p>
                <p>{cardDetails.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* )
    })
      } */}
    </>
  );
};

export default CardDetails;
