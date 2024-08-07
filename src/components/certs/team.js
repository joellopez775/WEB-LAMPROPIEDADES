import React, { useState, useContext } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { v1 as uuid } from 'uuid';
import { WhatsAppOutlined, MailOutlined, PhoneOutlined  } from '@ant-design/icons';
import { Section } from '../../styled-components';

const Title = styled.h4`
  color: #eace9d;
  text-align: center;
  margin-bottom: 4rem;
  font-weight: bold;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;
  width: 80%;
  padding-bottom: 3rem;
  position: relative;
  @media(min-width: 768px){
    padding: 0;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 200px; /* Ajusta según tus necesidades */
  height: 200px; /* Ajusta según tus necesidades */
  margin: 0 1rem;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  /* Añade un borde en hover y un pequeño zoom */
  &:hover {
    border: 3px solid ${props => props.theme.primaryColor}; /* Ajusta el color del borde según tu tema */
    transform: scale(1.05);
  }
`;

const Avatar = styled.img`
  width: 360px;
  height: 360px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 2rem;
  border-radius:10px;
  transition: transform 0.3s ease, filter 0.3s ease;

  &:hover {
    transform: scale(1.1);
    filter: brightness(80%);
  }
`;
const Divider = styled.div`
  width: 100%;
  height: 3px;
  background-color: #eace9d;
  margin: -4.5rem 0; /* Aumenta el margen superior e inferior */
  margin-left: auto; /* Desplaza la línea hacia la derecha */
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

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease;
  
  /* Añade un zoom en hover */
  ${ImageContainer}:hover & {
    transform: scale(1.1);
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: ${props => props.show ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

const User = ({ avatarN, cv, email, fullName, phone, movil , certs1}) => (
  <Card>
    {
      avatarN
      ?<Avatar src={avatarN} alt={fullName} />
      :<NoAvatar>{fullName}<span>Sin avatar</span></NoAvatar>
    }
  </Card>
);


export default () => {
  const state = useContext(context);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = (src) => {
    setSelectedImage(src);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <Section>
      <Container>
      <Title>Certificaciones Nancy Godoy</Title>
        <Row>
          
          <Avatar src={state.home.about.banner.avatarN} />
          
          <Col xs={12}>
            <div style={{ display: 'flex', overflowX: 'auto' }}>
              <ImageContainer onClick={() => handleImageClick(state.home.about.banner.img1)}>
                <Image src={state.home.about.banner.img1} alt="Imagen 1" />
              </ImageContainer>
              <ImageContainer onClick={() => handleImageClick(state.home.about.banner.img2)}>
                <Image src={state.home.about.banner.img2} alt="Imagen 2" />
              </ImageContainer>
              <ImageContainer onClick={() => handleImageClick(state.home.about.banner.img3)}>
                <Image src={state.home.about.banner.img3} alt="Imagen 3" />
              </ImageContainer>
            </div>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <br></br>
        <Divider>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

        </Divider>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Title>Certificaciones Cristina Arriagada</Title>
        
        <Row>
          <Avatar src={state.home.about.banner.avatarC} />
          <Col xs={12}>
            <div style={{ display: 'flex', overflowX: 'auto' }}>
              <ImageContainer onClick={() => handleImageClick(state.home.about.banner.img4)}>
                <Image src={state.home.about.banner.img4} alt="Imagen 1" />
              </ImageContainer>
              <ImageContainer onClick={() => handleImageClick(state.home.about.banner.img5)}>
                <Image src={state.home.about.banner.img5} alt="Imagen 2" />
              </ImageContainer>
              <ImageContainer onClick={() => handleImageClick(state.home.about.banner.img6)}>
                <Image src={state.home.about.banner.img6} alt="Imagen 3" />
              </ImageContainer>
              <ImageContainer onClick={() => handleImageClick(state.home.about.banner.img7)}>
                <Image src={state.home.about.banner.img7} alt="Imagen 4" />
              </ImageContainer>
              <ImageContainer onClick={() => handleImageClick(state.home.about.banner.img8)}>
                <Image src={state.home.about.banner.img8} alt="Imagen 5" />
              </ImageContainer>
             
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onClick={handleCloseModal}>
        <ModalImage src={selectedImage} alt="Imagen" />
      </Modal>
    </Section>
  );
};
