import './App.css'
import { Card, Container, Nav, Navbar, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card } from 'react-bootstrap';
// import { Col } from 'react-bootstrap';
// import Row from 'react-bootstrap/Row';

function App() {

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Img variant='top' src="https://via.placeholder.com/80x80" alt="Placeholder image" className="img-fluid"/>
            <Card.Body>
              <Card.Title>This is my first project in react</Card.Title>
              <Card.Text>
                <h4>THis is more information</h4>
                <h4>i dont care at this point</h4>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
    </>
  );
}

export default App
