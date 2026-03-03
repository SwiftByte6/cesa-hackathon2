import React from 'react'
import { domains } from '@/data/domian'
import MarqueeText from './MarqueeText'

const Domains = () => {
  return (
    <>
      <MarqueeText />

      <div className="min-h-screen py-20 px-4">
        {/* Heading */}
        <div className="text-center max-w-7xl mx-auto space-y-6">
          <h2 className="text-sm md:text-base font-bold tracking-[0.3em] uppercase text-gray-400">
            DOMAINS
          </h2>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold  bg-clip-text text-white">
            Innovation Across Dimensions
          </h1>

          <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Choose a domain, solve real-world challenges, and build beyond limits.
          </p>

          {/* Download PDF Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Domain.pdf';
                link.download = 'Domain.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="
                relative overflow-hidden group
                bg-white text-black font-bold
                px-8 py-4 rounded-full
                flex items-center gap-3
                transition-all duration-300 cursor-pointer hover:scale-105
              "
            >
              {/* Black sliding background */}
              <span
                className="
                  absolute inset-0 bg-black
                  w-0 group-hover:w-full
                  transition-all duration-500 ease-in-out
                  z-0
                "
              />

              {/* Icon */}
              <svg 
                className="w-5 h-5 relative z-10 group-hover:text-white transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>

              {/* Text */}
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Download Problem Statements
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-20">
          {domains.map((domain) => {
            // Extract the main category from tags
            const category = domain.tags[0];
            
            return (
              <div
                key={domain.id}
                className="relative rounded-2xl p-px hover:scale-[1.03] transition-transform duration-300"
              >
                {/* Inner Card */}
                <div className="relative h-full rounded-2xl bg-white/10 backdrop-blur-sm p-6 flex flex-col justify-between min-h-100">

                  {/* Number Box and Category */}
                  <div className="flex items-center gap-4 mb-4">
                    {/* Number Badge */}
                    <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-white" />
                      <div className="absolute inset-px rounded-full bg-black" />
                      <span className="relative z-10 text-sm font-bold text-white">
                        {domain.id}
                      </span>
                    </div>

                    {/* Category Title */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white leading-tight">
                        {category}
                      </h3>
                    </div>
                  </div>

                  {/* Subtitle */}
                  <p className="text-sm text-white/90 font-medium mb-3">
                    {domain.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-white/70 leading-relaxed flex-1 line-clamp-5">
                    {domain.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {domain.tags.slice(1).map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-xs font-medium text-white bg-white/10 rounded-full border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Domains
