import React from 'react'

const leftColumnPractices = [
  {
    title: "Commercial Litigation",
    link: "/litigation/commercial"
  },
  {
    title: "Civil Litigation",
    link: "/litigation/civil"
  },
  {
    title: "Criminal Litigation",
    link: "/litigation/criminal"
  },
  {
    title: "Constitutional Litigation",
    link: "/litigation/constitutional"
  },
  {
    title: "Labour and Employment Litigation",
    link: "/litigation/labour-employment"
  },
  {
    title: "Family and Matrimonial Litigation",
    link: "/litigation/family-matrimonial"
  },
  {
    title: "Real Estate and Property",
    link: "/litigation/real-estate"
  },
  {
    title: "Intellectual Property Litigation",
    link: "/litigation/intellectual-property"
  },
  {
    title: "Tax Litigation",
    link: "/litigation/tax"
  },
  {
    title: "Dispute Resolution and Arbitration",
    link: "/litigation/dispute-resolution"
  },
  {
    title: "Environmental Litigation",
    link: "/litigation/environmental"
  }
];

function Page() {
  return (
    <>
      <section>
        <div className="bg-[#fdefe0] px-4 py-8 sm:py-12 md:py-16 sm:px-6 lg:px-8">
          <div className="mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif italic font-light text-gray-900 mb-4">
              Litigation
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-8">
              Find Related Professionals →
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-8 lg:px-16 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            {/* Left column with title */}
            <div className="md:col-span-3 mb-6 md:mb-0">
              <h2 className="font-serif text-xl md:text-2xl">
                <span className="font-serif italic">OVERVIEW</span>
              </h2>
            </div>
            
            {/* Right column with content */}
            <div className="md:col-span-8">
              <div className="space-y-6 md:space-y-8">
                <div>
                <h4 className="font-bold text-lg md:text-xl mb-3">
                     Evian &amp; Co.: Redefining Litigation Excellence in Nigeria
                </h4>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    Evian &amp; Co., has been a pillar of litigation excellence in Nigeria. 
                    Renowned for our expertise in complex litigation and arbitration, we consistently anticipate
                    our clients&apos; needs and deliver outcomes that exceed expectations. Our commitment to 
                    trial-readiness means that every case&mdash;whether contested in Nigeria&apos;s High Courts, 
                    Courts of Appeal, or Supreme Court, or resolved through arbitration and specialized 
                    tribunals&mdash;is pursued with meticulous preparation and strategic insight.
                  </p>

{/* Note: There's a closing </div> tag without a matching opening tag */}

                 <p className="text-gray-700 leading-relaxed text-justify">
                     With over 50 seasoned attorneys strategically located nationwide, we represent a diverse range of
                     clients&mdash;from multinational corporations and government agencies to emerging enterprises&mdash;in 
                       virtually every legal arena. Our litigation practice covers a comprehensive spectrum of matters.
                    </p>

                 <p className="text-gray-700 leading-relaxed text-justify">
                   At Evian &amp; Co., we identify critical issues early to leverage every advantage, 
                   ensuring cost-efficient and decisive resolutions. Our proven approach and deep understanding 
                   of Nigeria&apos;s legal landscape empower our clients to navigate complex disputes with confidence 
                    and secure outcomes that set industry benchmarks.
                   </p>

              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fdefe0] py-10 md:py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:gap-12 lg:gap-20">
            <h2 className="font-bold text-lg mb-6 md:mb-0 uppercase tracking-wider">PRACTICES</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 md:gap-x-12 w-full">
              <div className="space-y-4 md:space-y-6">
                {leftColumnPractices.slice(0, Math.ceil(leftColumnPractices.length / 2)).map((practice, index) => (
                  <a 
                    href={practice.link}
                    key={index} 
                    className="block text-[#EFA657] hover:text-amber-700 transition-colors text-lg md:text-xl font-medium cursor-pointer"
                  >
                    {practice.title}
                  </a>
                ))}
              </div>
              
              <div className="space-y-4 md:space-y-6">
                {leftColumnPractices.slice(Math.ceil(leftColumnPractices.length / 2)).map((practice, index) => (
                  <a 
                    href={practice.link}
                    key={index}
                    className="block text-[#EFA657] hover:text-amber-700 transition-colors text-lg md:text-xl font-medium cursor-pointer"
                  >
                    {practice.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page