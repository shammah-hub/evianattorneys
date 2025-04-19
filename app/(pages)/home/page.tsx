"use client"

import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import Testimonials from "@/app/components/Testimonials";
import Blog from "@/app/components/Blog";
import Image from "next/image";



function Page() {

  

  const services = [
    { text: "Intellectual Property", path: "/intellectualproperty" },
    { text: "Litigation", path: "/litigation" },
    { text: "Restructuring", path: "/restructuring" },
    { text: "Energy", path: "/energy" },
    { text: "Transactional", path: "/transactional" },
  ];

  return (
    <>
    <section className="flex bg-[url('/law.svg')] bg-cover bg-no-repeat bg-center min-h-screen items-center">
  {/* Left Content */}
  <div className="text-white p-4 md:p-12 lg:p-24 space-y-3 md:space-y-5 max-w-full">
    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
      Foundation of Trust, <br className="hidden md:block"/>Pillars of Excellence.
    </h1>
    <p className="text-sm md:text-base lg:text-lg">
    Where integrity meets innovation: crafting transformative legal strategies that<br/>
     redefine excellence. At Evian & Co., we focus on ideas and solutions <br/>
     not gossip or circumstance. We don&apos;t just discuss your problems; <br/>
     we solve them with intellectual rigor and unwavering commitment to results.
    </p>
    <button className="flex items-center border py-2 px-4 rounded-full gap-3 text-sm md:text-base hover:bg-white/10 transition-colors">
      Contact Us <GoArrowRight />
    </button>
  </div>
</section>

    {/* 5 Links */}
    <section className="bg-[#182492] py-4 md:h-[100px]">
  <div className="w-full px-3">
    <div className="flex flex-col w-full justify-center items-center gap-4 md:flex-wrap md:flex-row">
      {services.map((service, index) => (
        <Link href={service.path} key={index} className="w-full md:w-auto">
          <div className="flex justify-center items-center w-full md:w-[286px] h-[70px] bg-[#fdefe0] text-black text-[20px] bg-opacity-30 p-3 hover:bg-opacity-50 transition-all cursor-pointer">
            {service.text}
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

{/* expert legal solutions */}
<section className="flex flex-col md:flex-row px-4 md:pl-24 py-8 text-white bg-[#182492] bg-cover bg-center justify-between items-center w-full">
  {/* Left Content */}
  <div className="w-full md:max-w-[500px] space-y-6 md:space-y-12 mb-8 md:mb-0">
    <div className="space-y-4">
      <h3 className="text-2xl md:text-4xl lg:text-[40px] font-bold">
        Bespoke legal Solutions, <span className="font-serif italic">crafted exclusively for you.</span>
      </h3>
      <p className="text-sm md:text-base">
        At Evian & Co. Attorneys, we understand that legal challenges aren&apos;t one-size-fits-all.
        Your situation is unique, and so are your needs. Our approach combines decades of legal 
        expertise with a personalized methodology that places your specific circumstances at
        the center of our strategy.
      </p>
      <p className="text-sm md:text-base">
        Our team of seasoned attorneys carefully analyzes every aspect of your case,
        identifying nuanced opportunities that generalized approaches might miss.
        We don&apos;t just apply the law—we shape it to work for your particular situation,
        developing customized strategies that address your immediate concerns while
        safeguarding your long-term interests.
      </p>
      <p className="text-sm md:text-base">
        Whether you&apos;re facing complex litigation, navigating corporate compliance,
        or planning for your family&apos;s future, our commitment remains consistent: delivering
        exceptional legal representation precisely calibrated to your goals. We measure our 
        success not by billable hours but by the outcomes we achieve for our clients.
      </p>
    </div>
      
    <button className="flex items-center text-[#EFA657] border border-[#EFA657] py-2 px-4 rounded-full gap-3 text-sm md:text-base hover:bg-[#EFA657]/10 transition-colors">
      Contact Us <GoArrowRight />
    </button>
  </div>
  
  {/* Right Image */}
  <div className="w-full md:w-[40%] lg:w-[50%] xl:w-[600px] bg-[#EFA657]">
    <Image
      width={200}
      height={200}
      src="/enw.svg"
      alt="Man"
      className="w-full h-auto object-cover"
    />
  </div>
</section>


{/* pillar section */}

      <section className="py-12 md:py-30 flex flex-col md:flex-row gap-8 md:gap-50 justify-center items-center min-h-screen bg-[#fdefe0] px-4 md:px-0">
        {/* right side with pillar image */}
        <div className="mb-8 md:mb-0">
          <Image
          width={200}
          height={200}
           src="/plr.svg" 
           alt="pillar"
           className="h-auto w-auto max-w-full" 
           />
        </div>

        {/* right side texts*/}
        <div className="w-full md:w-auto">
          <h5 className="text-3xl md:text-[40px]">
            <span className="font-serif italic font-thin">Why</span> Choose Us
          </h5>

          <div className="p-6 md:p-12 border-b">
            <h5 className="text-2xl md:text-[32px]">
              Elite <span className="font-serif italic font-thin">Authority</span>
            </h5>
            <p>Ranked amongst emerging global law firms</p>
          </div>
          <div className="p-6 md:p-12 border-b">
            <h5 className="text-2xl md:text-[32px]">
              Strategic <span className="font-serif italic font-thin">Dominance</span>
            </h5>
            <p>We don&apos;t follow trends—we set them</p>
          </div>
          <div className="p-6 md:p-12 border-b">
            <h5 className="text-2xl md:text-[32px]">
              Results <span className="font-serif italic font-thin">That Speak</span>
            </h5>
            <p>Landmark victories for high-profile clients</p>
          </div>
        </div>
      </section>

      {/* Notable Case study */}
      <section className="py-12 md:py-20 px-4 md:p-32 bg-[#fdefe0] min-h-screen">
        <h3 className="mb-8 text-center text-3xl md:text-[40px]">
          Notable <span className="font-serif italic font-thin">Case Study</span>
        </h3>

        {/* three boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 md:p-6 bg-[#EFA657] rounded-lg">
          {/* First Card */}
          <div className="bg-[#fdefe0] rounded-lg px-6 md:px-12 py-8 md:p-12 shadow-md flex flex-col justify-between h-full">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              500M <br />
              Corporate <span className="font-serif italic font-thin"> Acquisition</span>
            </h3>
            <p className="text-gray-700 text-justify mb-6">
              Successfully advised a Fortune 500 company on a high-stakes merger.
            </p>

            <button className="self-start flex items-center text-[#182492] hover:underline border rounded-3xl py-2 px-3">
              Reach out to us now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* Second Card */}
          <div className="bg-[#fdefe0] rounded-lg px-6 md:px-12 py-8 md:p-12 shadow-md flex flex-col justify-between h-full">
            <button className="self-start flex items-center text-[#182492] hover:underline border rounded-3xl py-2 px-3">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              Landmark <br /> Intellectual <span className="font-serif italic font-thin">Property Win</span>
            </h3>
            <p className="text-justify text-gray-700 mb-6">
              Successfully advised a Fortune 500 company on a high-stakes merger.
            </p>
          </div>

          {/* Third Card */}
          <div className="bg-[#fdefe0] rounded-lg px-6 md:px-12 py-8 md:p-12 shadow-md flex flex-col justify-between h-full">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              High-Profile <br />
              Arbitration<span className="font-serif italic font-thin">Victory</span>
            </h3>
            <p className="text-justify text-gray-700 mb-6">
              Successfully advised a Fortune 500 company on a high-stakes merger.
            </p>

            <button className="self-start flex items-center text-[#182492] hover:underline border rounded-3xl py-2 px-3">
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Blog />

      <Testimonials />
    </>
  );
}

export default Page;