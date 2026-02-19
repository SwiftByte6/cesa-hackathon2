'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'
import { HiDownload } from 'react-icons/hi'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Hero = () => {

  gsap.registerPlugin(ScrollTrigger)

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const backgroundRef = useRef(null)
  const sectionRef = useRef(null)
  const eyebrowRef = useRef(null)
  const titleRef = useRef(null)
  const subRef = useRef(null)
  const countdownRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-03-02T00:00:00').getTime()
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

  useGSAP(() => {
    if (!backgroundRef.current) return

    const mm = gsap.matchMedia()

    mm.add('(min-width: 1024px) and (pointer: fine)', () => {
      const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 40
        const y = -(e.clientY / window.innerHeight - 0.5) * 40

        gsap.to(backgroundRef.current, {
          x: x,
          y: y,
          duration: 0.8,
          ease: 'power2.out'
        })
      }

      window.addEventListener('mousemove', handleMouseMove)

      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    })

    return () => {
      mm.revert()
    }
  }, [])

  useGSAP(() => {
    if (!sectionRef.current) return

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) return

    gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      })
      .from(
        [eyebrowRef.current, titleRef.current, subRef.current, countdownRef.current, ctaRef.current],
        {
          autoAlpha: 0,
          y: 24,
          filter: 'blur(8px)',
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
        }
      )
  }, [])
  return (
    <section ref={sectionRef} className="relative min-h-screen w-full overflow-hidden bg-black">

      {/* 🌌 Background Full 100vw */}
      <div
      ref={backgroundRef}
      className="absolute inset-0 z-0">
        <Image
          src="/back1.png"
          alt="Stars Background"
          fill
          priority
          className="object-cover scale-110"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />


      {/* 🧠 Content */}
      <div className="relative z-20 top-10 md:top-0 flex flex-col items-center justify-center text-center px-6 min-h-screen">

        <h3 ref={eyebrowRef} className="text-white/70 tracking-widest mb-3">
          Forge. Code. Conquer.
        </h3>

        <h1 ref={titleRef} className="md:text-[7rem] text-[2rem] font-extrabold tracking-wide text-white">
          HACKFEST: INNOV8 TMRW
        </h1>

        <div ref={subRef} className="mt-4">
          <h2 className="tracking-widest text-sm text-white/80">
            BUILD BEYOND INFINITY
          </h2>
          <p className="text-[12px] mt-3 text-white/60">
            16 Feb – 7 March 2026 | CESA X VIT Mumbai
          </p>
        </div>

        {/* ⏳ Countdown */}
        <div ref={countdownRef} className="mt-12 flex gap-2 md:gap-8 justify-center f">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'HRS', value: timeLeft.hours },
            { label: 'MIN', value: timeLeft.minutes },
            { label: 'SEC', value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <div className="relative rounded-lg w-20 h-20 md:w-28 md:h-28 flex items-center justify-center backdrop-blur-md bg-white/10 border border-white/30">

                <span className="text-3xl md:text-4xl font-bold text-white">
                  {String(item.value).padStart(2, '0')}
                </span>
              </div>
              <p className="text-white text-sm mt-3">{item.label}</p>
            </div>
          ))}
        </div>

        {/* 🎯 CTAs */}
        <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">

          <button
            onClick={() => window.open('https://unstop.com/o/4xQh9il?lb=v79lZ29X&utm_medium=Share&utm_source=online_coding_challenge&utm_campaign=Nymzoplg97408', '_blank')}
            className="
    relative overflow-hidden group
    bg-white text-black font-bold
    px-8 py-4 rounded-full
    flex items-center gap-2
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

            {/* Text */}
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Register Now
            </span>

            {/* Icon */}
            <FaArrowRight className="relative z-10 text-lg group-hover:text-white transition-colors duration-300" />
          </button>


          <button
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/broshure.pdf';
              link.download = 'HACKFEST-Brochure.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="
              border border-white/30 text-white cursor-pointer font-medium
              px-8 py-4
              rounded-full
              hover:bg-white/10
              transition-all duration-300
              flex items-center gap-2 hover:scale-105
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
