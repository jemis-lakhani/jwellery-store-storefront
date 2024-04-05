"use client"

import { Image as MedusaImage } from "@medusajs/medusa"
import AliceCarousel from "react-alice-carousel"
import { Container } from "@medusajs/ui"
import Image from "next/image"
import clsx from "clsx"
import { useState } from "react"

type ImageGalleryProps = {
  images: MedusaImage[]
}

const CustomCarousel = ({ images }: ImageGalleryProps) => {
  const [isDragging, setIsDragging] = useState(false)
  const handleDragStart = (e: any) => {
    e.preventDefault()
    setIsDragging(true)
  }
  const handleDragEnd = (e: any) => {
    e.preventDefault()
    setIsDragging(false)
  }
  const items = images.map((image, index) => {
    return (
      <Container
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        role="presentation"
        key={image.id}
        className={clsx(
          "brelative aspect-[29/34] w-full small:max-h-[400px] overflow-hidden hover:cursor-grab bg-ui-bg-subtle rounded-none",
          {
            "hover:cursor-grabbing": isDragging,
          }
        )}
        id={image.id}
      >
        <Image
          src={image.url}
          priority={index <= 2 ? true : false}
          className="absolute inset-0 rounded-none"
          alt={`Product image ${index + 1}`}
          fill
          sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
          style={{
            objectFit: "cover",
          }}
        />
      </Container>
    )
  })
  return (
    <AliceCarousel
      autoPlay
      autoPlayInterval={2000}
      animationType="slide"
      animationDuration={1000}
      infinite
      mouseTracking
      items={items}
      responsive={{ 0: { items: 1 } }}
      disableButtonsControls
    />
  )
}

export default CustomCarousel
