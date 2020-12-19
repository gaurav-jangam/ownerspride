import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar,NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
.navbar-nav > li > a {padding-top:0px !important; padding-bottom:5px !important;}
.navbar {min-height:0px !important}  .navbar {
    background-color: #ecf1f6;
    z-index:18;
}

img {
  margin-bottom:-18px;
  height: 120px;
}

  a, .navbar-brand, .navbar-nav .nav-link {
    margin-top:-15px
    color: black;

    &:hover {
      color: light-black;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/"><img src="images/logo.png"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about">About Us</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <NavDropdown title="Customize" id="basic-nav-dropdown">
        <NavDropdown.Item><Link to="/jeep">Customize Your Own Jeep</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/gypsy">Customize Your Own Gypsy</Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/car">Customize Your Own Car</Link></NavDropdown.Item>
             
      </NavDropdown>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/accessories">Accessories</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <NavDropdown title="Contact Us" id="basic-nav-dropdown">
        <NavDropdown.Item>
        <Link to="/pune">
        PUNE
        </Link>
        </NavDropdown.Item>
        <NavDropdown.Item><Link to="/mumbai">
        MUMBAI
        </Link></NavDropdown.Item>
        <NavDropdown.Item><Link to="/punjab">
        PUNJAB
        </Link></NavDropdown.Item>
             
      </NavDropdown>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)
