import React from 'react';
import instagram from '../../../../../public/instagram.svg'
import facebook from '../../../../../public/facebook.svg'
import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className='flex justify-around bg-red-100 text-base font-serif'>
        <div>
          <h2 className='mt-5'><b className='-ml-3'>Contact Us</b></h2>
          <ul className='pt-3 list-disc'>
            <a href="\"><li>Customer Care</li></a>
            <a href="\"><li>WhatsApp</li></a>
            <a href="\"><li>Email</li></a>
          </ul>
        </div>
        <div>
          <h2 className='mt-5'><b className='-ml-3'>Quick Links</b></h2>
          <ul className='pt-3 list-disc pb-8'>
            <a href="\"><li>Home</li></a>
            <a href="\"><li>Category</li></a>
            <a href="\"><li>About Us</li></a>
            <a href="\"><li>Customer Reviews</li></a>
            <a href="\"><li>FAQ</li></a>
          </ul>
        </div>
        <div>
          <h2 className='mt-5'><b className='ml-2'>Follow Us</b></h2>
          <ul className='pt-3'>
            <li>
              <a className='flex' href="\">
                <Image src={instagram} alt="img" height={32}></Image>
                <span className='ml-1 text-lg'>Instagram</span>
              </a>
            </li>
            <li className='mt-1'>
              <a className='flex' href="\">
                <Image src={facebook} alt="img" height={32}></Image>
                <span className='text-lg ml-1'>Facebook</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="txt-compact-small text-black h-8 bg-red-200 text-center flex justify-center items-center">
        <span>
          © {new Date().getFullYear()} Evara Jwellary Store. All rights reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer;
