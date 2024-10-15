import "./App.css";
import axios from "axios";
import { Card, Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/customNavbar";
import MovieCard from "./components/MovieCard";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/movies");
        console.log(response.data);
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        console.log("Data has been fetched");
        setLoading(false);
      }
    };
    fetchMovie();
  }, []);

  return (
    <>
      <CustomNavbar />

      <Container fluid className="card-container">
        {loading ? (
          <h1>Loading People...</h1>
        ) : (
          <Row xs={1} md={2} className="g-4">
          {movies.map((movie, index) => (
            <Col key={index}>
              <MovieCard
                className="cardWrapper"
                imageUrl={movie.imageUrl}
                name={movie.name}
                director={movie.director}
                year={movie.year}
              />
            </Col>
          ))}
        </Row>
        )}
        
      </Container>
    </>
  );
}

export default App;
