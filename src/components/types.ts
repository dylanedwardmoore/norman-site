export type TextAttachmentType = "TextAttachmentType"
export type ImageAttachmentType = "ImageAttachmentType"
export type VideoAttachmentType = "VideoAttachmentType"
type AttachmentType = TextAttachmentType | ImageAttachmentType | VideoAttachmentType

interface MediaSource {
  url: string
}

type Text = {
  text: string
}

export type TextAttachment = {
  text: Text
  type: TextAttachmentType
}

export type ImageAttachment = {
  src: MediaSource,
  alt: string,
  type: ImageAttachmentType
}

export type VideoAttachment = {
  src: MediaSource,
  alt: string,
  type: VideoAttachmentType
}

type Attachment = TextAttachment | ImageAttachment | VideoAttachment

type CarouselOverlay = {
  title: Text,
  subtitle: Text,
}

type CarouselOverlayShade = {
  overlayShade: "black-strong" | "black-slight" | "black-light"
}

export type CarouselObjectWithOverlay = Attachment & CarouselOverlay & CarouselOverlayShade

export type CarouselContentAndControls = {
  carouselObjects: CarouselObjectWithOverlay[],
  showControls: boolean,
  showIndicators: boolean,
  activeItemIndex: number
}