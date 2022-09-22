import React, { useCallback, useState } from "react";
import {
  AboutCards1,
  AboutCardsContent,
  AboutDesc,
  AboutDescContent,
  AboutH1,
  AboutMe,
  AboutMeContent,
  AboutText,
  Hexagon1,
  Hexagon2,
  AboutCards2,
  HexagonTitle,
  HexagonText,
  HexagonTextWrapper,
  ButtonSlide,
  ButtonContent,
  HexagonItems,
  HexagonList,
  HexagonTextWrapper2,
  AboutImgContent,
} from "./Nosotros.elements";
import { Transition } from "react-transition-group";

const Nosotros = () => {
  const [changeHexagon, setChangeHexagon] = useState(false);
  const [animate, setAnimate] = useState(false);

  const doAnimate = useCallback(() => {
    setAnimate(true);
  }, []);

  const doAnimateNo = useCallback(() => {
    setAnimate(false);
  }, []);
  return (
    <AboutMe id="nosotros">
      <AboutMeContent>
      <AboutImgContent></AboutImgContent>
        <AboutDesc>
          <AboutDescContent>
            <AboutH1>Nosotros</AboutH1>
            <AboutText>
            Nos dedicamos a la venta de equipos de laboratorio, especialmente campanas de extracción de gases, estufos de laboratorio (secado y cultivo) y medición de temperatura a tráves de sensores.
            </AboutText>
          </AboutDescContent>
          
        </AboutDesc>
        
      </AboutMeContent>
    </AboutMe>
  );
};

export default Nosotros;
