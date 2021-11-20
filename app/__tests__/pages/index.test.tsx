import React from 'react';
import TestRenderer from 'react-test-renderer';
import Index from 'pages/index';
import { Container } from 'react-bootstrap';


describe("App root", () => {
  test("Renders the nav menu", () => {

    const testInstance = TestRenderer
      .create(<Index />)
      .root;

    expect(testInstance.findByType(Container).props.children)
      .toEqual('Index Page');
  });
})
