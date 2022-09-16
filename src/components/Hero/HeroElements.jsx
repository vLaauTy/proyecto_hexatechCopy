import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroContainer = styled.div`
  height: 100vh;

  z-index: 1;
  width: 100%;
  background: var(--BlueColor200);

  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    z-index: 2;
  }

  @media screen and (max-width:1024px) {
    height:140vh;
    }
`;

export const HeroContent = styled.div`
  z-index: 3;
  padding: 0;
  display: flex;
  flex-direction:row;
  align-items: center;
  width: 100%;
  height: 100%;

`;

export const HeroText = styled.div`
  width: 37%;
  display: flex;
  justify-content: flex-start;
  margin-left: 65px;

  @media screen and (max-width: 1024px) {
    position:absolute;
    top:22%;
    height:50%;
    
  }

  @media screen and (max-width: 320px) {
    margin-left: 30px;
    
  }


`;

export const HeroTextWrapper = styled.div`
  width: auto;
  height: 400px;


  @media screen and (max-width: 1040px) {
    height: 525px;
  }

  


`;

export const Image = styled.img`
  position: absolute;
  top: 3%;
  left: 34%;
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  height: 90%;

  

  @media screen and (max-width: 1500px) {
    
    left: 30%;
  }

  @media screen and (max-width: 1300px) {
    top: 7%;
    left: 33%;
    width:380px;
    height:531px;
  }

  @media screen and (max-width: 1200px) {
    width:380px;
    height:531px;
    top:3%;
    left: 30%;
  }

  @media screen and (max-width: 1040px) {
    width:380px;
    height:531px;
    top:3%;
    left: 23%;
  }

  @media screen and (max-width: 1024px) {
    width:450px;
    height:629px;
    top:0%;
    left: 35%;
  }

  @media screen and (max-width: 810px) {
    width:450px;
    height:629px;
    top:0%;
    left: 30%;
  }

  @media screen and (max-width: 740px) {
    width:450px;
    height:629px;
    top:0%;
    left: 25%;
  }

  @media screen and (max-width: 660px) {
    width:370px;
    height:517px;
    top:0%;
    left: 27%;
  }

  @media screen and (max-width: 630px) {
    width:300px;
    height:420px;
    top:0%;
    left: 32%;
  }

  @media screen and (max-width: 480px) {
    width:275px;
    height:385px;
    top:0%;
    left: 30%;
  }

  @media screen and (max-width: 400px) {
    width:240px;
    height:336px;
    top:0%;
    left: 26%;
  }

  @media screen and (max-width: 320px) {
    width:220px;
    height:308px;
    top:0%;
    left: 25%;
  }
  
  
`;

export const HeroH1 = styled.h1`
  color: var(--BlueColor);
  font-size: 140px;
  font-style: normal;
  font-weight: 500;
  line-height: 120px;
  letter-spacing: 0.04em;


  @media screen and (max-width: 1550px) {
    font-size: 120px;
  }

  @media screen and (max-width: 1280px) {
    letter-spacing: 0.02rem;
    line-height: 100px;
    font-size: 120px;
  }

  @media screen and (max-width: 1200px) {
    letter-spacing: 0.02rem;
    line-height: 100px;
    font-size: 100px;
  }

  @media screen and (max-width: 1040px) {
    font-size: 85px;
    letter-spacing: 0;
    line-height: 80px;
  }
  @media screen and (max-width: 1024px) {
    
    line-height: 80px;
  letter-spacing: 0.04em;
  }


  @media screen and (max-width: 530px) {
    font-size: 80px;
    line-height: 70px;
  letter-spacing: 0;
  }
  @media screen and (max-width: 480px) {
    font-size: 60px;
    line-height: 60px;
  letter-spacing: 0;
  }

  @media screen and (max-width: 320px) {
    font-size: 50px;
    line-height: 40px;
  letter-spacing: 0;
  }


`;

export const HeroP = styled.p`
  color: var(--BlueColor);
  margin-bottom: 15px;
  font-style: normal;
  font-weight: 300;
  font-size: 60px;
  line-height: 48px;

  @media screen and (max-width: 1550px) {
    font-size: 50px;
  }

  @media screen and (max-width: 1200px) {
    
    font-size: 50px;
  }

  @media screen and (max-width: 1040px) {
    font-size: 40px;
    letter-spacing: 0;
    line-height: 80px;
  }

  @media screen and (max-width: 768px) {
    font-size: 35px;
  }
  @media screen and (max-width: 480px) {
    font-size: 30px;
    margin-bottom:0;
  }

  @media screen and (max-width: 320px) {
    font-size: 25px;
    margin-bottom:0;
  }
`;

