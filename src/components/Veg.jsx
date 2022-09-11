import React, { useEffect, useState } from "react";

function Veg() {
  const [veg, setVeg] = useState([]);

  const getVeg = async () => {
    const data = await fetch(
      "https://api.edamam.com/api/food-database/v2/parser?app_id=03617ee1&app_key=3ab5e9844865743d5bd626adb5d31eb4&ingr=non-veg&category=generic-meals"
    );
    const res = await data.json();
    console.log(res.hints);
    setVeg(res.hints);
  };

  useEffect(() => {
    getVeg();
  }, []);
  return (
    <>
      {veg.map((item) => {
        return (
          <>
            <h1>{item.food.label}</h1>
          </>
        );
      })}
    </>
  );
}

export default Veg;
