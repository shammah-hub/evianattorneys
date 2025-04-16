"use client";
import React, { useState } from 'react';
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      title: "LEDGA Finance",
      content: "Evian & Co. have been instrumental in guiding us through the complex regulatory landscape of fintech. Their nuanced understanding of educational finance and innovative legal strategies allowed us to confidently launch our platform. We appreciate their clarity, responsiveness, and commitment to ensuring compliance while fostering our growth.",
      company: "CEO LEDGA Finance",
      date: "December, 2021",
      initial: "LF"
    },
    {
      title: "Baimpeo Palms",
      content: "Working with Evian & Co. has been a game-changer for BAIMPEO PALMS. They have been our legal backbone. Their comprehensive legal support, from land acquisition to compliance with agricultural regulations, has provided us with the confidence to invest in sustainable farming practices. The firm's attention to detail and strategic advice have been crucial in protecting our interests and ensuring smooth operations. Their innovative solutions to land tenure issues and environmental regulations allowed us to scale operations sustainably. Evian’s deep understanding of agribusiness transformed legal hurdles into growth opportunities",
      company: " Benedict Ikogwe Founder, BAIMPEO PALMS",
      date: "February, 2025",
      initial: "BP"
    },
    {
      title: "Woke Entertainment",
      content: "In the fast-paced music industry, intellectual property is everything. Evian & Co. safeguarded our artists’ copyrights, negotiated groundbreaking royalty agreements, and defended us against piracy litigation. The team's creative solutions and unwavering commitment to our vision have been pivotal and proven invaluable in protecting our rights and advancing our business objectives. Evian doesn’t just ‘do law’—they speak the language of creativity and innovation.",
      company: "CEO, Woke Entertainment",
      date: "March, 2024",
      initial: "WE"
    },
    // Add more testimonials as needed
    {
      title: "CIRCLEPAY",
      content: "Evian & Co. have been a critical ally in our journey to modernize traditional community savings systems. Their deep legal acumen and expertise in fintech and regulatory compliance and consumer protection laws ensured that our operations were built on a solid legal foundation, structuring our platform to meet both regulatory standards and community expectations and fostering trust among our stakeholders. The team’s commitment to our success is evident in every interaction and strategic recommendation.",
      company: "CIRCLEPAY Executive Team",
      date: "January, 2025",
      initial: "WE"
    },
    {
      title: "PROP X",
      content: "Evian & Co. has been a trusted advisor to PROP X, offering expert legal counsel on real estate transactions and compliance. Their in-depth knowledge of Nigerian real estate laws and fintech regulations has been crucial in structuring our business model and ensuring compliance. The firm's proactive and solution-oriented approach has been a significant asset as we navigate the dynamic real estate tech landscape. Evian isn’t just a law firm—they’re architects of progress.",
      company: "Managing Director, PROP X",
      date: "January, 2025",
      initial: "PX"
    },
    {
      title: "Oyomon",
      content: "Evian & Co. was very instrumental in protecting our intellectual property portfolio and structuring client contracts for our tech solutions. From SaaS agreements to GDPR-compliant data policies for our international clients, their attention to detail is unmatched. Their tailored legal advice, innovative approach, and hands-on support have helped us navigate complex commercial environments with confidence. We value their professionalism and meticulous attention to detail. OYOMON is a Digital Solutions Provider (App Development, Branding, UI/UX) etc",
      company: "Co-Founder, OYOMON",
      date: "June, 2024",
      initial: "OY"
    },
    {
      title: "CLOUDDUST",
      content: "Evian & Co. mastered the intersection of digital content and law. They drafted bulletproof licensing agreements and defended our platform against IP infringements. Their tech-savvy team turned legal hurdles into opportunities for growth. An Online Booktech Platform.",
      company: "Nkechi Ajogwu Managing Director, CLOUDDUST",
      date: "January, 2025",
      initial: "PX"
    },
  ];

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: React.SetStateAction<number>) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-8 md:py-16 px-4 md:p-20 bg-[#fdefe0]">
      {/* Pagination dots */}
      <div className="flex justify-center mb-6 md:mb-12">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 mx-1 rounded-full ${
              activeIndex === index ? 'bg-blue-900' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-normal mb-4 md:mb-0 text-center md:text-left">
            What our <span className="italic font-['Instrument_Serif'] font-light">Clients say</span>
          </h2>
          
          <div className="flex space-x-2">
            <button 
              onClick={goToPrevious}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
            >
              <span className="sr-only">Previous</span>
              <HiOutlineArrowLongLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button 
              onClick={goToNext}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
            >
              <span className="sr-only">Next</span>
              <HiOutlineArrowLongRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="min-w-full"
              >
                <div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-8 space-y-4 md:space-y-0">
                  {/* Show 1 testimonial on mobile, up to 3 on larger screens */}
                  {[0].map((offset) => {
                    // On mobile, just show the active testimonial
                    const testIndex = (index + offset) % testimonials.length;
                    const test = testimonials[testIndex];
                    
                    return (
                      <div 
                        key={testIndex}
                        className="flex flex-col justify-between w-full md:w-full lg:w-[470px] p-4 md:p-6 border rounded-lg bg-[#fdefe0] shadow-sm h-auto md:h-[420px]"
                      >
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                            {test.title}
                          </h3>
                          <p className="italic font-['Instrument_Serif'] text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                            {test.content}
                          </p>
                        </div>
                        
                        <div className="flex items-center mt-4">
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-900 text-white flex items-center justify-center mr-3 text-sm md:text-base">
                            {test.initial}
                          </div>
                          <div>
                            <p className="font-medium text-sm md:text-base">{test.company}</p>
                            <p className="text-gray-500 text-xs md:text-sm">{test.date}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  
                  {/* Additional testimonials only visible on tablet+ */}
                  {[1, 2].map((offset) => {
                    const testIndex = (index + offset) % testimonials.length;
                    const test = testimonials[testIndex];
                    
                    return (
                      <div 
                        key={testIndex}
                        className="hidden md:flex flex-col justify-between w-full lg:w-[470px] p-6 border rounded-lg bg-[#fdefe0] shadow-sm h-[420px]"
                      >
                        <div>
                          <h3 className="text-xl font-semibold mb-3">
                            {test.title}
                          </h3>
                          <p className="italic font-['Instrument_Serif'] text-gray-700 mb-6">
                            {test.content}
                          </p>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center mr-3">
                            {test.initial}
                          </div>
                          <div>
                            <p className="font-medium">{test.company}</p>
                            <p className="text-gray-500 text-sm">{test.date}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;