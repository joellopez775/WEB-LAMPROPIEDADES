import React, { useContext } from 'react';
import context from '../context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { MailOutlined, WhatsAppOutlined, FacebookOutlined, InstagramOutlined, YoutubeOutlined, UpOutlined } from '@ant-design/icons';
import Logo from './logoF';
import { NavLink } from '../styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Footer = styled.footer`
  padding: 3rem 0;
  background-color: #081035;
`;

const FooterText = styled.p`
  color: gray;
  font-size: .8rem;
  text-align: justify;
`;

const InfoList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: 10rem;
`;

const Divider = styled.div`
  width: 300px;
  height: 1px;
  background-color: white;
  margin: -1.5rem 0; /* Aumenta el margen superior e inferior */
  margin-left: auto; /* Desplaza la línea hacia la derecha */
`;

const Logosw = styled.li`
  color:white;
  font-size: .8rem;
  margin-bottom: .1rem;
  display: flex;
  align-items: center;
  span {
    margin-right: .3rem;
  }
`;

const InfoItem = styled.li`
  color: white;
  font-size: .9rem;
  margin-bottom: .5rem;
  display: flex;
  align-items: center;
  span {
    margin-right: .3rem;
  }
`;

const InfoLink = styled.a`
  color: white;
  &:hover {
    text-decoration: underline !important;
  }
`;

const NavCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: -4rem; /* Reducido para mover el menú más a la izquierda */
`;

const NavTitle = styled.h2`
  color: white; /* Color dorado */
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: bold; /* Cambiado de 'font_width' a 'font-weight' */
`;

const NavSubtitle = styled.p`
  color: gray;
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

const NavItem = styled.li`
  font-size: .8rem;
  margin-bottom: 0.5rem;
  width: 100%;
  display: flex;
  align-items: center;
`;

const NavItemContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const SocialCont = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 3rem;
  margin-bottom: 1rem;
  @media(min-width: 992px) {
    margin-bottom: 0;
  }
`;

const SocialItem = styled.span`
  color: ${props => props.icon ? "#fff" : "gray"};
  font-size: 1.2rem; /* Tamaño ajustado */
`;

const SocialLink = styled.a`
  color: gray;
  margin-left: .5rem;
  font-size: 1.5rem; /* Tamaño ajustado */
  &:hover {
    color: ${props => props.theme.primaryColor};
  }
`;

const BackTop = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  cursor: pointer;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${props => props.theme.primaryColor};
  margin-bottom: 1rem;
  transition: 250ms ease;
  color: #fff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, .12),
              0px 2px 2px rgba(0, 0, 0, .12),
              0px 4px 4px rgba(0, 0, 0, .12),
              0px 8px 8px rgba(0, 0, 0, .12);
  &:hover {
    filter: brightness(1.1);
  }
  &:active {
    box-shadow: none;
  }
`;

const MapContainerStyled = styled.div`
  width: 350px;
  height: 200px;
  border: 1px solid #ebebeb;
  background-color: #fff;
  padding: .8rem;
`;

const MapTitle = styled.h2`
  margin: 0;
  color: #081035;
  font-size: 1.0rem;
  padding-bottom: 1rem;
`;

const Minimap = ({ lat, lng }) => {
  return (
    <MapContainerStyled>
   
      <MapContainer center={[lat, lng]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>
          <Popup>
            Ubicación actual
          </Popup>
        </Marker>
      </MapContainer>
    </MapContainerStyled>
  );
};

export default () => {
  const state = useContext(context);

  return (
    <Footer>
      <Container>
        <Row className="align-items-center">
          <Col xs={{ span: 6, order: 6 }} md={{ span: 6, order: 0 }} lg={4}>
            <AniLink  to="/" duration={.5}>
              <Logo />
            </AniLink>
            <InfoList>
              {/*
                state.address && (
                  <InfoItem>
                    {state.address}
                   </InfoItem>                  
                )
              */}
              {
                state.movil && (
                  <InfoItem>
                    <Logosw>
                      <WhatsAppOutlined />
                    </Logosw>
                    <InfoLink title="Enviar WhatsApp" rel="noopener" target="_blank" href={`https://api.whatsapp.com/send?phone=${state.movil.replace(/\s/g,'')}&text=Hola,%20estoy%20visitando%20su%20sitio%20Web%20y%20quisiera%20comunicarme%20con%20uestedes.`}>
                      {state.movil}
                    </InfoLink>
                  </InfoItem>                     
                )
              } 
              {
                state.email && (
                  <InfoItem>
                    <Logosw>
                      <MailOutlined />
                    </Logosw>
                    <InfoLink title="Enviar un email" href={`mailto:${state.email}`}>
                      {state.email}
                    </InfoLink>
                  </InfoItem>                  
                )
              }
            </InfoList>
          </Col>
          <Col xs={12} md={6} lg={5}>
            <NavCont>
              <NavTitle>MENÚ</NavTitle>
              <NavSubtitle>Explora nuestras secciones</NavSubtitle>
              <NavList>
                <NavItem>
                  <NavItemContent>
                    <AniLink  to="/" duration={.5}>
                      <NavLink first>
                        
                      </NavLink>
                    </AniLink>
                  </NavItemContent>            
                </NavItem>
                <NavItem>
                  <NavItemContent>
                    <AniLink  to="/about" duration={.5}>
                      <NavLink>
                        Inicio
                      </NavLink>
                    </AniLink>
                  </NavItemContent>            
                </NavItem> 
                <NavItem>
                  <NavItemContent>
                    <AniLink  to="/about" duration={.5}>
                      <NavLink>
                        Quienes Somos
                      </NavLink>
                    </AniLink>
                  </NavItemContent>            
                </NavItem>                  
                <NavItem>
                  <NavItemContent>
                    <AniLink  to="/venta" duration={.5}>
                      <NavLink >
                        En Venta
                      </NavLink>
                    </AniLink>
                  </NavItemContent>                                    
                </NavItem>
                <NavItem>
                  <NavItemContent>
                    <AniLink  to="/arriendo" duration={.5}>
                      <NavLink >
                        En Arriendo
                      </NavLink>
                    </AniLink>
                  </NavItemContent>                                    
                </NavItem>
                <NavItem>
                  <NavItemContent>
                    <AniLink  to="/contact" duration={.5}>
                      <NavLink >
                        Contacto
                      </NavLink>
                    </AniLink>
                  </NavItemContent>                                    
                </NavItem>
              </NavList>            
              <FooterText>
                {/* Texto adicional si es necesario */}
              </FooterText>
            </NavCont>
          </Col>                          
          <Col xs={{ span: 6, order: 12 }} md={12} lg={3}>
            <NavCont className="align-items-end">
              <BackTop onClick={() => window.scrollTo(0, 0)} href="#top">
                <UpOutlined />
              </BackTop>                        
              <NavTitle>UBICACIÓN
      
              </NavTitle>

              <Minimap lat={-33.363633} lng={-70.667457} /> {/* Reemplaza con la latitud y longitud deseada */}
              <SocialCont>
             
  
                <SocialLink href={state.facebook} rel="noopener" target="_blank">
                  <FacebookOutlined />
                </SocialLink>
                <SocialLink href={state.twitter} rel="noopener" target="_blank">
                <YoutubeOutlined />
                </SocialLink> 
                <SocialLink href={state.instagram} rel="noopener" target="_blank">
                  <InstagramOutlined />
                </SocialLink>
                                                 
              </SocialCont>
            </NavCont>
          </Col>
        </Row>
      </Container>
      {/* Copyright */}
    </Footer>
  );
};
