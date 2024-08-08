import React, { useContext, useState, useReducer } from 'react';
import context from '../../context';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { LoadingOutlined, CheckCircleFilled,EnvironmentOutlined, WhatsAppOutlined, MailOutlined, PhoneOutlined, FacebookOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';
import AniLink from "gatsby-plugin-transition-link/AniLink";

import { Section, Button } from '../../styled-components';
import { Input, Textarea } from '../inputs';

const Form = styled.form``;

const Derecha = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  top: -16rem;
  right: 7rem;
  width: 40%;
  height: 250px;
  background-color: transparent;
  padding: 2rem;
`;

const Boton = styled.button`
  min-width: 90px;
  min-height: 44px;
  padding: 1px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.primary ? props.theme.primaryColor : "black"};
  background-color: ${props => props.outlined ? "transparent" : props.theme.primaryColor};    
  color: ${props => props.outlined && props.primary ? props.theme.primaryColor : "white"};
  border-radius: 2px;
  transition: 250ms ease;
  margin-bottom: 1rem;
  margin-left: -0.1rem; /* Ajusta la posición a la derecha */
  margin-top: 60px; /* Añadido para mover el botón hacia abajo */
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: ${props => props.outlined && props.primary ? props.theme.primaryColor : props.primary ? props.theme.primaryColor : "#fff"};
    color: ${props => props.outlined && props.primary ? "#fff" : props.primary ? "#fff" : props.theme.primaryColor};
    filter: brightness(1.1);
  }
  &:disabled {
    background-color: ${props => props.outlined && props.primary ? props.theme.primaryColor : props.primary ? props.theme.primaryColor : "#fff"};
    color: ${props => props.outlined && props.primary ? "#fff" : props.primary ? "#fff" : props.theme.primaryColor};
    filter: brightness(1.1);
    cursor: progress;
  }    
  @media(min-width: 768px) {
    margin-bottom: 0;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: left;
  margin-bottom: 1rem; /* Ajuste el margen inferior */
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const SubTitle = styled.p`
  color: gray;
  font-size: 0.7rem;
`;

const InfoList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: 10rem;
`;

const InfoItem = styled.li`
  color: gray;
  font-size: .9rem;
  margin-bottom: .5rem;
  display: flex;
  align-items: center;
  span {
    margin-right: .5rem;
  }
`;

const InfoLink = styled.a`
  color: white;
  &:hover {
    text-decoration: underline !important;
  }
`;

const SocialCont = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  margin-left: -0.5rem; /* Alinea la línea a la izquierda */
  margin-bottom: 1rem;
  @media(min-width: 992px) {
    margin-bottom: 0;
  }
`;

const SocialLink = styled.a`
  color: gray;
  margin-left: .5rem;
  font-size: 1.5rem; /* Tamaño ajustado */
  &:hover {
    color: ${props => props.theme.primaryColor};
  }
`;

// Estilo para el texto en azul
const BlueText = styled.span`
  color: #14226b;
`;

// Estilo para el texto en dorado
const GoldText = styled.span`
  color: #eace9d;
`;

const Divider = styled.div`
  width: 700px;
  height: 1px;
  background-color: #eace9d;
  margin: 1rem 0; /* Ajusta el margen superior e inferior */
  margin-left: 0; /* Alinea la línea a la izquierda */
`;

const SuccessText = styled.p`
  margin: 0;
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #28a745;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  color: red;
  font-size: .9rem;
`;

export default () => {
  const state = useContext(context);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [values, setValues] = useReducer((current, next) => ({ ...current, ...next }), {
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleChange = e => {
    setValues({ [e.target.id]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      const options = {
        headers: { 'Content-type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(values),
        mode: 'cors',
      };

      const data = await fetch('/sendmail.php', options);
      const result = await data.text();

      if (result === 'success') {
        console.log('MAIL API RESULT', result);
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      }
      setLoading(false);
      setValues({
        name: '',
        mobile: '',
        email: '',
        message: '',
      });
    } catch (e) {
      setLoading(false);
      console.log('error', e);
    }
  };

  return (
    <Section first>
      <Container>
        <br />
        <Title>
          <br />
          <br />
          <br />
          <BlueText>ENVÍENOS UN</BlueText> <GoldText>MENSAJE</GoldText>
          <Divider />
        </Title>
     
      

<SubTitle>
  Contáctese con nuestra empresa completando el formulario a continuación y lo atenderemos a la brevedad.
  <br />
  No dude en contactarnos, nuestros ejecutivos lo orientarán para tomar la mejor decisión.
</SubTitle>
        <br></br>
        <Form onSubmit={onSubmit}>
          <Row>
            <Col xs={12}>
              <Row>
                <Col xs={12} md={6}>
                  <Input
                    placeholder="Nombre"
                    gray
                    withMargin
                    disabled={loading}
                    id="name"
                    onChange={handleChange}
                    value={values.name}
                  />

                  <Input
                    placeholder="Teléfono"
                    gray
                    withMargin
                    disabled={loading}
                    id="mobile"
                    onChange={handleChange}
                    value={values.mobile}
                  />
                  <Input
                    placeholder="Email"
                    gray
                    withMargin
                    disabled={loading}
                    id="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  <Textarea
                    placeholder="Mensaje"
                    gray
                    disabled={loading}
                    id="message"
                    onChange={handleChange}
                    value={values.message}
                  />
                  <br />
                </Col>
                <br />
              </Row>
            </Col>
            <br />
            <Col xs={12}>
              <Row>
                <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
                  <Boton primary block disabled={loading}>
                    ENVIAR
                    {loading && <LoadingOutlined style={{ marginLeft: '1rem' }} />}
                  </Boton>
                  {success && (
                    <SuccessText>
                      Su mensaje fue enviado con éxito <CheckCircleFilled style={{ marginLeft: '.3rem' }} />
                    </SuccessText>
                  )}
                </Col>
              
                <Derecha>
                  <BlueText>ESTEMOS EN</BlueText> <GoldText>CONTACTO</GoldText>
                  <Divider />
                  
                  {state.phone1 && (
                    <InfoItem>
                      <PhoneOutlined style={{ marginRight: '0.5rem' }} />
                      <a href={`tel:${state.phone1}`} style={{ color: 'gray' }}>{state.phone1}</a>
                    </InfoItem>
                  )}
                  
                  {state.phone2 && (
                    <InfoItem>
                      <PhoneOutlined style={{ marginRight: '0.5rem' }} />
                      <a href={`tel:${state.phone2}`} style={{ color: 'gray' }}>{state.phone2}</a>
                    </InfoItem>
                  )}
                  
                  {state.email && (
                    <InfoItem>
                      <MailOutlined style={{ marginRight: '0.5rem' }} />
                      <a href={`mailto:${state.email}`} style={{ color: 'gray' }}>{state.email}</a>
                    </InfoItem>
                  )}
                 {state.address && (
  <InfoItem>
    <EnvironmentOutlined style={{ marginRight: '0.5rem' }} />
    <a
      href={`https://www.google.com/maps?q=${-33.3656874267796},${-70.67052627676532}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: 'gray' }}
    >
      {state.address}
    </a>
  </InfoItem>
)}
                  <SocialCont>
                    {state.facebook && (
                      <SocialLink href={state.facebook} rel="noopener" target="_blank">
                        <FacebookOutlined />
                      </SocialLink>
                    )}
                    {state.twitter && (
                      <SocialLink href={state.twitter} rel="noopener" target="_blank">
                        <YoutubeOutlined />
                      </SocialLink>
                    )}
                    {state.instagram && (
                      <SocialLink href={state.instagram} rel="noopener" target="_blank">
                        <InstagramOutlined />
                      </SocialLink>
                    )}
                  </SocialCont>
                </Derecha>
              
              </Row>
            </Col>
          </Row>
        </Form>
      </Container>
    </Section>
  );
};
