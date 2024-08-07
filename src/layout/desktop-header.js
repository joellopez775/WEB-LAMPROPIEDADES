import React, { useContext } from 'react';
import context from '../context';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { WhatsAppOutlined, MailOutlined } from '@ant-design/icons';

import RateBar from './ratebar';
import Logo from './logo';
import { NavLink, NavButton } from '../styled-components';

const Header = styled.header`
  background-color: rgba(20, 34, 107, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 9.5rem;
  z-index: 1000;
`;

const Navigation = styled.nav`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavItem = styled.li`
  margin: 0 -.4rem; /* Ajusta el margen horizontal */
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative; 
  top: 6rem; 
  display: ${props => props.horizontal ? "flex" : "block"};
  text-align: center;
  gap: -12rem; /* Añade esta línea para controlar el espacio entre los ítems */
`;
const ContactButton = styled.a`
  display: none;
  @media(min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -1rem;
    right: -31.5rem;
    background-color: transparent;
    color: #eace9d;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    transition: 250ms ease;
    font-size: 2.1rem;
    border: none;
    z-index: 1000;

    &:hover {
      color: ${props => props.phone ? props.theme.primaryColor : "white"};
    }
  }
`;

const ContactButton2 = styled.a`
  display: none;
  @media(min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -4.7rem;
    right: -50.5rem;
    background-color: transparent;
    color: #eace9d;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    transition: 250ms ease;
    font-size: 2.1rem;
    border: none;
    z-index: 1000;

    &:hover {
      color: ${props => props.phone ? props.theme.primaryColor : "white"};
    }
  }
`;

const ContactText = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: 1rem;
  color: #eace9d;
  font-size: 1rem;
  font-weight: bold;
  white-space: nowrap;
  width: auto;
`;

const Divider = styled.div`
  width: 700px;
  height: 1px;
  background-color: #eace9d;
  margin: -4.5rem 0; /* Aumenta el margen superior e inferior */
  margin-left: auto; /* Desplaza la línea hacia la derecha */
`;


export default ({ dark }) => {
  const state = useContext(context);

  return (
    <Header className="d-none d-lg-block">
      <Container>
   
        <Navigation>
          <AniLink to="/" duration={.5}>
            <Logo dark={dark} light={!dark} />
          </AniLink>
          <NavList horizontal>
            <NavItem>
              <AniLink to="/" duration={.5}>
                <NavLink dark={dark} light={!dark}>
                  INICIO
                </NavLink>
              </AniLink>
            </NavItem>
            <NavItem>
              <AniLink to="/about" duration={.5}>
                <NavLink dark={dark} light={!dark}>
                  EMPRESA
                </NavLink>
              </AniLink>
            </NavItem>
            <NavItem>
              <AniLink to="/certs" duration={.5}>
                <NavLink dark={dark} light={!dark}>
                  CERTIFICACIONES
                </NavLink>
              </AniLink>
            </NavItem>
            <NavItem>
              <AniLink to="/venta" duration={.5}>
                <NavLink dark={dark} light={!dark}>
                  VENTA
                </NavLink>
              </AniLink>
            </NavItem>
            <NavItem>
              <AniLink to="/arriendo" duration={.5}>
                <NavLink dark={dark} light={!dark}>
                  ARRIENDO
                </NavLink>
              </AniLink>
            </NavItem>
            <NavItem>
              <AniLink to="/alianzas" duration={.5}>
                <NavLink dark={dark} light={!dark}>
                  ALIANZAS
                </NavLink>
              </AniLink>
            </NavItem>
            <NavItem>
              <AniLink to="/contact" duration={.5}>
                <NavLink dark={dark} light={!dark}>
                  CONTACTO
                </NavLink>
              </AniLink>
            </NavItem>
          </NavList>
          
        </Navigation>
        
        
       
        <ContactButton title="Enviar WhatsApp" rel="noopener" target="_blank" href={`https://api.whatsapp.com/send?phone=${state.movil.replace(/\s/g,'')}&text=Hola,%20estoy%20visitando%20su%20sitio%20Web%20y%20quisiera%20comunicarme%20con%20ustedes.`}>
          
          <WhatsAppOutlined />

          <ContactText>+56997580771</ContactText>
        </ContactButton>
        <ContactButton2 title="Enviar un email" href={`mailto:${state.email}`}>
          <MailOutlined />
          <ContactText>contacto@casashuechuraba.cl</ContactText>
        </ContactButton2>
        <Divider />

      </Container>
    </Header>
  );
};
