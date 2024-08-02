import React, { useContext } from 'react';
import context from '../../context';
import styled from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { priceFormat, truncate } from '../../util';
import { Site, Surface, Parking, Bath, Rooms } from '../../icons';

const AniLinkCustom = styled(AniLink)`
  color: inherit !important;
  display: block;
  border-radius: 6px;
  overflow: hidden;
  transition: 250ms ease;
  &:hover {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, .15),
              0px 4px 8px rgba(0, 0, 0, .15),
              0px 8px 16px rgba(0, 0, 0, .15),
              0px 16px 32px rgba(0, 0, 0, .15);
  }
`

const Card = styled.div`
  width: 95%;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, .1);
  min-height: 400px;
  position: relative;
  overflow: hidden; /* Asegura que el zoom de la imagen no se salga del contenedor */
  @media(min-width: 768px){
    width: 100%;
    margin: 0;
  }
`

const Image = styled.div`
  width: 100%;
  padding-top: 75%;
  background-image: url("${props => props.src}");
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease; /* Transición suave para el zoom */
  
  ${Card}:hover & {
    transform: scale(1.1); /* Ajusta el nivel de zoom */
  }
`

const InfoCont = styled.div`
  padding: 0 1rem;
`

const TitleCont = styled.div`
  padding-top: 1rem;
  font-size: .8rem;
`

const Title = styled.h6`
  margin: 0;
  min-height: 50px;
  font-weight: bold; /* Esto hace que el texto sea en negrita */
`;

const Price = styled.p`
  margin: 0;
  color: ${props => props.theme.primaryColor}; /* Color del texto */
  font-size: 1.2rem;
  font-weight: bold; /* Pone el texto en negrita */
`;

const Locacion = styled.p`
  margin: 0;
  color: gray;
`

const Code = styled.p`
  margin: 0;
`

const CharsList = styled.ul`
  padding: 0;
  margin: 0;
  color: gray;
  font-size: .8rem;
  padding: 1rem 0;
  
  span {
    margin-left: .5rem;
  }
`

const CharItem = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: .3rem;
  
  .value {
    margin-left: .5rem;
  }
`

const getCategoryByCode = (title) => {
  if (typeof title !== 'string') {
    return 'Categoría Desconocida';
  }

  const categoryMapping = {
    '4': 'Parcela',
    '5': 'Local',
    '1': 'Casa',
    '3': 'Oficina',
    '2': 'Departamento',
  };

  const digits = title.match(/\d/g);

  const foundCategory = digits ? digits.find(digit => categoryMapping[digit]) : null;

  return categoryMapping[foundCategory] || 'Categoría Desconocida';
};

const Tag = styled.div`
  background-color: ${props => props.theme.primaryColor};
  color: #fff;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  font-size: 15px;
  padding: .1rem 2rem;
  transform: rotate(-45deg);
  box-shadow: 0px 2px 15px rgba(0,0,0, .5);
`

export default ({
  mainImage,
  title,
  value,
  currency,
  code,
  comune,
  ubication,
  characteristics,
  _id,
  operation,
  status
}) => {
  const state = useContext(context);
  const visibleTag = status === "VENDIDA" || status === "ARRENDADA";
  
  return (
    <AniLinkCustom  to={`/property?id=${_id}`} duration={.5}>
      <Card>
        {
          visibleTag && (
            <Tag
              top={status === "VENDIDA" ? "22px" : "28px"}
              left={status === "VENDIDA" ? "-32px" : "-38px"}
            >
              {status}
            </Tag>
          )
        }
        <Image src={mainImage} />
        <InfoCont>
          <TitleCont>
            <Title>
              {getCategoryByCode(title)} {title.replace(/\d+/, '').trim()}
            </Title>
            <Locacion>
              <strong>
                {ubication.commune} -
              </strong>
              {ubication.region}
            </Locacion>
            <br />
            <Price>
              {
                `${currency} ${currency === "UF" ? value : priceFormat(value)}`
              }
            </Price>
          </TitleCont>
          {/*} <CharsList>
            <CharItem>
              <Site />
              <span>
                {ubication.commune}
              </span>
            </CharItem>
            {
              characteristics.filter(char => (
                char.name === "Superficie total" ||
                char.name === "Superficie útil" ||
                char.name === "Dormitorios" ||
                char.name === "Baños" ||
                char.name === "Estacionamientos"
              )).map((char, index) => (
                <CharItem key={index}>
                  {
                    char.name === "Superficie total" && <Surface /> ||
                    char.name === "Superficie útil" && <Surface /> ||
                    char.name === "Habitaciones" && <Rooms /> ||
                    char.name === "Baños" && <Bath /> ||
                    char.name === "Estacionamientos" && <Parking />
                  }
                  <span>{char.name} {char.value} {char.name === "Superficie total" && "mt2" || char.name === "Superficie útil" && "mt2"}</span>
                </CharItem>
              ))
            }
          </CharsList> */}     
        </InfoCont>
      </Card>
    </AniLinkCustom>
  )
}
