import React from 'react'
import Image from 'next/image';

function page() {
  return (
    <>
      <section className="flex bg-[url('/cont.svg')] bg-cover bg-no-repeat bg-[#ffff] bg-center min-h-screen items-center">
        {/* Left Content */}
        <div className="text-white px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-24 space-y-4 md:space-y-6 max-w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            Experienced. Strategic. Committed to<br/>
            Protecting Your Rights and Delivering Results
          </p>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 bg-[#ffff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Have questions? Get in touch!
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed px-2">
              For all other enquiries, please complete the form<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>and we will email a reply to you as soon as possible.
            </p>
          </div>
          
          <form className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20">
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                  <Image
                    src="/person.svg"
                    alt="Person icon"
                    width={20}
                    height={20}
                    className="text-gray-400"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full pl-12 pr-4 py-3 sm:py-4 border-b border-gray-300 bg-transparent focus:border-[#182492] focus:outline-none text-gray-900 text-sm sm:text-base"
                />
              </div>
              
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                  <Image
                    src="/email.svg"
                    alt="Email icon"
                    width={20}
                    height={20}
                    className="text-gray-400"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-12 pr-4 py-3 sm:py-4 border-b border-gray-300 bg-transparent focus:border-[#182492] focus:outline-none text-gray-900 text-sm sm:text-base"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-20">
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                  <Image
                    src="/phone.svg"
                    alt="Phone icon"
                    width={20}
                    height={20}
                    className="text-gray-400"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full pl-12 pr-4 py-3 sm:py-4 border-b border-gray-300 bg-transparent focus:border-[#182492] focus:outline-none text-gray-900 text-sm sm:text-base"
                />
              </div>
              
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                  <Image
                    src="/caution.svg"
                    alt="Info icon"
                    width={20}
                    height={20}
                    className="text-gray-400"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full pl-12 pr-4 py-3 sm:py-4 border-b border-gray-300 bg-transparent focus:border-[#182492] focus:outline-none text-gray-900 text-sm sm:text-base"
                />
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute left-3 top-6 z-10">
                <Image
                  src="/pencil.svg"
                  alt="Edit icon"
                  width={20}
                  height={20}
                  className="text-gray-400"
                />
              </div>
              <textarea
                placeholder="How can we help you?"
                rows={4}
                className="w-full pl-12 pr-4 py-3 sm:py-4 border-b border-gray-300 bg-transparent focus:border-[#182492] focus:outline-none text-gray-900 resize-none text-sm sm:text-base"
              />
            </div>
            
            <div className="pt-4 sm:pt-6 flex justify-center sm:justify-start">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-[#182492] text-[#182492] font-medium hover:bg-[#182492] hover:text-white transition-colors duration-300 text-sm sm:text-base"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default page