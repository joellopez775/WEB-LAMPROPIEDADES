import styled from 'styled-components';

export default styled.span`
  color: ${props => props.light ? "white" : props.dark ? "#333333" : "white"};
  font-weight: bold; /* Añadir negrita */
  text-decoration: none;
  font-size: ${props => props.large ? "1.25rem" : ".9rem"}; /* Tamaño de fuente */
  transition: 250ms ease;
  margin-left: ${props => props.first ? "0" : "1rem"};

  &:visited {
    color: ${props => props.light ? "white" : props.dark ? "#333333" : "white"};
  }
  
  &:hover {
    text-shadow: 2px 2px 5px white; /* Sombra de texto al hacer hover */
  }
  
  @media(min-width: 992px) {
    margin-left: ${props => props.first ? "0" : "2rem"};
    color: ${props => props.light ? "white" : props.dark ? "white" : "white"};
  }
`;
