import React from 'react'

function page() {

  const leftColumnPractices = [
    {
      title: "Oil & Gas Exploration and Production",
      link: "/energy/oil-gas-exploration"
    },
    {
      title: "Refining and Petrochemicals",
      link: "/energy/refining-petrochemicals"
    },
    {
      title: "Power Generation and Distribution",
      link: "/energy/power-generation-distribution"
    },
    {
      title: "Renewable Energy Development",
      link: "/energy/renewable-energy"
    },
    {
      title: "Energy Trading and Supply",
      link: "/energy/trading-supply"
    },
    {
      title: "Project Finance and Investment",
      link: "/energy/project-finance"
    },
    {
      title: "Regulatory and Compliance",
      link: "/energy/regulatory-compliance"
    },
    {
      title: "Environmental and Social Governance (ESG)",
      link: "/energy/esg"
    },
    {
      title: "Mergers & Acquisitions in Energy",
      link: "/energy/mergers-acquisitions"
    },
    {
      title: "Dispute Resolution and Arbitration",
      link: "/energy/dispute-resolution"
    }
  ];

  return (
    <>
      <section>
        <div className="bg-[#fdefe0] px-4 py-8 sm:py-12 md:py-16 sm:px-6 lg:px-8">
          <div className="mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[128px] font-serif italic font-light text-gray-900 mb-4">
              Energy
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
                    Evian & Co.: Energizing Nigeria's Future
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    At Evian & Co., our Energy Practice in Nigeria is at the forefront of navigating
                    the complexities of one of the country's most vital sectors. We combine deep local insights
                    with international expertise to offer innovative legal solutions that support every phase of 
                    the energy value chain. Our team represents a broad spectrum of clients—from multinational 
                    corporations and government agencies to emerging market players—ensuring that each client's 
                    strategic and operational objectives are met with precision and excellence.
                  </p>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-justify">
                  As Nigeria continues to cement its position as a key energy hub, our practice is dedicated 
                  to guiding projects and transactions in both conventional and renewable energy arenas.
                  We offer comprehensive advice on regulatory compliance, project finance, dispute resolution, 
                  and much more, all tailored to the unique dynamics of the Nigerian energy market.
                </p>

                <p className="text-gray-700 leading-relaxed text-justify">
                  At Evian & Co., our commitment is to empower your energy ventures with the legal 
                  acumen and strategic foresight necessary to thrive in a dynamic and evolving market.
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