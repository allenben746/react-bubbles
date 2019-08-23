import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "./utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  useEffect(() => {
      axiosWithAuth()
        .get('http://localhost:5000/api/colors')
        .then(res => {
          console.log('getData - colors', res.data)
          setColorList(res.data)
        })
  }, []) //empty array as dependency for useEffect
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;