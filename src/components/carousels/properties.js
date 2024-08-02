import React, { Fragment, useContext } from 'react'; // Importa React, Fragment y useContext desde React
import context from '../../context'; // Importa el contexto de la aplicación
import styled from 'styled-components'; // Importa styled-components para estilos
import { Row, Col } from 'react-bootstrap'; // Importa componentes Row y Col de react-bootstrap
import { chunkArray } from '../../util'; // Importa una función utilitaria para dividir arrays
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'; // Importa componentes para el carrusel
import { LeftOutlined, RightOutlined } from '@ant-design/icons'; // Importa iconos de ant-design
import 'pure-react-carousel/dist/react-carousel.es.css'; // Importa estilos para el carrusel
import { v1 as uuid } from 'uuid'; // Importa una función para generar UUIDs

import PropertyCard from '../cards/property'; // Importa el componente de tarjeta de propiedad

// Estilo personalizado para el Slider
const SliderCustom = styled(Slider)`
  padding-bottom: 1.5rem;
`;

// Estilo personalizado para el botón de retroceso
const ButtonBackCustom = styled(ButtonBack)`
  width: 30px; // Ancho del botón
  height: 30px; // Alto del botón
  border-radius: 50%; // Borde redondeado
  background-color: ${props => props.theme.primaryColor}; // Color de fondo del botón
  transition: 250ms ease; // Transición para el efecto hover
  border: none; // Sin borde
  padding: 0; // Sin relleno
  display: flex; // Utiliza flexbox
  justify-content: center; // Centra el contenido horizontalmente
  align-items: center; // Centra el contenido verticalmente
  position: absolute; // Posición absoluta
  top: 50%; // Centra verticalmente
  left: -1rem; // Mueve el botón hacia la izquierda
  color: #fff; // Color del icono
  &:hover {
    filter: brightness(1.1); // Efecto de brillo al pasar el ratón
  }
`;

// Estilo personalizado para el botón de siguiente
const ButtonNextCustom = styled(ButtonNext)`
  width: 30px; // Ancho del botón
  height: 30px; // Alto del botón
  border-radius: 50%; // Borde redondeado
  background-color: ${props => props.theme.primaryColor}; // Color de fondo del botón
  transition: 250ms ease; // Transición para el efecto hover
  border: none; // Sin borde
  padding: 0; // Sin relleno
  display: flex; // Utiliza flexbox
  justify-content: center; // Centra el contenido horizontalmente
  align-items: center; // Centra el contenido verticalmente
  color: #fff; // Color del icono
  position: absolute; // Posición absoluta
  top: 50%; // Centra verticalmente
  right: -1rem; // Mueve el botón hacia la derecha
  &:hover {
    filter: brightness(1.1); // Efecto de brillo al pasar el ratón
  }
`;

export default () => {
  const state = useContext(context); // Obtiene el estado del contexto
  const items = state.featuredProperties; // Extrae las propiedades destacadas del estado
  
  // Divide las propiedades en chunks de 3 elementos cada uno
  const chunkedItems = chunkArray(items.map(item => item), 3);

  return (
    <Fragment>
      {/* Carrusel para pantallas móviles */}
      <CarouselProvider
        naturalSlideWidth={100} // Ancho natural del slide
        isIntrinsicHeight={true} // Ajusta la altura al contenido
        totalSlides={chunkedItems.length} // Número total de slides
        visibleSlides={1} // Número de slides visibles a la vez
        orientation="horizontal" // Orientación horizontal
        className="d-md-none d-lg-none d-xl-none" // Clases de visibilidad para pantallas móviles
      >
        <SliderCustom>
          {
            chunkedItems.map((mainItem, index) => (
              <Slide key={uuid()} index={index}>
                <Row style={{ margin: "0 1rem" }}>
                  {
                    mainItem.map(item => (
                      <Col xs={12} key={item.id}> {/* Cambia a 12 para pantalla móvil */}
                        <PropertyCard {...item} />
                      </Col>
                    ))
                  }
                </Row>
              </Slide>
            ))
          }
        </SliderCustom>
      </CarouselProvider>

      {/* Carrusel para pantallas de tablet */}
      <CarouselProvider
        naturalSlideWidth={100} // Ancho natural del slide
        isIntrinsicHeight={true} // Ajusta la altura al contenido
        totalSlides={chunkedItems.length} // Número total de slides
        visibleSlides={1} // Número de slides visibles a la vez
        orientation="horizontal" // Orientación horizontal
        className="d-none d-md-block d-lg-none" // Clases de visibilidad para pantallas de tablet
      >
        <SliderCustom>
          {
            chunkedItems.map((mainItem, index) => (
              <Slide key={uuid()} index={index}>
                <Row style={{ margin: "0 1rem" }}>
                  {
                    mainItem.map(item => (
                      <Col xs={12} md={4} key={item.id}> {/* Cambia a 12 para pantalla móvil y a 4 para tablet */}
                        <PropertyCard {...item} />
                      </Col>
                    ))
                  }
                </Row>
              </Slide>
            ))
          }
        </SliderCustom>
        <ButtonBackCustom>
          <LeftOutlined />
        </ButtonBackCustom>
        <ButtonNextCustom>
          <RightOutlined />
        </ButtonNextCustom>
      </CarouselProvider>

      {/* Carrusel para pantallas de desktop */}
      <CarouselProvider
        naturalSlideWidth={100} // Ancho natural del slide
        isIntrinsicHeight={true} // Ajusta la altura al contenido
        totalSlides={chunkedItems.length} // Número total de slides
        visibleSlides={1} // Número de slides visibles a la vez
        orientation="horizontal" // Orientación horizontal
        className="d-none d-lg-block" // Clases de visibilidad para pantallas de desktop
      >
        <SliderCustom>
          {
            chunkedItems.map((mainItem, index) => (
              <Slide key={uuid()} index={index}>
                <Row style={{ margin: "0 1rem" }}>
                  {
                    mainItem.map(item => (
                      <Col xs={12} md={4} key={item.id}> {/* Cambia a 12 para pantalla móvil y a 4 para tablet */}
                        <PropertyCard {...item} />
                      </Col>
                    ))
                  }
                </Row>
              </Slide>
            ))
          }
        </SliderCustom>
        <ButtonBackCustom>
          <LeftOutlined />
        </ButtonBackCustom>
        <ButtonNextCustom>
          <RightOutlined />
        </ButtonNextCustom>
      </CarouselProvider>
    </Fragment>
  );
}
