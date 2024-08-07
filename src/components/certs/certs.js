import React, { useContext } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { v1 as uuid } from 'uuid';
import { WhatsAppOutlined, MailOutlined, PhoneOutlined  } from '@ant-design/icons';
import { Section } from '../../styled-components';

const Title = styled.h2`
  color: ${props => props.theme.primaryColor};
  text-align: center;
  margin-bottom: 4rem;
`;


const Card = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  height: 50%;
  width: 80%;
  padding-bottom: 3rem;
  position: relative; /* Necesario para el posicionamiento absoluto del pseudo-elemento */
  @media(min-width: 768px){
    padding: 0;
  }
`;

const Card1 = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
  height: 9rem; /* Ajusta este valor según el espacio disponible en el contenedor padre */
  width: 70%;
  border: 4px solid transparent; /* Borde transparente por defecto */
  border-top-color: #eace9d; /* Borde dorado en la parte superior */
  border-left-color: #eace9d; /* Borde dorado en el lado izquierdo */
  border-right-color: #eace9d; /* Borde dorado en el lado derecho */
  position: relative; /* Necesario para el posicionamiento absoluto del pseudo-elemento */
  margin-top: -4.75rem;

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 6px; /* Ajusta la altura del borde inferior si es necesario */
    background-color: #eace9d; /* Color del borde inferior */
    z-index: -1; /* Coloca el pseudo-elemento detrás del contenido de la tarjeta */
  }

  @media(min-width: 768px){
    padding: 0;
  }
`;


const Avatar = styled.img`
  width: 360px;
  height: 360px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 2rem;
  border-radius:50%;
  transition: transform 0.3s ease, filter 0.3s ease; /* Añade transición para efectos suaves */

  &:hover {
    transform: scale(1.1); /* Aumenta el tamaño de la imagen en hover */
    filter: brightness(80%); /* Oscurece la imagen en hover */
  }
`;

const NoAvatar = styled.div`
  width: 160px;
  height: 160px;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  user-select: none;
  span{
    font-size: .6rem;
  }
`;

const Info = styled.p`
  margin: 0;
  color: black;
  font-weight: bold;
  font-size: 1.2rem;

`;

const Infopr = styled.p`
  margin: 0;
  color: gray;


`;
const Infoprlg = styled.p`
  margin: 0;
  color: gray;
  font-size: .7rem;


`;

const Resume = styled.p`
  margin: 2rem 0;
  text-align: center;
  flex: 1;
`;

const User = ({ avatar, cv, email, fullName, phone, movil }) => (
  <Card>
    
    {
      avatar
      ?<Avatar src={avatar} alt={fullName} />
      :<NoAvatar>{fullName}<span>Sin avatar</span></NoAvatar>

      
    }
    <Card1>
    <br></br>

    <Info>{fullName}</Info>
    <Infopr>Socia Fundadora</Infopr>
   
    <Infoprlg><PhoneOutlined /> {phone}</Infoprlg>
    <Infoprlg><MailOutlined/> {email}</Infoprlg>

    <br></br>
    <br></br>
    <br></br>


    <br></br>

    </Card1>
  
  </Card>
);

export default () => {
  const state = useContext(context);
  const teamItems = state.about.team.items.slice(0, 2); // Limita a solo 2 items

  return (
    <Section>
      <Container>
        <Row>
          {
            teamItems.map(item => (
              <Col key={uuid()} xs={12} md={6} lg={6}> 
              
              {/* Ajustado para mostrar dos cards en una fila en pantallas más grandes */}
                <User {...item} />
             
                
              </Col>
              
            ))
          }
       
        </Row>
       
      </Container>

    </Section>
  )
};
