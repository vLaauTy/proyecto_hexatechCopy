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
    align-items:center;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 width:100%;
 height:100%;
 
  

  @media screen and (max-width:768px) {
    position:relative;
    justify-content:center;
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
  margin-top:20px;

  @media screen and (max-width:768px) {
    font-size: 35px;
  }
`;

export const CategoryCards = styled.div`
height:100%;
  display: flex;
  align-items: center;
  margin-bottom:100px;
  

  @media screen and (max-width:1024px) {
    margin-bottom:250px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const CategoryCard = styled.div`
  background: #ffffff;
  width: 434px;
  height: 585px;
  text-decoration: none;
  box-shadow: 5px 5px 20px rgba(50, 64, 147, 0.1);

  &:nth-child(2) {
    margin: 0 20px;
  }

  

  @media screen and (max-width: 1280px) {
    &:nth-child(2) {
      margin: 20px;
    }
    width: 370px;
    height: 500px;
  }

  @media screen and (max-width: 1024px) {
    &:nth-child(2) {
      margin: 10px;
    }
    width: 300px;
    height: 430px;
  }

  @media screen and (max-width: 900px) {
    &:nth-child(2) {
      margin: 10px;
    }
    width: 270px;
    height: 400px;
  }
`;

export const CategoryCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  align-items: flex-start;

  /* &:hover .h  {
    color:var(--BlueColor)
    
  } */

  
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
  color: #6C6C6C;
  font-weight: 400;
  line-height: 72px;
  letter-spacing: 0.04em;
  transition:all 0.3s ease-in-out;

  ${CategoryCardInfo}:hover & {
    color:var(--BlueColor);
    transition:all 0.3s ease-in-out;
  }

  @media screen and (max-width: 1024px) {
    font-size: 35px;
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export const CategoryDescription = styled.p`
  font-size: 30px;
  margin: 0 30px;
  color: var(--BlueColor);
  font-weight: 300;
  color: #747474;
  line-height: 36px;
  font-style:normal;
  

  @media screen and (max-width: 1024px) {
    font-size: 20px;
    line-height: 24px;
  }

  @media screen and (max-width:768){
    font-size:18px;
  }
`;

export const CategoryImageContainer = styled.div`
  display:inline-block;
  position: absolute;
  bottom:360px;


  
  @media screen and (min-width:768px) {
    
    position:relative;
  }
`;

export const CategoryImage = styled.img`
position:absolute;
  height: 322px;
  width: 322px;
  margin-left: 60px;
  transition:all 0.3s ease-in-out;
 

 ${CategoryCardInfo}:hover & {
  transform: translateY(-20px);
    transition:all 0.3s ease-in-out;
  }

  

  @media screen and (max-width: 1280px) {
    height: 300px;
  width: 300px;
  margin-left: 40px;
  }

  @media screen and (max-width: 1024px) {
    width: 200px;
    height: 200px;
    margin-left: 40px;
    top:100px;
  }

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
    margin-left: 70px;
    top:190px;
    position:absolute;
  }

  @media screen and (max-width:380px) {
    width: 180px;
    height: 180px;
    margin-left: 50px;
    top:220px;
  }
`;



export const CategoryPolygon=styled.div`
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
 margin-top:60px;
 margin-left:90px;
 border-radius: 10px;
  background: #C8C9DA;
  height: 346px;
width: 263px;
transform:rotate(90deg);
transition:all 0.3s ease-in-out;

${CategoryCardInfo}:hover & {
    background:var(--BlueColor);
    transition:all 0.3s ease-in-out;
  } 

  @media screen and (max-width:1280px) {
    height: 320px;
width: 238px;
margin-left:70px;
  }

  @media screen and (max-width:1024px) {
    height: 230px;
width: 150px;
margin-left:70px;
  }

  @media screen and (max-width:768px) {
    height: 230px;
width: 150px;
margin-left:100px;
margin-top:10px;
  }

  @media screen and (max-width:380px) {
    height: 210px;
width: 130px;
margin-left:80px;
margin-top:10px;
  }

`;
 export const CategoryButtonimg=styled.img`
  cursor: pointer;
  position:absolute;
  pointer-events:all;
  top:250px;
  left:140px;

  @media screen and (max-width:1280px) {
    left:110px;
    top:230px;
  }

  @media screen and (max-width:1024px) {
    left:90px;
    top:230px;
    width:140px;
    height:110px;
  }

  @media screen and (max-width:768px) {
    left:110px;
    top:300px;
    width:130px;
    height:100px;
  }

  
  @media screen and (max-width:380px) {
    left:110px;
    top:300px;
    width:120px;
    height:90px;
    top:320px;
  }


 `;