export const HeroImage = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 89%;
  width: 55.5%;

 
  @media screen and (max-width: 1400px) {
    
    width:53%;
    height: 85%;
    top:7%;
    margin:auto;
  }

  @media screen and (max-width: 1300px) {
    
    width:50%;
    height: 85%;
    top:7%;
    margin:auto;
  }

  @media screen and (max-width: 1200px) {
    
    width:56%;
    height: 80%;
  }

  @media screen and (max-width: 1040px) {
    top:10%;
  }

  @media screen and (max-width: 1024px) {
    position:absolute;
    width: 101%;
    bottom:10%;
    right:0;
    height:95%;
    display:flex;
    justify-self:flex-end;
    justify-content:flex-end;
  }

`;

export const HeroWrapper = styled.div`
  background: #fff;
  width: 100%;
  height: 90%;
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);

  @media screen and (max-width: 1024px) {
    position:absolute;
    height:80%;
    width: 95%;
    top:55%;

  }

  @media screen and (max-width: 680px) {
    position:absolute;
    height:70%;
    width: 95%;
    top:55%;
  }

  @media screen and (max-width: 630px) {
    position:absolute;
    height:55%;
    width: 95%;
    top:55%;
  }

  @media screen and (max-width: 480px) {
    position:absolute;
    height:50%;
    width: 95%;
    top:45%;

  }

  @media screen and (max-width: 400px) {
    position:absolute;
    height:45%;
    width: 95%;
    top:45%;

  }

  @media screen and (max-width: 320px) {
    position:absolute;
    height:40%;
    width: 95%;
    top:45%;

  }  
`;

export const Form = styled(motion.div)`
  position: absolute;
  background: var(--BlueColor);
  width: 275px;
  height: 225px;
  z-index: -1;

  @media screen and (max-width: 1040px) {
    width: 175px;
  height: 150px;
  }

  @media screen and (max-width: 1300px) {
    
    width: 175px;
  height: 150px;
  }

  @media screen and (max-width: 1200px) {
    
    width: 125px;
  height: 100px;
  }

  @media screen and (max-width: 1200px) {
    
    width: 225px;
  height: 175px;
  }

  @media screen and (max-width: 810px) {
    
    width: 125px;
  height: 100px;
  }

  @media screen and (max-width: 680px) {
    
    width: 110px;
  height: 120px;
  }

  @media screen and (max-width: 630px) {
    
    width: 120px;
  height: 100px;
  }

  @media screen and (max-width: 480px) {
    
    width: 90px;
  height: 70px;
  }

  @media screen and (max-width: 320px) {
    
    width: 70px;
  height: 50px;
  }

  
`;

export const Form1 = styled(Form)`
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
  left: 20%;
  bottom: 140px;

  

  @media screen and (max-width: 1500px) {
    
    left: 22%;
  }

  @media screen and (max-width: 1380px) {
    
    left: 25%;
  }

  @media screen and (max-width: 1300px) {
    
    left: 20%;
  }

  @media screen and (max-width: 1040px) {
    bottom: 150px;
    left: 13%;
  }

  @media screen and (max-width: 1024px) {
    bottom: 100px;
    left: 25%;
  }

  @media screen and (max-width: 810px) {
    bottom: 100px;
    left: 20%;
  }

  @media screen and (max-width: 680px) {
    bottom: 100px;
    left: 16%;
  }

  @media screen and (max-width: 480px) {
    
    bottom: 80px;
    left: 19%;
  }
`;

export const Form2 = styled(Form)`
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  right: 3%;
  top: 140px;


  @media screen and (max-width: 1200px) {
    top: 120px;
    right: 10%;
  }

  @media screen and (max-width: 1200px) {
    top: 120px;
    right: 3%;
  }

  @media screen and (max-width: 1024px) {
    right: 2.5%;
    top:100px;
  }

  @media screen and (max-width:810px) {
    right: 5%;
    top:100px;
  }

  @media screen and (max-width: 680px) {
    
    right: 4%;
    top: 45px;
  }

  @media screen and (max-width: 480px) {
    
    right: 0%;
    top: 35px;
  }


`;
