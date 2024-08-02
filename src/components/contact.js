import React, { useContext } from 'react';
import context from '../context';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { WhatsAppOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Section } from '../styled-components';

const SectionCustom = styled(Section)` 
  border: 1px solid #D8D8D8;
  border-left: none;
  border-right: none;
  padding: 2rem 0;
  background-color: #e1d1b0;
`;

const Title = styled.p`
  margin: 0;
  margin-bottom: 1rem;
  @media(min-width: 768px) {
    margin-bottom: 0;
  }
`;

const ContactRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
`;

const ContactColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ContactButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #14226b;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  transition: 250ms ease;
  font-size: 2.1rem;
  border: none;
  z-index: 1000;
  margin-bottom: 0.5rem;

  &:hover {
    color: ${props => props.hoverColor || "#06d755"};
  }
`;

const ContactText = styled.span`
  color: #14226b;
  font-size: 1rem;
  font-weight: bold;
  white-space: nowrap;
`;

const Subtitle = styled.span`
  color: #14226b;
  font-size: 1rem;
  font-weight: normal;
`;

export default () => {
  const state = useContext(context);
  return (
    <SectionCustom>
      <Container>
        <ContactRow>
          <ContactColumn>
            <ContactButton href="https://wa.me/56997580771" title="Enviar WhatsApp" rel="noopener" target="_blank" hoverColor="#25D366">
              <WhatsAppOutlined />
            </ContactButton>
            <ContactText>Whatsapp</ContactText>
            <Subtitle>+56 9 9758 0771</Subtitle>
          </ContactColumn>
          <ContactColumn>
            <ContactButton href="https://maps.google.com" title="Ver Ubicación" rel="noopener" target="_blank">
              <EnvironmentOutlined />
            </ContactButton>
            <ContactText>Casas Huechuraba</ContactText>
            <Subtitle>Pedro Fontova</Subtitle>
          </ContactColumn>
          <ContactColumn>
            <ContactButton href="mailto:contacto@casashuechuraba.cl" title="Enviar Email" rel="noopener" target="_blank" hoverColor="#D44638">
              <MailOutlined />
            </ContactButton>
            <ContactText>Email</ContactText>
            <Subtitle>contacto@casashuechuraba.cl</Subtitle>
          </ContactColumn>
        </ContactRow>
        <br></br>
        {/* <Row className="align-items-center">
          <Col xs={12} md={9}>
            <Title>
              {state.about.ubication.title}
            </Title>
          </Col>
          <Col xs={12} md={3}>
            <AniLink  to="/contact" duration={.5}>
              <Button primary block>
                Contáctanos
              </Button>
            </AniLink>
          </Col>          
        </Row> */}
      </Container>
    </SectionCustom>
  );
};
