// import React from 'react'
import React, { useEffect, useState } from "react";
import imageBg from "./../../assets/rou-bg-img.png";
import electronic from "../../assets/main-product_2.png";
import CardDetails from "../Card/CardDetails";
import Card from "../Card/Card";
import Headers from "./Headers";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const navigate =useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        // const response = await fetch(
        //   "https://api.escuelajs.co/api/v1/products"
        // );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        console.log(response);
        let actualData = await response.json();
        console.log(actualData);
        setData(actualData);
        setError(null);
      } catch (err) {
        setError(err, "error");
        setData(null);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  console.log(data, "api value");



  return (
    <div className="w-full  flex flex-col gap-9">
      <Headers />
      <div>
        <img src={imageBg} alt="bg-img" />
      </div>
      <section className="flex flex-col gap-3">
        {/* {data &&
        data?.map((datas) => <CardDetails key={datas.id} data={datas} />)
      }
      {console.log(data)} */}
      </section>
      <section className="flex  flex-wrap gap-2 m-auto w-[1140px]">
        <div className="flex flex-col gap-5">
          <div>
            <h2 className="text-[40px]  font-thin ">
              Jewellery
            </h2>
          </div>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="flex gap-5 justify-start" >
            {
              data &&
                data
                  .filter((item) => item.category === "jewelery")
                  .map((item) => (
                    <Link to={`product/${item.id}`} >
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
      </section>
      <section className="flex  flex-wrap gap-2 m-auto w-[1140px]">
        <div className="flex flex-col gap-5">
          <div>
            <div>
              <h2 className="text-[40px]  font-thin ">
                Electronics
              </h2>
            </div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="w-[100%] flex ">
            <div className="w-[40%]">
              <img src={electronic} alt="ele-bg" className="w-[90%]" />
            </div>
            <div className="w-[55%] flex flex-wrap gap-3  items-center">
              {
                data &&
                  data
                    .filter((item) => item.category === "electronics")
                    .map((item) => (
                      <Link to={`product/${item.id}`} >
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
      </section>
      <section className="flex  flex-wrap gap-2 m-auto w-[1140px]">
        <div className="flex flex-col gap-3">
          <div>
            <h2 className="text-[40px] font-thin  ">
            men's clothing
            </h2>
          </div>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="flex gap-5 justify-start">
            {
              data &&
                data
                  .filter((item) => item.category === "men's clothing")
                  .map((item) => (
                    <Link to={`product/${item.id}`} >
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
      </section>
      <section className="flex m-auto flex-wrap gap-2 w-[1140px]">
        <div className="flex flex-col gap-5">
          <div>
            <div>
              <h2 className="text-[40px]  font-thin ">
              women's clothing
              </h2>
            </div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="w-[100%] flex ">
            <div className="w-[40%]">
              <img src={electronic} alt="ele-bg" className="w-[90%]" />
            </div>
            <div className="w-[55%] flex flex-wrap gap-3 items-center">
              {
                data &&
                  data
                    .filter((item) => item.category === "women's clothing")
                    .map((item) => (
                      <Link to={`product/${item.id}`} >
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
      </section>
     
    </div>
  );
};

export default Home;
