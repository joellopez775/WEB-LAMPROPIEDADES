import React, { useContext, useState, useEffect } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { DownOutlined } from '@ant-design/icons';

import { Section } from '../../styled-components';
import FormProperty from '../forms/properties';
import FormCode from '../forms/code';

const MainCont = styled(Section)`
  overflow: hidden;
  position: relative;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

const BackgroundWrapper = styled.div`
  display: flex;
  width: 300%; /* Triple el ancho del contenedor para acomodar las imágenes */
  height: 100%;
  position: absolute;
  left: 0;
  transition: transform 1s ease-in-out; /* Transición suave */
`;

const BackgroundImage = styled.div`
  background-image: url("${props => props.src}");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  width: 33.33%; /* Un tercio del contenedor */
  height: 100%;
  flex-shrink: 0; /* No permitir que se reduzca el tamaño */
`;
const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 1.7rem;
  color: white;
  z-index: 10; /* Asegúrate de que el z-index sea suficiente para estar encima de otros elementos */
  position: relative; /* Asegúrate de que sea relativo para aplicar el z-index */
`;

const SearchOptionCont = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  @media(min-width: 768px){
    background-color: transparent;
  }
`;

const SearchOption = styled.button`
  background-color: transparent;
  width: 100%;
  padding: 1rem 0;
  color: ${props => props.active ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, .6)" };
  position: relative;
  border: none;
  font-weight: bold;
  display: flex;
  justify-content: center;
  transition: 250ms ease;
  @media(min-width: 768px){
    width: 25%;
  }
`;

const ButtonLine = styled.div`
  position: absolute;
  bottom: .5rem;
  transition: 250ms ease;
  width: ${props => props.active ? "50%" : "0"};
  height: 3px;
  background-color: ${props => props.active ? props.theme.primaryColor : "transparent"};
`;

const DownLink = styled.a`
  text-decoration: none;
  color: #fff !important;
  background-color: ${props => props.theme.primaryColor};
  transition: 250ms ease;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    filter: brightness(1.1);
  }
`;

export default () => {
  const state = useContext(context);
  const [byCode, setByCode] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  // Define las rutas de las imágenes de fondo
  const backgrounds = [
    state.home.hero.background1,
    state.home.hero.background2,
    state.home.hero.background3,
    // agrega más imágenes según sea necesario
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex(prevIndex => (prevIndex + 1) % backgrounds.length);
    }, 4000); // cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <MainCont>
         <Title id="title" dangerouslySetInnerHTML={{ __html:state.home.hero.title }} />
      <BackgroundWrapper style={{ transform: `translateX(-${backgroundIndex * 100 / backgrounds.length}%)` }}>
        {backgrounds.map((bg, index) => (
          <BackgroundImage
            key={index}
            src={bg}
          />
        ))}
      </BackgroundWrapper>
     

      <Container>
     
        {byCode ? <FormCode /> : <FormProperty id="formSearch" />}
      </Container>
      <DownLink id="downButton" href="#properties">
        <DownOutlined />
      </DownLink>
    </MainCont>
  );
};
