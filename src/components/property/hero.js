import React, { useContext } from "react";
import styled from "styled-components";
import context from "../../context/property";
import { Container, Row, Col } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { priceFormat } from "../../util";

import { Section } from "../../styled-components";
import { Site } from "../../icons";

const ImageGalleryCustom = styled(ImageGallery)`
  border-radius: 10px;
`;

const Image = styled.div`
  width: 100%;
  padding-top: 75%;
  position: relative;
  background-image: url("${(props) => props.src}");
  background-color: #000;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 30px;
  background-position: center center;
  ::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    backdrop-filter: blur(6px);
  }
  ::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    background-image: url("${(props) => props.src}");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
  }
`;

const InteractiveCont = styled.div`
  margin: 0px;
  padding: 0px;
  @media (min-width: 768px) {
    min-height: 50vh;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  z-index: 500;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.primaryColor};
  border: none;
  transition: 250ms ease;
  margin: 0 0.5rem;
  color: #fff;
  &:hover {
    filter: brightness(1.1);
  }
`;

const NavButtonLeft = styled(NavButton)``;
const NavButtonRight = styled(NavButton)`
  right: 0;
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 2rem;
  position: relative;
`;

const Code = styled.p`
  font-size: 0.8rem;
  text-transform: capitalize;
  font-weight: bold;
  text-align: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.primaryColor};
  font-weight: 500;
  text-align: center;
`;

const Price = styled(Title)`
  span {
    font-size: 1.5rem;
  }
`;

const CharItem = styled.p`
  color: ${(props) => props.theme.primaryColor};
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  margin: 0;
  margin-top: 0rem;
  span {
    color: #979797;
    margin-left: 0.3rem;
    font-size: 1.2rem;
  }
`;

const getCategoryByCode = (title) => {
  if (typeof title !== "string") {
    return "Categoría Desconocida";
  }

  const categoryMapping = {
    "01": "Casa",
    "02": "Departamento",
    "03": "Oficina",
    "04": "Sitio",
    "05": "Local",
    "08": "Industrial",
    "09": "Agrícola",
    "13": "Agrícola",
    "10": "Agrícola",
    "14": "Parcela",
    "15": "Estacionamiento",
    "16": "Terreno",
    "17": "Bodega",
    "30": "Negocio/Patentes/Derechos de llave",
    "31": "Residencial/Pieza",
    "32": "Hotel/Apart",
    "33": "Complejo Turístico",
    "34": "Departamento Amoblado",
  };

  const digits = title.match(/^\d{1,2}/);
  const foundCategory = digits ? digits[0].padStart(2, "0") : null;

  return categoryMapping[foundCategory] || "Categoría Desconocida";
};

const InteractiveAsset = (item, interactive, provider) => {
  return (
    <InteractiveCont>
      {item.provider ? (
        <iframe
          height="100%"
          width="100%"
          src={item.url}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen=""
        />
      ) : (
        <Image src={item.url} />
      )}
    </InteractiveCont>
  );
};

export default () => {
  const state = useContext(context);
  const {
    images,
    title,
    value,
    valueUf,
    operation,
    code,
    ubication,
    currency,
  } = state;

  const gallery = [...images].map((item) => ({
    thumbnail: item.provider
      ? item.interactive
        ? "/360-degrees.svg"
        : "/video.svg"
      : item.url,
    thumbnailClass: "thumbnail-custom",
    renderItem: () => <InteractiveAsset {...item} />,
  }));

  return (
    <Section height="10vh" first>
      <Container>
        {/* Mostrar precios */}
        <Price>
          {currency !== "UF" ? (
            <>
              <span>CLP {priceFormat(value)}</span>
              <br />
              <span>UF {valueUf}</span>
            </>
          ) : (
            <>
              <span>UF {valueUf}</span>
              <br />
              <span>CLP {priceFormat(value)}</span>
            </>
          )}
        </Price>

        {/* Título */}
        <Title>
          {getCategoryByCode(title)} {title.replace(/\d+/, "").trim()}
        </Title>

        {/* Código de operación */}
        <Code>{operation.toLowerCase() + " - COD: " + code}</Code>

        {/* Ubicación */}
        <CharItem>
          <Site />
          <span>{ubication.commune}</span>
        </CharItem>

        {/* Galería */}
        <Row className="pt-3">
          <Col xs={12} md={12} className="d-none d-md-block">
            <ImageGalleryCustom
              items={gallery}
              showPlayButton={false}
              thumbnailPosition="right"
              renderLeftNav={(onClick, disabled) => (
                <NavButtonLeft onClick={onClick} disabled={disabled}>
                  <LeftOutlined />
                </NavButtonLeft>
              )}
              renderRightNav={(onClick, disabled) => (
                <NavButtonRight onClick={onClick} disabled={disabled}>
                  <RightOutlined />
                </NavButtonRight>
              )}
            />
          </Col>
          <Col xs={12} md={12} className="d-md-none">
            <ImageGalleryCustom
              items={gallery}
              showPlayButton={false}
              thumbnailPosition="bottom"
              renderLeftNav={(onClick, disabled) => (
                <NavButtonLeft onClick={onClick} disabled={disabled}>
                  <LeftOutlined />
                </NavButtonLeft>
              )}
              renderRightNav={(onClick, disabled) => (
                <NavButtonRight onClick={onClick} disabled={disabled}>
                  <RightOutlined />
                </NavButtonRight>
              )}
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};