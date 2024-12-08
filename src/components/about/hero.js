import React, { useContext } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { Section } from '../../styled-components';

// Contenedor principal con imagen de fondo y overlay
const MainCont = styled(Section)`
  position: relative;
  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: cover; /* Cubre todo el contenedor */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  color: #ffffff; /* Texto por defecto blanco */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 50vh; /* Ajuste de altura */
  padding: 2rem; /* Espaciado interno */

  /* Overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4); /* Fondo negro con transparencia (40%) */
    z-index: 1; /* Asegura que el contenido esté sobre el overlay */
  }

  /* Asegura que el contenido se vea por encima del overlay */
  > * {
    position: relative;
    z-index: 2;
  }
`;

// Título principal
const Title = styled.h1`
  font-size: 2rem;
  text-align: left;
  margin-bottom: 1rem;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

// Párrafo con texto blanco
const Paragraph = styled.p`
  color: #ffffff; /* Texto blanco */
  font-size: 1rem;
  line-height: 1.5;
`;

export default () => {
  const state = useContext(context);

  return (
    <MainCont src={state.about.history.background2}> {/* Imagen desde el contexto */}
      <Container>
        <Title>
          Nuestra Historia
        </Title>
        <Row>
          <Col xs={12} md={6}>
            <Paragraph>
              Desde nuestros inicios, hemos trabajado con un enfoque personalizado y profesional,
              brindando soluciones integrales a nuestros clientes en el sector inmobiliario.
            </Paragraph>
          </Col>
        </Row>
      </Container>
    </MainCont>
  );
};