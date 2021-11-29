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
        <title>News</title>
      </Head>
      <div className="bg-dark">
        <Container>
          <Navbar variant="dark" expand="lg">
            <Navbar.Brand href="/">News</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Navbar>
                <NavLink href="/">Hacker News</NavLink>
                <NavLink href="/">Link</NavLink>
              </Navbar>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
      <main>{props.children}</main>
    </>
  )
}