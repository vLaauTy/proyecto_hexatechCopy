import React, {  useEffect, useState } from "react";
import {

  CategoryButtonimg,
  CategoryCard,
  CategoryCardInfo,
  CategoryCards,

  CategoryDescription,
  CategoryIcon,
  CategoryImage,
  CategoryImageContainer,
  CategoryName,
  CategoryPolygon,

} from "./ProductsElements";



const ProductCards = () => {

 const [windowsSize, setWindowsSize] = useState({
  width:undefined,
  height:undefined
 });



  useEffect(() => {
    function handleResize() {
      setWindowsSize({
        width:window.innerWidth,
        height:window.innerHeight,
      })
    }

    window.addEventListener('resize',handleResize);

    handleResize();

    return () => window.removeEventListener('resize',handleResize)

    
  },[]);
  const variants = {
    whileInViewText:{y:0, opacity:1, transition:{duration:0.6}},
    whileInViewText2:{y:0, opacity:1, transition:{duration:0.9}},
    whileInViewText3:{y:0, opacity:1, transition:{duration:1.2}},
    initialText2: {y:100, opacity:0},
    noneText2:{y:0,opacity:1}
  } 

    const [mouse, setMouse] = useState(false);
  const [mouse2, setMouse2] = useState(false);
  const [mouse3, setMouse3] = useState(false);
  return (
    <CategoryCards>
          
              <CategoryCard variants={variants} initial={'initialText2'} whileInView="whileInViewText2" viewport="viewport">
                <CategoryCardInfo>
                  <CategoryIcon src='./assets/Temperatura-oscuro.png' />
                  <CategoryName>Hexa Temp</CategoryName>
                  <CategoryDescription>
                    En esta sección podrá encontrar toda nuestra línea exclusiva
                    para la medición y regulación de temperaturas.
                  </CategoryDescription>
                  <CategoryPolygon></CategoryPolygon>
                  <CategoryImageContainer>
                    <CategoryImage src="./assets/Estufa2.png"></CategoryImage>
                    <a href="https://www.facebook.com/" target='_blank'><CategoryButtonimg
                      onMouseEnter={() => setMouse(true)}
                      onMouseLeave={() => setMouse(false)}
                      src={mouse ? "./assets/BotonFlecha.png" : "./assets/BotonVer.png"}
                    ></CategoryButtonimg></a>
                  </CategoryImageContainer>
                </CategoryCardInfo>
              </CategoryCard>

              <CategoryCard variants={variants} initial="initialText2" whileInView="whileInViewText2" viewport="viewport">
                <CategoryCardInfo>
                  <CategoryIcon src='./assets/Rectangle 13.png' />
                  <CategoryName>Hexa Tech</CategoryName>
                  <CategoryDescription>
                    En esta sección podrá encontrar toda nuestra línea exclusiva
                    para la medición y regulación de temperaturas.
                  </CategoryDescription>
                  <CategoryPolygon></CategoryPolygon>
                  <CategoryImageContainer>
                    <CategoryImage src="./assets/Estufa2.png"></CategoryImage>
                    
                    <CategoryButtonimg
                      onMouseEnter={() => setMouse2(true)}
                      onMouseLeave={() => setMouse2(false)}
                      src={mouse2 ? "./assets/BotonFlecha.png" : "./assets/BotonVer.png"}
                    ></CategoryButtonimg>
                  </CategoryImageContainer>
                </CategoryCardInfo>
              </CategoryCard>

              <CategoryCard variants={variants} initial="initialText2" whileInView="whileInViewText3" viewport="viewport">
                <CategoryCardInfo>
                  <CategoryIcon src='./assets/Quimica-claro.png' />
                  <CategoryName>Hexa Chem</CategoryName>
                  <CategoryDescription>
                    En esta sección podrá encontrar toda nuestra línea exclusiva
                    para la medición y regulación de temperaturas.
                  </CategoryDescription>
                  <CategoryPolygon></CategoryPolygon>
                  <CategoryImageContainer>
                    <CategoryImage src="./assets/Estufa2.png"></CategoryImage>
                    <CategoryButtonimg
                      onMouseEnter={() => setMouse3(true)}
                      onMouseLeave={() => setMouse3(false)}
                      src={mouse3 ? "./assets/BotonFlecha.png" : "./assets/BotonVer.png"}
                    ></CategoryButtonimg>
                  </CategoryImageContainer>
                </CategoryCardInfo>
              </CategoryCard>
            
          
        </CategoryCards>
  )
}

export default ProductCards