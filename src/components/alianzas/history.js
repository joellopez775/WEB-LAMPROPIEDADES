import React, { useContext } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';
import { Section } from '../../styled-components';

// Estilos personalizados
const SectionCustom = styled(Section)`
  /* Añadir estilos personalizados si es necesario */
`;

const Image = styled.img`
  width: 20%;
  height: 20%;
  object-fit: cover;
  object-position: center;
  @media (min-width: 768px) {
    height: 100%;
  }
`;

const InfoCont = styled.div`
  height: 110%;
  display: flex;
  width: 1000px;
  background-color: white;
  flex-direction: column;
  justify-content: center;
`;

const InfoCont2 = styled.div`
  height: 90%;
  width: 90%;
  background-color: white;
  margin-left: auto; /* Mueve el componente a la derecha */
  margin-right: 0;   /* Ajusta el margen derecho si es necesario */
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: left;
  margin-bottom: 2rem;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const BlueText = styled.span`
  color: #14226b;
`;

const GoldText = styled.span`
  color: #eace9d;
`;

const PropertiesCarouselCont = styled.div`
  min-height: 50vh;
  margin-bottom: 1rem;
`;

const Description = styled.div`
  color: #333;
`;

const Text = styled.p`
  color: gray;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 3px;
  background-color: #eace9d;
  margin: 1rem 0; /* Añade margen superior e inferior */
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
          <GoldText>ALIANZAS</GoldText>
        </Title>
        <Row>
          <InfoCont>
            <InfoCont2>
              <Description>
              <br></br>
              <br></br>
                <Image alt="historia" src={state.about.hero.img1} />
                <br></br>
                <Text>
                <br></br>
                  <BoldCaps text="Es una compañía líder en corretaje independiente, que se dedica a prestar un servicio integral a sus asociados con asesoría comercial, legal, en capacitación y vitrina de nuestro trabajo en las principales plataformas del mercado. Gracias a nuestra alianza con Nexxos tus propiedades estarán publicadas siempre en los principales portales del país." />
                </Text>
                <Divider />
                <br></br>
                <Image alt="historia" src={state.about.hero.img2} />
                <br></br>
                <Text>
                <br></br>
                  <BoldCaps text="Proppit es la plataforma de marketing especializada del sector inmobiliario para todos los profesionales del mundo inmobiliario. Gracias a un plan en Proppit se pueden publicar todas las propiedades en todos los portales más relevantes del país simultáneamente, es nuestra segunda plataforma de publicaciones que nos permite acceder exclusivamente a la audiencia inmobiliaria más grande y activa del momento.." />
                </Text>
                <Divider />
                <br></br>
                <Image alt="historia" src={state.about.hero.img3} />
                <br></br>
                <Text>
                <br></br>
                  <BoldCaps text="En Casas Huechuraba contamos con un equipo legal especializado en el área inmobiliaria lo que permite que los cierres de negocios se desarrollen bajo todos los estándares legales, conforme a la legislación chilena. De esa manera cada proceso se desarrolla de manera eficiente, en conjunto y de manera directa con nuestros clientes quienes pueden resolver dudas y realizar observaciones, con la finalidad de dar certeza jurídica a nuestras operaciones." />
                </Text>
                <Divider />
                <br></br>
                <Image alt="historia" src={state.about.hero.img4} />
                <br></br>
                <Text>
                <br></br>
                  <BoldCaps text="Valentina Gomez - Comunity Manager: Ingeniera Comercial Licenciada en ciencias de la Administración de Empresas. Marketing Digital , Community Manager y creadora de Contenido Publicitario. Valentina nos asesora en todo el contenido que es presentado en redes sociales, realizando todas las publicaciones, con el objetivo de mantener siempre actualizado Instagram y Facebook, procurando que las redes sean la base para dar a conocer a nuestros clientes y potenciales clientes nuestro trabajo en terreno, entregando una imagen profesional, que nos permite reflejar la seriedad y profesionalismo de nuestro trabajo." />
                </Text>
                <Divider />
                <br></br>
                <Image alt="historia" src={state.about.hero.img5} />
                <br></br>
                <Text>
                <br></br>
                  <BoldCaps text="Daniel Milla - Fotógrafo Profesional: Formación fotográfica en noruega por mas de 9 años Estudio fotográfico en Llolleo San Antonio, especialista en fotografía de productos , corretaje, piloto de drone y generador de contenido para empresa de reciclaje. Daniel genera contenido visual especialmente en nuestro Canal de Youtube, el que fué creado en el mes de Abril de 2023, con el objetivo de alojar no sólo las propiedades sino que también entregar contenido de valor para nuestros clientes, para ello realizamos grabaciones de manera profesional que luego son revisadas y editadas por Daniel para su posterior publicación en las redes." />
                </Text>
              </Description>
            </InfoCont2>
          </InfoCont>
        </Row>
      </Container>
    </SectionCustom>
  );
};
