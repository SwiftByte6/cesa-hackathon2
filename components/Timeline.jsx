"use client";

import { timeline } from "@/data/Timeline";

export default function TimelineSection() {
  return (
    <section className="relative py-24 px-6  text-white overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-20">
        <p className="text-sm uppercase tracking-widest text-purple-300 mb-2">
          Event Flow
        </p>
        <h2 className="text-3xl md:text-[64px] font-bold">
          The Journey of INNOV8 TMRRW
        </h2>
      </div>
      <div className="text-[48px] font-bold mb-2  md:text-center">
        <h1>Kickoff</h1>
      </div>
      {/* Timeline wrapper */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-5 md:left-1/2 top-0 h-full w-[10px] bg-white blur-[10px] -translate-x-1/2" />
        <div className="absolute left-5 md:left-1/2 top-0 h-full w-[10px] bg-[#d3d3d3] -translate-x-1/2" />

        {/* Timeline items */}
        <div className="space-y-24">
          {timeline.map((item, index) => {
            const isLeft = item.side === "left";

            return (
              <div
                key={index}
                className={`relative flex items-center ${isLeft ? "justify-start" : "justify-end"
                  }`}
              >
                {/* Content */}
                <div
                  className={`w-full md:w-[45%] text-left pl-16 ${isLeft ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                    }`}
                >
                  <h3 className="text-[24px] md:text-[48px] font-semibold mb-2">
                    {item.title}
                  </h3>
                  <div className="border-t-4 md:w-full w-[60%] rounded-full border-[#ffffff]/60" />
                  <p className="text-[14px] md:text-[20px]  pt-4 text-white/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Dot */}
                <div className="absolute md:left-1/2  md:-translate-x-1/2 left-[3.5] z-10">
                  <div className="md:w-[50px] w-[30px] h-[30px] md:h-[50px] rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                </div>

                {/* Date */}
<div
  className={`absolute
  top-[14px] md:top-1/2 md:-translate-y-1/2
  text-xs md:text-[32px]

  /* Mobile (unchanged) */
  right-0 mt-2 rounded-md px-3 py-1
  bg-white/10 backdrop-blur-md border border-white/20
  text-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.3)]

  /* Desktop reset */
  md:mt-0 md:px-0 md:py-0 md:rounded-none
  md:bg-transparent md:backdrop-blur-0 md:border-0 md:shadow-none
  md:text-white/60

  ${isLeft ? "md:left-1/2 md:ml-10" : "md:right-1/2 md:mr-10"}
  `}
>
  {item.date}
</div>

              </div>
            );
          })}
        </div>
      </div>
      <div className="text-[48px] font-bold mt-2  md:text-center">
        <h1>Final</h1>
      </div>
    </section>
  );
}
