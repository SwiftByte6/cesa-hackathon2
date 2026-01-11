'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'
import { HiDownload } from 'react-icons/hi'

const Hero = () => {
  const asteroids = [
    { id: 'a1', className: 'top-[32%] left-[14%] w-16 md:w-32 rotate-[-6deg]' },
    { id: 'a2', className: 'top-[10%] right-[18%] w-14 md:w-32 rotate-[8deg]' },
    {
      id: 'a3',
      className:
        'bottom-[-8%] left-[-6%] w-48 md:w-[22rem] blur-sm opacity-60 rotate-[4deg]',
    },
    {
      id: 'a4',
      className:
        'bottom-[-8%] right-[-6%] w-48 md:w-[22rem] blur-sm opacity-60 rotate-[-10deg]',
    },
  ]

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-02-10T00:00:00').getTime()
      const now = new Date().getTime()
      const diff = targetDate - now

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black py-24">

      {/* 🌌 Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.png"
          alt="Stars Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* ☄️ Asteroids */}
      {asteroids.map((a) => (
        <div
          key={a.id}
          className={`pointer-events-none absolute z-10 ${a.className}`}
        >
          <Image
            src="/asteroid.png"
            alt="Asteroid"
            width={300}
            height={300}
            className="w-full h-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          />
        </div>
      ))}

      {/* 🧠 Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6">

        <h3 className="text-white/70 tracking-widest mb-3">
          Build.Beyond.Infinity
        </h3>

        <h1 className="md:text-[7rem] text-[3rem] font-extrabold tracking-wide text-white">
          INNVO8 TMRW
        </h1>

        <div className="mt-4">
          <h2 className="tracking-widest text-sm text-white/80">
            BUILD BEYOND INFINITY
          </h2>
          <p className="text-[10px] mt-3 text-white/60">
            10–14 Feb 2026 | VIT Mumbai
          </p>
        </div>

        {/* ⏳ Countdown */}
        <div className="mt-12 flex gap-4 md:gap-8 justify-center flex-wrap">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'HRS', value: timeLeft.hours },
            { label: 'MIN', value: timeLeft.minutes },
            { label: 'SEC', value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <div className="relative rounded-lg w-20 h-20 md:w-28 md:h-28 flex items-center justify-center">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-[#6e56cf] to-[#c084fc]" />
                <div className="absolute inset-[1px] rounded-lg bg-[#0F1026]" />
                <span className="relative z-10 text-3xl md:text-4xl font-bold text-white">
                  {String(item.value).padStart(2, '0')}
                </span>
              </div>
              <p className="text-gray-400 text-sm mt-3">{item.label}</p>
            </div>
          ))}
        </div>

        {/* 🎯 CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center w-full">

          <button
            className="
              bg-white text-black font-bold
              px-6 py-3 md:px-8 md:py-4
              rounded-full
              text-sm sm:text-base
              hover:shadow-[0_0_30px_rgba(139,92,246,0.8)]
              transition-all duration-300
              flex items-center gap-2
              w-full sm:w-auto
              justify-center
              whitespace-nowrap
            "
          >
            <span>Register Now</span>
            <FaArrowRight className="text-lg" />
          </button>

          <button
            className="
              border border-white/30 text-white font-medium
              px-6 py-3 md:px-8 md:py-4
              rounded-full
              text-sm sm:text-base
              hover:bg-white/10
              transition-all duration-300
              flex items-center gap-2
              w-full sm:w-auto
              justify-center
              whitespace-nowrap
            "
          >
            <HiDownload className="text-lg" />
            <span>Download Brochure</span>
          </button>

        </div>
      </div>
    </section>
  )
}

export default Hero
