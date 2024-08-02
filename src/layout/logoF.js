import React, { useContext } from 'react';
import context from '../context';
import styled from 'styled-components';

const Logo = styled.img`
  min-width: 250px;
  min-height: 100px;
  max-width: 200px;
  max-height: 300px;
  position: absolute; /* Asegura que el logo esté posicionado absolutamente */
  top: -1.4rem; /* Ajusta esto según sea necesario */
  left: -2.5rem; /* Ajusta este valor para moverlo más a la izquierda */
  object-fit: contain;
  object-position: left;
`;

export default ({ dark, mobile }) => {
  const state = useContext(context);
  return (
    <Logo src={dark ? state.logoDark : mobile ? require("../images/logo-light-mobil.png") : state.logo} alt="Logo" />
  );
};
