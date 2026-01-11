'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MarqueeText = () => {
  const upperRef = useRef(null);
  const lowerRef = useRef(null);

  useGSAP(() => {
    // Upper marquee → LEFT TO RIGHT
    gsap.fromTo(
      upperRef.current,
      { xPercent: -30 },
      {
        xPercent: 0,
        ease: 'circ.out"',
        scrollTrigger: {
          trigger: upperRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    // Lower marquee → RIGHT TO LEFT
    gsap.fromTo(
      lowerRef.current,
      { xPercent: 10 },
      {
        xPercent: -50,
        ease: 'circ.out"',
        scrollTrigger: {
          trigger: lowerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="overflow-hidden space-y-6 py-10 transform -translate-y-[25%]">

      {/* Upper Marquee */}
      <div className="w-full overflow-hidden">
        <div ref={upperRef} className="flex w-max">
          <h1 className=" text-[1.6rem] md:text-[4rem] whitespace-nowrap tracking-widest font-extrabold px-8">
            INNOV8 TMRW • NATIONAL LEVEL HACKATHON • 36 HOURS • VIT MUMBAI • BUILD • BEYOND • INFINITY •
          </h1>
          {/* <h1 className="text-[4rem] whitespace-nowrap tracking-widest font-extrabold px-8">
            INNOV8 TMRW • NATIONAL LEVEL HACKATHON • 36 HOURS • VIT MUMBAI • BUILD • BEYOND • INFINITY •
          </h1> */}
        </div>
      </div>

      {/* Lower Marquee */}
      <div className="w-full overflow-hidden">
        <div ref={lowerRef} className="flex w-max">
          <h1 className="text-[1.6rem] md:text-[4rem] uppercase whitespace-nowrap tracking-widest font-extrabold px-8">
            Registration Begins • January 10•
          </h1>
          <h1 className="text-[1.6rem] md:text-[4rem] uppercase whitespace-nowrap tracking-widest font-extrabold px-8">
        Registration Begins • January 10 •
          </h1>
          <h1 className="text-[1.6rem] md:text-[4rem] uppercase whitespace-nowrap tracking-widest font-extrabold px-8">
            Registration Begins • January 10 •
          </h1> 
        </div> 
      </div>

    </div>
  );
};

export default MarqueeText;
