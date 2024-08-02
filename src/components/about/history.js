import React, { useContext } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { Section } from '../../styled-components';

const SectionCustom = styled(Section)`
  /* Añadir estilos personalizados si es necesario */
`;

const Image = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
  object-position: center;
  @media(min-width: 768px){
    height: 100%;
  }
`;

const InfoCont = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

// Contenedor para el carrusel
const PropertiesCarouselCont = styled.div`
  min-height: 50vh;
  margin-bottom: 1rem;
`;

const Description = styled.div`
  color: #333;
`;

const Text = styled.p`
  color: gray;
  @media(min-width: 768px){
    width: 100%;
  }
`;

const BoldCaps = ({ text }) => {
  const processText = (text) => {
    return text.split(' ').map(word => {
      if (word === word.toUpperCase() && word.length > 1) {
        return <strong key={word}>{word} </strong>;
      }
      return word + ' ';
    });
  };

  return <>{processText(text)}</>;
};

export default () => {
  const state = useContext(context);
  return (
    <SectionCustom>
      <Container>
        <Title>
          <BlueText>QUIENES</BlueText> <GoldText>SOMOS</GoldText>
        </Title>
        <Row>
          {/*<Col xs={12} md={{ span: 7, order: 2 }}>
            <Image alt="historia" src={state.about.history.background} />
          </Col>
          <Col xs={12} md={{ span: 5, order: 1 }}>*/}
          <InfoCont>
            <Description>
              <Text>
                <BoldCaps text="CASAS HUECHURABA es fundada por CRISTINA ARRIAGADA Y NANCY GODOY, ambas con trayectoria en el rubro en forma independiente que en mayo del 2022 deciden unirse para crear esta corredora con dedicación exclusiva a la Comuna de Huechuraba." />
              </Text>
              <Text>
                <BoldCaps text="Fundamental en esta alianza es el conocimiento que ambas tienen del sector dado que viven en la Comuna, y conocen a cabalidad las diversas zonas, condominios, tipos de propiedades, servicios, horarios, trafico lo que permite entregar y asesorar al cliente de manera integral entregando una experiencia de servicio de alto nivel." />
              </Text>
              <Text>
                <BoldCaps text="Como mujeres entendemos la importancia de un paso tan importante en la vida, ya sea de comprar o vender una propiedad, por lo cual es necesario contar con un Agente que otorgue asesoría de principio a fin en el proceso de compraventa y que las personas se sientan acompañadas y con la seguridad que el proceso se llevará a cabo dentro de todos los aspectos técnico, jurídicos y legales." />
              </Text>
            </Description>
          </InfoCont>
        </Row>
      </Container>
    </SectionCustom>
  )
}
