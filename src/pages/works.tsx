import React from "react";
import Container from 'react-bootstrap/Container';
import Scrollspy from './scrollspy';
import ArtworkCard, { ArtworkCardProps } from '../components/ArtworkCard'
import Card from 'react-bootstrap/Card'

 const artworkCardsContents: ArtworkCardProps[] = [
   {
     id: "item-1",
     cardText: "sample card 12345",
     imageSrc: "https://image.shutterstock.com/image-vector/realistic-apples-vector-260nw-1062722954.jpg",
   },
   {
    id: "item-3",
    cardText: "sample card 12345",
    imageSrc: "https://image.shutterstock.com/image-vector/realistic-apples-vector-260nw-1062722954.jpg",
  },
  {
    id: "item-4",
    cardText: "sample card 12345",
    imageSrc: "https://image.shutterstock.com/image-vector/realistic-apples-vector-260nw-1062722954.jpg",
  },
  {
    id: "item-2",
    cardText: "sample card 12345",
    imageSrc: "https://image.shutterstock.com/image-vector/realistic-apples-vector-260nw-1062722954.jpg",
  },
  {
    id: "item-5",
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

const otherArt = (
  <>
  <Scrollspy ids={["item-1", "item-2", "item-3", "item-4"]}
      itemContainerClassName="scrollSpyContainer"
      activeItemClassName="active"
      itemClassName="spyItemClass"/>
  <section className="section" id="item-1">
    <Card>
      <Card.Body>
        <Card.Text>
          "testsetestset taestasetset"
        </Card.Text>
      </Card.Body>
      <Card.Img variant="bottom" src="https://image.shutterstock.com/image-vector/realistic-apples-vector-260nw-1062722954.jpg" />
    </Card>
  </section>
  <section className="section" id="item-2">
    <Card>
      <Card.Body>
        <Card.Text>
          "testsetestset taestasetset"
        </Card.Text>
      </Card.Body>
      <Card.Img variant="bottom" src="https://image.shutterstock.com/image-vector/realistic-apples-vector-260nw-1062722954.jpg" />
    </Card>
  </section>
  <section id="item-3">
    <Card>
      <Card.Body>
        <Card.Text>
          "testsetestset taestasetset"
        </Card.Text>
      </Card.Body>
      <Card.Img variant="bottom" src="https://image.shutterstock.com/image-vector/realistic-apples-vector-260nw-1062722954.jpg" />
    </Card>
  </section>
  <section id="item-4">
    <Card>
      <Card.Body>
        <Card.Text>
          "testsetestset taestasetset"
        </Card.Text>
      </Card.Body>
      <Card.Img variant="bottom" src="https://image.shutterstock.com/image-vector/realistic-apples-vector-260nw-1062722954.jpg" />
    </Card>
  </section>
</>
)


export default function Works() {
  return (
    <>
      {otherArt}
      {/* {generateArtworkCards(artworkCardsContents)} */}
    </>
  );
}