import { useEffect, useState } from 'react';
import { Col, Container, Row, Card, Spinner } from 'react-bootstrap'

type Article = {
  title: string;
  link: string;
}

function isArticleArray(value: unknown): value is Article[] {
  return (
    Array.isArray(value) && value.every(element => isArticle(element))
  );
}

function isArticle(value: any): value is Article {
  return (
    typeof value.title === "string" &&
    typeof value.link === "string"
  );
}

function renderArticles(articles: Article[]) {
  return articles.map(article =>
    <Row key={article.title}>
      <Card className="mt-2" bg="dark" text="light">
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>
            Exerpt from an article goes here
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Link href={article.link} target="_blank">Article</Card.Link>
          <Card.Link href="#">Comments</Card.Link>
        </Card.Body>
      </Card>
    </Row>)
}

export default function Index() {
  const [articles, setArticles] = useState<Article[] | undefined>();
  useEffect(() => {
    fetch("/api/hacker-news/news")
      .then(res => {
        res.json()
          .then(data => setArticles(data));
      })
  }, []);

  return (
    <Container>
      <h1 className="text-light">Hacker News</h1>
      {articles && renderArticles(articles)}
    </Container>
  )
}
