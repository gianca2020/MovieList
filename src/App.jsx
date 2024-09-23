import "./App.css";
import { Card, Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card } from 'react-bootstrap';
// import { Col } from 'react-bootstrap';
// import Row from 'react-bootstrap/Row';
import CustomNavbar from "./components/customNavbar";
import MovieCard from "./components/MovieCard";


function App() {

  const movies = [
    {name: "Perfect Blue", director: "Satoshi Kon", year: 1997},
    {name: "lalaLand", director: "Damien Schazelle", year: 2015},
    {name: "The Muppets", director: "James Bobin", year: 2011}
  ]

  return (
    <>
<CustomNavbar/>

      <Container fluid>
        <Row>
          <Col>
            <MovieCard name={movies[0].name}
              director={movies[0].director}
              year={movies[0].year}/>
          </Col>
          <Col>
          <MovieCard name={movies[1].name} director={movies[1].director} year={movies[1].year}/>
          </Col>
          <Col>
            <Card>
              <MovieCard name={movies[2].name} director={movies[2].director} year={movies[2].year}/>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
