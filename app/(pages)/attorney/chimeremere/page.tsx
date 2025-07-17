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
            src="/4.svg"
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
          CHUKWUKADIBA CHIMEREMEZE KEMDIUBESIS
        </h2>
        
        <div className="space-y-4 text-black">
          <p className="text-sm md:text-base leading-relaxed text-justify">
            Chime is a distinguished and highly motivated legal practitioner whose expertise in corporate governance & compliance has established him as an exceptional talent within the firm. Renowned for his incisive analytical abilities and intuitive understanding of complex legal and commercial matters, Chime consistently delivers insightful and pragmatic solutions, making him an invaluable asset to the team.
          </p>
          
          <p className="text-sm md:text-base leading-relaxed text-justify">
            Chime's practice focuses on the intricate domains of Corporate Governance & Compliance, where he demonstrates an exceptional ability to navigate complex, multifaceted legal frameworks and transactional landscapes. His keen intellect and meticulous attention to detail enable him to craft strategies that align with clients' strategic objectives while maintaining the highest standards of legal excellence.
          </p>
          
          <p className="text-sm md:text-base leading-relaxed text-justify">
            Beyond his professional accomplishments, Chime is a dedicated lifelong learner, committed to continuously expanding his knowledge base and staying abreast of developments in the legal field. Chime's diverse intellectual pursuits drive him to explore diverse areas of interest, and he actively pursues spontaneous hobbies that enrich his perspective and enhance his ability to think creatively. This blend of discipline and adaptability underscores his approach to law as both a professional and personal endeavor.
          </p>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">EDUCATION</h3>
            <ul className="space-y-1 text-sm md:text-base">
              <li>• ND STATE University (LLB)</li>
              <li>• The Nigerian Law School, BL</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">PRACTICE AREAS</h3>
            <ul className="space-y-1 text-sm md:text-base">
              <li>• Corporate Governance</li>
              <li>• Energy & Infrastructure Transactions</li>
              <li>• International Trade & Foreign Direct Investment</li>
              <li>• Real Estate & Infrastructure</li>
              <li>• Regulatory Compliance</li>
              <li>• Dispute Resolution and Arbitration</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">MEMBERSHIP OF PROFESSIONAL SOCIETIES</h3>
            <ul className="space-y-1 text-sm md:text-base">
              <li>• Nigerian Bar Association</li>
              <li>• Institute of Chartered Mediators and Conciliators (ICMC)</li>
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