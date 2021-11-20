import React from 'react';
import TestRenderer from 'react-test-renderer';
import NavMenu from "components/NavMenu";
import { Navbar, NavLink } from 'react-bootstrap';


describe("Navigation menu", () => {
  
  test("Brand logo text", () => {
    const testInstance = TestRenderer
      .create(<NavMenu><div>my content</div></NavMenu>)
      .root;

    expect(testInstance.findByType(Navbar.Brand).props.children)
      .toEqual('News Site');
  });

  test("Home link is first", () => {
    const testInstance = TestRenderer
      .create(<NavMenu><div>my content</div></NavMenu>)
      .root;

    expect(testInstance.findAllByType(NavLink)[0].props.children)
      .toEqual('Home');
  });

  test("Link link is second", () => {
    const testInstance = TestRenderer
      .create(<NavMenu><div>my content</div></NavMenu>)
      .root;

    expect(testInstance.findAllByType(NavLink)[1].props.children)
      .toEqual('Link');
  });  
});
