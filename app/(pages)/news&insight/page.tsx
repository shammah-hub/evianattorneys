"use client"
import React from 'react'

function page() {

  const [searchTerm, setSearchTerm] = React.useState('');
  const [professional, setProfessional] = React.useState('');
  const [type, setType] = React.useState('');
  const [practice, setPractice] = React.useState('');

  return (
    <>
    <section className="min-h-[450px] bg-[#fdefe0] p-4 py-8 sm:p-8 md:p-16 lg:p-28">
      <div className="mx-auto px-2 sm:px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[128px] font-serif text-center italic font-light text-gray-900 mb-4">
          News & Insights
        </h1>
        
        <div className="text-center mb-6">
          <a href="#" className="text-blue-600 hover:underline">
            Press Center →
          </a>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-8">
          <div className="flex-1 relative">
            <input 
              type="text" 
              placeholder="Search here by keyword" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>

          <div className="flex-1 relative">
            <input 
              type="text" 
              placeholder="Search by Professional" 
              value={professional}
              onChange={(e) => setProfessional(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <select 
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-3 bg-white rounded-3xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Event</option>
              <option value="insight">Insight</option>
              <option value="news">News</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>

          <div className="relative">
            <select 
              value={practice}
              onChange={(e) => setPractice(e.target.value)}
              className="w-full px-4 py-3 bg-white rounded-3xl appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Intellectual Property</option>
              <option value="litigation">Litigation</option>
              <option value="restructuring">Restructuring</option>
              <option value="energy">Energy</option>
              <option value="transactional">Transactional</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default page