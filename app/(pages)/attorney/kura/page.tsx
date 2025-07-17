import React from 'react'
import Image from 'next/image';


function page() {
  return (
     <>
      <section className="flex bg-[url('/law.svg')] bg-cover bg-no-repeat bg-[#ffff] bg-center min-h-screen items-center">
        {/* Left Content */}
        <div className="text-white p-4 md:p-12 lg:p-24 space-y-3 md:space-y-5 max-w-full">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
            Attorneys 
          </h1>
          <p className="text-sm md:text-base lg:text-lg">
          Experienced. Strategic. Committed to<br/>
           Protecting Your Rights and Delivering Results
          </p>
          
        </div>
      </section>

      

      <section className="mx-auto p-4 md:p-8 lg:p-20 bg-[#ffff]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="w-full max-w-md mx-auto">
                <Image
                src="/3.svg"
                alt="Faith Iniabassey Amaku"
                width={500}
                height={500}
                className="w-full h-auto shadow-lg"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
                IBRO SANDRA KURO
              </h2>
              
              <div className="space-y-4 text-black">
                <p className="text-sm md:text-base leading-relaxed text-justify">
                  Sandra is a versatile legal practitioner, Associate at Evian & Co and a graduate of 
                  the University of Dundee. Sandra&apos;s professional journey is marked by a 
                  strong commitment to advancing sustainable energy solutions and 
                  innovative legal frameworks.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed text-justify">
                  She has a robust background spanning legal research, arbitration, energy law and 
                  intellectual property.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed text-justify">
                  Sandra is renowned for her exemplary leadership, effective communication, and 
                  collaborative approach, she is committed to delivering strategic, research-driven 
                  solutions for clients and making a meaningful impact in the energy sector 
                  and the legal profession.
                </p>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">EDUCATION</h3>
                  <ul className="space-y-1 text-sm md:text-base">
                    <li>• University of Dundee (LLM, International Energy Law and Policy)</li>
                    <li>• Nigerian Law School (BL)</li>
                    <li>• Afe Babalola University (LLB)</li>
                  </ul>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">MEMBERSHIP OF PROFESSIONAL SOCIETIES</h3>
                  <ul className="space-y-1 text-sm md:text-base">
                    <li>• Nigerian Bar Association</li>
                    <li>• Society of Petroleum Engineers</li>
                    <li>• Nigerian Institute of Chartered Arbitrators</li>
                  </ul>
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