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
  border-color: ${props => props.primary ? props.theme.primaryColor : "white"};
  background-color: ${props => props.outlined ? "transparent" : props.theme.primaryColor};    
  color: ${props => props.outlined && props.primary ? props.theme.primaryColor : "white"};
  border-radius: 3px;
  transition: 250ms ease;
  margin-bottom: 1rem;
  margin-left: .3rem; /* Ajusta la posición a la derecha */
  cursor: pointer;
  &:hover{
    background-color: ${props => props.outlined && props.primary ? props.theme.primaryColor : props.primary ? props.theme.primaryColor: "#fff"};
    color: ${props => props.outlined && props.primary ? "#fff" : props.primary ? "#fff" : props.theme.primaryColor};
    filter: brightness(1.1);
  }
  &:disabled      {
    background-color: ${props => props.outlined && props.primary ? props.theme.primaryColor : props.primary ? props.theme.primaryColor: "#fff"};
    color: ${props => props.outlined && props.primary ? "#fff" : props.primary ? "#fff" : props.theme.primaryColor};
    filter: brightness(1.1);
    cursor: progress;
  }    
  @media(min-width: 768px){
    margin-bottom: 0;
  
  }
`;
