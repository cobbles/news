import { Col, Container, Row, Card } from 'react-bootstrap'

export default function Index() {
  return (
    <Container className="mt-5">
      <h1 className="text-light">Hacker News</h1>
      <Row md={1} lg={2}>
        <Col className="mt-2">
          <Card bg="dark" text="light">
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>
                Exerpt from an article goes here
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#">Article</Card.Link>
              <Card.Link href="#">Comments</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col className="mt-2">
          <Card bg="dark" text="light">
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>
                Exerpt from an article goes here
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Link href="#">Article</Card.Link>
              <Card.Link href="#">Comments</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
