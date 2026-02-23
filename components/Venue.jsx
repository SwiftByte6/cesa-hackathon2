'use client'

import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Venue = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useGSAP(() => {
    if (!contentRef.current) return

    gsap.from(contentRef.current.children, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out',
    })
  }, [])

  const handleGetDirections = () => {
    const mapsUrl = `https://www.google.com/maps/search/Vidyalankar+Institute+of+Technology,+Mumbai`
    window.open(mapsUrl, '_blank')
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 text-white overflow-hidden"
    //   style={{
    //     background: 'linear-gradient(135deg, rgba(20, 30, 50, 0.95) 0%, rgba(35, 50, 80, 0.95) 100%)',
    //   }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-white/70">
            Event Venue
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold">
            HackFest 2026 – Venue
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Hosted by CESA at Vidyalankar Institute of Technology
          </p>
        </div>

        {/* Main Content Grid */}
        <div ref={contentRef} className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Side - Location Details */}
          <div className="flex flex-col justify-between space-y-6">
            {/* Venue Card */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-6">
              {/* Location Icon with Name */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-white/70"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">Vidyalankar Institute of Technology</h3>
                  <p className="text-sm text-gray-400">College Location</p>
                </div>
              </div>

              {/* Address */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wide">Address</h4>
                <p className="text-base text-gray-300 leading-relaxed">
                  Vidyalankar College Marg,<br />
                  Wadala East,<br />
                  Mumbai, Maharashtra 400037
                </p>
              </div>

              {/* Date */}
              <div className="space-y-2 pt-4 border-t border-white/10">
                <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wide">Event Date</h4>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-white/70"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
                  </svg>
                  <p className="text-base text-gray-300">16 Feb – 7 March 2026</p>
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <button
              onClick={handleGetDirections}
              className="relative overflow-hidden group bg-white text-black font-bold px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <span className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0" />

              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                Get Directions
              </span>
            </button>
          </div>

          {/* Right Side - Google Maps */}
          <div className="flex flex-col">
            <div className="relative w-full h-96 md:h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5916203627!2d72.8489558!3d19.0449722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c61b5e5e5e5d%3A0x5e5e5e5e5e5e5e5e!2sVidyalankar%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1645273200000"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Additional Info */}

      </div>
    </section>
  )
}

export default Venue
