import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroText,
  HeroImage,
  Image,
  HeroTextWrapper,
  HeroWrapper,
  Form2,
  Form1,
  PolygonImage,
  ButtonHexa,
} from "./HeroElements";


const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const variants = {
    initial  : {x: -100, opacity: 0},
    whileInView:{x:0, opacity:1, transition:{duration:1}},
    
  } 

  return (
    <HeroContainer id="home">
   
      <HeroContent id='c'>
        <HeroText>
          <HeroTextWrapper>
            <HeroP>Brindamos productos de </HeroP>
            <HeroH1> CALIDAD Y DURABILIDAD</HeroH1>
          </HeroTextWrapper>
        </HeroText>
        <HeroImage id='i'>
          <HeroWrapper id='e'>
            <Image src='./assets/Rectangle 5.png'></Image>
            <Form1 variants={variants} initial="initial" whileInView="whileInView" viewport="viewport"></Form1>
            <Form2 variants={variants} initial="initial" whileInView="whileInView" viewport="viewport"></Form2>
            
            </HeroWrapper>
            
        </HeroImage>
        <ButtonHexa to='contacto'>CONTÁCTANOS</ButtonHexa>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
