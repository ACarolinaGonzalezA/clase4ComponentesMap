import React from "react";
import Card from "./Card";
import { pizzas } from "../utils/pizzas";

const Home = () => {
  return (
    <>
      <h1>Lista de Pizzas</h1>
      <div className="list-container">
        {pizzas.map((pizza) => (
          <Card key={pizza.id} recipe={pizza} />
        ))}
      </div>
    </>
  );
};

export default Home;
