"use client"

import { useState } from 'react'
import { CiVideoOn } from "react-icons/ci";

// Define tab content type
interface TabContent {
  [key: string]: string;
}

export default function page() {
  // State to track which tab is active, null means showing the default overview
  const [activeTab, setActiveTab] = useState<string | null>(null);

  // Content for each tab
  const tabContent: TabContent = {
    'Social Commitment': 
      `We believe the practice of law carries a profound responsibility that extends beyond client representation. Our firm stands committed to using our legal expertise, resources, and influence to advance the common good.

      This commitment manifests through strategic community partnerships, volunteer initiatives, and advocacy efforts that address systemic challenges and create positive social change. Our attorneys and staff dedicate time and talent to causes ranging from environmental protection to educational equity and access to justice.

      We measure our success not only by client outcomes and financial performance but also by our tangible contributions to building more just, equitable, and sustainable communities. This dedication to social impact is woven into our firm's identity and shapes our decisions at every level.


      By integrating social responsibility into our professional practice, we fulfill our deeper purpose as legal practitioners and community members.

`,
    
   'Welcoming environment': 
      `At our firm, diversity isn't just welcomed—it's essential to our success. We cultivate an environment where differences in perspective, experience, and background are recognized as our greatest strengths, enhancing both our internal collaboration and client service.

Our commitment to inclusion takes concrete form through:

Structured Support Systems
Our comprehensive mentorship programs and active diversity committees ensure every voice is heard and every career path supported.

Continuous Learning
Regular cultural awareness training deepens our understanding of each other and the diverse clients we serve.

Intentional Recruitment
We cast a wide net in our talent search, actively seeking candidates from varied backgrounds and experiences to enrich our professional community.

Community Leadership
Our influence extends beyond our practice through strategic partnerships with organizations advancing equity in the legal profession and community events celebrating cultural diversity.

We believe the strongest legal solutions emerge when all perspectives are valued and respected.`,
   
    'Pro bono': 
      `Through our pro bono program, we transform legal expertise into meaningful community impact. Each year, our attorneys dedicate thousands of hours to those who would otherwise navigate complex legal challenges alone.

      We focus our efforts where specialized legal knowledge can truly change lives—representing asylum seekers fleeing persecution, survivors breaking cycles of domestic violence, mission-driven nonprofits, and entrepreneurs building businesses in underserved communities.

      Every associate at our firm is encouraged to contribute at least 50 hours annually to pro bono work, with these hours recognized within our billable requirements. Our dedicated Pro Bono Committee strategically selects cases that leverage our strengths while addressing critical needs in our communities.

      This work isn't peripheral to our practice—it's fundamental to who we are as legal professionals and as a firm.
`
  };

  // Default overview content
  const overviewContent = `Strategic Objectives at Evian & Co. Attorneys

Our unwavering commitment at Evian & Co. Attorneys rests upon three foundational pillars that guide everything we do:

Excellence in Service Delivery: We maintain an uncompromising standard of legal excellence, combining meticulous attention to detail with innovative thinking to deliver solutions that stand the test of rigorous scrutiny.

Client Success Partnership: We measure our success through the achievements of those we serve. By immersing ourselves in your business objectives and industry landscape, we function not merely as legal advisors but as strategic partners in your continued growth and prosperity.

Talent Development and Cultivation: We deliberately cultivate an environment where exceptional legal minds can flourish, ensuring our team remains at the forefront of legal developments and continues to bring fresh perspectives to complex challenges.

These objectives are realized through our relationship-centered approach, where we invest in building profound, enduring connections with clients. This collaborative framework enables us to provide comprehensive legal strategies precisely calibrated to your evolving needs and aspirations.`
    
  return (
    <>
      <section className='border-b bg-[#fdefe0] px-4 py-16 sm:px-6 lg:px-8'>
        <div className="">
          <div className="mx-auto text-center">
            <h1 className="text-6xl md:text-8xl lg:text-[128px] font-serif italic font-light text-gray-900 mb-4">
              Social Commitment
            </h1>
          </div>
        </div>
      </section>

      <section className='p-8 md:p-20 bg-[#fdefe0]'>
        <div className="flex flex-col md:flex-row justify-around items-start">
          <div className="text-gray-500 mb-4 md:mb-0">Explore</div>
          
          <div className='space-y-6'>
            <div className="flex flex-wrap gap-2">
              {Object.keys(tabContent).map((tab) => (
                <div 
                  key={tab}
                  className={`px-4 py-2 rounded-lg shadow-md cursor-pointer transition-colors ${
                    activeTab === tab 
                      ? "bg-blue-800 text-white" 
                      : "bg-white text-gray-700 border border-gray-200"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="p-8 md:p-16 bg-white">
        <div className="flex flex-col justify-around mx-auto p-4 md:p-20 max-w-6xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="font-serif mb-4">
                <span className="italic font-light">{activeTab || "OVERVIEW"}</span>
              </h2>
            </div>
            
            <div className="md:w-2/3">
              <div className="mb-8">
                <div className="mb-12">
                  <div className="text-gray-700 text-justify leading-relaxed whitespace-pre-line">
                    {activeTab ? tabContent[activeTab] : overviewContent}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen p-12 bg-[#fdefe0]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl pb-15 pt-10 text-gray-700 mb-4">Video Highlight</h2>
          <div className="bg-gray-200 rounded-2xl overflow-hidden aspect-video h-[400px] w-full flex items-center justify-center">
            <CiVideoOn className='w-12 h-12'/>
          </div>
        </div>
      </section>
    </>
  )
}