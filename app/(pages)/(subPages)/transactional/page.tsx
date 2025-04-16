import React from 'react'

function page() {
  const leftColumnPractices = [
    {
      title: "Antitrust & Competition",
      link: "/nigeria/antitrust-competition"
    },
    {
      title: "Banking & Financial Institutions",
      link: "/nigeria/banking-financial-institutions"
    },
    {
      title: "Capital Markets",
      link: "/nigeria/capital-markets"
    },
    {
      title: "Consumer & Retail Transactions",
      link: "/nigeria/consumer-retail"
    },
    {
      title: "Corporate Governance & Compliance",
      link: "/nigeria/corporate-governance"
    },
    {
      title: "Debt Finance & Structured Finance",
      link: "/nigeria/debt-structured-finance"
    },
    {
      title: "Mergers & Acquisitions",
      link: "/nigeria/mergers-acquisitions"
    },
    {
      title: "Private Equity & Venture Capital",
      link: "/nigeria/private-equity"
    },
    {
      title: "Real Estate & Infrastructure",
      link: "/nigeria/real-estate-infrastructure"
    },
    {
      title: "Energy & Infrastructure Transactions",
      link: "/nigeria/energy-infrastructure"
    },
    {
      title: "Technology & Intellectual Property Transactions",
      link: "/nigeria/technology-ip"
    },
    {
      title: "International Trade & Foreign Direct Investment",
      link: "/nigeria/international-trade-fdi"
    },
    {
      title: "Employment & Labor Transactions",
      link: "/nigeria/employment-labor"
    },
    {
      title: "Tax & Regulatory Solutions",
      link: "/nigeria/tax-regulatory"
    },
    {
      title: "Special Situations & Restructuring Transactions",
      link: "/nigeria/special-situations-restructuring"
    }
  ];

  return (
    <>
      <section>
        <div className="bg-[#fdefe0] px-4 py-8 sm:py-12 md:py-16 sm:px-6 lg:px-8">
          <div className="mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[128px] font-serif italic font-light text-gray-900 mb-4">
              Transactional
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Find Related Professionals →
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 lg:py-30 px-4 md:px-8 lg:px-16 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 lg:gap-30">
            {/* Left column with title */}
            <div className="md:col-span-3 mb-6 md:mb-0">
              <h2 className="font-serif">
                <span className="font-serif italic">OVERVIEW</span>
              </h2>
            </div>
            
            {/* Right column with content */}
            <div className="md:col-span-8">
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h4 className="font-bold mb-3">
                    Evian & Co.: Shaping Nigeria's Corporate Transactions
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    At Evian & Co., our transactional law practice is at the forefront of shaping Nigeria's 
                    commercial landscape. Our seasoned corporate lawyers bring deep local insights and a proven track 
                    record to every deal, addressing the complexities 
                    of high-stakes transactions in today's dynamic global market.
                  </p>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-justify">
                  By integrating innovative legal strategies with a comprehensive understanding of the Nigerian regulatory 
                  environment, we craft tailored solutions that not only meet but also exceed our clients' 
                  business objectives. Our collaborative approach unites specialized expertise across diverse 
                  sectors to ensure that every transaction—whether it involves cross-border investments, 
                  complex financing, or strategic mergers—delivers maximum value and sustainable growth.
                </p>

                <p className="text-gray-700 leading-relaxed text-justify">
                  This comprehensive approach ensures that Evian & Co. remains the trusted partner for
                  transactional law in Nigeria, delivering innovative and effective solutions that drive business
                  success in a rapidly evolving marketplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fdefe0] py-8 sm:py-12 md:py-16 px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row md:gap-12 lg:gap-20 xl:gap-80 max-w-7xl mx-auto">
          <h2 className="font-bold mb-6 md:mb-12 uppercase tracking-wider">PRACTICES</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 w-full">
            <div className="space-y-4 sm:space-y-6">
              {leftColumnPractices.slice(0, Math.ceil(leftColumnPractices.length / 2)).map((practice, index) => (
                <div key={index} 
                  className="text-[#EFA657] transition-colors text-base sm:text-lg md:text-xl font-medium">
                  {practice.title}
                </div>
              ))}
            </div>

            <div className="space-y-4 sm:space-y-6">
              {leftColumnPractices.slice(Math.ceil(leftColumnPractices.length / 2)).map((practice, index) => (
                <div key={index} 
                  className="text-[#EFA657] transition-colors text-base sm:text-lg md:text-xl font-medium">
                  {practice.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page