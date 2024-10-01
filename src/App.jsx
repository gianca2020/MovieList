import "./App.css";
import { Card, Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card } from 'react-bootstrap';
// import { Col } from 'react-bootstrap';
// import Row from 'react-bootstrap/Row';
import CustomNavbar from "./components/customNavbar";
import MovieCard from "./components/MovieCard";
import "C:/Users/gianc/MovieList/src/App.css";
// import image1 from '.images/lalaLand.jpg';

function App() {
  const movies = [
    {
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BYjkyZjY1OWItNjYyNC00ZjlhLTgwOTAtMGNiYTFmYTNmZDI3XkEyXkFqcGc@._V1_.jpg",
      name: "Perfect Blue",
      director: "Satoshi Kon",
      year: 1997,
    },
    {
      imageUrl: `https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg`,
      name: "lalaLand",
      director: "Damien Schazelle",
      year: 2015,
    },
    {
      imageUrl: `https://m.media-amazon.com/images/M/MV5BMjE0MTM4NTc3NF5BMl5BanBnXkFtZTcwMjYzOTIxNg@@._V1_FMjpg_UX1000_.jpg`,
      name: "The Muppets",
      director: "James Bobin",
      year: 2011,
    },
  ];

  return (
    <>
      <CustomNavbar />

      <Container fluid classname="card-container">
        <Row xs={1} md={2} className="g-4">
          <Col>
            <MovieCard
              className="cardWrapper"
              imageUrl={movies[0].imageUrl}
              name={movies[0].name}
              director={movies[0].director}
              year={movies[0].year}
            />
          </Col>
          <Col>
            <MovieCard
              className="cardWrapper"
              imageUrl={movies[1].imageUrl}
              name={movies[1].name}
              director={movies[1].director}
              year={movies[1].year}
            />
          </Col>
          <Col>
            <Card>
              <MovieCard
                className="cardWrapper"
                imageUrl={movies[2].imageUrl}
                name={movies[2].name}
                director={movies[2].director}
                year={movies[2].year}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
