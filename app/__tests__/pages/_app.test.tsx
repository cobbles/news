// @ts-nocheck
import TestRenderer from 'react-test-renderer';
import { Navbar } from 'react-bootstrap';
import MyApp from 'pages/_app';

describe("App root", () => {
  test("Renders the nav menu", () => {

    const Component = '<div></div>';
    const props = {
      Component,
      pageProps: {}
    };

    const testInstance = TestRenderer
      .create(MyApp({ ...props }))
      .root;


    expect(testInstance.findByType(Navbar.Brand).props.children)
      .toEqual('News Site');
  });
})
