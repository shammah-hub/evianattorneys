import React from 'react'
import Link from 'next/link'
import { GoArrowRight } from "react-icons/go";


function page() {
  return (
    <>
     <section className="flex bg-[url('/practiseimg.svg')] bg-cover bg-no-repeat bg-[#ffff] bg-center min-h-screen items-center">
        {/* Left Content */}
        <div className="text-white p-4 md:p-12 lg:p-24 space-y-3 md:space-y-5 max-w-full">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
            Practise Areas 
          </h1>
          <p className="text-sm md:text-base lg:text-lg">
          Experienced. Strategic. Committed to<br/>
           Protecting Your Rights and Delivering Results
          </p>
          
        </div>
      </section>

       <section className="mx-auto p-4 md:p-8 lg:p-20 bg-[#ffff]">
      <h3 className='text-4xl font-bold text-center text-black'>Who We Are</h3>
      
      <p className="text-black py-10 leading-relaxed mb-3 md:mb-4 text-left md:text-justify text-sm md:text-base">
        At Evian & Co. Attorney, we provide clear, strategic legal guidance tailored to your needs. Whether you&apos;re facing a legal dispute, planning for the future, or managing a business, our experienced team is here to protect your interests and help you move forward with confidence.
        Explore our services to see how we can support you.
      </p>

       
    </section>


    <section className="py-16 bg-white text-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Intellectual Property */}
      <Link href="/intellectualproperty" className="block">
        <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center cursor-pointer">
          <div className="mb-6 flex justify-center">
            <img src="/Vector0.svg" alt="Intellectual Property" className="w-16 h-16 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Intellectual Property</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Protecting innovation and creativity through strategic IP counseling and enforcement
          </p>
          <div className="flex justify-center">
            <GoArrowRight className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </Link>

      {/* Litigation */}
      <Link href="/litigation" className="block">
        <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center cursor-pointer">
          <div className="mb-6 flex justify-center">
            <img src="/Vector2.svg" alt="Litigation" className="w-16 h-16 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Litigation</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Resolving complex disputes through strategic advocacy in courts and arbitration.
          </p>
          <div className="flex justify-center">
            <GoArrowRight className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </Link>

      {/* Restructuring */}
      <Link href="/restructuring" className="block">
        <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center cursor-pointer">
          <div className="mb-6 flex justify-center">
            <img src="/Vector3.svg" alt="Restructuring" className="w-16 h-16 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Restructuring</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Guiding clients through financial and operational turnarounds with tailored legal solutions.
          </p>
          <div className="flex justify-center">
            <GoArrowRight className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </Link>

      {/* Energy */}
      <Link href="/energy" className="block">
        <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center cursor-pointer">
          <div className="mb-6 flex justify-center">
            <img src="/Vector4.svg" alt="Energy" className="w-16 h-16 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Energy</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Advising on regulatory, transactional, and project development across the energy sector.
          </p>
          <div className="flex justify-center">
            <GoArrowRight className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </Link>

      {/* Transactional */}
      <Link href="/transactional" className="block">
        <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center cursor-pointer">
          <div className="mb-6 flex justify-center">
            <img src="/Vector5.svg" alt="Transactional" className="w-16 h-16 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Transactional</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Guiding clients through deals with precise structuring and negotiation.
          </p>
          <div className="flex justify-center">
            <GoArrowRight className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </Link>
      
    </div>
  </div>
</section>
      
    </>
  )
}

export default page