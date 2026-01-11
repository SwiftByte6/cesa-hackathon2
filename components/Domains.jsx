import React from 'react'
import { domains } from '@/data/domian'
import MarqueeText from './MarqueeText'

const Domains = () => {
  return (
  <>
    <MarqueeText/>
      <div className="min-h-screen   py-20 px-4">
        <div className="text-center max-w-9xl mx-auto space-y-6">
            <h2 className="text-sm md:text-base font-bold tracking-[0.3em]  uppercase">DOMAINS</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                Innovation Across Dimensions
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
                Choose a domain, solve real-world challenges, and build beyond limits.
            </h2>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl px-[10%] md:px-0 mx-auto mt-16">
        {domains.map((domain) => (
          <div
            key={domain.id}
            className="relative rounded-2xl border border-purple-400/40 bg-black/30 backdrop-blur-md p-6 text-white hover:border-purple-400 transition"
          >
            
           <div className='flex items-center justify-center gap-4'>
            {/* Number */}
             <div className="w-10 h-10 md:w-15 md:h-13 items-center flex justify-center bg-black px-3 py-1 rounded-full text-sm font-semibold border border-purple-400/40">
              {domain.id}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mt-6 mb-4">
              {domain.title}
            </h3>

           </div>
            {/* Description */}
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              {domain.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 text-xs text-white/40">
              {domain.tags.map((tag, index) => (
                <span key={index}>• {tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
  )
}

export default Domains
