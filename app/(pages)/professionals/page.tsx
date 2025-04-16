"use client"
import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";

export default function page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [practice, setPractice] = useState("");
  const [level, setLevel] = useState("");
  const [office, setOffice] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("");

  const practices = [
    "Patent Prosecution and Litigation",
    "Trademark Registration, Counseling, Protection, Enforcement, and Litigation",
    "Copyright Registration, Licensing, and Litigation",
    "Trade Secret Protection and Misappropriation Litigation",
    "IP Portfolio Management and Strategy",
    "Technology Licensing and Transfer Agreements",
    "IP Due Diligence and Valuation",
    "Joint Ventures and Strategic Alliances (IP Focus)",
    "Domain Name and Internet Branding Disputes",
    "Design Rights and Industrial Design Protection",
    "Counterfeit and Grey Market Enforcement",
    "Software and Digital Innovation IP",
    "Biotech and Pharmaceutical Intellectual Property",
    "Advertising and Media IP Issues",
    "Cross-Border IP Dispute Resolution",
    "Advertising, Marketing, & Promotions",
    "Artificial Intelligence & Related Fields",
    "Cybersecurity & Data Privacy",
    "Internet & Social Media",
    "Open-Source Software",
    "Sourcing & Information Technology",
    "Private Client and Wealth Management Practice Areas in Nigeria",
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
  ];
  const levels = ["Chairman" ,"Managing Partner" ,"Partner", "Senior Associate", "Associate", "Foreign Associate",];
  const offices = ["Abuja", "Lagos", "Port-Harcourt", "Ogun","Akwa Ibom", "Edo", "kano", "United Kingdom"];
  
  // Create array of letters A-Z
  const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  const handleLetterClick = (letter: any) => {
    setSelectedLetter(letter === selectedLetter ? "" : letter);
  };

  return (
    <div className="min-h-screen bg-[#fdefe0] px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[128px] font-serif italic font-light text-gray-900 mb-4">
          Professionals
        </h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Find Paralegals & Other Professionals →
        </p>

        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="text-gray-400" />
          </div>
          <input 
            type="text"
            placeholder="Search here by keyword"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-3xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>

        {/* A-Z Letter Selection - Made horizontally scrollable for mobile */}
        <div className="flex overflow-x-auto pb-2 justify-start sm:justify-center sm:flex-wrap gap-2 mb-8 no-scrollbar">
          <button
            className={`min-w-8 w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center ${
              selectedLetter === "" ? "bg-orange-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setSelectedLetter("")}
          >
            All
          </button>
          {letters.map((letter) => (
            <button
              key={letter}
              onClick={() => handleLetterClick(letter)}
              className={`min-w-8 w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center ${
                selectedLetter === letter ? "bg-orange-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {letter}
            </button>
          ))}
        </div>

        {/* Filter grid - Changed to stack on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-3 px-0 sm:px-12 gap-4">
          <div className="relative">
            <select
              value={practice}
              onChange={(e) => setPractice(e.target.value)}
              className="w-full appearance-none px-4 py-3 rounded-3xl bg-white text-gray-700"
            >
              <option value="">Patent Prosecution and Litigation</option>
              {practices.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDown className="h-5 w-5" />
            </div>
          </div>

          <div className="relative">
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full appearance-none px-4 py-3 rounded-3xl bg-white text-gray-700"
            >
              <option value="">Foreign Associate</option>
              {levels.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDown className="h-5 w-5" />
            </div>
          </div>

          <div className="relative">
            <select
              value={office}
              onChange={(e) => setOffice(e.target.value)}
              className="w-full appearance-none px-4 py-3 rounded-3xl bg-white text-gray-700"
            >
              <option value="">Abuja</option>
              {offices.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <ChevronDown className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Custom style for hiding scrollbar on letter selection */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}