import React from "react";

export default function Blog() {
  return (
    <div className="mx-auto p-4 md:p-8 lg:p-24">
      <h2 className="italic text-gray-600 text-base md:text-lg mb-2 md:mb-4">Publications</h2>
      
      {/* Responsive grid - single column on mobile, mixed on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
        <div className="md:col-span-2 h-40 sm:h-48 md:h-64 bg-gray-200 rounded"></div>
        <div className="h-40 sm:h-48 md:h-64 bg-gray-200 rounded"></div>
      </div>
      
      <h1 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
        Ex-gov Lamido rejects El-Rufai&apos;s call to join SDP
      </h1>
      
      <p className="text-gray-700 leading-relaxed mb-3 md:mb-4 text-left md:text-justify text-sm md:text-base">
        Former Jigawa State Governor and Peoples Democratic Party chieftain, Sule Lamido, has dismissed a 
        call by ex-Kaduna State Governor, Nasir El-Rufai, urging opposition leaders to join the Social Democratic
        Party. El-Rufai, who recently announced his defection from the All Progressives Congress to the SDP,
        made the call in an interview with BBC Hausa. While he did not mention Lamido by name, he invited 
        key opposition figures, including Atiku Abubakar, Peter Obi, Rotimi Amaechi, and Rauf Aregbesola, to join him in the SDP.
      </p>

      <p className="text-gray-700 leading-relaxed mb-3 md:mb-4 text-left md:text-justify text-sm md:text-base">
        Responding in a separate BBC Hausa interview on Sunday, Lamido dismissed the invitation as an insult, 
        insisting that the PDP, which he helped build, laid the foundation for El-Rufai&apos;s political career. 
        &quot;The party we formed, the PDP, is the one that gave birth to El-Rufai.     
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-3 md:mb-4 text-left md:text-justify text-sm md:text-base">
      &quot;You&apos;re not enough to make us leave the PDP,&quot; Lamido said. 
        He added, &quot;He once said that there are no adults in Nigeria in politics, 
        but now he is calling on us to join him in the SDP.&quot; 
        The former governor also questioned El-Rufai&apos;s motives for defecting from the APC to the SDP.      
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-3 md:mb-4 text-left md:text-justify text-sm md:text-base">
      &quot;He said he told President Buhari about his decision to leave the APC,
        but now he is saying that he is one of the adults in Nigerian politics,&quot; 
        Lamido stated. The former governor argued that the PDP had not done anything to warrant his defection, 
        emphasizing his long-standing loyalty. &quot;If I was going to leave the PDP, 
        I would have done so in 2014 when the APC was formed,&quot; he said. 
        The former governor also criticised El-Rufai&apos;s leadership style,
        saying that leadership is not about anger or selfish ambition.      
      </p>
      
      <p className="text-gray-700 leading-relaxed mb-3 md:mb-4 text-left md:text-justify text-sm md:text-base">
      &quot;Leadership is done with patience and vision,
        and doing things for the peace of the followers and the country as a whole,&quot; Lamido said.
        Lamido advised El-Rufai to put patriotism first instead of showing anger towards others, saying,
        &quot;What should be done is to put patriotism first, instead of showing anger towards someone.&quot;
        He added, &quot;The PDP has been working to rebuild its strength after losing the 2015 presidential election.&quot;
      </p>
      
      <p className="text-right text-orange-500 italic cursor-pointer text-sm md:text-base">Read more</p>
    </div>
  );
}