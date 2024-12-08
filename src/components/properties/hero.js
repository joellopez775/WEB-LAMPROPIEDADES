import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import { Section } from '../../styled-components';
import FormProperty from '../forms/properties'

const MainCont = styled(Section)`
  background-image: linear-gradient(white, #f3f3f2), url("${props => props.src}");

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
`

export default ()=> {
  return(
    <MainCont 
      first
      height="30vh"
      
    >
      <Container>
        <FormProperty id="formSearch" withFilters />
      </Container>
    </MainCont>
  )
}