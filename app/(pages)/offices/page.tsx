import React from 'react'
import Image from 'next/image';


function page() {
  return (
    <>

     <section className="flex bg-[url('/practiseimg.svg')] bg-cover bg-no-repeat bg-[#ffff] bg-center min-h-screen items-center">
        {/* Left Content */}
        <div className="text-white p-4 md:p-12 lg:p-24 space-y-3 md:space-y-5 max-w-full">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
            Offices 
          </h1>
          <p className="text-sm md:text-base lg:text-lg">
          Experienced. Strategic. Committed to<br/>
           Protecting Your Rights and Delivering Results
          </p>
          
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Locations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white text-black overflow-hidden transition-shadow duration-300">
            <div className="aspect-[4/3] relative">
              <Image
                src="/abuja.svg"
                alt="Abuja office"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Abuja
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Gudu Plaza, Abuja Nigeria
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-gray-700 font-medium text-sm">Phone</span>
                  <span className="text-gray-600 text-sm">+2349049002761</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-700 font-medium text-sm">Email</span>
                  <span className="text-gray-600 text-sm">info@venan-attorneys.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-black overflow-hidden  transition-shadow duration-300">
            <div className="aspect-[4/3] relative">
              <Image
                src="/lagos.svg"
                alt="Lagos office"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Lagos
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Norman Street, Ikoyi, Lagos Nigeria
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-gray-700 font-medium text-sm">Phone</span>
                  <span className="text-gray-600 text-sm">+2349049002761</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-700 font-medium text-sm">Email</span>
                  <span className="text-gray-600 text-sm">info@venan-attorneys.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-black overflow-hidden  transition-shadow duration-300">
            <div className="aspect-[4/3] relative">
              <Image
                src="/uk.svg"
                alt="United Kingdom office"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                United Kingdom
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-gray-700 font-medium text-sm">Phone</span>
                  <span className="text-gray-600 text-sm">+447917490462</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-700 font-medium text-sm">Email</span>
                  <span className="text-gray-600 text-sm">info@venan-attorneys.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default page
