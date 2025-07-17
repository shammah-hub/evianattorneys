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

    

      <section className="mx-auto p-4 md:p-8 lg:p-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="w-full max-w-md mx-auto">
                <Image
                  src="/ew.svg"
                  alt="Sylvester Ewaensiha Okungbowa"
                  width={500}
                  height={500}
                  className="w-full h-auto shadow-lg"
                  />
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
                SYLVESTER EWAENSIHA OKUNGBOWA
              </h2>
              
              <div className="space-y-4 text-black">
                <p className="text-sm md:text-base leading-relaxed text-justify">
                Sylvester Ewaensiha Okungbowa is the Founding Managing Partner of Evian & Co., 
                leading the firm&apos;s Transactional Practice Team since its establishment in 2024. His founding of the 
                firm represents the culmination of an illustrious legal career marked by exceptional expertise in complex 
                commercial transactions and corporate advisory services.              
                  </p>
                
                <p className="text-sm md:text-base leading-relaxed text-justify">
                   Prior to being the founding partner, he served as Chief Executive Officer and Chairman of Chopwell
                   Global Solutions from 2018 to 2024. His corporate governance experience spans board positions at 
                   prominent companies, including Ledga Finance, Oyomon, Scribe, and CirclePay, where he held roles from 
                   Company Secretary to Chief Executive Officer. His legal foundation was established through internships 
                   and employment at several distinguished law firms.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed text-justify">
                  As a consummate solicitor, Sylvester has developed comprehensive expertise across practice areas fundamental to modern 
                  commercial law: Investments, Mergers, Startups, Acquisitions & Corporate Restructuring, Corporate Governance & Regulatory Compliance,
                  Construction & Real Estate, Business Recovery & Insolvency, and Commercial Litigation & Arbitration.             
                </p>

                <p className="text-sm md:text-base leading-relaxed text-justify">
                  Sylvester distinguishes himself through innovative thinking, meticulous attention to detail, and persistent pursuit of optimal
                  client outcomes. His client-centric approach consistently aligns legal solutions with business imperatives, earning 
                  recognition as a contemporary lawyer who transcends traditional boundaries to deliver comprehensive business solutions.        
                </p>

                   <p className="text-sm md:text-base leading-relaxed text-justify">
                  His unwavering commitment to client interests in transactional matters, litigation, and settlement negotiations
                  has consistently yielded successful outcomes, garnering considerable commendation from clients and peers alike. 
                  His practice of philosophy centers on the principle that exceptional legal counsel emerges from the intersection of 
                  technical expertise, business acumen, and genuine commitment to client success. Since establishing Evian & Co. Attorneys, 
                  he has maintained exacting standards while expanding practice scope to deliver sophisticated legal solutions that
                   meet the evolving needs of Nigeria dynamic business environment.       
                  </p>

                <p className="text-sm md:text-base leading-relaxed text-justify">
                  Beyond professional commitments, he maintains an active lifestyle, pursuing his passion for soccer and lawn tennis. 
                  He prioritizes relationships, devoting time to family and friends and broadens his perspective through global travel. 
                  He is also a devout member of the Roman Catholic Church.      
                </p>

                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">EDUCATION</h3>
                  <ul className="space-y-1 text-sm md:text-base">
                    <li>• University of Benin (LLB)</li>
                    <li>• Nigerian Law School (BL)</li>
                    <li>• LLM in view</li>

                  </ul>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">EXPERTISE AREAS</h3>
                  <ul className="space-y-1 text-sm md:text-base">
                    <li>• Real Estate & Infrastructure</li>
                    <li>• Private Equity & Venture Capital</li>
                    <li>• Banking & Finance</li>
                    <li>• Corporate Governance & Compliance</li>
                    <li>• Regulatory Compliance</li>
                    <li>• Mergers & Acquisitions</li>
                    <li>• Debt & Equity Transactions</li>
                    <li>• Commercial & Investment Banking</li>
                    <li>• Securities & Capital Markets</li>
                    <li>• Restructuring & Insolvency</li>
                    <li>• Trade & Finance</li>
                    <li>• Tax & Regulatory Compliance</li>
                  </ul>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">MEMBERSHIP OF PROFESSIONAL SOCIETIES</h3>
                  <ul className="space-y-1 text-sm md:text-base">
                    <li>• Nigerian Bar Association</li>
                    <li>• International Council for Commercial Arbitration (ICCA)</li>
                    <li>• Institute of Transnationational Arbitration (ITA)</li>
                    <li>• Rotary International (rotaract)</li>
                    <li>• Catholic Youth Organization of Nigeria (CYON)</li>
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