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
            src="/5.svg"
            alt=""
            width={500}
            height={500}
            className="w-full h-auto shadow-lg"
            />
        </div>
      </div>
      
      {/* Content */}
      <div className="order-1 lg:order-2 space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
          ABIMBOLA MOYOSORE
        </h2>
        
        <div className="space-y-4 text-black">
          <p className="text-sm md:text-base leading-relaxed text-justify">
            Moyosore Abimbola is a legally trained professional with a growing speciality at 
            the intersection of energy policy, financial services, and regulatory compliance.
          </p>
          
          <p className="text-sm md:text-base leading-relaxed text-justify">
            Moyosore has worked as the sole in-house Legal Officer, a distributed energy 
            company in Nigeria, where she provided extensive legal and commercial matters 
            support. Her responsibilities ranged from contract drafting and negotiation to ESG 
            risk analysis, intergovernmental advisory, and strategic regulatory engagement. 
            She also supported the design and implementation of the Environmental, Social, 
            and Governance strategy.
          </p>
          
          <p className="text-sm md:text-base leading-relaxed text-justify">
            Moyosore is known for her collaborative work ethic, intellectual curiosity, and 
            commitment to delivering solutions that are equitable and accountable. She is 
            particularly motivated by work that supports access to education, energy, and 
            justice. Her combined experience spans law, customer-facing financial services, 
            ESG, and policy, making her well-positioned to contribute to projects that 
            demand analytical rigour, clear communication, and stakeholder engagement.
          </p>
          
          <p className="text-sm md:text-base leading-relaxed text-justify">
            She is a graduate of International Energy Law and Policy at the University of Dundee, 
            deepening her knowledge of global energy transactions, environmental law, 
            and regulatory frameworks.
          </p>
          
          <p className="text-sm md:text-base leading-relaxed text-justify">
            Moyosore is committed to lifelong learning, regulatory excellence, and using 
            her voice to support fair, inclusive, and sustainable systems.
          </p>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">EDUCATION</h3>
            <ul className="space-y-1 text-sm md:text-base">
              <li>• LLM, International Energy & Policy - University of Dundee</li>
              <li>• BL, Nigerian Law School</li>
              <li>• LLB (Hons), Ajayi Crowther University</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">MEMBERSHIP OF PROFESSIONAL SOCIETIES</h3>
            <ul className="space-y-1 text-sm md:text-base">
              <li>• Nigerian Bar Association</li>
              <li>• Institute of Chartered Secretaries and Administrators of Nigeria (ICSAN)</li>
              <li>• Nigerian Bar Association</li>
              <li>• The Chartered Institute of Arbitrators</li>
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