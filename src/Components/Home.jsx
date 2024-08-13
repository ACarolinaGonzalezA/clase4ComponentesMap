import React, { useState } from "react";
import Card from "./Card";
import { pizzas } from "../utils/pizzas";

const Home = () => {
  const [cart, setCart] = useState([]);
  console.log(cart);
  
  return (
    <>
      <h1>Lista de Pizzas</h1>
      <div className="list-container">
        {pizzas.map((pizza) => (
          <Card key={pizza.id} recipe={pizza} cart={cart} setCart={setCart}/>
        ))}
      </div>
    </>
  );
};

export default Home;
