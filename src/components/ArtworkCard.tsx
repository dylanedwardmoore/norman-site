import React, { FunctionComponent, useState } from "react";
import {Image, Row, Col} from 'react-bootstrap'
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
   <section id={props.id}>
  <Row>
    <Col xs={6}>
  <Image fluid className="fitImage" style={{height: "700px" }}src={props.imageSrc} />
  </Col>
  <Col xs={6}>
    <div className="centerParent">
      <div className="centerChild">
    <h3>{props.cardText}</h3>
    <p>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    </div>
    </div>
    </Col>
</Row>
  </section>
)
}

export default ArtworkCard;