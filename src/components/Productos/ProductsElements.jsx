import styled from "styled-components";

export const CategoryContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  height: 100vh;

  @media screen and (max-width:768px) {
    padding:10px;
    position:relative;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 
  margin-bottom: 180px;

  @media screen and (max-width:768px) {
    position:relative;
  }
`;

export const CategoryTittle = styled.h2`
  color: var(--BlueColor);
  font-weight: 400;
  font-size: 60px;
  line-height: 72px;
  letter-spacing: 0.04em;
  display:flex;
  justify-content:flex-start;
  align-items:flex-start;
`;

export const CategoryCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const CategoryCard = styled.div`
  background: #ffffff;
  width: 370px;
  height: 450px;
  text-decoration: none;
  box-shadow: 5px 5px 20px rgba(50, 64, 147, 0.1);

  &:nth-child(2) {
    margin: 50px;
  }

  @media screen and (max-width: 1275px) {
    &:nth-child(2) {
      margin: 20px;
    }
    width: 310px;
    height: 400px;
  }

  @media screen and (max-width: 1000px) {
    &:nth-child(2) {
      margin: 10px;
    }
    width: 230px;
    height: 380px;
  }
`;

export const CategoryCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  align-items: flex-start;
`;

export const CategoryIcon = styled.img`
  margin-top: 25px;
  margin-left: 30px;
  width: 60px;
  height: 60px;

  @media screen and (max-width: 1000px) {
    width: 30px;
    height: 30px;
  }

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
    
    margin-bottom:15px;
  }
`;

export const CategoryName = styled.h3`
  font-size: 50px;
  margin: 0 30px;
  color: var(--BlueColor);
  font-weight: 400;
  line-height: 72px;
  letter-spacing: 0.04em;

  @media screen and (max-width: 1000px) {
    font-size: 35px;
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export const CategoryDescription = styled.p`
  font-size: 20px;
  margin: 0 30px;
  color: var(--BlueColor);
  font-weight: 300;
  color: #747474;
  

  @media screen and (max-width: 1000px) {
    font-size: 18px;
  }

  @media screen and (max-width:768){
    font-size:18px;
  }
`;

export const CategoryImageContainer = styled.div`
  display:inline-block;
  

  @media screen and (min-width:768px) {
    position:relative;
  }
`;

export const CategoryImage = styled.img`

  height: 225px;
  width: 275px;
  margin-left: 40px;
  

  @media screen and (max-width: 1275px) {
    width: 160px;
    height: 160px;
  }

  @media screen and (max-width: 1000px) {
    width: 100px;
    height: 100px;
    margin-left: 60px;
  }

  @media screen and (max-width: 768px) {
    width: 225px;
    height: 170px;
    margin-left: 35px;
    bottom:-28%;
    position:absolute;
  }
`;

export const CategoryButton = styled.a`
  position: absolute;
  bottom:0;
  left: 7em;
  background: var(--OrangeColor);
  width: 100px;
  height: 40px;
  clip-path: polygon(
    20% 0,
    83% 0,
    100% 30%,
    100% 70%,
    83% 100%,
    20% 100%,
    0% 70%,
    0% 30%
  );
  color: white;
  text-transform: uppercase;
  padding: 1em 1em;
  outline: 10px;

  @media screen and (max-width: 1000px) {
    width: 70px;
    height: 20px;
    left: 7em;
  }

  @media screen and (max-width: 768px) {
    width: 70px;
    height: 20px;
    left: 5em;
    bottom:-28%;
  }
`;

export const ButtonText = styled.span`
  position: absolute;
  top: 0;
  font-size: 36px;
  font-weight: 300;

  @media screen and (max-width: 1000px) {
    font-size: 20px;
  }
`;

