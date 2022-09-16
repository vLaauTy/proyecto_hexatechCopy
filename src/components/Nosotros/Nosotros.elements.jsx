import { motion } from "framer-motion";
import styled from "styled-components";

export const AboutMe = styled.div`
  background: var(--BlueColor200);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  overflow: hidden;

  z-index:1;
    width:100%;
    margin-right:auto;
    margin-left:auto;
    padding-right:50px;
    padding-left:50px;

    @media screen and(max-width:991px) {
        padding-right:30px;
    padding-left:30px;
    }
`;

export const AboutH1 = styled.h1`
  text-align: left;
  padding: 10px 0;
  font-size: 4rem;
  color:var(--BlueColor);
  font-weight:400;
`;

export const AboutMeContent = styled.div`
  z-index: 3;
  max-width: 1800px;
  position: absolute;
  padding: 8px 40px;
  display: flex;
  align-items: center;
  justify-content:center;
  justify-self:center;
  width: 100%;
  height: 100%;
`;

export const AboutDesc = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  overflow: hidden;
`;

export const AboutText = styled.p`
  width: 80%;
  font-size: 1.4rem;
`;

export const AboutDescContent = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const AboutCardsContent = styled(motion.div)`
  max-width: 60%;
  width: 70%;
  padding: 1rem 1rem;
  height: auto;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  justify-self:flex-end;
  align-self:start;
`;

export const AboutCards1 = styled(motion.div)`
  display: flex;
  transition: all 1s ease-in-out;
  justify-content: flex-start;
  margin-left:10%;
  filter: drop-shadow(5px 5px 20px rgba(50, 64, 147, 0.1));
  transform: translateX(
    ${({ state }) => (state === "entering" || state === "entered" ? "50%" : 0)}
  );
`;

export const Hexagon1 = styled.div`
position:absolute;
  width: 450px;
  height: 400px;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  max-width:450px;
  margin-top: 55px;
  padding: 1.5rem;
  background: #fff;
  text-align: center;
  font-size: 2rem;
  display: ${({ state }) => (state === "exited" ? "flex" : "flex")};
  flex-direction:column;
  align-items:center;

  @media screen and (max-width: 1600px) {
    padding: 10px;
    width: 350px;
    height: 300px;
  }

  @media screen and (max-width: 1350px) {
    padding: 10px;
    width: 300px;
    height: 250px;
  }

  @media screen and (max-width: 1140px) {
    padding: 10px;
    width: 275px;
    height: 225px;
  }
`;

export const AboutCards2 = styled(motion.div)`
  display: flex;
  filter: drop-shadow(5px 5px 20px rgba(50, 64, 147, 0.1));
  justify-content: flex-end;
  transition: all 1s ease-in-out;
  transform: translateX(
    ${({ state }) =>
      state === "entering" || state === "entered" ? "-53%" : "0"}
  );
  margin-left: ${({ state }) =>
    state === "entering" || state === "entered" ? "25%" : 0};
  margin-right: ${({ state }) =>
    state === "entering" || state === "entered" ? 0 : "7%"};

  @media screen and (max-width: 1600px) {
  }
`;

export const Hexagon2 = styled.div`
  position: relative;
  width: 450px;
  height: 400px;
  background: #fff;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  margin-top: 290px;
  padding: 1.5rem;
  transition: 0.8s all ease;

  @media screen and (max-width: 1600px) {
    padding: 10px;
    width: 350px;
    height: 300px;
  }

  @media screen and (max-width: 1350px) {
    padding: 10px;
    width: 300px;
    height: 250px;
  }

  @media screen and (max-width: 1140px) {
    padding: 10px;
    width: 275px;
    height: 225px;
  }
`;

export const HexagonTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: #324093;
  letter-spacing: 2px;
`;

export const HexagonText = styled(motion.p)`
  font-size: 20px;
  text-align: center;
  margin-top: 30px;
  width: 100%;
`;

export const HexagonTextWrapper = styled.div`
  width: 80%;
`;

export const HexagonTextWrapper2= styled.div`
  width: 80%;
  margin:auto;
`;

export const ButtonSlide = styled.button`
  width: 70px;
  padding: 0.5rem;
  background-color: #fc6a05;
  border: none;
  border-top-right-radius: 500px;
  border-bottom-right-radius: 500px;
  margin-top: 50px;
  transition: all 300ms ease-in-out;
  color: #fff;
  font-size:1.5rem;

  &:active {
    color: #161a36;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #324093;
    transition: all 300ms ease-in-out;
  }
`;

export const ButtonContent = styled.div`
  width: auto;
  padding: 0.5rem;
  display: flex;
`;

export const HexagonList=styled(motion.ul)`
text-align:center;
  margin-top:10px;
`;

export const HexagonItems=styled.li`
  text-align:left;
  
`;