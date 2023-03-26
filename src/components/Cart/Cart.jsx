import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import CartProps from "./CartProps";

const Cart = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
      .then((res) => res.json())
      .then((data) => setData(data.data.tools));
  }, []);

  // see more button
  // const showAllBtn = () => {
  //     setShowAll(true)
  // }
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10">
        {
          //if showAll false ternary onujayi shotto : mittha 6 hobe
          data.slice(0, showAll ? 12 : 6).map((data) => (
            <CartProps data={data} key={data.id}></CartProps>
          ))
        }
      </div>
      {!showAll &&
        <span onClick={() => setShowAll(true)}>
        {/* click korle true = 12 hoye jabe 12 card dekhabe */}
          <Button>See More</Button>
        </span>
      }
    </>
  );
};

export default Cart;
