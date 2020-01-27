import React, { FunctionComponent } from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import { CarouselContentAndControls, CarouselObjectWithOverlay, 
  ImageAttachment, VideoAttachment, TextAttachment } from './types'

type CarouselProps = {
  carousel: CarouselContentAndControls
}
 
export const CarouselPage: FunctionComponent<CarouselProps> = ({carousel}) =>
  (
  <>
    <MDBCarousel
    activeItem={carousel.activeItemIndex}
    length={carousel.carouselObjects.length }
    showControls={carousel.showControls}
    showIndicators={carousel.showIndicators}
    className="z-depth-1"
  >
    <MDBCarouselInner>
      {
        console.log(carousel.carouselObjects.map(carouselItemFromObject))}
        {
        carousel.carouselObjects.map(carouselItemFromObject)
      }
    </MDBCarouselInner>
  </MDBCarousel>
  </>
  )

function carouselItemFromObject(item: CarouselObjectWithOverlay, index: number) {
  return (
  <MDBCarouselItem itemId={(index + 1)}>
    {(() => { 
    switch(item.type) {
      case 'ImageAttachmentType':
        return imageCarouselItemInternals(item, item.overlayShade)
    }
  })()}
  <MDBCarouselCaption>
    <h3 className="h3-responsive">{item.title.text}</h3>
    <p>{item.subtitle.text}</p>
    </MDBCarouselCaption>
  </MDBCarouselItem>
  )
}

function imageCarouselItemInternals(imageItem: ImageAttachment, overlayShade: string) {
  console.log(imageItem.src.url)
  return (
    <MDBView>
      <img
        className="d-block w-100"
        src={imageItem.src.url}
        alt={imageItem.alt}
      />
    <MDBMask overlay={overlayShade} />
    </MDBView>
  )
}

export default CarouselPage;