import React from 'react'
import Image from "next/image";

export default function page() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex bg-[url('/law.svg')] bg-cover bg-no-repeat bg-[#ffff] bg-center min-h-screen items-center">
        <div className="text-white px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-24 space-y-4 md:space-y-6 max-w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            About Us 
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Experienced. Strategic. Committed to<br/>
            Protecting Your Rights and Delivering Results
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-20 lg:py-24 bg-[#ffff]">
        <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black mb-6 sm:mb-8 md:mb-10'>
          Who We Are
        </h3>
        
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg text-justify">
            Evian & Co. Attorney is a progressive Law practice headquartered in Abuja, Nigeria. Founded on the principles of excellence
            and strategic insight, we have established ourselves as a forward-thinking firm that anticipates legal 
            challenges rather than merely responding to them. Our attorneys are recognized for their technical 
            proficiency, commercial awareness, and results-driven counsel that aligns with our clients strategic objectives.
          </p>

          <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg text-justify">
            We are a team of experienced legal professionals committed to delivering clear, strategic, and 
            results-driven counsel. Built on a foundation of trust, integrity, and relentless advocacy, we serve 
            individuals, businesses, and organizations with a focus on protecting rights and achieving justice. 
            Our clients aren&apos;t just cases — they&apos;re our priority, and we fight with purpose to secure the outcomes they deserve.     
          </p>   
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-20 text-black bg-[#ffff] bg-cover bg-center">
        <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black mb-8 sm:mb-10 md:mb-12'>
          Our Vision
        </h3>
        
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16 max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
              To be the trusted legal partners of choice for forward-thinking
              businesses, today and into the future.
            </h3>
            <p className="text-sm sm:text-base text-justify text-gray-700 leading-relaxed">
              To redefine legal practice in Africa by seamlessly integrating traditional 
              expertise with innovative methodologies, establishing new standards of excellence that 
              transcend conventional boundaries and drive progress across the continent&apos;s legal landscape.
            </p>
            <p className="text-sm sm:text-base text-justify text-gray-700 leading-relaxed">
              We aspire to set the benchmark for legal practice across the region and beyond,
              embracing a forward-thinking approach that shapes the future of law in Africa and contributes
              meaningfully to the global legal landscape.
            </p>
          </div>
          
          {/* Right Image */}
          <div className="w-full lg:w-1/2 max-w-md lg:max-w-none">
            <div className="bg-[#EFA657] rounded-lg overflow-hidden">
              <Image
                width={600}
                height={400}
                src="/Rec.svg"
                alt="Vision illustration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-20 text-black bg-[#fcf7f7] bg-cover bg-center">
        <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black mb-8 sm:mb-10 md:mb-12'>
          Our Mission
        </h3>
        
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 xl:gap-16 max-w-7xl mx-auto">
          {/* Right Content */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-justify font-bold leading-tight">
              To be the trusted legal partners of choice for forward-thinking
              businesses, today and into the future.
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              To redefine legal practice in Africa by seamlessly integrating traditional 
              expertise with innovative methodologies, establishing new standards of excellence that 
              transcend conventional boundaries and drive progress across the continent&apos;s legal landscape.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
              We aspire to set the benchmark for legal practice across the region and beyond,
              embracing a forward-thinking approach that shapes the future of law in Africa and contributes
              meaningfully to the global legal landscape.
            </p>
          </div>
          
          {/* Left Image */}
          <div className="w-full lg:w-1/2 max-w-md lg:max-w-none">
            <div className="bg-[#EFA657] rounded-lg overflow-hidden">
              <Image
                width={600}
                height={400}
                src="/Rec.svg"
                alt="Mission illustration"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-20 lg:py-24 bg-[#fcf7f7]">
        <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black mb-6 sm:mb-8 md:mb-10'>
          Our Core Values
        </h3>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <p className="text-gray-700 font-semibold text-center text-sm sm:text-base md:text-lg leading-relaxed">
            At Evian & Co Attorney, our actions and decisions are guided by the following core values:
          </p>
          
          <div className="space-y-4 sm:space-y-6">
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg text-justify">
              <span className='font-bold'>Integrity:</span> We uphold unwavering honesty and ethical conduct, maintaining transparency, 
              trust and accountability in every aspect of our work, which is at the heart of our practice.
            </p>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg text-justify">
              <span className='font-bold'>Precision:</span> We pursue excellence in every detail, recognizing that precision 
              in legal work is non-negotiable. Our meticulous approach ensures that no aspect of a client&apos;s matter is overlooked,
              resulting in comprehensive solutions that withstand scrutiny and the test of time.    
            </p>   

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg text-justify">
              <span className='font-bold'>Innovation:</span> We embrace cutting-edge ideas and approaches 
              to tackle complex legal challenges, staying ahead of industry trends and technological advancements.
            </p>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg text-justify">
              <span className='font-bold'>Client Focus:</span> We place our clients&apos; 
              needs at the forefront, delivering personalized service and tailored solutions to achieve their goals.
            </p>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg text-justify">
              <span className='font-bold'>Collaboration:</span> We foster a collaborative culture and strong partnerships—both 
              within our firm and with our clients—believing that teamwork and loyalty are key to delivering the best outcomes.
            </p>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg text-justify">
              <span className='font-bold'>Community Engagement:</span> We are committed to giving back to
              the community and supporting initiatives that promote justice, equality, and social progress.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-20 text-black bg-[#ffff] bg-cover bg-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col xl:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
            {/* Left Image */}
            <div className="w-full xl:w-1/2 max-w-2xl">
              <div className="bg-[#EFA657] rounded-lg overflow-hidden">
                <Image
                  width={700}
                  height={500}
                  src="/ew.svg"
                  alt="Team illustration"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* Right Content - Overlapping Card */}
            <div className="w-full xl:w-1/2 xl:-ml-20 xl:mt-8 z-10">
              <div className="bg-white shadow-lg p-6 sm:p-8 md:p-10 border border-gray-100 hover:shadow-xl transition-shadow duration-300 rounded-lg">
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-justify">
                    WORK WITH A TEAM COMMITTED TO DRIVING YOUR SUCCESS FORWARD
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-justify">
                    Meet our highly skilled and dedicated team—passionate professionals who drive one of the top law firms.
                    Together, we foster a healthy, supportive, and transparent environment where clients feel empowered to 
                    achieve their goals.
                  </p>
                  <div className="pt-2">
                    <button className="w-full sm:w-auto font-semibold py-3 px-6 border border-[#182492] text-[#182492] hover:bg-[#182492] hover:text-white transition-colors duration-300">
                      Meet Our Team
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}