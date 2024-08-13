import React, { useState } from 'react'
import CardStyles from "../Components/Styles/Card.module.css";
import Button from "./Button"

const Counter = () => {
    //let counter = 0;
    
    const [counter, setCounter] = useState(0);
    const sumar = ()=>{
      setCounter(counter+1);
      console.log(counter);
      
    }
    const restar = ()=>{
      setCounter(counter-1);
      console.log(counter);

    }
  return (
    <div className={CardStyles.btnGroup}>
        <Button disabled={counter==0} onClick = {restar}>-</Button>
        <h4>{counter}</h4>
        <Button onClick={sumar}>+</Button>
    </div>
  )
}

export default Counter