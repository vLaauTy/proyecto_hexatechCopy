import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavBtn,
  NavBtnLink,
  NavIcon,
  NavText,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  // FUNCION PARA QUE AL PRINCIPIO SEA TRANSPARENTE

  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  


  // FUNCION PARA QUE AL APRETAR EL LOGO VUELVA AL TOP
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#324093" }}>
        <Nav >
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <NavIcon src="./assets/logo.png" />
              <NavText>Hexa Technology</NavText>
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to="home"
                  
                >
                  Inicio
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="nosotros"
                  
                >
                  Nosotros
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="productos"
                  
                >
                  Productos
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="contacto"
                  
                >
                  Contacto
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
