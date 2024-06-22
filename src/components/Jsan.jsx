import React, { useEffect, useState } from "react";
import axios from "axios";
const Jsan = ({ category, searchterm }) => {
  const [data, setData] = useState([]);
  const makeapiRequest = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      //   console.log(res.data);
      const resdata = res.data;
      setData(resdata);
      //   console.log(resdata);
      //   console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  //   console.log(data);
  useEffect(() => {
    makeapiRequest();
  }, []);
  return <></>;
};

export default Jsan;
