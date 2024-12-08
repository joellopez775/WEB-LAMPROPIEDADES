import React, { useContext } from "react";
import context from "../context";
import styled from "styled-components";

const Logo = styled.img`
  min-width: 200px; /* Tamaño mínimo del logo */
  min-height: 200px;
  max-width: 250px; /* Tamaño máximo del logo */
  max-height: 250px;
  position: absolute; /* Posicionamiento absoluto */
  top: -0.4rem; /* Ajustar posición vertical */
  left: 8rem; /* Ajustar posición horizontal */
  object-fit: contain;
  object-position: center;
`;

export default ({ dark, mobile }) => {
  const state = useContext(context);
  return (
    <Logo
      src={
        dark
          ? state.logoDark
          : mobile
          ? require("../images/logo-light-mobil.png")
          : state.logo
      }
      alt="Logo"
    />
  );
};