import React from "react";
import Button from "./Button";
import CardStyles from "../Components/Styles/Card.module.css";

const Card = ({ recipe }) => {
  return (
    <div className= {CardStyles.cardContainer}>
      {/* {console.log(recipe)} */}

      <img src={recipe.img} alt="" className= {CardStyles.cardImg}/>
      <h3>{recipe.tipo}</h3>
      <h4>{recipe.precio}</h4>
      <Button>Ver detalle</Button>
    </div>
  );
};

export default Card;
