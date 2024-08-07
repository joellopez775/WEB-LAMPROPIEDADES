import React, { useContext, useState, useEffect } from 'react';
import context from '../../context';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { SearchOutlined, SlidersOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';
import { gsap } from 'gsap';

import { useUrlForm } from '../../hooks';
import { Autocomplete, Select, Input } from '../inputs';
import PROPERTY_TYPE from '../../constants/PROPERTY_TYPE.json';
import COMMUNES from '../../constants/CITIES.json';
import { Button } from '../../styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink";

// Contenedor principal del formulario
const Form = styled.form`
  padding: 0;
  background-color: transparent;
  margin-top: 10rem;
  @media(min-width: 768px){
    padding: 0 5%;
    margin-top: 0;
  }
`;
const Container = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.4); /* Fondo negro con 30% de opacidad */
  padding: 1px 1px 1px; /* Ajusta el padding superior para reducir la altura desde arriba */
  width: 80rem;
  max-width: 100%; /* Ajusta el ancho máximo según sea necesario */
  margin: 0 auto; /* Centra el contenedor horizontalmente */
  height: 7.5rem; /* Ajusta la altura según sea necesario */
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px; /* Altura de la franja dorada */
    background-color: #eace9d; /* Color de la franja dorada */
  }
`;

// Contenedor interno del formulario con margen superior e inferior
const FormInnerCont = styled.div`
  margin-bottom: ${props => props.first ? "2rem" : "1rem"};
  margin-top:1px; /* Agrega un margen superior para mover el contenedor hacia abajo */
  @media(min-width: 768px){
    background-color: transparent;
    margin-top: 4rem; /* Ajusta este valor según tus necesidades en pantallas grandes */
  }
`;

// Contenedor para más filtros
const MoreFilterCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Botón de filtro con estilo
const FilterButton = styled.button`
  background-color: transparent;
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.primaryColor};
  transition: 250ms ease;
  font-size: .8rem;
  &:hover {
    filter: brightness(1.1);
  }
`;

// Columna con margen para separación entre ítems
const StyledCol = styled(Col)`
  margin-bottom: 15px; /* Espacio entre ítems */
  padding-right: 50px; /* Espacio a la derecha para separación */
  
  &:last-child {
    padding-right: 0; /* Elimina el padding en la última columna para evitar exceso de espacio */
  }
