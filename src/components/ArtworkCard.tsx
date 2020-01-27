import React, { FunctionComponent, useState } from "react";
import Card from 'react-bootstrap/Card'

export type ArtworkCardProps = {
  // clickHandler: () => 
  id: string,
  cardText: string,
  imageSrc: string,
}

const ArtworkCard: React.FC<ArtworkCardProps> = (props) => {
 return (
   <section id={props.id}>
    <Card>
      <Card.Body>
        <Card.Text>
          {props.cardText}
        </Card.Text>
      </Card.Body>
      <Card.Img variant="bottom" src={props.imageSrc} />
    </Card>
  </section>
)
}

export default ArtworkCard;