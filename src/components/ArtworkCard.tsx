import React, { FunctionComponent, useState } from "react";
import Card from 'react-bootstrap/Card'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import ListGroup from 'react-bootstrap/ListGroup'

export type ArtworkCardProps = {
  // clickHandler: () => 
  id: string,
  cardText: string,
  imageSrc: string,
}

const ArtworkCard: React.FC<ArtworkCardProps> = (props) => {
 return (
   <section id={props.id} style={{ paddingTop: '20px' }}>
  <Card>
  <Card.Img className="fitImage" style={{maxHeight: '30rem'}} src={props.imageSrc} />
  <Card.Body>
    <Card.Title>{props.cardText}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
  </section>
)
}

export default ArtworkCard;