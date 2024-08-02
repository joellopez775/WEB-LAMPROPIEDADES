import React, { useContext, useState, Fragment } from 'react';
import context from '../context';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { WhatsAppOutlined, MailOutlined , EnvironmentOutlined ,LoadingOutlined } from '@ant-design/icons';

import RateBar from './ratebar';
import Logo from './logo';
import { NavLink, NavButton } from '../styled-components';

const Header = styled.header`
  background-color: rgba(20, 34, 107, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 12rem;
  z-index: 1000;
`
const Navigation = styled.nav`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative; /* Añade esta línea si no está presente */
  top: 6rem; /* Ajusta este valor para mover los items más abajo */
  display: ${props => props.horizontal ? "flex" : "block"};
  text-align: center;
`;
// Botón de contacto para WhatsApp
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

// Botón de contacto para llamadas
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

// Texto al lado de los iconos
const ContactText = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: 1rem; /* Ajusta esta distancia para mover el texto más a la derecha del icono */
  color: #eace9d;
  font-size: 1rem;
  font-weight: bold;
  white-space: nowrap; /* Evita que el texto se ajuste a la línea siguiente */
  width: auto; /* Ajusta el ancho según el contenido */
`;


const NavItem = styled.li`
  
`

export default ({ dark })=> {
  const state = useContext(context);

  return(
    <Header className="d-none d-lg-block">
    
      <Container>
        <Navigation>
          <AniLink  to="/" duration={.5}>
            <Logo dark={dark} light={!dark} />
          </AniLink>
          <NavList horizontal>
          <NavItem>
              <AniLink  to="/" duration={.5}>
                <NavLink dark={dark} light={!dark}>
                  INICIO
                </NavLink>
              </AniLink>            
            </NavItem>
            <NavItem>
              <AniLink  to="/about" duration={.5}>
                <NavLink dark={dark} light={!dark}>
                  EMPRESA
                </NavLink>
              </AniLink>            
            </NavItem>
            <NavItem>
              <AniLink  to="/properties" duration={.5}>
                <NavLink dark={dark} light={!dark}>
                  PROPIEDADES
                </NavLink>
              </AniLink>            
            </NavItem>
            <NavItem>
              <AniLink  to="/about" duration={.5}>
                <NavLink dark={dark} light={!dark}>
                  CERTIFICACIONES
                </NavLink>
              </AniLink>            
            </NavItem>
            <NavItem>
              <AniLink  to="/contact" duration={.5}>
                <NavLink dark={dark} light={!dark}>
                  CONTACTO
                </NavLink>
              </AniLink>                                    
            </NavItem>
          </NavList>
        </Navigation>

        <ContactButton title="Enviar WhatsApp" rel="noopener" target="_blank" >
            <WhatsAppOutlined />
            <ContactText>+56997580771</ContactText>
          </ContactButton>
          <ContactButton2 title="Enviar un email" href={`mailto:${state.email}`} >
          <MailOutlined /><ContactText>contacto@casashuechuraba.cl</ContactText>
          </ContactButton2>
      </Container>
    </Header>    
  )
}