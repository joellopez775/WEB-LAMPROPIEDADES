import styled from 'styled-components';

export default styled.button`
  min-width: 90px;
  min-height: 44px;
  padding: 1px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.primary ? props.theme.primaryColor : "black"};
  background-color: ${props => props.outlined ? "transparent" : props.theme.primaryColor};    
  color: ${props => props.outlined && props.primary ? props.theme.primaryColor : "white"};
  border-radius: 2px;
  transition: 250ms ease;
  margin-bottom: 1rem;
  margin-left: -0.1rem; /* Ajusta la posición a la derecha */
  margin-top: 60px; /* Añadido para mover el botón hacia abajo */
  cursor: pointer;
  font-weight:bold;
  &:hover {
    background-color: ${props => props.outlined && props.primary ? props.theme.primaryColor : props.primary ? props.theme.primaryColor: "#fff"};
    color: ${props => props.outlined && props.primary ? "#fff" : props.primary ? "#fff" : props.theme.primaryColor};
    filter: brightness(1.1);
  }
  &:disabled {
    background-color: ${props => props.outlined && props.primary ? props.theme.primaryColor : props.primary ? props.theme.primaryColor: "#fff"};
    color: ${props => props.outlined && props.primary ? "#fff" : props.primary ? "#fff" : props.theme.primaryColor};
    filter: brightness(1.1);
    cursor: progress;
  }    
  @media(min-width: 768px) {
    margin-bottom: 0;
  }
`;
