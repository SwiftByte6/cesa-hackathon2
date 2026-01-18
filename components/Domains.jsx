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
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-20">
          {domains.map((domain) => (
            <div
              key={domain.id}
              className="relative rounded-2xl p-[1px] bg-gradient-to-b from-[#6e56cf] to-[#c084fc] hover:scale-[1.03] transition-transform duration-300"
            >
              {/* Inner Card */}
              <div className="relative h-full rounded-2xl bg-[#0F1026] p-6 flex flex-col justify-between">

                {/* Number Box (same as first card) */}
                <div className="flex items-center gap-4">
                  {/* Number Badge */}
                  <div className="relative w-14 h-14 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-[#6e56cf] to-[#c084fc]" />
                    <div className="absolute inset-[1px] rounded-lg bg-[#0F1026]" />
                    <span className="relative z-10 text-xl font-bold text-white">
                      {String(domain.id).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white leading-none">
                    {domain.title}
                  </h3>
                </div>




                {/* Description */}
                <p className="text-sm text-white/70 text-center leading-relaxed mt-4">
                  {domain.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mt-6 text-xs text-white/50">
                  {domain.tags.map((tag, index) => (
                    <span key={index}>• {tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Domains
