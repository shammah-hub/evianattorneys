import React from 'react'

function Locations() {
  return (
    <>
      <section>
        <div className=" bg-[#fdefe0] px-4 py-30 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-20 mx-auto max-w-6xl">
            <h1 className="text-6xl md:text-[128px] font-serif italic font-light text-gray-900 mb-4">
              Locations
            </h1>
            <div className="text-center md:text-left">
              <p className="mb-4">
                Our attorneys collaborate to serve clients across our international platform 
                of offices around the world.
              </p>
              <select 
                className="w-full px-4 bg-white py-2 rounded-3xl"
                defaultValue=""
              >
                <option value="" disabled>Jump to location</option>
                {/* Add your locations here */}
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="flex bg-[url('/uk.svg')] text-white text-center text-[120px] bg-cover min-h-screen items-center justify-center">
              <h1>United Kingdom</h1>
      </section>
      <section className="flex bg-[url('/ng.svg')] text-white text-[120px] bg-cover min-h-screen items-center justify-center">
              <h1>Nigeria</h1>
      </section>
      <section className="h-26 bg-[#fdefe0] ">
             
      </section>
      
    </>
  )
}

export default Locations;