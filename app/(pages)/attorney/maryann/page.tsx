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
      <div className="order-1 lg:order-2 space-y-6 lg:pt-0">
        <div className="w-full max-w-md mx-auto">
          <Image
            src="/7.svg"
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
          ONYEMAUWA MARYANN
        </h2>
        
        <div className="space-y-4 text-black">
          <p className="text-sm md:text-base leading-relaxed text-justify">
            Maryann is a promising graduate intern with a strong educational foundation. 
            She holds a Bachelor of Laws (LL.B.) from Ebonyi State University and a 
            Barrister-at-Law (BL) degree from the Nigerian Law School, demonstrating 
            her commitment to legal excellence from the outset of her career.
          </p>
          
          <p className="text-sm md:text-base leading-relaxed text-justify">
            Her dedication to the field of conflict resolution is evident through her 
            association with the Institute of Chartered Mediators and Conciliators of 
            Nigeria (ICMC) and her certification in International Arbitration from the 
            Chartered Institute of Arbitrators (CIArb) in the UK, showcasing her 
            proactive approach to professional development.
          </p>
          
          <p className="text-sm md:text-base leading-relaxed text-justify">
            As a graduate intern at Evian & Co, Maryann is gaining invaluable experience 
            and developing essential skills in legal research, advocacy, and problem-solving. 
            Her internship provides her with hands-on exposure to the complexities of legal 
            practice while working alongside experienced professionals who mentor her growth 
            in various areas of law.
          </p>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">EDUCATION</h3>
            <ul className="space-y-1 text-sm md:text-base">
              <li>• Ebonyi State University (LLB)</li>
              <li>• The Nigerian Law School, BL</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">AREAS OF INTEREST</h3>
            <ul className="space-y-1 text-sm md:text-base">
              <li>• Corporate Governance</li>
              <li>• Intellectual Property</li>
              <li>• Transactional Law</li>
              <li>• Real Estate & Infrastructure</li>
              <li>• Regulatory Compliance</li>
              <li>• Dispute Resolution and Arbitration</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">MEMBERSHIP OF PROFESSIONAL SOCIETIES</h3>
            <ul className="space-y-1 text-sm md:text-base">
              <li>• Nigerian Bar Association</li>
              <li>• Institute of Chartered Mediators and Conciliators of Nigeria (ICMC)</li>
              <li>• Chartered Institute of Arbitrators (CIArb)</li>
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