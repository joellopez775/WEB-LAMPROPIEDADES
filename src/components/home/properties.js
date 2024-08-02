import React, { useContext } from 'react';
import context from '../../context';
import styled from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Container, Row, Col } from 'react-bootstrap';
import { EnvironmentOutlined } from '@ant-design/icons';

import { Section, Button } from '../../styled-components';
import Carousel from '../carousels/properties';

// Estilo para el título
const Title = styled.h1`
  font-size: 1.5rem;
  text-align: left;
  margin-bottom: 2rem;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

// Estilo para el texto en azul
const BlueText = styled.span`
  color: #14226b;
`;

// Estilo para el texto en dorado
const GoldText = styled.span`
  color: #eace9d;
`;

// Contenedor para el carrusel
const PropertiesCarouselCont = styled.div`
  min-height: 50vh;
  margin-bottom: 1rem;
`;

// Estilo para el banner con la imagen de fondo
const Banner = styled.div`
  background-image: url(${props => props.bgImage});
  background-size: cover; // Asegura que la imagen cubra todo el contenedor
  background-position: center; // Centra la imagen
  background-repeat: no-repeat; // Evita que la imagen se repita
  padding: 3rem 2rem;
  color: #fff;
  width: 100%;
  height: 100vh; // Asegura que el banner cubra toda la altura de la pantalla
  display: flex;
  align-items: center; // Centra el contenido verticalmente
  justify-content: center; // Centra el contenido horizontalmente
`;

// Estilo para el texto del banner
const BannerText = styled.p`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;

export default () => {
  const state = useContext(context);

  return (
    <Section id="properties">
      <Container>
        <Title>
          <BlueText>PROPIEDADES</BlueText> <GoldText>DESTACADAS</GoldText>
        </Title>
        <br />
        <PropertiesCarouselCont>
          <Carousel />
        </PropertiesCarouselCont>
       {/*} <Banner bgImage={state.home.about.banner.image}>
          <Row>
          
              <BannerText>
                <EnvironmentOutlined style={{ marginRight: "1rem", fontSize: "1.5rem" }} />
                {state.home.properties.footer}
              </BannerText>
    
           
              <AniLink  to="/properties" duration={0.5}>
                <Button block>
                  {state.home.properties.buttonText}
                </Button>
              </AniLink>
            
          </Row>
        </Banner>*/}
      </Container>
    </Section>
  );
};
