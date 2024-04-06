"use client"

import React from "react"
import instagram from "../../../../../public/instagram.svg"
import facebook from "../../../../../public/facebook.svg"
import whatsapp from "../../../../../public/whatsapp.svg"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Accordion from "@modules/products/components/product-tabs/accordion"

const footerTabs = {
  Explore: ["New Collection", "Rings", "Bracelets", "Necklaces", "Earrings"],
  "Contact Us": ["Customer Care", "Email", "WhatsApp"],
  "Quick Links": ["Home", "Category", "About Us", "Customer Reviews", "FAQ"],
  "Follow Us": ["Instagram", "Facebook", "WhatsApp"],
}

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="container hidden small:flex justify-around mx-auto max-w-screen-medium text-base p-8">
        <div className="p-4">
          <h2 className="text-base text-gray-800 font-semibold mb-3">
            Explore
          </h2>
          <div className="flex flex-col gap-3 text-sm">
            <a className="leading-none tracking-normal text-gray-600" href="\">
              New Collection
            </a>
            <a className="leading-none tracking-normal text-gray-600" href="\">
              Rings
            </a>
            <a className="leading-none tracking-normal text-gray-600" href="\">
              Bracelets
            </a>
            <a className="leading-none tracking-normal text-gray-600" href="\">
              Necklaces
            </a>
            <a className="leading-none tracking-normal text-gray-600" href="\">
              Earring
            </a>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-base font-semibold mb-3 text-gray-800">
            Contact Us
          </h2>
          <div className="flex flex-col gap-3 text-sm">
            <a className="leading-none tracking-normal text-gray-600" href="\">
              Customer Care
            </a>
            <a className="leading-none tracking-normal text-gray-600" href="\">
              Email
            </a>
            <a className="leading-none tracking-normal text-gray-600" href="\">
              WhatsApp
            </a>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-base font-semibold mb-3 text-gray-800">
            Quick Links
          </h2>
          <div className="flex flex-col gap-3 text-sm">
            <a className="leading-none tracking-normal text-gray-600" href="\">
              Home
            </a>
            <a className="leading-none tracking-normal text-gray-600" href="\">
              Category
            </a>
            <a className="leading-none tracking-normal text-gray-600" href="\">
              About Us
            </a>
            <a className="leading-none tracking-normal text-gray-600" href="\">
              Customer Reviews
            </a>
            <a className="leading-none tracking-normal text-gray-600" href="\">
              FAQ
            </a>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-base font-semibold mb-3 text-gray-800">
            Follow Us
          </h2>
          <div className="flex flex-col gap-3 text-sm">
            <LocalizedClientLink
              href="/"
              className="flex items-center text-sm gap-2 text-gray-600"
            >
              <Image
                src={instagram}
                alt="instagram"
                height={20}
                width={20}
              ></Image>
              <span className="leading-none tracking-normal">Instagram</span>
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/"
              className="flex items-center text-sm gap-2 text-gray-600"
            >
              <Image
                src={facebook}
                alt="facebook"
                height={20}
                width={20}
              ></Image>
              <span className="leading-none tracking-normal">Facebook</span>
            </LocalizedClientLink>
            <LocalizedClientLink
              href="/"
              className="flex items-center text-sm gap-2 text-gray-600"
            >
              <Image
                src={whatsapp}
                alt="whatsapp"
                height={20}
                width={20}
              ></Image>
              <span className="leading-none tracking-normal">Whatsapp</span>
            </LocalizedClientLink>
          </div>
        </div>
      </div>
      <div className="flex flex-col small:hidden p-6">
        {Object.entries(footerTabs).map(([key, tabs]) => {
          return (
            <Accordion type="multiple" style={{ width: "100%" }}>
              <Accordion.Item
                key={key}
                title={key}
                value={key}
                className="w-full border-t-0 text-gray-800"
                titleClass="text-base text-black font-semibold"
                contentClass="flex flex-col gap-3 leading-none tracking-normal text-sm mt-3"
              >
                {tabs.map((item, index) => (
                  <span key={item + index} className="text-gray-600">
                    {item}
                  </span>
                ))}
              </Accordion.Item>
            </Accordion>
          )
        })}
      </div>

      <div className="flex justify-center items-center text-sm text-black font-semibold leading-10 text-center">
        <span>
          © {new Date().getFullYear()} Evara Jwellary Store. All rights reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer
