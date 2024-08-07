import React, { useContext } from 'react';
import context from '../context';
import styled from 'styled-components';

const Logo = styled.img`
  min-width: 450px;
  min-height: 300px;
  max-width: 300px;
  max-height: 300px;
  position: absolute; /* Asegura que el logo esté posicionado absolutamente */
  top: -2.6rem; /* Ajusta esto según sea necesario */
  left: 9rem; /* Asegúrate de que haya una unidad de medida, como "rem" */
  object-fit: contain;
  object-position: center;
`;

export default ({ dark, mobile })=> {
  const state = useContext(context);
  return(
      <Logo src={dark ? state.logoDark : mobile ? require("../images/logo-light-mobil.png") : state.logo} alt="Logo" />
  )
}