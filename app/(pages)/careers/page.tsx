"use client"

import { useState } from 'react'

// Define tab content type
interface TabContent {
  [key: string]: string;
}

export default function Page() {
  // State to track which tab is active, default to 'Overview' instead of null
  const [activeTab, setActiveTab] = useState<string>('Overview');

  // Content for each tab
  const tabContent: TabContent = {
    'Overview': 
      `Join Our Team
      
      At Evian & Co., we believe extraordinary talent is defined by more than credentials—it's about applying brilliant minds to complex challenges with purpose and precision.

      We build our team by seeking out individuals who bring a rare combination of intellectual depth, innovative thinking, and practical problem-solving abilities. Whether you're an accomplished attorney or a professional in another discipline essential to our operation, we look for those who share our fundamental values: unwavering excellence, authentic relationship-building, creative approaches, and entrepreneurial drive.

      Our firm provides an environment where sharp minds thrive. Here, you'll find:


      Work that challenges and rewards your intellect
      Colleagues who inspire your best thinking
      A culture that recognizes excellence at every level
      Opportunities that evolve with your ambitions


      We invest in our people because we understand a simple truth: the exceptional service we provide our clients begins with the exceptional individuals who make up Evian & Co.`, 

      // full employment
         'Full Time Employment': 
      'At Evian & Co., we provide expert legal guidance on all aspects of employment law, ensuring that both employers and employees understand their rights and responsibilities in the workplace. Our goal is to foster legally sound, fair, and productive work environments.',
    'Internship': 
      "At Evian & Co., we believe in nurturing the next generation of legal professionals. Our internship program is designed to offer law students and recent graduates hands-on experience in a dynamic, real-world legal environment.",
    'Diversity': 
      "Diversity is not just a value at Evian & Co. — it's a practice. We are proud to foster an inclusive culture where people of all backgrounds, perspectives, and experiences are respected, represented, and empowered."
  };

  return (
    <>
      <section className=' bg-[#fdefe0] px-4 py-16 sm:px-6 lg:px-8'>
        <div className="">
          <div className="mx-auto text-center">
            <h1 className="text-6xl md:text-8xl lg:text-[128px] font-serif italic font-light text-gray-900 mb-4">
              Careers
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
                <span className="italic font-light">{activeTab}</span>
              </h2>
            </div>
            
            <div className="md:w-2/3">
              <div className="mb-8">
                <div className="mb-12">
                  <p className="text-gray-700 text-justify leading-relaxed">
                    {tabContent[activeTab]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      <section className="min-h-screen w-full max-w-6xl mx-auto p-4">
        {/* Changed the grid to 5 columns with left div taking 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Left large rectangle - increased width by changing col-span to 2 */}
          <div className="flex justify-center items-end h-[500px]  p-18 pb-24 pl-6 text-white w-full rounded-lg bg-[url('/rrr.svg')] bg-no-repeat bg-cover bg-center md:col-span-2 md:row-span-2">
          <h3 className='font-serif italic text-4xl font-light'>Life At Evian & Co <br /> Attorneys</h3>
          </div>
          
          {/* Top right rectangle - adjusted to take remaining 3 columns */}
          <div className="flex rounded-lg items-center bg-[url('/rr.svg')] bg-no-repeat bg-cover text-white bg-center p-6  h-auto md:col-span-3">
          <h3 className='text-4xl'>We are a modern firm <br /> that <span className='font-serif italic font-thin'>Listens & Understands</span></h3>
          </div>
           
          {/* Bottom right rectangle - adjusted to take remaining 3 columns */}
          <div className="flex items-center bg-[url('/r.svg')] bg-no-repeat bg-cover bg-center rounded-lg p-6 h-auto md:col-span-3">
          <h3 className='text-4xl'>
          Innovative <br/>
          <span className='font-serif justify-center items-center italic font-light'>Thinking</span>
          </h3>
          </div>
        </div>
      </section>
    </>
  )
}