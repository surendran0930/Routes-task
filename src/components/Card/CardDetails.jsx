import React, { useEffect, useState } from "react";

const CardDetails = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getdata() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        // console.log(response);
        let actualData = await response.json();
        // console.log(actualData);
        setData(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    }
    getdata();
  }, []);
  return (
    <div>
      <h1>CardDetails</h1>
    </div>
  );
};

export default CardDetails;
