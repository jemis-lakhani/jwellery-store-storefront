import { Button, Container, Heading } from "@medusajs/ui"
import Image from "next/image"
import hero from "../../../../../public/images/hero.png"
import hero2 from "../../../../../public/images/hero2.jpg"
import newi from "../../../../../public/images/newi.png"
import earring from "../../../../../public/images/earring.jpg"
import bracelet from "../../../../../public/images/bracelet.jpg"
import ring from "../../../../../public/images/ring.jpg"
import necklace from "../../../../../public/images/necklace.jpg"

const Hero = () => {
  return (
    <>
      <div
        className="w-full border-b border-ui-border-base relative bg-background"
        style={{ height: "calc(100vh - 4rem)" }}
      >
        <div className="absolute inset-0 z-10 flex items-center text-center small:p-8 gap-6 ml-1">
          <span className="flex flex-col gap-2">
            <Heading
              level="h1"
              className="text-6xl text-left leading-none text-white font-bold"
            >
              Discover Your Sparkle
            </Heading>
            <Heading
              level="h2"
              className="text-3xl text-left leading-none text-white font-medium"
            >
              Explore Exquisite Jewelry Creations
            </Heading>
          </span>
        </div>
        <div className="absolute right-0 top-0 h-full ">
          <Image
            src={hero}
            alt="Hero Image"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </div>
      <Container className="container relative grid grid-cols-5 mx-auto px-10 py-16 rounded-none shadow-none">
        <div className="flex flex-col gap-3 items-center justify-center">
          <Image
            src={newi}
            alt="Hero Image"
            sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
            className="cursor-pointer hover:scale-125 transition-all duration-300"
            style={{ height: "120px", width: "120px" }}
          />
          <span className="uppercase text-sm leading-none">New</span>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <Image
            src={ring}
            alt="Hero Image"
            sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
            className="cursor-pointer hover:scale-125 transition-all duration-300"
            style={{ height: "120px", width: "120px" }}
          />
          <span className="uppercase text-sm leading-none">Ring</span>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <Image
            src={earring}
            alt="Hero Image"
            sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
            className="cursor-pointer hover:scale-125 transition-all duration-300"
            style={{ height: "120px", width: "120px" }}
          />
          <span className="uppercase text-sm leading-none">earring</span>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <Image
            src={bracelet}
            alt="Hero Image"
            sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
            className="cursor-pointer hover:scale-125 transition-all duration-300"
            style={{ height: "120px", width: "120px" }}
          />
          <span className="uppercase text-sm leading-none">bracelet</span>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <Image
            src={necklace}
            alt="Hero Image"
            sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
            className="cursor-pointer hover:scale-125 transition-all duration-300"
            style={{ height: "120px", width: "120px" }}
          />
          <span className="uppercase text-sm leading-none">necklace</span>
        </div>
      </Container>
      <Container className="container reltive mx-auto px-10 pb-16 w-full rounded-none shadow-none">
        <div className="flex items-center h-full mx-20 gap-10">
          <div className="h-full flex justify-center">
            <Image src={hero2} alt="Hero2 Image" />
          </div>
          <div className="w-2/5 flex flex-col gap-3">
            <Heading
              level="h1"
              className="text-4xl text-left leading-none text-black font-bold"
            >
              Elevate Your Style
            </Heading>
            <Heading className="text-base text-left text-muted-foreground leading-5 font-normal">
              Discover the essence of sophistication and elegance with our
              captivating jewelry collection.
            </Heading>
            <a
              href="https://github.com/medusajs/nextjs-starter-medusa"
              target="_blank"
            >
              <Button className="relative flex h-[40px] mt-5 w-40 items-center justify-center rounded-none overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-gray-200 hover:before:h-56 hover:before:w-56">
                <span className="relative z-10">Explore Now</span>
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Hero
