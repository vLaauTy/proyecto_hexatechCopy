import React, {  useState } from "react";
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

    const [mouse, setMouse] = useState(false);
  const [mouse2, setMouse2] = useState(false);
  const [mouse3, setMouse3] = useState(false);
  return (
    <CategoryCards>
          
              <CategoryCard>
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
                    <CategoryButtonimg
                      onMouseEnter={() => setMouse(true)}
                      onMouseLeave={() => setMouse(false)}
                      src={mouse ? "./assets/BotonFlecha.png" : "./assets/BotonVer.png"}
                    ></CategoryButtonimg>
                  </CategoryImageContainer>
                </CategoryCardInfo>
              </CategoryCard>

              <CategoryCard>
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

              <CategoryCard>
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