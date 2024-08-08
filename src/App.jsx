import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./Components/Styles/App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Contact from "./Components/Contact";
import Home from "./Components/Home";

function App() {
  let lista = ['Elemento 1', 'Elemento 2', 'Elemento 3'] 
  // const mapLista= lista.map((item, index )=>{  
  //   return <li key={index}>{item}</li>
    
  // });
  // console.log(mapLista);
  
  return (

    <>
      <Navbar />
      <Home/>
      {/* <ul>{mapLista}</ul> */}
      {/* <ul>
        {lista.map((item, index )=>{  
    return <li key={index}>{item}</li>
    })}
      </ul> */}
    </>
  );
}

export default App;
