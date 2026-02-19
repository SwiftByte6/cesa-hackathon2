'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from "@gsap/react";


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
  const textRef = useRef(null)

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


  // useGSAP(() => {
  //   const tl = gsap.timeline();

  //   tl.from(textRef.current, {
  //     opacity: 0,
  //     duration: 1.3,
  //     ease: "power2.out"
  //   })
  //   tl.to(textRef.current, {
  //     letterSpacing: "-180px",
  //     duration: 0.6,
  //     opacity:0,
  //     scale:0.8,
  //     ease: "power2.inOut",
  //     onComplete: () => {
  //       textRef.current.textContent = "C"
  //     }
  //   })
  //       tl.to(textRef.current, {
  //     duration: 0.6,
  //     opacity:1,
  //     ease: "power2.inOut",
  //     delay: -0.3,
  //     onComplete: () => {
  //       textRef.current.textContent = "C"
  //     }
  //   })

  //   tl.to(".vi-mask-group", {
  //     rotate: 10,
  //     duration: 2,
  //     ease: "Power4.easeInOut",
  //     transformOrigin: "50% 50%",
  //   }).to(".vi-mask-group", {
  //     scale: 10,
  //     duration: 2,
  //     delay: -1.8,
  //     ease: "Expo.easeInOut",
  //     transformOrigin: "50% 50%",
  //     opacity: 0,
  //     onUpdate: function () {
  //       if (this.progress() >= 0.9) {
  //         document.querySelector(".svg").remove();
  //         setShowContent(true);
  //         this.kill();
  //       }
  //     },
  //   });
  // });



  return (
    <>
      {/* <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  ref={textRef}
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  CESA
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./back1.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div> */}


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
              className="absolute right-0 top-[95%] md:top-[97%] w-[400px] md:w-[600px] opacity-80 pointer-events-none z-20 transform-gpu"
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
