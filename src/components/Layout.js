import React from 'react';
import { Container } from 'react-bootstrap';
import "./Layout.css"

export const Layout = (props) => (
  <Container>
    {props.children}
  </Container>
)
