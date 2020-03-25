import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

class NavbarTop extends React.Component {
  render() {
    return ( <>
      <Navbar
        bg="light"
        expand="sm"
        fixed="top"
        collapseOnSelect
        className='Navbar'
      >
        <Navbar.Brand
          href="#home"
          name="introduction"
          onClick={this.props.scrollWindow}
          className="ml-sm-3 Brand"
        >
          MVS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" />
          <Nav className="mr-sm-3" style={{zIndex: '0'}}>
            <Nav.Link
              href="#home"
              name="about"
              onClick={this.props.scrollWindow}
              className="mr-sm-3 Nav"
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#home"
              name="skills"
              onClick={this.props.scrollWindow}
              className="mr-sm-3 Nav"
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#home"
              name="applications"
              onClick={this.props.scrollWindow}
              className="mr-sm-3 Nav"
            >
              Applications
            </Nav.Link>
            <Nav.Link
              href="#home"
              name="contact"
              onClick={this.props.scrollWindow}
              className="mr-sm-3 Nav"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      </>
    );
  }
}

export default NavbarTop;
