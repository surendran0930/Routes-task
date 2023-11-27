// import React from 'react'
import React, { useEffect, useState } from "react";
import CardDetails from "../Card/CardDetails";
import Card from "../Card/Card";

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
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
  console.log(data, 'api value');
  return (
   
    <div>
      {/* {data &&
        data?.map((datas) => <CardDetails key={datas.id} data={datas} />)
        } */}
        <section>
          
         {data &&
        data?.map((datas) => <Card key={datas.id} title={datas?.title} price={datas?.price} />)
        }
        </section>
    </div>
  );
};

export default Home;
