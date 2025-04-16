"use client"
import React, { useState } from 'react';

function page() {
  const [selectedFilter, setSelectedFilter] = useState('All Practices');
  
  const filters = [
    'All Practices',
    'Intellectual Property',
    'Litigation',
    'Restructuring',
    'Energy',
    'Transactional'
  ];
  
  // Organize practices by category
  const practicesByCategory = {
    'Intellectual Property': [
  'Patent Prosecution and Litigation',
  'Trademark Registration, Counseling, Protection, Enforcement, and Litigation',
  'Copyright Registration, Licensing, and Litigation',
  'Trade Secret Protection and Misappropriation Litigation',
  'IP Portfolio Management and Strategy',
  'Technology Licensing and Transfer Agreements',
  'IP Due Diligence and Valuation',
  'Joint Ventures and Strategic Alliances (IP Focus)',
  'Domain Name and Internet Branding Disputes',
  'Design Rights and Industrial Design Protection',
  'Counterfeit and Grey Market Enforcement',
  'Software and Digital Innovation IP',
  'Biotech and Pharmaceutical Intellectual Property',
  'Advertising and Media IP Issues',
  'Cross-Border IP Dispute Resolution',
  'Advertising, Marketing, & Promotions',
  'Artificial Intelligence & Related Fields',
  'Cybersecurity & Data Privacy',
  'Internet & Social Media',
  'Open-Source Software',
  'Sourcing & Information Technology'
],
    'Litigation': [
  'Commercial Litigation',
  'Civil Litigation',
  'Criminal Litigation',
  'Constitutional Litigation',
  'Labour and Employment Litigation',
  'Family and Matrimonial Litigation',
  'Real Estate and Property Litigation',
  'Intellectual Property Litigation',
  'Tax Litigation',
  'Dispute Resolution and Arbitration',
  'Environmental Litigation'
],
    'Restructuring': [
  'Creditors Committees & Restructuring Advisory',
  'Debtor Restructuring & Financial Turnaround',
  'Environmental Considerations in Restructuring',
  'International & Cross-Border Insolvency',
  'Out-of-Court Restructurings',
  'Special Situations & Restructuring Transactions'
],
    'Energy': [
      "Oil & Gas Exploration and Production",
  "Refining and Petrochemicals",
  "Power Generation and Distribution",
  "Renewable Energy Development",
  "Energy Trading and Supply",
  "Power Generation and Distribution",
  "Project Finance and Investment",
  "Regulatory and Compliance",
  "Environmental and Social Governance (ESG)",
  "Mergers & Acquisitions in Energy",
  "Dispute Resolution and Arbitration"
    ],
    'Transactional': [
      "Private Client and Wealth Management",
      "Practice Areas in Nigeria",
      "Antitrust & Competition",
      "Banking & Financial Institutions",
      "Capital Markets",
      "Consumer & Retail Transactions",
      "Corporate Governance & Compliance",
      "Debt Finance & Structured Finance",
      "Mergers & Acquisitions",
      "Private Equity & Venture Capital",
      "Real Estate & Infrastructure",
      "Energy & Infrastructure Transactions",
      "Technology & Intellectual Property Transactions",
      "International Trade & Foreign Direct Investment",
      "Employment & Labor Transactions",
      "Tax & Regulatory Solutions",
      "Special Situations & Restructuring Transactions"
    ]
  };
  
  // All practices combined
  const allPractices = [
    { title: 'Patent Prosecution and Litigation' },
    { title: 'Trademark Registration, Counseling, Protection, Enforcement, and Litigation' },
    { title: 'Copyright Registration, Licensing, and Litigation' },
    { title: 'Trade Secret Protection and Misappropriation Litigation' },
    { title: 'IP Portfolio Management and Strategy' },
    { title: 'Technology Licensing and Transfer Agreements' },
    { title: 'IP Due Diligence and Valuation' },
    { title: 'Joint Ventures and Strategic Alliances (IP Focus)' },
    { title: 'Domain Name and Internet Branding Disputes' },
    { title: 'Design Rights and Industrial Design Protection' },
    { title: 'Counterfeit and Grey Market Enforcement' },
    { title: 'Software and Digital Innovation/IP' },
    { title: 'Biotech and Pharmaceutical Intellectual Property' },
    { title: 'Advertising and Media IP Issues' },
    { title: 'Cross-Border IP Dispute Resolution' },
    { title: 'Advertising, Marketing, & Promotions' },
    { title: 'Artificial Intelligence & Related Fields' },
    { title: 'Cybersecurity & Data Privacy' },
    { title: 'Internet & Social Media' },
    { title: 'Open-Source Software' },
    { title: 'Sourcing & Information Technology' },
    { title: 'Private Client and Wealth Management' },
    { title: 'Practice Areas in Nigeria' },
    { title: 'Antitrust & Competition' },
    { title: 'Banking & Financial Institutions' },
    { title: 'Capital Markets' },
    { title: 'Consumer & Retail Transactions' },
    { title: 'Corporate Governance & Compliance' },
    { title: 'Debt Finance & Structured Finance' },
    { title: 'Mergers & Acquisitions' },
    { title: 'Private Equity & Venture Capital' },
    { title: 'Real Estate & Infrastructure' },
    { title: 'Energy & Infrastructure Transactions' },
    { title: 'Technology & Intellectual Property Transactions' },
    { title: 'International Trade & Foreign Direct Investment' },
    { title: 'Employment & Labor Transactions Tax & Regulatory Solutions' },
    { title: 'Special Situations & Restructuring Transactions' }
  ];

  // Get practices to display based on selected filter
  const getFilteredPractices = () => {
    if (selectedFilter === 'All Practices') {
      return allPractices;
    } else {
      // Type assertion
      return practicesByCategory[selectedFilter as keyof typeof practicesByCategory].map(
        (title: string) => ({ title })
      );
    }
  };

  const filteredPractices = getFilteredPractices();
  
  // Split practices into two columns
  const midPoint = Math.ceil(filteredPractices.length / 2);
  const leftColumnPractices = filteredPractices.slice(0, midPoint);
  const rightColumnPractices = filteredPractices.slice(midPoint);

  return (
    <>
      {/* image hero section */}
      <section>
        <div className="bg-[#fdefe0] border-b px-4 py-30 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-20 mx-auto max-w-6xl">
            <h1 className="text-6xl md:text-[128px] font-serif italic font-light text-gray-900 mb-4">
              Services
            </h1>
            <div className="text-center md:text-left">
              <p className="mb-4 text-justify">
              Our multidisciplinary teams at Evian & Co. Attorneys collaborate seamlessly 
              across practice areas and offices, creating innovative legal solutions tailored 
              to your unique challenges. This integrated approach harnesses our collective 
              expertise to deliver exceptional results that advance your objectives and exceed
               expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practices section */}
      <section className="bg-[#fdefe0] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            {/* Left side - Filters */}
            <div className="md:w-1/3 md:border-r border-blue-200 md:pr-8">
              <h3 className="text-sm font-medium mb-4">Filter by:</h3>
              
              <div className="grid gap-2">
                {filters.map((filter, index) => (
                  <button
                    key={index}
                    className={`py-3 px-4 text-center rounded ${
                      selectedFilter === filter 
                        ? 'bg-white shadow' 
                        : 'bg-[#fdefe0] hover:bg-[#fdefe0] transition-colors'
                    }`}
                    onClick={() => setSelectedFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Right side - Practices */}
            <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
              <h2 className="text-lg font-bold mb-6">PRACTICES</h2>
              
              <div className="flex flex-col md:flex-row">
                {/* Left column of practices */}
                <div className="md:w-1/2 md:pr-4">
                  {leftColumnPractices.map((practice: { title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: React.Key | null | undefined) => (
                    <a 
                      key={index} 
                      href="#" 
                      className="block text-orange-500 hover:text-orange-700 mb-4"
                    >
                      {practice.title}
                    </a>
                  ))}
                </div>
                
                {/* Right column of practices */}
                <div className="md:w-1/2 md:pl-4 mt-6 md:mt-0">
                  {rightColumnPractices.map((practice: { title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: React.Key | null | undefined) => (
                    <a 
                      key={index} 
                      href="#" 
                      className="block text-orange-500 hover:text-orange-700 mb-4"
                    >
                      {practice.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Service section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl font-serif mb-4">
                Client <span className="italic font-light">Service</span>
              </h2>
            </div>
            
            <div className="md:w-2/3">
              <div className="mb-8">
                <h3 className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-6">
                  OVERVIEW
                </h3>
                
                <div className="mb-12">
                  <h4 className="text-xl font-medium mb-4">Our Philosophy</h4>
                  <p className="text-gray-700 text-justify leading-relaxed">
                  We believe in excellence that serves a purpose. Our firm is built on three core commitments:

                  Delivering legal services of exceptional quality and precision
                  Becoming integral to our clients' achievements and growth
                  Cultivating the brightest legal minds through meaningful development and opportunity

                  We take a relationship-centered approach, working alongside clients as true partners rather than mere service providers. This collaborative foundation enables us to develop legal strategies that are not only technically sound but aligned with your broader objectives and vision.
                  Our success is measured by yours—today and for years to come.
                  </p>
                </div>
                
                <div className='space-y-4'>
                  <h4 className="text-xl font-medium mb-4">Results-Driven Excellence</h4>
                  <div className='space-y-6'>
                  <p className="text-gray-700 text-justify leading-relaxed">
                   We understand that clients come to Evian & Co. with one fundamental expectation: exceptional results. Our approach transforms this expectation into reality through:
                   
                   </p>

                  <p>
                  Strategic Innovation;
                   Our legal team develops creative yet practical solutions tailored to your specific challenges and opportunities.
                   
                  </p>

                  <p>
                  Client Partnership;
                   Success begins with collaboration. We work as an extension of your team—establishing clear objectives, creating transparent budgets, and implementing regular review processes that keep all parties aligned and informed.
                  

                  </p>

                  <p>
                  Measurable Outcomes;
                   We define success not by billable hours but by meaningful progress toward your goals. Our systematic approach to tracking, measuring, and evaluating performance ensures we deliver tangible value with every engagement.
                   We don't just handle legal matters—we advance your interests with purpose and precision.
                  </p>
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

export default page