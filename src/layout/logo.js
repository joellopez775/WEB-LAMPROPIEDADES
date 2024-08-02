import React, { useContext } from 'react';
import context from '../context';
import styled from 'styled-components';

const Logo = styled.img`
  min-width: 450px;
  min-height: 300px;
  max-width: 300px;
  max-height: 300px;
  position: absolute; /* Asegura que el logo esté posicionado absolutamente */
  top: -0.4rem; /* Ajusta esto según sea necesario */
  left:0.8; /* Puedes ajustar esto si quieres que el logo esté alineado a la izquierda, o cambiar a center si es necesario */
  object-fit: contain;
  object-position: center;
`;

export default ({ dark, mobile })=> {
  const state = useContext(context);
  return(
      <Logo src={dark ? state.logoDark : mobile ? require("../images/logo-light-mobil.png") : state.logo} alt="Logo" />
  )
}