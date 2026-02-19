import Image from 'next/image'
import React from 'react'

const PrizePool = () => {
  return (
    <section className="py-20 px-4 text-white  relative">
      <div className="pointer-events-none absolute -bottom-6 -left-[5%] md:block md:-bottom-10 lg:-bottom-12 xl:-bottom-14">
        <Image
          src={'/prize.png'}
          width={560}
          height={560}
          alt='character image'
          className="h-auto w-[220px] md:w-[360px] lg:w-[440px] xl:w-[520px]"
          priority
        />
      </div>
     
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-gray-300">Prize Pool</p>
        <h2 className="text-3xl md:text-5xl font-extrabold">Reward Beyond Infinity</h2>
        <p className="text-sm md:text-base text-gray-300">Celebrating innovation, excellence, and impact.</p>
      </div>

      <div className="max-w-4xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-3 items-end gap-10 text-center">
        <div className="space-y-2">
          <p className="text-xs uppercase text-gray-300">1st Runner-Up</p>
          <p className="text-3xl md:text-4xl font-extrabold">₹8,000</p>
        </div>

        <div className="space-y-2">
          <p className="text-xs uppercase text-gray-300">Winner</p>
          <p className="text-4xl md:text-6xl font-extrabold">₹15,000</p>
        </div>

        <div className="space-y-2">
          <p className="text-xs uppercase text-gray-300">2nd Runner-Up</p>
          <p className="text-3xl md:text-4xl font-extrabold">₹5,000</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-16">
        <div className="rounded-2xl border-2 border-white/70 bg-white/5 backdrop-blur-sm p-8 text-center space-y-3">
          <p className="text-lg md:text-xl font-semibold">Special Goodies</p>
          <p className="text-2xl md:text-3xl font-bold">Swag & Gear</p>
          <p className="text-sm md:text-base text-gray-300">
            Exclusive hackathon goodies and items for the winning team.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PrizePool
