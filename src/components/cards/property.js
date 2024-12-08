import React, { useContext } from 'react';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Site, Surface, Parking, Bath, Rooms } from '../../icons';
import context from '../../context';
import { priceFormat } from '../../util';

// Estilos
const AniLinkCustom = styled(AniLink)`
  color: inherit !important;
  display: block;
  border-radius: 30px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  }
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  border-radius: 30px;
  overflow: hidden;
  background-image: ${({ src }) => (src ? `url(${src})` : 'none')};
  background-size: cover;
  background-position: center;
  display: flex;
  margin-bottom: 0.2rem;
  margin-top: 0.2rem;
  flex-direction: column;
  justify-content: flex-end;
  background-color: ${({ src }) => (!src ? '#ccc' : 'transparent')};
  box-sizing: border-box;
`;

const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  z-index: 1;
`;

const InfoContainer = styled.div`
  position: relative;
  z-index: 2;
  padding: 2rem 1rem;
  margin-bottom: -1rem;
  color: white;
  text-align: center;
`;

const Title = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  margin: 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
`;

const Price = styled.p`
  margin: 0.3rem 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 0 1rem;
  color: white;
  text-transform: uppercase;
  z-index: 2;
`;

const StatItem = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    display: block;
    font-size: 0.8rem;
    font-weight: normal;
    margin-top: 0.3rem;
  }
`;

const Tag = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
  color: #fff;
  position: absolute;
  top: 15px;
  left: -40px;
  transform: rotate(-45deg);
  padding: 0.3rem 2rem;
  font-size: 0.9rem;
  font-weight: bold;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.5);
`;

export default ({
  mainImage,
  title,
  value,
  currency,
  valueUf,
  ubication,
  characteristics,
  _id,
  operation,
  status,
}) => {
  const state = useContext(context);
  const visibleTag = status === 'VENDIDA' || status === 'ARRENDADA';

  return (
    <AniLinkCustom paintDrip hex={state.primaryColor} to={`/property?id=${_id}`} duration={0.5}>
      <Card src={mainImage}>
        {visibleTag && <Tag>{status}</Tag>}
        <GradientOverlay />
        <InfoContainer>
          <Title>{`${title}`}</Title>
          <Subtitle>{ubication?.commune || 'Sin ubicación'}</Subtitle>
          <Price>
            {currency !== 'UF' ? (
              <>
                CLP {priceFormat(value)}
                <br />
                <span>UF {valueUf}</span>
              </>
            ) : (
              <>
                UF {valueUf}
                <br />
                <span>CLP {priceFormat(value)}</span>
              </>
            )}
          </Price>
        </InfoContainer>

        <Stats>
          <StatItem>
            <Rooms />
            <span>
              {characteristics?.find((char) => char.name === 'Dormitorios')?.value || 0}
            </span>
          </StatItem>
          <StatItem>
            <Bath />
            <span>
              {characteristics?.find((char) => char.name === 'Baños')?.value || 0}
            </span>
          </StatItem>
          <StatItem>
            <Surface />
            <span>
              {characteristics?.find((char) => char.name === 'Superficie total')?.value || 0}
            </span>
          </StatItem>
        </Stats>
      </Card>
    </AniLinkCustom>
  );
};