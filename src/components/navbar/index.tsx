/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Container, Navbar as NavigationBar, Nav, Form, Dropdown,
} from '../../atoms';

function Navbar() {
  return (
    <NavigationBar expand="lg" mode="light" background-color="light">
      <Container size="fluid">
        <NavigationBar.Brand href="index.html">Navbar</NavigationBar.Brand>
        <NavigationBar.Toggle
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <NavigationBar.Toggle.Icon />
        </NavigationBar.Toggle>
        <NavigationBar.Collapse id="navbarSupportedContent">
          <NavigationBar.Nav margin-end="auto" margin-bottom="2" margin-bottom-lg="0">
            <Nav.Item>
              <Nav.Link active aria-current="page" href="#">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item dropdown>
              <Nav.Link dropdown-toggle href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</Nav.Link>
              <Dropdown.Menu aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </Dropdown.Menu>
            </Nav.Item>
            <Nav.Item>
              <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
            </Nav.Item>
          </NavigationBar.Nav>
          <Form display="flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </Form>
        </NavigationBar.Collapse>
      </Container>
    </NavigationBar>
  );
}

export default Navbar;
