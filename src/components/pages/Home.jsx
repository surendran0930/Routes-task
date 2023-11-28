// import React from 'react'
import React, { useEffect, useState } from "react";
import CardDetails from "../Card/CardDetails";
import Card from "../Card/Card";
import Headers from "./Headers";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        // const response = await fetch("https://fakestoreapi.com/products");
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
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
    <div>
      <Headers/>
      <section className="flex flex-col gap-3">
        {/* {data &&
        data?.map((datas) => <CardDetails key={datas.id} data={datas} />)
      }
      {console.log(data)} */}
      </section>
      <section className="flex  flex-wrap gap-2">
        {/* {console.log(data.image)} */}

        {/* {data &&
        data?.map((datas) => <Card key={datas.id} title={datas?.title} image={datas.image} price={datas?.price} />)
        
        } */}
        {/* {console.log(data)} */}
        <div>
      <h2>Jewellery</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
        {
          data &&
            data
              .filter((item) => ((item.category.name==="Clothes")))
              .map((item) => (
                <Card
                  key={item.id}
                  title={item?.title}
                  image={item.images}
                  price={item?.price}
                />
              ))
          // data&&data?.filter((item)=>console.log(item.category==="jewelery"))
          // data&&data.map((datass)=>(datass.category))
        }
      </section>
      <section>
      <div>
      <h2>Electronics</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
      {
          data &&
            data
              .filter((item) => ((item.category.name==="Books")))
              .map((item) => (
                <Card
                  key={item.id}
                  title={item?.title}
                  image={item.images}
                  price={item?.price}
                />
              ))
          // data&&data?.filter((item)=>console.log(item.category==="jewelery"))
          // data&&data.map((datass)=>(datass.category))
        }
      </section>
      <section>
      <div>
      <h2>MensClothing</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
      {
          data &&
            data
              .filter((item) => ((item.category.name==="Shoes")))
              .map((item) => (
                <Card
                  key={item.id}
                  title={item?.title}
                  image={item.images}
                  price={item?.price}
                />
              ))
          // data&&data?.filter((item)=>console.log(item.category==="jewelery"))
          // data&&data.map((datass)=>(datass.category))
        }
      </section>
       <section>
       <div>
      <h2>WomensClothing</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
      {
          data &&
            data.map((item)=>{
              if(item.category.name==="Furniture"){
                // console.log(item.category.name==="Furniture");

                return <Card key={item.id}  title={item.title} image={item.images} price={item.price}/>
              }
            })
              // .filter((item) => ((item.category.name==="Shoes")))
              // .map((item) => (
              //   <Card
              //     key={item.id}
              //     title={item?.title}
              //     image={item.images}
              //     price={item?.price}
              //   />
              // ))
          // data&&data?.filter((item)=>console.log(item.category==="jewelery"))
          // data&&data.map((datass)=>(datass.category))
        }
      </section>
    </div>
  );
};

export default Home;
