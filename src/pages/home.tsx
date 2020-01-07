import React from "react";
import Carousel from '../components/carousel';
import { CarouselContentAndControls } from '../components/types'

export default function Home() {
  const carouselContent: CarouselContentAndControls = { 
    showControls: true,
    showIndicators: true,
    activeItemIndex: 1,
    carouselObjects: [
      {
        src: {
          url: "https://www.robinwieruch.de/static/95d994995c6d40027b037bb9cf65e7c6/426ce/banner.jpg"
        },
        alt: "image 1",
        type: "ImageAttachmentType",
        title: {
          text: "image 1",
        },
        subtitle: {
          text: "image 1 subtitle"
        },
        overlayShade: "black-slight"
      },
      {
        src: {
          url: "https://www.robinwieruch.de/static/95d994995c6d40027b037bb9cf65e7c6/426ce/banner.jpg"
        },
        alt: "image 2",
        type: "ImageAttachmentType",
        title: {
          text: "image 12",
        },
        subtitle: {
          text: "image 1 2subtitle"
        },
        overlayShade: "black-slight"
      },
      {
        src: {
          url: "https://www.robinwieruch.de/static/95d994995c6d40027b037bb9cf65e7c6/426ce/banner.jpg"
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

  return (
    <div>
      <Carousel carousel={carouselContent}></Carousel>
      <h2>Home</h2>
    </div>
  );
}