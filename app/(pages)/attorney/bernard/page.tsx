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
            src="/2.svg"
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
          MADUKA CHIBUIKE BERNARD
        </h2>
        
        <div className="space-y-4 text-black">
          <p className="text-sm md:text-base leading-relaxed text-justify">            Chibuike is an accomplished senior associate and head of the litigation group, 
            presently contributing to the success of Evian & Co. Within the organization's 
            framework, he plays a pivotal role in guiding financial service providers and 
            corporate clients through regulatory complexities, ensuring adherence to legal 
            standards while enabling efficient and compliant business operations.
          </p>
          
          <p className="text-sm md:text-base leading-relaxed text-justify">
            Known for his collaborative spirit and results-driven approach, Chibuike excels 
            in finding practical legal pathways to resolve client concerns. He draws 
            inspiration from impactful leaders, creating a lasting impact on society and is driven 
            by a desire to create legal solutions that foster growth and resilience.
          </p>
          
          <p className="text-sm md:text-base leading-relaxed text-justify">
            He offers a wealth of experience across multiple legal domains, with particular 
            emphasis on:
          </p>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">PRACTICE AREAS</h3>
            <ul className="space-y-1 text-sm md:text-base">
              <li>• Governance and Compliance Frameworks</li>
              <li>• Privacy Policies and Data Protection</li>
              <li>• Cyber Energy Projects and Sustainability</li>
              <li>• Litigation</li>
              <li>• Dispute Resolution, Advocacy and Litigation</li>
              <li>• Structured Finance and Capital Investment</li>
              <li>• Energy Markets and Commodity Trading</li>
            </ul>
          </div>
          
          <p className="text-sm md:text-base leading-relaxed text-justify">
            Chibuike's thorough grasp of Nigeria's statutory and regulatory systems enables 
            him to deliver grounded, commercially viable legal counsel in a fast-changing 
            business environment.
          </p>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">EDUCATION</h3>
            <ul className="space-y-1 text-sm md:text-base">
              <li>• Bachelor of Laws (LL.B), University of Benin</li>
              <li>• Barrister at Law (B.L), Nigerian Law School</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">MEMBERSHIP OF PROFESSIONAL SOCIETIES</h3>
            <ul className="space-y-1 text-sm md:text-base">
              <li>• Nigerian Bar Association (NBA)</li>
              <li>• Member, NBA Section on Business Law (NBA-SBL)</li>
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