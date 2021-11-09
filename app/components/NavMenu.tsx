import Head from 'next/head'
import React from 'react'
import { Container, Navbar, NavDropdown, NavLink } from 'react-bootstrap'

interface Props {
  children: React.ReactNode
}

export default function NavMenu(props: Props) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar className="me-auto">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#link">Link</NavLink>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Navbar>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>{props.children}</main>
    </>
  )
}