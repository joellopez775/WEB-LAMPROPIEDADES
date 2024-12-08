import React, { useContext } from 'react';
import context from '../context';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { WhatsAppOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons'; // Agregado PhoneOutlined
import { Section } from '../styled-components';

const SectionCustom = styled(Section)`
  border: 1px solid #D8D8D8;
  border-left: none;
  border-right: none;
  padding: 2rem 0;
  background-color: #fff;
  margin-bottom: 0;
`;

const Title = styled.p`
  margin: 0;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
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
    color: ${(props) => props.hoverColor || "#06d755"};
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
          {/* Botón de WhatsApp */}
          <ContactColumn>
            <ContactButton href="https://wa.me/56982797858" title="Enviar WhatsApp" rel="noopener" target="_blank" hoverColor="#25D366">
              <WhatsAppOutlined />
            </ContactButton>
            <ContactText>WhatsApp</ContactText>
            <Subtitle>+56 9 8279 7858</Subtitle>
          </ContactColumn>

          {/* Botón de Teléfono */}
          <ContactColumn>
            <ContactButton href="tel:56990237039" title="Llamar por Teléfono" rel="noopener" hoverColor="#0188ca">
              <PhoneOutlined /> {/* Ícono de teléfono */}
            </ContactButton>
            <ContactText>Teléfono</ContactText>
            <Subtitle>+56 9 9023 7039</Subtitle>
          </ContactColumn>

          {/* Botón de Email */}
          <ContactColumn>
            <ContactButton href="mailto:contacto@lampropiedades.cl" title="Enviar Email" rel="noopener" target="_blank" hoverColor="white">
              <MailOutlined />
            </ContactButton>
            <ContactText>Email</ContactText>
            <Subtitle>contacto@lampropiedades.cl</Subtitle>
          </ContactColumn>
        </ContactRow>
      </Container>
    </SectionCustom>
  );
};