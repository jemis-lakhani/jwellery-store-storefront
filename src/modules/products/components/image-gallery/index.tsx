import { Image as MedusaImage } from "@medusajs/medusa"
import CustomCarousel from "./carousel"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return <CustomCarousel images={images}></CustomCarousel>
}

export default ImageGallery
