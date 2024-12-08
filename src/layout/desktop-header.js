import React, { useContext } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined, InstagramOutlined } from "@ant-design/icons";
import context from "../context";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Logo from "./logo";

// Estilos principales
const Header = styled.header`
  width: 100%;
  position: relative;
  z-index: 1000;

  @media (max-width: 768px) {
    display: none; /* Ocultar en dispositivos móviles */
  }
`;

const TopBar = styled.div`
  background-color: white;
  padding: 3rem 0; /* Aumentar padding para acomodar el logo */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.9rem;
  color: #333;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: black; /* Color negro por defecto */
    font-size: 1.2rem;

    &:hover {
      color: #0188ca; /* Cambiar a azul al hacer hover */
    }
  }
`;

const NavBar = styled.nav`
  background-color: #0b2b63; /* Fondo azul oscuro */
  padding: 0.4rem 0;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const NavItem = styled.li``;

/* Usamos "a" directamente para asegurar el hover */
const NavLink = styled(AniLink)`
  color: white; /* Color blanco predeterminado */
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;

  &:hover,
  &:focus {
    color: #0188ca; /* Cambiar a azul al hacer hover o focus */
  }

  &:visited {
    color: white; /* Aseguramos que el color visitado sea blanco */
  }

  &:active {
    color: white; /* Forzar blanco en enlaces activos */
  }
`;

// Componente principal
export default ({ dark }) => {
  const state = useContext(context);

  return (
    <Header>
      {/* Barra superior */}
      <TopBar>
        <Container className="d-flex justify-content-between align-items-center">
          {/* Logo en el contenedor blanco */}
          <LogoWrapper>
            <AniLink to="/">
              <Logo dark={dark} light={!dark} />
            </AniLink>
          </LogoWrapper>

          {/* Información de contacto */}
          <ContactInfo>
            <span>📞 +56 9 8279 7858</span>
            <span>📞 +56 9 9023 7039</span>
            <span>📞 +56 9 7456 5736</span>
          </ContactInfo>

          {/* Íconos de redes sociales */}
          <SocialIcons>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookOutlined />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterOutlined />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramOutlined />
            </a>
          </SocialIcons>
        </Container>
      </TopBar>

      {/* Barra de navegación */}
      <NavBar>
        <Container>
          <NavList>
            <NavItem>
              <NavLink to="/">Inicio</NavLink> {/* Enlace a Inicio */}
            </NavItem>
            <NavItem>
              <NavLink to="/venta">Venta</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/arriendo">Arriendo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about">Empresa</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/noticias">Noticias y Calendario</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">Contáctenos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/cita">Cita</NavLink>
            </NavItem>
          </NavList>
        </Container>
      </NavBar>
    </Header>
  );
};