import React, { useEffect, useState } from "react";
import {
  ButtonShadow,
  ButtonText,
  CategoryButton,
  CategoryCard,
  CategoryCardInfo,

  CategoryCards,

  CategoryContainer,
  CategoryDescription,
  CategoryIcon,
  CategoryImage,
  CategoryImageContainer,
  CategoryName,
  CategoryTittle,
  CategoryWrapper,
} from "./ProductsElements";
import { CategoryCardMobile, CategoryCardsMobile, Slideshow } from "./Slideshow/SlideShow";
import { itemsData } from "./data";
const Productos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(itemsData)
  }, [])
  
  return (
    <CategoryContainer id="productos">
      <CategoryWrapper>
        <CategoryTittle>Nuestros Productos</CategoryTittle>
        <CategoryCards>
          {data.map((product) => {
            return (
              <CategoryCard key={product.id}>
                <CategoryCardInfo>
                  <CategoryIcon src={product.icon} />
                  <CategoryName>{product.title}</CategoryName>
                  <CategoryDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam architecto dolor iure est minus unde voluptatum! Iure hic repellendus illum, dicta at quia perspiciatis fugit deserunt sequi saepe esse repellat.
                  </CategoryDescription>
                  <CategoryImageContainer>
                    <CategoryImage src={product.img}></CategoryImage>
                    <CategoryButton>
                      <ButtonText>+ VER</ButtonText>
                    </CategoryButton>
                  </CategoryImageContainer>
                </CategoryCardInfo>
              </CategoryCard>
            );
          })}
        </CategoryCards>
        <CategoryCardsMobile>
          <Slideshow controles={true}  >
            {data.map((product) => {
              return (
                <CategoryCardMobile key={product.id}>
                  <CategoryCardInfo>
                    <CategoryIcon src={product.icon} />
                    <CategoryName>{product.title}</CategoryName>
                    <CategoryDescription>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus libero, enim delectus recusandae laudantium cum ducimus? Quia, dignissimos officia iure nihil, delectus repellendus ipsa doloremque magni debitis praesentium veritatis soluta!
                    </CategoryDescription>
                    <CategoryImageContainer>
                      <CategoryImage src={product.img}></CategoryImage>
                      <CategoryButton>
                        <ButtonText>+ VER</ButtonText>
                      </CategoryButton>
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
