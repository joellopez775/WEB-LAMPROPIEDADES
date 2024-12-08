import React, { useContext } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { Section } from '../../styled-components';
import context from '../../context';

// Sección personalizada
const SectionCustom = styled(Section)`
  background-color: #f9f9f9; /* Fondo blanco */
  padding: 5rem 0;
  color: #333;
`;

// Contenedor para la imagen
const ImageCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 90%; /* Ajustar ancho de la imagen */
    max-height: 400px;
    border-radius: 20px; /* Bordes redondeados */
    object-fit: cover;
  }
`;

// Contenedor del texto
const InfoCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;

// Título principal
const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

// Texto de descripción
const Description = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #666;
`;

// Componente principal
export default () => {
  const state = useContext(context);

  return (
    <>
      {/* Sección principal: Sobre LAM Propiedades */}
      <SectionCustom>
        <Container>
          <Row className="align-items-center">
            {/* Columna izquierda con la imagen */}
            <Col xs={12} md={6}>
              <ImageCont>
                <img src={state.about.history.background} alt="Sobre LAM Propiedades" />
              </ImageCont>
            </Col>

            {/* Columna derecha con el texto */}
            <Col xs={12} md={6}>
              <InfoCont>
                <Title>Sobre LAM Propiedades</Title>
                <Description>
                  Somos un equipo de profesionales con más de <strong>12 años</strong> de experiencia en corretaje de propiedades. Luego de trabajar en importantes firmas del rubro hemos emprendido este camino con la intención de brindar un servicio más personalizado, eficiente, oportuno y cercano a nuestros clientes.
                </Description>
                <Description>
                  Nos enfocamos en entregar soluciones integrales que consideren tanto aspectos técnicos como jurídicos, asegurando que cada operación sea exitosa y confiable.
                </Description>
              </InfoCont>
            </Col>
          </Row>
        </Container>
      </SectionCustom>

      {/* Nueva sección: Misión y Visión */}
      <SectionCustom>
        <Container>
          <Row className="align-items-start">
            {/* Columna izquierda: Misión */}
            <Col xs={12} md={6}>
              <InfoCont>
                <Title>Misión</Title>
                <Description>
                  Poner el foco en las personas, en atender sus solicitudes, resolver sus dudas, acompañarlos con nuestro conocimiento a tomar la mejor decisión respecto a sus inversiones inmobiliarias. Creemos que el éxito de nuestra gestión radica en preocuparnos de conocer y atender en forma personalizada a cada uno de nuestros clientes.
                </Description>
              </InfoCont>
            </Col>

            {/* Columna derecha: Visión */}
            <Col xs={12} md={6}>
              <InfoCont>
                <Title>Visión</Title>
                <Description>
                  Expresar nuestro ser en el hacer, aportar a la comunidad con una manera de hacer corretaje de forma cercana, basada en la confianza y el respeto, con honestidad y conocimiento del mercado, las nuevas tecnologías y herramientas disponibles para crear una experiencia agradable y segura.
                </Description>
              </InfoCont>
            </Col>
          </Row>
        </Container>
      </SectionCustom>
    </>
  );
};