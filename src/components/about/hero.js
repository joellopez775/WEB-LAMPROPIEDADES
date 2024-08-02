import React, { useContext } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { Section } from '../../styled-components';

const MainCont = styled(Section)`
  background-image: url("${props => props.src}");
 
  background-position: center;
  background-size: contain; /* Ajusta la imagen para que sea completamente visible */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height:50vh; /* Ajuste de altura */
`;


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

export default () => {
  const state = useContext(context);
  return (
    <MainCont 
      first
      src={state.about.hero.background}
    >
    
      <Container>
        <Row>
          <Col xs={12} md={6}>
          <Title>

        </Title>

          </Col>
        </Row>
      </Container>
    </MainCont>
  )
}
