'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Hero from '@/components/Hero'
import { AboutUs } from '@/components/AboutUs'
import Domains from '@/components/Domains'
import TimelineSection from '@/components/Timeline'
import PrizePool from '@/components/PrizePool'
import Rules from '@/components/Rules'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  const cloud1Ref = useRef(null)
  const cloud2Ref = useRef(null)
  const leftDecoRef = useRef(null)
  const rightDecoRef = useRef(null)
  const bgWrapperRef = useRef(null)

useEffect(() => {
  if (isMobile) return
  if (!bgWrapperRef.current) return

  const trigger = ScrollTrigger.create({
    trigger: bgWrapperRef.current,
    start: 'top bottom',
    end: 'bottom top',
    scrub: true,
    // markers:true,
    onUpdate: (self) => {
      const p = self.progress

      // ☁️ Cloud 1 (foreground → moves more)
      gsap.set(cloud1Ref.current, {
        y: -(650 * p),
      })

      // ☁️ Cloud 2 (background → moves less)
      gsap.set(cloud2Ref.current, {
        y: -(840 * p),
      })

      // 🐉 Left Decoration
      gsap.set(leftDecoRef.current, {
        y: -180 * p,
      })

      // 🐉 Right Decoration
      gsap.set(rightDecoRef.current, {
        y: -220 * p,
      })
    },
  })

  return () => trigger.kill()

}, [isMobile])



  return (
    <>
      <section id="home">
        <Hero />
      </section>

      {/* ☁️ Cloud 1 */}
      <div
        ref={cloud1Ref}
        className="absolute bottom-[-15%] md:-bottom-[20%] w-screen md:w-[60vw] h-[40%] md:h-[540px] z-10 pointer-events-none"
      >
        <Image
          src="/cloud1.png"
          alt="cloud"
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* ☁️ Cloud 2 */}
      <div
        ref={cloud2Ref}
        className="absolute -bottom-[20%] right-0 hidden md:block w-[60vw] h-[38%] z-10 pointer-events-none"
      >
        <Image
          src="/cloud2.png"
          alt="cloud"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div
        ref={bgWrapperRef}
        className="relative bg-[url('/back2.png')] bg-fixed bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10">

          <section id="about">
            <AboutUs />
          </section>

          <div className="relative">

            <section id="domains" className="relative min-h-screen w-full">
              <Domains />
            </section>

            <section id="event-flow" className="relative min-h-screen w-full">
              <TimelineSection />
            </section>

            {/* 🐉 Left Deco */}
            <div
              ref={leftDecoRef}
              className="absolute left-0 top-[45%] md:top-[30%]  md:w-[900px] w-[500px] opacity-90 pointer-events-none z-20 transform-gpu"
            >
              <Image
                src="/decoleft.png"
                alt="left deco"
                width={900}
                height={900}
                priority
                className="w-full h-auto"
              />
            </div>

            {/* 🐉 Right Deco */}
            <div
              ref={rightDecoRef}
              className="absolute right-0 top-[95%] md:top-[90%] w-[400px] md:w-[600px] opacity-80 pointer-events-none z-20 transform-gpu"
            >
              <Image
                src="/decoright.png"
                alt="right deco"
                width={600}
                height={600}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>

          <section id="prize-pool" className="relative h-screen w-full">
            <PrizePool />
          </section>

          <section id="rules" className="relative min-h-screen w-full">
            <Rules />
          </section>

        </div>
      </div>

      <section id="contact">
        <Footer />
      </section>
    </>
  )
}