`;

export default ({ withFilters, id }) => {
  const state = useContext(context);
  const [filter, setFilter] = useState(false);
  const { values, onChange, getUrl, setValues } = useUrlForm({
    propertyType: '',
    operation: '',
    commune: '',
    stringSearch: '',
    priceMin: '',
    priceMax: '',
    value: '',
    valueUf: '',
    totalAreaFrom: '',
    totalAreaTo: '',    
    bedrooms: '',
    bathrooms: '',
    currency: 'CLP',    
  });

  const handleFilter = () => {
    setValues({
      priceMin: '',
      priceMax: '',
      value: '',
      valueUf: '',
      totalAreaFrom: '',
      totalAreaTo: '',    
      bedrooms: '',
      bathrooms: '',
      currency: 'CLP',          
    });
    setFilter(!filter);
  }
  
  useEffect(() => {
    if (filter) {
      gsap.from("#filters", { opacity: 0, y: 10, duration: .5, ease: "back.out(1.7)" });
    }
  }, [filter]);

  return (
    <Container>
      <Form id={id} onSubmit={(e) => e.preventDefault()} withFilters={withFilters}>
        <FormInnerCont first>
          <Row noGutters>
            <StyledCol xs={12} md={2}>
              <Select
                id="propertyType"
                onChange={onChange}
                value={values.propertyType}
                default="Tipo Propiedad"
                options={PROPERTY_TYPE}
                primary
                capitalize
              />
            </StyledCol>
            <StyledCol xs={12} md={2}>
              <Select
                id="operation"
                onChange={onChange}
                value={values.operation}
                default="Tipo Operación"
                options={["VENTA", "ARRIENDO"]}
                primary
                capitalize
              />
            </StyledCol>
            <StyledCol xs={12} md={2}>
              <Autocomplete
                id="commune"
                onSelect={onChange}
                selected={values.commune}
                options={COMMUNES.map(val => val.name)}
                placeholder="Comunas"
              />
            </StyledCol>
            <StyledCol xs={12} md={2}>
              <Input
                id="priceMin"
                onChange={onChange}
                value={values.priceMin}
                placeholder="Precio desde"
                primary
                type="number"
                min={0}
              />
            </StyledCol>
            <StyledCol xs={12} md={2}>
              <Input
                id="priceMax"
                onChange={onChange}
                value={values.priceMax}
                placeholder="Precio hasta"
                primary
                type="number"
                min={0}
              />
            </StyledCol>
            
            <StyledCol xs={12} md={1}>
                <Select
                  id="currency"
                  onChange={onChange}
                  value={values.currency}
                  default="Propiedad"
                  options={["CLP", "UF"]}
                  primary
                  noAll
                />
              </StyledCol>
           
            <StyledCol xs={12} md={1}>
              <AniLink fade to={getUrl()} duration={.5}>
                <Button
                  block
                  primary
                  type="submit"
                  icon
                  title="Buscar"
                >
                  <span className="d-xs-block d-md-none">Buscar</span>
                  <SearchOutlined className="d-none d-md-block" />
                </Button>
              </AniLink>
            </StyledCol>
            
          </Row>
        </FormInnerCont>
        {withFilters && filter && (
          <FormInnerCont first id="filters">
            <Row noGutters>
              <StyledCol xs={12} md={3}>
                <Input
                  id="totalAreaFrom"
                  onChange={onChange}
                  value={values.totalAreaFrom}
                  placeholder="Superficie desde m²"
                  primary
                  type="number"
                  min={0}
                />
              </StyledCol>
              <StyledCol xs={12} md={3}>
                <Input
                  id="totalAreaTo"
                  onChange={onChange}
                  value={values.totalAreaTo}
                  placeholder="Superficie hasta m²"
                  primary
                  type="number"
                  min={0}
                />
              </StyledCol>
              <StyledCol xs={12} md={2}>
                <Input
                  id="priceMin"
                  onChange={onChange}
                  value={values.priceMin}
                  placeholder="Precio desde"
                  primary
                  type="number"
                  min={0}
                />
              </StyledCol>
              <StyledCol xs={12} md={2}>
                <Input
                  id="priceMax"
                  onChange={onChange}
                  value={values.priceMax}
                  placeholder="Precio hasta"
                  primary
                  type="number"
                  min={0}
                />
              </StyledCol>
              <StyledCol xs={12} md={1}>
                <Select
                  id="currency"
                  onChange={onChange}
                  value={values.currency}
                  default="Propiedad"
                  options={["CLP", "UF"]}
                  primary
                  noAll
                />
              </StyledCol>
              <StyledCol xs={12} md={1}>
                <AniLink fade to={getUrl()} duration={.5}>
                  <Button
                    block
                    primary
                    type="submit"
                    icon
                    title="Aplicar filtros"
                  >
                    <span className="d-xs-block d-md-none">Aplicar</span>
                    <SlidersOutlined className="d-none d-md-block" />
                  </Button>
                </AniLink>
              </StyledCol>
            </Row>
          </FormInnerCont>
        )}
       {/*} <MoreFilterCont>
          {withFilters && (
            <FilterButton onClick={handleFilter}>
              {filter ? (
                <>
                  Menos filtros
                  <UpOutlined style={{ marginLeft: ".3rem" }} />
                </>
              ) : (
                <>
                  Más filtros
                  <DownOutlined style={{ marginLeft: ".3rem" }} />
                </>
              )}
            </FilterButton>
          )}
        </MoreFilterCont>*/}
      </Form>
    </Container>
  );
}
