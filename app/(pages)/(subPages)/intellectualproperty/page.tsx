import React from 'react'


function page() {


  const leftColumnPractices = [
    {
      title: "Patent Prosecution and Litigation",
      link: "/practices/patent-prosecution-litigation"
    },
    {
      title: "Trademark Registration, Counseling, Protection, Enforcement, and Litigation",
      link: "/practices/trademark-services"
    },
    {
      title: "Copyright Registration, Licensing, and Litigation",
      link: "/practices/copyright-services"
    },
    {
      title: "Trade Secret Protection and Misappropriation Litigation",
      link: "/practices/trade-secret-protection"
    },
    {
      title: "IP Portfolio Management and Strategy",
      link: "/practices/ip-portfolio-management"
    },
    {
      title: "Technology Licensing and Transfer Agreements",
      link: "/practices/technology-licensing"
    },
    {
      title: "IP Due Diligence and Valuation",
      link: "/practices/ip-due-diligence"
    },
    {
      title: "Joint Ventures and Strategic Alliances (IP Focus)",
      link: "/practices/joint-ventures"
    },
    {
      title: "Domain Name and Internet Branding Disputes",
      link: "/practices/domain-disputes"
    },
    {
      title: "Design Rights and Industrial Design Protection",
      link: "/practices/design-rights"
    }
  ];

  const rightColumnPractices = [
    {
      title: "Counterfeit and Grey Market Enforcement",
      link: "/practices/counterfeit-enforcement"
    },
    {
      title: "Software and Digital Innovation IP",
      link: "/practices/software-ip"
    },
    {
      title: "Biotech and Pharmaceutical Intellectual Property",
      link: "/practices/biotech-pharma-ip"
    },
    {
      title: "Advertising and Media IP Issues",
      link: "/practices/advertising-media-ip"
    },
    {
      title: "Cross-Border IP Dispute Resolution",
      link: "/practices/cross-border-disputes"
    },
    {
      title: "Advertising, Marketing, & Promotions",
      link: "/practices/advertising-marketing"
    },
    {
      title: "Artificial Intelligence & Related Fields",
      link: "/practices/ai-ip"
    },
    {
      title: "Cybersecurity & Data Privacy",
      link: "/practices/cybersecurity-privacy"
    },
    {
      title: "Internet & Social Media",
      link: "/practices/internet-social-media"
    },
    {
      title: "Open-Source Software",
      link: "/practices/open-source"
    },
    {
      title: "Sourcing & Information Technology",
      link: "/practices/sourcing-it"
    }
  ]; 




  return (
    <>
      <section>
      <div className=" bg-[#fdefe0] px-4 py-8 sm:py-12 md:py-16 sm:px-6 lg:px-8">
      <div className="mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[128px] font-serif italic font-light text-gray-900 mb-4">
        Intellectual Property
        </h1>
        
        <p className="text-base md:text-lg text-gray-600 mb-8">
          Find Related Professionals →
        </p>
        </div>
      </div>

      </section>

      <section className="py-8 md:py-16 lg:py-30 px-4 md:px-8 lg:px-16 border-t ">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-30">
          {/* Left column with title */}
          <div className="md:col-span-3 mb-4 md:mb-0">
            <h2 className=" font-serif">
               <span className="font-serif italic">OVERVIEW</span>
            </h2>
          </div>
          
          {/* Right column with content */}
          <div className="md:col-span-8">
            
            
            <div className="space-y-4 md:space-y-8">
              <div>
                <h4 className="font-bold mb-2 md:mb-3">Evian & Co.: Redefining Intellectual Property Excellence
                </h4>
                <p className="text-gray-700 leading-relaxed text-justify">
  At Evian &amp; Co., our intellectual property practice is built on the foundation of 
  safeguarding ideas, technologies, products, and brands with unparalleled precision. 
  We empower a diverse global clientele&mdash;from industry titans and Fortune 100 companies to 
  visionary startups&mdash;by transforming complex IP challenges into strategic opportunities.
</p>
              </div>
              
              
              <p className="text-gray-700 leading-relaxed text-justify">
  Our team of seasoned litigators and transactional experts leverages decades of experience to 
  secure extraordinary outcomes in high-stakes disputes. Whether addressing patent, copyright, 
  trademark, trade secret misappropriation, or advertising conflicts, we excel in &ldquo;bet-the-company&rdquo; 
  cases across all major forums. From State and Federal High Courts to specialized panels such as the 
  Patent Trial and Appeal Board and Trademark Trial and Appeal Board, our extensive experience ensures 
  that your intellectual property is vigorously defended.
</p>
<p className="text-gray-700 leading-relaxed text-justify">
  Complementing our litigation prowess, twenty dedicated attorneys specialize in negotiating,
  structuring, and closing intricate transactions driven by innovation. Our expertise spans 
  joint ventures, strategic alliances, licensing, outsourcing, and bespoke commercial
  agreements&mdash;crafted with a deep understanding of the unique dynamics that govern each
  business relationship.
</p>

<p className="text-gray-700 leading-relaxed text-justify">
  Unified by a cross-Atlantic presence and seamless office integration, 
  we coordinate multi-jurisdictional litigation and complex transactions with strategic 
  foresight and market intelligence that is unmatched in the industry. 
  At Evian &amp; Co. Attorneys, we don&apos;t just protect intellectual property&mdash;we empower our 
  clients to fortify their market positions and drive transformative growth in an 
  ever-evolving global landscape.
</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="bg-[#fdefe0] py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col md:flex-row md:gap-8 lg:gap-80 max-w-7xl mx-auto">
        <h2 className="font-bold mb-6 md:mb-12 uppercase tracking-wider">PRACTICES</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
          <div className="space-y-4 md:space-y-6">
            {leftColumnPractices.map((practice, index) => (
              <div key={index} 
                 
                  className="text-[#EFA657] transition-colors text-base md:text-xl font-medium">
                
                  {practice.title}
                
              </div>
            ))}
          </div>
          
          <div className="space-y-4 md:space-y-6">
            {rightColumnPractices.map((practice, index) => (
              <div key={index}
                
                  className="text-[#EFA657] transition-colors text-base md:text-xl font-medium "
                >
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