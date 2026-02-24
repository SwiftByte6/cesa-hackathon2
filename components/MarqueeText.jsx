'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function MarqueeText() {
  const upperRef = useRef(null);
  const lowerRef = useRef(null);

  useGSAP(() => {
    const upper = upperRef.current;
    const lower = lowerRef.current;

    // LEFT → RIGHT
    gsap.fromTo(
      upper,
      { xPercent: -50 },
      {
        xPercent: 0,
        duration: 30,
        ease: 'none',
        repeat: -1,
      }
    );

    // RIGHT → LEFT
    gsap.fromTo(
      lower,
      { xPercent: 0 },
      {
        xPercent: -50,
        duration: 30,
        ease: 'none',
        repeat: -1,
      }
    );
  }, []);

  return (
    <div className="overflow-hidden py-10 -translate-y-[25%] space-y-6">

      {/* Upper Marquee */}
      <div className="w-full overflow-hidden">
        <div ref={upperRef} className="flex w-max">
          <MarqueeTextBlock />
          <MarqueeTextBlock />
        </div>
      </div>

      {/* Lower Marquee */}
      <div className="w-full overflow-hidden">
        <div ref={lowerRef} className="flex w-max">
          <MarqueeDateBlock />
          <MarqueeDateBlock />
          <MarqueeDateBlock />
        </div>
      </div>

    </div>
  );
}

/* --------- Components --------- */

const baseText =
  'INNOV8 TMRW • NATIONAL LEVEL HACKATHON •CESA X• VIT MUMBAI • BUILD • BEYOND • INFINITY •';

function MarqueeTextBlock() {
  return (
    <h1 className="px-8 text-white text-[1.6rem] md:text-[4rem] font-extrabold tracking-widest whitespace-nowrap">
      {baseText}
    </h1>
  );
}

function MarqueeDateBlock() {
  return (
    <h1 className="px-8 text-white text-[1.6rem] md:text-[4rem] font-extrabold tracking-widest uppercase whitespace-nowrap">
      REGISTRATION BEGINS • FEBRURARY 19 •
    </h1>
  );
}
