import React from "react";
import { Card } from 'react-bootstrap';

const MovieCard = (props) => {
    return(
        <Card>
              <Card.Img
                variant="top"
                src="https://placeholder.co/200x200"
                alt="Placeholder image"
              />
              <Card.Body>
                <Card.Title>{`Movie: ${props.name}`}</Card.Title> 
                <Card.Text>
                  <h4>{`Movie: ${props.director}`}</h4>
                  <h5>{`Movie: ${props.year}`}  </h5>
                </Card.Text>
              </Card.Body>
            </Card>
    )
}

export default MovieCard;