"use client"
import React from 'react'
import Image from 'next/image';

const services = [
  { text: "Intellectual Property", path: "/intellectualproperty" },
  { text: "Litigation", path: "/litigation" },
  { text: "Restructuring", path: "/restructuring" },
  { text: "Energy", path: "/energy" },
  { text: "Transactional", path: "/transactional" },
];

function Footer() {
  return (
   <footer className="bg-blue-900 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <a href="#" className="text-white hover:text-blue-300 transition-colors">
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={20}
                height={20}
                
              />
            </a>
            <a href="#" className="text-white hover:text-blue-300 transition-colors">
              <Image
                src="/twitter.svg"
                alt="Twitter"
                width={20}
                height={20}
                
              />
            </a>
            <a href="#" className="text-white hover:text-blue-300 transition-colors">
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
                
              />
            </a>
            <a href="#" className="text-white hover:text-blue-300 transition-colors">
              <Image
                src="/youtube.svg"
                alt="YouTube"
                width={20}
                height={20}
                
              />
            </a>



            <div className="text-white text-sm">
            <a href="/privacy-policy" className="hover:text-blue-300 transition-colors">
              Privacy Policy
            </a>
          </div>
          </div>
          
          
          
          <div className="text-white text-sm">
            © 2025 Evan & Co. Attorneys. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer