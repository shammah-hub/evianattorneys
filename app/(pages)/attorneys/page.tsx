import TeamShowcase from '@/app/components/teamview'
import React from 'react'

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
      
      <p className="text-black py-10 leading-relaxed mb-3 md:mb-4 text-left md:text-justify text-sm md:text-base">
        At Evian & Co. Attorneys, we bring a team-based approach to every case, combining
        the strengths of our skilled family and immigration lawyers to deliver the best results. Based in Abuja, 
        Nigeria, and the UK, our firm is built on integrity, excellence, and a deep commitment to our clients. 
        Every lawyer is carefully selected for their expertise and dedication, ensuring you have not just one, 
        but a powerful legal team on your side. Click on each profile to meet the people behind Evian & Co.
      </p> 
    </section>

    <TeamShowcase />
      
    </>
  )
}

export default page
