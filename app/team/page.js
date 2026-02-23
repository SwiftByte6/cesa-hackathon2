'use client'

import { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

import Navbar from '@/components/Navbar'
import Team from '@/components/Team'
import Footer from '@/components/Footer'

export default function TeamPage() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const bgWrapperRef = useRef(null)

  return (
    <>
      <Navbar />

      <div
        ref={bgWrapperRef}
        className="relative bg-[url('/back2.png')] bg-fixed bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center pt-20">
            <div className="text-center max-w-4xl mx-auto px-4">
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-wide">
                Our Team
              </h1>
              <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto">
                Passionate innovators and tech enthusiasts driving excellence in computer engineering education
              </p>
            </div>
          </section>

          {/* Team Section */}
          <section className="relative w-full">
            <Team />
          </section>
        </div>
      </div>

      <section id="contact">
        <Footer />
      </section>
    </>
  )
}
