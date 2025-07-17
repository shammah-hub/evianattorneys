import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TeamShowcase = () => {
  const teamMembers = [
   
  {
    id: 1,
    name: "OKUNGBOWA Sylvester",
    position: "Managing Partner",
    image: "/ew.svg",
    link: "/attorney/sylvester"
  },
  {
    id: 2,
    name: "AGHWARETOMA Ogheneghare",
    position: "Energy Partner",
    image: "/1.svg",
    link: "/attorney/ogheneghare"
  },
  {
    id: 3,
    name: "MADUKA Chibuike Bernard",
    position: "Senior Associate",
    image: "/2.svg",
    link: "/attorney/bernard"
  },
  {
    id: 4,
    name: "IBRO Sandra Kura",
    position: "Senior Associate",
    image: "/3.svg",
    link: "/attorney/kura"
  },
  {
    id: 5,
    name: "CHUKWUKADIBA Chimeremere",
    position: "Associate",
    image: "/4.svg",
    link: "/attorney/chimeremere"
  },
  {
    id: 6,
    name: "ABIMIOLA Moyosore",
    position: "Senior Associate",
    image: "/5.svg",
    link: "/attorney/moyosore"
  },
  {
    id: 7,
    name: "AMAKU Faith Inabassey",
    position: "Associate",
    image: "/6.svg",
    link: "/attorney/inabassey"
  },
  {
    id: 8,
    name: "ONYEMAUWA Maryann",
    position: "Graduate Intern",
    image: "/7.svg",
    link: "/attorney/maryann"
  }

];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Link 
              key={member.id} 
              href={member.link}
              className="bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer block"
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {member.position}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamShowcase;