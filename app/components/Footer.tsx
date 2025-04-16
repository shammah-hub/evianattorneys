"use client"
import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import Link from 'next/link';

const services = [
  { text: "Intellectual Property", path: "/intellectualproperty" },
  { text: "Litigation", path: "/litigation" },
  { text: "Restructuring", path: "/restructuring" },
  { text: "Energy", path: "/energy" },
  { text: "Transactional", path: "/transactional" },
];

function Footer() {
  return (
    <footer className="space-y-12 bg-[url('/footer.svg')] bg-cover bg-center bg-[#182492] text-white ">
      {/* services */}
      <div className="w-full px-3">
              
      <div className="flex flex-col w-full py-4 justify-center items-center gap-4 md:flex-wrap md:flex-row">
              {services.map((service, index) => (
                <Link href={service.path} key={index} className="w-full md:w-auto">
                  <div className="flex justify-center items-center w-full md:w-[286px] h-[70px] bg-[#fdefe0] text-black text-[20px] bg-opacity-30 p-3 hover:bg-opacity-50 transition-all cursor-pointer">
                    {service.text}
                  </div>
                </Link>
                ))}
           </div>
           </div>

           <div className='py-24 md:px-40 px-4 space-y-5'>
            <h3 className='md:text-[40px] text-3xl'>Experience Law at Its Pinnacle. <br className="md:block hidden"/>
             Work with <span className='italic font-serif text-[#EFA657]'>Evian & Co. Attorneys</span></h3>
             <button className='bg-white rounded-3xl py-3 px-4 text-[#182492]'> Reach out to Us Now</button>
           </div>

           <div className="md:px-40 px-4 text-white md:flex block items-center justify-between">
               <div className="mb-8 md:mb-0">
                   <h2 className="text-xl font-bold mb-2">Contact Us</h2>
                   <h3 className="font-semibold">Head Office</h3>
                   <p>No. 9 Sani Zagon-Daura Street, Guzape Abuja</p>
                   <p>FCT, Nigeria.</p>
                </div>
            <div className="items-center space-y-4 mb-8 md:mb-0">
             <div className="flex items-center space-x-2">
              <span>📞</span>
            <div>
               
               <p>09040022761</p>
            </div>
          </div>
           <div className="flex items-center space-x-2">
                  <span>✉️</span>
                 <p>evianlegalchambers@gmail.com</p>
           </div>
           </div>
         <div className="flex space-x-4">
             <a href="#linkedin"><CiLinkedin/></a>
             <a href="#x"><FaXTwitter/></a>
             <a href="#instagram"><FaInstagram/></a>
             <a href="#youtube"><FaYoutube/></a>
         </div>
       </div>

         <div className='w-full h-full p-6 flex justify-center bg-[#182489]'>
            <p>© 2019 Evian & Co. Attorneys. All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer