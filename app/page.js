'use client'

import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

import Hero from '@/components/Hero'
import { AboutUs } from '@/components/AboutUs'
import Domains from '@/components/Domains'
import TimelineSection from '@/components/Timeline'
import PrizePool from '@/components/PrizePool'
import Rules from '@/components/Rules'
import Footer from '@/components/Footer'

export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <>
      {/* HERO */}
      <section id="home">
        <Hero />
      </section>

      {/* ABOUT */}
      <section id="about">
        <AboutUs />
      </section>

      {/* DOMAINS + TIMELINE WRAPPER */}
      <div className="relative">

        {/* DOMAINS SECTION */}
        <section id="domains" className="relative min-h-screen w-full bg-linear-to-b from-[#06081f] from-10% via-[#0b0f3b] to-[#151a63]">
          <Image
            src="/star1.png"
            fill
            alt="star background"
            className="object-cover"
          />
          <Domains />
        </section>

        {/* TIMELINE SECTION */}
        <section id="event-flow" className="relative min-h-screen w-full bg-linear-to-b from-[#151a63] from-10% via-[#0b0f3b] to-[#06081f]">
          <Image
            src="/star1.png"
            fill
            alt="star background"
            className="object-cover"
          />
          <TimelineSection />
        </section>

        {/* 🔵 BOLD LEFT DECORATION (between Domains & Timeline visually) */}
        <Image
          src="/bold-left.png"
          alt="decorative left"
          width={500}
          height={500}
          priority
          className="
            absolute
            left-0
            top-[45%] sm:top-[40%] md:top-1/4
            w-[260px] sm:w-[220px] md:w-[420px] lg:w-[500px]
            h-auto
            pointer-events-none
            select-none
            z-20
            opacity-100
          "
        />

        {/* 🔴 BOLD RIGHT DECORATION (BETWEEN TIMELINE & PRIZEPOOL) */}
        <Image
          src="/bold-right.png"
          alt="decorative right"
          width={500}
          height={500}
          priority
          className="
            absolute
            right-0
            top-[95%] sm:top-[90%] md:top-[90%]
            w-[240px] sm:w-[200px] md:w-[420px] lg:w-[500px]
            h-auto
            pointer-events-none
            select-none
            z-20
            opacity-60
          "
        />
      </div>

      {/* PRIZE POOL */}
      <section id="prize-pool" className="relative h-screen w-full bg-linear-to-b from-[#06081f] from-10% via-[#0b0f3b] to-[#151a63]">
        <Image
          src="/star1.png"
          fill
          alt="star background"
          className="object-cover"
        />
        <PrizePool />
      </section>

      {/* RULES */}
      <section id="rules" className="relative min-h-screen w-full bg-linear-to-b from-[#151a63] from-10% via-[#0b0f3b] to-[#06081f]">
        <Image
          src="/star1.png"
          fill
          alt="star background"
          className="object-cover pointer-events-none"
        />
        <Rules />
      </section>

      {/* FOOTER */}
      <section id="contact">
        <Footer />
      </section>
    </>
  )
}
