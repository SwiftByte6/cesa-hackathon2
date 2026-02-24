'use client';

import Image from 'next/image'
import React from 'react'
// import { Marquee } from './ui/marquee'

const sponsors = [
  { src: "/Sponser3.png", alt: "CESA Logo", width: 150, height: 80, grayscale: false },
  { src: "/EkotexLogo.png", alt: "Ekotex Logo", width: 150, height: 80, grayscale: false, link: "https://www.ekotexelectrificient.com/" },
  { src: "/Sponser2.png", alt: "Sponsor Logo", width: 250, height: 80, grayscale: false },
  // { src: "/EkotexLogo.png", alt: "Ekotex Logo", width: 150, height: 80, grayscale: false, link: "https://www.ekotexelectrificient.com/" },
];

// const firstRow = sponsors.slice(0, 2);
// const secondRow = sponsors.slice(2, 4);

const Sponsership = () => {
  return (
    <div className='h-[50v'>
      <div className="max-w-5xl mx-auto text-center space-y-4 mt-12">
        <h2 className="text-3xl md:text-5xl font-extrabold">SPONSORS & PARTNERS</h2>
        <p className="text-sm md:text-base text-gray-300">Powering Innovation Beyond Infinity</p>
      </div>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4">
        {sponsors.map((sponsor, index) => (
          <SponsorCard key={index} {...sponsor} />
        ))}
      </div>
      
      {/* <div className="relative flex w-[75vw] md:w-[50vw] flex-col items-center justify-center mx-auto overflow-hidden mt-8">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((sponsor, index) => (
            <SponsorCard key={index} {...sponsor} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((sponsor, index) => (
            <SponsorCard key={index} {...sponsor} />
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
      </div> */}
      
      {/* <div className="flex absolute bottom-0 right-0 justify-center items-center mx-auto mt-8">
       <Image 
        src={'/dragons.gif'} 
        alt="Dragons" 
        width={200} 
        height={200}
        className={`object-contain transition-all duration-300 `}
      />
      </div> */}
    </div>
  )
}

function SponsorCard({ src, alt, width, height, grayscale, link }) {
  const content = (
    <Image 
      src={src} 
      alt={alt} 
      width={width} 
      height={height}
      className={`object-contain transition-all duration-300 cursor-pointer ${grayscale ? 'grayscale hover:grayscale-0' : 'hover:grayscale-0'}`}
    />
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center px-6">
        {content}
      </a>
    );
  }

  return (
    <div className="flex items-center justify-center px-6">
      {content}
    </div>
  );
}

export default Sponsership
