import { Container, Card } from 'react-bootstrap'

export default function Home() {
  return (
      <Card style={{ width: '100%', padding: '0px' }}>
        <Card.Img variant="top" src="/src/images/Golf.png" style={{ maxWidth: '300px'}} className="mx-auto" />
        <Card.Body>
          <Card.Title>Cad é sin?</Card.Title>
          <Card.Text>
            Tá Galf le Gaeilge....
          </Card.Text>
        </Card.Body>
      </Card>
  );
}
