import React from "react";
import Carousel from '../components/common/carousel';
import Scrollspy, { ScrollspyMenuItem } from './scrollspy';
import ArtworkCard, { ArtworkCardProps } from '../components/ArtworkCard'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import {carouselContent} from './home'
import {Row, Col} from 'react-bootstrap'

 const artworkCardsContents: ArtworkCardProps[] = [
   {
     id: "item-1",
     cardText: "sample card 12345",
     imageSrc: "https://image.shutterstock.com/image-vector/realistic-apples-vector-260nw-1062722954.jpg",
   },
   {
    id: "item-2",
    cardText: "sample card 12345",
    imageSrc: "https://image.shutterstock.com/image-vector/realistic-apples-vector-260nw-1062722954.jpg",
  },
  {
    id: "item-3",
    cardText: "sample card 12345",
    imageSrc: "https://image.shutterstock.com/image-vector/realistic-apples-vector-260nw-1062722954.jpg",
  },
  {
    id: "item-2",
    cardText: "sample card 12345",
    imageSrc: "https://image.shutterstock.com/image-vector/realistic-apples-vector-260nw-1062722954.jpg",
  },
  {
    id: "item-4",
    cardText: "sample card 12345",
    imageSrc: "https://image.shutterstock.com/image-vector/realistic-apples-vector-260nw-1062722954.jpg",
  },
 ]

 const generateArtworkCards = (props: ArtworkCardProps[]) => {
    return (
      <div>
        {
            props.map(cardProps => {
              return (
              <>
              <ArtworkCard {...cardProps}></ArtworkCard>
              </>
              )
            })
          }
      </div>
    )
 }

const menuItems: ScrollspyMenuItem[] = [
  {
    id: "item-1",
    displayText: "Item",
  },
  {
    id: "item-2",
    displayText: "Itemthesecond",
  },
  {
    id: "item-3",
    displayText: "Item-3-is-is",
  },
  {
    id: "item-4",
    displayText: "Work1IsLit",
  },
]

export default function Works() {
  return (
    <>
    <div className="worksPageContainer full-height">
    <Row>
      <Col xs={12} className="worksLeftcol">
      <Carousel carousel={carouselContent}></Carousel>
      </Col>
    </Row>
    <Row className="full-height">
      <Col xs sm className="full-height worksLeftcol">{generateArtworkCards(artworkCardsContents)}</Col>
    <Col className="d-none d-md-block" md={2}>
      <div className="centerParent">
      <div className="centerChildRight">
      <Scrollspy menuItems={menuItems}
        itemContainerClassName="scrollSpyContainer"
        activeItemClassName="activeWorksMenuItem"
        itemClassName="spyItemClass"/> 
        </div>
        </div>
    </Col>
  </Row>   
    </div>
    </>
  );
}