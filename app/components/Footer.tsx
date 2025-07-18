"use client"
import React from 'react'
import Image from 'next/image';


function Footer() {
  return (
   <footer className="bg-blue-900 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <a href="https://www.linkedin.com/company/evian-co-attorneys/" className="text-white hover:text-blue-300 transition-colors">
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={20}
                height={20}
                
              />
            </a>
            <a href="https://x.com/evian_attorneys?s=21" className="text-white hover:text-blue-300 transition-colors">
              <Image
                src="/twitter.svg"
                alt="Twitter"
                width={20}
                height={20}
                
              />
            </a>
            <a href="https://www.instagram.com/evian_attorneys?igsh=MW83ZmhudmJxZ2Y3cw==" className="text-white hover:text-blue-300 transition-colors">
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
                
              />
            </a>
            <a href="www.youtube.com/@EVIAN_ATTORNEYS" className="text-white hover:text-blue-300 transition-colors">
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