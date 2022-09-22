import React, { useEffect, useState } from "react";
import {
  ButtonText,
  CategoryButton,
  CategoryButtonimg,
  CategoryCardInfo,
  CategoryContainer,
  CategoryDescription,
  CategoryIcon,
  CategoryImage,
  CategoryImageContainer,
  CategoryName,
  CategoryPolygon,
  CategoryTittle,
  CategoryWrapper,
} from "./ProductsElements";
import {
  CategoryCardMobile,
  CategoryCardsMobile,
  Slideshow,
} from "./Slideshow/SlideShow";
import { itemsData } from "./data";
import ProductCards from "./ProductCards";
const Productos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(itemsData);
  }, []);

  const [mouse, setMouse] = useState(false);
  const [mouse2, setMouse2] = useState(false);
  const [mouse3, setMouse3] = useState(false);
  return (
    <CategoryContainer id="productos">
      <CategoryWrapper>
        <CategoryTittle>Nuestros Productos</CategoryTittle>
        <ProductCards />
        <CategoryCardsMobile>
          <Slideshow controles={true}>
            {data.map((product) => {
              return (
                <CategoryCardMobile key={product.id}>
                  <CategoryCardInfo>
                    <CategoryIcon src={product.icon} />
                    <CategoryName>{product.title}</CategoryName>
                    <CategoryDescription>
                    En esta sección podrá encontrar toda nuestra línea exclusiva
                    para la medición y regulación de temperaturas.
                    </CategoryDescription>
                    <CategoryPolygon></CategoryPolygon>
                    <CategoryImageContainer>
                      
                    <CategoryImage src={product.img}></CategoryImage>
                    <a href="https://www.esthersola.com/css-centrar-postion-absolute/"><CategoryButtonimg
                      onMouseEnter={() => setMouse(true)}
                      onMouseLeave={() => setMouse(false)}
                      src={mouse ? "./assets/BotonFlecha.png" : "./assets/BotonVer.png"}
                    ></CategoryButtonimg></a>
                    
                  </CategoryImageContainer>
                  </CategoryCardInfo>
                </CategoryCardMobile>
              );
            })}
          </Slideshow>
        </CategoryCardsMobile>
      </CategoryWrapper>
    </CategoryContainer>
  );
};

export default Productos;
