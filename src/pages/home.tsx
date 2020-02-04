import React from "react";
import Carousel from '../components/common/carousel';
import { CarouselContentAndControls } from '../components/common/types'

export const carouselContent: CarouselContentAndControls = { 
  showControls: true,
  showIndicators: true,
  activeItemIndex: 1,
  carouselObjects: [
    {
      src: {
        url: "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/il/ios12-product-lockup-callout.png"
      },
      alt: "image 1",
      type: "ImageAttachmentType",
      title: {
        text: "hkjkhhjkjklljkjklhimage 1",
      },
      subtitle: {
        text: "image 1 subtitle"
      },
      overlayShade: "black-slight"
    },
    {
      src: {
        url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MRXJ2?wid=532&hei=582&fmt=png-alpha&.v=1551489675083"
      },
      alt: "image 2",
      type: "ImageAttachmentType",
      title: {
        text: "kjljjlimage 12",
      },
      subtitle: {
        text: "image 1 2subtitle"
      },
      overlayShade: "black-slight"
    },
    {
      src: {
        url: "https://image.shutterstock.com/image-vector/realistic-apples-vector-260nw-1062722954.jpg"
      },
      alt: "image 2",
      type: "ImageAttachmentType",
      title: {
        text: "image 1sdfs2",
      },
      subtitle: {
        text: "image 1 2subtitle"
      },
      overlayShade: "black-slight"
    }
  ]
}


export default function Home() {

  return (
    <>
      <Carousel carousel={carouselContent}></Carousel>
      <h2>Home</h2>
    </>
  );
}