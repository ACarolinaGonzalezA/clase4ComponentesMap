import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import Contact from './Components/Contact'

function App() {
 
  return (
    <>
      <h1>Bienvenidos a mi Vite</h1>
      <Navbar/>
      <Card nombre="Carolina" email={"carolina@correo.com"} />
      <Card nombre="Gandalf" email={"gandalf@correo.com"}/>
      <Card nombre="Leia" email={"leia@correo.com"}/>
      <Contact></Contact>
    </>
  )
}

export default App
