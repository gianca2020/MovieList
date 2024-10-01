// import React from "react";
// import { Card } from 'react-bootstrap';



// const MovieCard = (props) => {
//     return(
//         <Card>
//               <Card.Img
//                 variant="top"
//                 className="cardImage"
//                 /*change this src either in card title or here*/ 
//                 // src="https://placeholder.co/200x200"
//                  src={props.imageUrl}
//                 alt= "haha, try again loser"
//               />
//               <Card.Body className="cardBody">
//                 <Card.Title>{`Movie: ${props.name}`}</Card.Title> 
//                 <Card.Text>
//                   <h4>{`Director: ${props.director}`}</h4>
//                   <h5>{`Release date: ${props.year}`}  </h5>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//     )
// }

// export default MovieCard;

import React from 'react';
import { Card } from 'react-bootstrap';

const MovieCard = ({ imageUrl, name, director, year, className }) => {
  return (
    <Card className={`movie-card ${className}`}>
      <Card.Img variant="top" src={imageUrl} alt="haha, loser" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Directed by: {director} <br />
          Year: {year}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
