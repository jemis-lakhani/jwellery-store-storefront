"use client"

import { Container, Heading } from "@medusajs/ui"
import Image from "next/image"
import hero from "../../../../../public/images/hero.png"
import hero2 from "../../../../../public/images/hero2.jpg"
import newi from "../../../../../public/images/newi.png"
import earring from "../../../../../public/images/earring.jpg"
import bracelet from "../../../../../public/images/bracelet.jpg"
import ring from "../../../../../public/images/ring.jpg"
import necklace from "../../../../../public/images/necklace.jpg"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Hero = () => {
  useGSAP(() => {
    let container1 = document.querySelector(".container-1")
    var tl1 = gsap
      .timeline({
        defaults: {
          ease: "back.out(1.7)",
          duration: 1.5,
        },
        scrollTrigger: {
          trigger: container1,
          toggleActions: "play none none none",
          start: "top 10%",
        },
      })
      .to(".hero-1", {
        y: 0,
        opacity: 1,
        stagger: 0.2,
      })
  })

  useGSAP(() => {
    let container2 = document.querySelector(".container-2")
    var tl2 = gsap
      .timeline({
        defaults: {
          ease: "back.out(1.7)",
        },
        scrollTrigger: {
          trigger: container2,
          toggleActions: "play none none none",
          start: "top 60%",
          end: "+=1000",
        },
      })
      .to(".image-animate", {
        y: 0,
        duration: 1,
        opacity: 1,
        stagger: 0.2,
      })
  })

  useGSAP(() => {
    let container3 = document.querySelector(".container-3")
    var tl2 = gsap
      .timeline({
        defaults: {
          ease: "back.out(1.7)",
        },
        scrollTrigger: {
          trigger: container3,
          toggleActions: "play none none none",
          start: "top 70%",
          end: "top center",
        },
      })
      .to("#hero-2", {
        x: 0,
        duration: 1.5,
        opacity: 1,
      })
      .to(
        ".hero-2",
        {
          y: 0,
          x: 0,
          duration: 1,
          opacity: 1,
          stagger: 0.2,
        },
        "<0.5"
      )
  })

  return (
    <>
      <div className="container-1 relative w-full bg-background h-[25rem] small:h-[34rem] p-4">
        <div className="relative z-40 flex items-center justify-end h-full w-full medium:w-8/12 mx-auto select-none">
          <span className="relative flex flex-col w-full xsmall:p-10 small:p-0 small:w-10/12 gap-5 small:ml-80 medium:ml-64 large:ml-80">
            <Heading
              level="h1"
              className="text-4xl hero-1 translate-y-8 opacity-0 xsmall:text-5xl medium:text-6xl text-left leading-none text-black font-bold"
            >
              Discover Your Sparkle
            </Heading>
            <Heading
              level="h2"
              className="text-lg hero-1 translate-y-8 opacity-0 text-left capitalize leading-5 text-white font-normal"
            >
              Explore luxury and sophistication with our curated <br />
              collection of fine jewelry pieces
            </Heading>
            <LocalizedClientLink
              className="hero-1 translate-y-8 opacity-0 relative flex h-[40px] w-40 mt-4 items-center justify-center rounded-none overflow-hidden bg-black text-white shadow-2xl"
              href="/account"
              data-testid="nav-account-link"
            >
              Shop Now
            </LocalizedClientLink>
          </span>
        </div>

        <div className="absolute left-0 top-0 h-full opacity-40 small:opacity-100">
          <Image
            src={hero}
            alt="Hero Image"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </div>
      <Container className="container-2 relative gap-y-10 py-10 px-4 small:max-w-screen-small medium:max-w-screen-medium grid grid-cols-3 small:grid-cols-5 small:mx-auto small:gap-4 small:px-10 small:py-24 rounded-none shadow-none">
        <div className="translate-y-8 opacity-0 image-animate flex flex-col gap-3 items-center justify-center">
          <Image
            src={newi}
            alt="Hero Image"
            className="cursor-pointer hover:scale-[1.2] transition-all duration-300"
            style={{ height: "120px", width: "120px" }}
          />
          <span className="uppercase text-xs leading-none">New</span>
        </div>
        <div className="translate-y-8 opacity-0 image-animate flex flex-col gap-3 items-center justify-center">
          <Image
            src={ring}
            alt="Hero Image"
            sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
            className="cursor-pointer hover:scale-[1.2] transition-all duration-300"
            style={{ height: "120px", width: "120px" }}
          />
          <span className="uppercase text-xs leading-none">Ring</span>
        </div>
        <div className="translate-y-8 opacity-0 image-animate flex flex-col gap-3 items-center justify-center">
          <Image
            src={earring}
            alt="Hero Image"
            sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
            className="cursor-pointer hover:scale-[1.2] transition-all duration-300"
            style={{ height: "120px", width: "120px" }}
          />
          <span className="uppercase text-xs leading-none">earring</span>
        </div>
        <div className="translate-y-8 opacity-0 image-animate flex flex-col gap-3 items-center justify-center">
          <Image
            src={bracelet}
            alt="Hero Image"
            sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
            className="cursor-pointer hover:scale-[1.2] transition-all duration-300"
            style={{ height: "120px", width: "120px" }}
          />
          <span className="uppercase text-xs leading-none">bracelet</span>
        </div>
        <div className="translate-y-8 opacity-0 image-animate flex flex-col gap-3 items-center justify-center">
          <Image
            src={necklace}
            alt="Hero Image"
            sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
            className="cursor-pointer hover:scale-[1.2] transition-all duration-300"
            style={{ height: "120px", width: "120px" }}
          />
          <span className="uppercase text-xs leading-none">necklace</span>
        </div>
      </Container>
      <Container className="container-3 relative p-0 mx-auto my-10 small:max-w-screen-small medium:max-w-screen-medium rounded-none shadow-none">
        <div className="flex flex-wrap gap-6 small:gap-0 w-10/12 mx-auto">
          <div
            id="hero-2"
            className="translate-x-[-4rem] opacity-0 flex justify-center h-full w-full small:w-8/12"
          >
            <Image
              className="bg-no-repeat object-cover h-full w-full"
              src={hero2}
              alt="Hero2 Image"
            />
          </div>
          <div className="flex flex-col justify-center w-full small:w-4/12 gap-3 pl-0 small:pl-10">
            <Heading
              level="h1"
              className="hero-2 translate-y-8 opacity-0 text-4xl text-left leading-none text-black font-bold"
            >
              Elevate Your Style
            </Heading>
            <Heading className="hero-2 translate-y-8 opacity-0 text-base text-left text-muted-foreground leading-5 font-normal">
              Discover the essence of sophistication and elegance with our
              captivating jewelry collection.
            </Heading>
            <LocalizedClientLink
              className="hero-2 translate-y-8 opacity-0 relative flex h-[40px] w-40 mt-4 items-center justify-center rounded-none overflow-hidden bg-black text-white shadow-2xl"
              href="/account"
              data-testid="nav-account-link"
            >
              Explore More
            </LocalizedClientLink>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Hero
