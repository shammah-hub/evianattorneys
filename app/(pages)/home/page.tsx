"use client"
import React from "react";

function Page() {
  return (
    <>
      <section className="flex bg-[url('/law.svg')] bg-cover bg-no-repeat bg-center min-h-screen items-center">
        {/* Left Content */}
        <div className="text-white px-4 py-8 sm:px-6 md:px-8 lg:px-12 xl:px-24 space-y-4 sm:space-y-5 md:space-y-6 max-w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Foundation of Trust, <br className="hidden sm:block"/>
            Pillars of Excellence.
          </h1>
          <div className="max-w-4xl">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-justify">
              Where integrity meets innovation: crafting transformative legal strategies that
              redefine excellence. At Evian & Co., we focus on ideas and solutions
              not gossip or circumstance. We don&apos;t just discuss your problems;
              we solve them with intellectual rigor and unwavering commitment to results.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;