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

      
      {/* Sandra Kuro Section */}
      <section className="mx-auto p-4 md:p-8 lg:p-20 bg-[#ffff]">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* Image */}
      <div className="order-2 lg:order-1">
        <div className="w-full max-w-md mx-auto">
          <Image
            src="/1.svg"
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
          AGHWARETOMA OGHENEGHARE FORTUNE
        </h2>
        
        <div className="space-y-4 text-black">
          <p className="text-sm md:text-base leading-relaxed text-justify">
            Ogheneghare is a distinguished lawyer and Senior Associate in the Energy & 
            Natural Resources Practice Group, where he leverages his extensive legal expertise 
            to advise financial institutions and corporate entities. Based in the firm's 
            Abuja office, he liaises with regulatory agencies on behalf of clients, ensuring 
            compliance and facilitating seamless transactions.
          </p>
          
          <p className="text-sm md:text-base leading-relaxed text-justify">
            A collaborative professional, Fortune is dedicated to employing collective efforts 
            to resolve client challenges, drawing motivation from the achievements of 
            individuals who have made significant societal contributions. His substantial 
            experience in corporate and commercial law encompasses the following focus areas:
          </p>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">PRACTICE AREAS</h3>
            <ul className="space-y-1 text-sm md:text-base">
              <li>• Mergers and acquisitions</li>
              <li>• Environmental and Social Governance (ESG)</li>
              <li>• Renewable Energy Development</li>
              <li>• Energy investments</li>
              <li>• Project Finance and Investment</li>
              <li>• Oil & Gas Exploration and Production</li>
              <li>• Energy Trading and Supply</li>
            </ul>
          </div>
          
          <p className="text-sm md:text-base leading-relaxed text-justify">
            With a profound understanding of the Nigerian legal and regulatory landscape, 
            Fortune is committed to delivering practical, commercial solutions for 
            complex transactions.
          </p>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">EDUCATION</h3>
            <ul className="space-y-1 text-sm md:text-base">
              <li>• University of Benin (LL.B)</li>
              <li>• The Nigerian Law School, BL</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">MEMBERSHIP OF PROFESSIONAL SOCIETIES</h3>
            <ul className="space-y-1 text-sm md:text-base">
              <li>• Nigerian Bar Association</li>
              <li>• NBA-SBL</li>
              <li>• Lawyers in Energy Network</li>
              <li>• Nigeria Gas Association</li>
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