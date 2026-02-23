'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Domains', href: '#domains' },
    { name: 'Event-Flow', href: '#event-flow' },
    { name: 'Team', href: '/team' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[95%] mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center">
          <Image
            src="/LogoCesa 1.png"
            alt="CESA Logo"
            width={120}
            height={50}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
    <div className="hidden lg:flex items-center space-x-8">
  {navLinks.map((link) => (
    <Link
      key={link.name}
      href={link.href}
      className="relative group text-sm font-medium tracking-wide"
    >
      {/* Text Wrapper with Sliding Effect */}
      <div className="relative h-5 overflow-hidden">
        {/* First Text - slides up on hover */}
        <div className="text-white transition-transform duration-300 ease-out group-hover:-translate-y-full">
          {link.name}
        </div>

        {/* Second Text - slides in from below on hover */}
        <div className="absolute inset-0 text-[#FFB86A] translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
          {link.name}
        </div>
      </div>

      {/* Animated Underline */}
      <span
        className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#FFB86A]
        transition-all duration-300 ease-out
        group-hover:w-full"
      />
    </Link>
  ))}
  
  {/* Register Now Button */}
  <button
    onClick={() => window.open('https://unstop.com/o/4xQh9il?lb=v79lZ29X&utm_medium=Share&utm_source=online_coding_challenge&utm_campaign=Nymzoplg97408', '_blank')}
    className="
    relative overflow-hidden group
    bg-white text-black font-bold
    px-4 py-2 rounded-full
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
</div>


        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 z-50"
        >
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
              isOpen ? 'rotate-45 translate-y-[6px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-white my-1 transition-all duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
              isOpen ? '-rotate-45 -translate-y-[6px]' : ''
            }`}
          />
        </button>
      </div>

      {/* ===== Mobile Fullscreen Menu ===== */}
      <div
        className={`fixed inset-0 bg-[#1f2029] flex flex-col items-center justify-center transition-all duration-700 ease-in-out lg:hidden ${
          isOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {navLinks.map((link, index) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={`text-white text-3xl sm:text-4xl font-extrabold uppercase tracking-wider mb-8 transition-all duration-500 text-center leading-tight px-6 max-w-[90vw] ${
              isOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {link.name}
          </Link>
        ))}
        
        {/* Register Now Button Mobile */}
        <button
          onClick={() => {
            window.open('https://unstop.com/o/4xQh9il?lb=v79lZ29X&utm_medium=Share&utm_source=online_coding_challenge&utm_campaign=Nymzoplg97408', '_blank')
            setIsOpen(false)
          }}
          className={`
          relative overflow-hidden group
          bg-white text-black font-bold
          px-8 py-4 rounded-full
          flex items-center gap-2
          transition-all duration-300 cursor-pointer hover:scale-105
          mt-8
          ${
            isOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }
        `}
          style={{ transitionDelay: `${navLinks.length * 100}ms` }}
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
      </div>
    </nav>
  )
}

export default Navbar
