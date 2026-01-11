import Image from 'next/image'
import React from 'react'

const Sponsership = () => {
  return (
    <div className='h-[50vh]'>
         <div className="max-w-5xl mx-auto text-center space-y-4 mt-12">

        <h2 className="text-3xl md:text-5xl font-extrabold">SPONSORS & PARTNERS</h2>
        <p className="text-sm md:text-base text-gray-300">Powering Innovation Beyond Infinity</p>
      </div>
    <div className="max-w-5xl mx-auto flex justify-center items-center">
        <Image
          src="/sponser.png"
          width={1200}
          height={600}
          alt="Sponsor logos"
          priority
          className="
            w-full
            max-w-4xl
            object-contain
            opacity-80
            grayscale
            hover:opacity-100
            hover:grayscale-0
            transition-all
            duration-300
            mix-blend-lighten
          "
        />
      </div>
     <div className="absolute bottom-0 w-full flex justify-center pointer-events-none">
  <Image
    src="/ring.png"
    width={600}
    height={600}
    alt="Decorative ring"
    priority
    className="
      object-contain
      opacity-80
      mix-blend-lighten
      transition-all
      duration-300
    "
  />
  
</div>
<div className='w-full h-[75px] bg-linear-to-b from-transparent via-black to-black bottom-0  absolute  left-0'>

  </div>

    </div>
  )
}

export default Sponsership
