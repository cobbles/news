import Head from 'next/head'
import React from 'react'
import { Container, Navbar, NavLink } from 'react-bootstrap'

interface Props {
  children: React.ReactNode
}

export default function NavMenu(props: Props) {
  return (
    <>
      <Head>
        <title>News site</title>
      </Head>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">News Site</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar>
              <NavLink href="/">Home</NavLink>
              <NavLink href="/">Link</NavLink>
            </Navbar>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>{props.children}</main>
    </>
  )
}