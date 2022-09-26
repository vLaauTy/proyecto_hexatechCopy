import React, {useState} from 'react'
import Contacto from '../components/Contacto/Contacto';
import { Footer } from '../components/Footer';

import Hero from '../components/Hero/Hero'

import Navbar from '../components/Navbar'
import Nosotros from '../components/Nosotros/Nosotros';
import Productos from '../components/Productos/Productos';

import Sidebar from '../components/SideBar'
import { Hexagonos, Hexagonos2 } from './index.elements';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Hero/>
      <Productos/>  
      <Nosotros/>
      
      <Contacto/>
      <Footer/>
    </>
  )
}

export default Home
