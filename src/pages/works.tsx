import React from "react";
import Container from 'react-bootstrap/Container';
import Scrollspy, { ScrollspyMenuItem } from './scrollspy';
import ArtworkCard, { ArtworkCardProps } from '../components/ArtworkCard'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
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
    displayText: "Item 1 is the first item",
  },
  {
    id: "item-2",
    displayText: "Item 2 the second",
  },
  {
    id: "item-3",
    displayText: "Item 3",
  },
  {
    id: "item-4",
    displayText: "Item 4 is the best item on this list",
  },
]

export default function Works() {
  return (
    <>
    <div className="worksPageContainer full-height">
    <Row className="full-height">
      <Col xs sm className="full-height worksLeftcol">{generateArtworkCards(artworkCardsContents)}</Col>
    <Col className="d-none d-md-block" md={2}>
    <table className="full-height" style={{marginLeft: "auto"}}>
      <tbody>
        <tr>
          <td className="center-table-cell">
            <h4>Timeline</h4>
            <Scrollspy menuItems={menuItems}
              itemContainerClassName="scrollSpyContainer"
              activeItemClassName="activeWorksMenuItem"
              itemClassName="spyItemClass"/> 
          </td>
        </tr>
      </tbody>
    </table>
    
    </Col>
  </Row>   
    </div>
    </>
  );
}