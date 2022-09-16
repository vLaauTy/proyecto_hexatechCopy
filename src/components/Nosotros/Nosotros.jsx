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
        <AboutDesc>
          <AboutDescContent>
            <AboutH1>Nosotros</AboutH1>
            <AboutText>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
              perspiciatis delectus ipsa sapiente, assumenda, totam laudantium
              rem, est dignissimos facere repudiandae tempore laborum! Quos,
              illum voluptatem. Cupiditate esse itaque hic? Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Adipisci laudantium
              dignissimos, doloremque ad aliquam, dolor ducimus officiis
              deserunt id consequuntur commodi. Ex architecto repellat labore
              consequatur eum vitae adipisci laborum! Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Sunt iste illo sequi beatae
              consequuntur labore laudantium eos ex quis? Sequi dicta enim ipsum
              quia sint similique, deserunt culpa minus libero.
            </AboutText>
          </AboutDescContent>
          <ButtonContent>
            {animate ? (
              <ButtonSlide onClick={doAnimateNo}>&larr;</ButtonSlide>
            ) : (
              <ButtonSlide onClick={doAnimate}>&rarr;</ButtonSlide>
            )}
          </ButtonContent>
        </AboutDesc>
        <AboutCardsContent id='content' initial={{y: 100, opacity: 0}} whileInView={{y:0, opacity:1, transition:{duration:1.1}}} viewport={{once:false}}>
          <Transition in={animate}>
            {(state) => (
              <AboutCards1
                state={state}
                lightTopLine={changeHexagon ? true : false}
              >
                <Hexagon1>
                  <HexagonTitle>Valores</HexagonTitle>
                  
                    {!animate ? (
                      <HexagonTextWrapper>
                      <HexagonText initial={{y: 100, opacity: 0}} whileInView={{y:0, opacity:1, transition:{ duration:1}}} viewport={{once:false}}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sint qui quis minus suscipit facere non voluptas
                        ducimus totam reiciendis a vero nam omnis, provident
                        modi, expedita rerum? Ut, explicabo cum!
                      </HexagonText>
                      </HexagonTextWrapper>
                    ) : (
                      <HexagonList initial={{y: 100, opacity: 0}} whileInView={{y:0, opacity:1, transition:{duration:1.3}}} viewport={{once:false}}>
                        <HexagonItems>asadasdasd</HexagonItems>
                        <HexagonItems>fasdsadasd</HexagonItems>
                        <HexagonItems>asdasdasf</HexagonItems>
                        <HexagonItems>vsdadsad</HexagonItems>
                      </HexagonList>
                    )}
                  
                </Hexagon1>
              </AboutCards1>
            )}
          </Transition>

          <Transition in={animate}>
            {(state) => (
              <AboutCards2
                id="2"
                state={state}
                lightTopLine={changeHexagon ? true : false}
              >
                <Hexagon2>
                  <HexagonTitle>Vision</HexagonTitle>
                  <HexagonTextWrapper2>
                    <HexagonText initial={{y: 100, opacity: 0}} whileInView={{y:0, opacity:1, transition:{type:'spring', duration:1, bounce:0.4}}} viewport={{once:false}}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Sint qui quis minus suscipit facere non voluptas ducimus
                      totam reiciendis a vero nam omnis, provident modi,
                      expedita rerum? Ut, explicabo cum!
                    </HexagonText>
                  </HexagonTextWrapper2>
                </Hexagon2>
              </AboutCards2>
            )}
          </Transition>
        </AboutCardsContent>
      </AboutMeContent>
    </AboutMe>
  );
};

export default Nosotros;
