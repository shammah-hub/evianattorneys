import React from 'react'

function page() {

  const leftColumnPractices = [
    {
      title: "Creditors' Committees & Restructuring Advisory",
      link: "/restructuring/creditors-committees-advisory"
    },
    {
      title: "Debtor Restructuring & Financial Turnaround",
      link: "/restructuring/debtor-financial-turnaround"
    },
    {
      title: "Environmental Considerations in Restructuring",
      link: "/restructuring/environmental-considerations"
    },
    {
      title: "International & Cross-Border Insolvency",
      link: "/restructuring/international-cross-border"
    },
    {
      title: "Out-of-Court Restructurings",
      link: "/restructuring/out-of-court"
    }
  ];

  return (
    <>
      <section>
      <div className="bg-[#fdefe0] px-4 py-10 sm:py-16 sm:px-6 lg:px-8">
      <div className="mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[128px] font-serif italic font-light text-gray-900 mb-4">
        Restructuring 
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Find Related Professionals →
        </p>
        </div>
      </div>

      </section>

      <section className="py-16 sm:py-24 md:py-30 px-4 md:px-8 lg:px-16 border-t">
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
            
            
            <div className="space-y-8">
              <div>
              <h4 className="font-bold mb-3">
  Evian &amp; Co.: Nigeria&apos;s Premier Restructuring Advisory Practice
</h4>
<p className="text-gray-700 leading-relaxed text-justify">
  At Evian &amp; Co., our market-leading Restructuring Group in Nigeria delivers
  exceptional business advisory and crisis management expertise to guide companies through 
  periods of financial distress. Our seasoned team understands Nigeria&apos;s dynamic legal and
  economic environment and provides integrated solutions for both domestic and cross-border
  restructuring and insolvency challenges.
</p>
</div>

<p className="text-gray-700 leading-relaxed text-justify">
  Leveraging decades of experience across diverse sectors&mdash;including manufacturing, 
  telecommunications, healthcare, energy, retail, and real estate&mdash;we represent distressed 
  companies, advise creditors on recovery strategies, and support investors in capitalizing 
  on restructuring opportunities. Our approach combines deep local insights with global best
  practices to ensure that every restructuring engagement is strategically tailored, 
  cost-effective, and positioned for long-term success.
</p>

<p className="text-gray-700 leading-relaxed text-justify">
  Drawing on the collective expertise of over 50 dedicated professionals across our
  nationwide offices, we manage every facet of the restructuring process&mdash;whether through
  judicial insolvency proceedings, out-of-court negotiations, or innovative financial 
  turnarounds. This holistic approach ensures that our clients are well-prepared to address
  challenges at every stage and secure outcomes that protect and enhance their market positions.
</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="bg-[#fdefe0] py-16 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row md:gap-20 lg:gap-80 max-w-7xl mx-auto">
        <h2 className="font-bold mb-6 md:mb-12 uppercase tracking-wider">PRACTICES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
          <div className="space-y-6">
            {leftColumnPractices.map((practice, index) => (
              <div key={index} 
                 
                  className="text-[#EFA657] transition-colors text-lg md:text-xl font-medium">
                
                  {practice.title}
                
              </div>
            ))}
          </div>

                    {/*ADD A NEW COLUN ON THE RIGHT IF THE LIST IS TO EXTENSIVE  */}
          {/* <div className="space-y-6"> 
            {rightColumnPractices.map((practice, index) => (
              <div key={index}
                
                  className="text-[#EFA657] transition-colors  md:text-xl font-medium "
                >
                  {practice.title}
                
              </div>
            ))}
          </div>*/}
        </div>
      </div>
    </section>
    </>
  )
}

export default page