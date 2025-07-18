import React from 'react'
import Link from 'next/link'
import { GoArrowRight } from "react-icons/go";
import Image from 'next/image';


function Page() {
  return (
    <>
      <section className="flex bg-[url('/law.svg')] bg-cover bg-no-repeat bg-[#ffff] bg-center min-h-screen items-center">
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


    <section className="max-w-7xl mx-auto p-12 bg-white">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Transactional</h2>
        
        <div className="relative mb-6">
        <div className="relative h-64 bg-[url('/transac.svg')] bg-cover bg-no-repeat flex items-center justify-center">
          
        </div>
        </div>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed">
            record of successfully enforcing intellectual property rights, safeguarding our clients&apos; innovations and 
            Our Transactional practice is at the forefront of shaping Nigerias commercial landscape and is dedicated to facilitating 
            successful business deals and partnerships. We advise clients on mergers and acquisitions, joint ventures, corporate 
            finance, and commercial contracts. With a keen understanding of the Nigerian market and a global perspective, our attorneys
            provide strategic guidance throughout the transaction process, ensuring that our clients achieve their business objectives
            while mitigating legal risks. From startups to multinational corporations, we are trusted advisors in navigating 
             the complexities of business transactions.
          </p>
        </div>
      </div>
    </section>

   <section className="py-16 bg-white text-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Intellectual Property */}
      <Link href="/intellectualproperty" className="block">
        <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center cursor-pointer">
          <div className="mb-6 flex justify-center">
            <Image 
              src="/Vector0.svg" 
              alt="Intellectual Property" 
              width={64} 
              height={64} 
              className="text-blue-600" 
            />          </div>
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
            <Image 
              src="/Vector2.svg" 
              alt="Intellectual Property" 
              width={64} 
              height={64} 
              className="text-blue-600" 
            />           </div>
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
            <Image 
              src="/Vector3.svg" 
              alt="Intellectual Property" 
              width={64} 
              height={64} 
              className="text-blue-600" 
            />           </div>
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
            <Image 
              src="/Vector4.svg" 
              alt="Intellectual Property" 
              width={64} 
              height={64} 
              className="text-blue-600" 
            />           </div>
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
            <Image 
              src="/Vector5.svg" 
              alt="Intellectual Property" 
              width={64} 
              height={64} 
              className="text-blue-600" 
            />           </div>
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

export default Page