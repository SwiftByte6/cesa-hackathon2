'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Domains', href: '#domains' },
    { name: 'Event-Flow', href: '#event-flow' },
    { name: 'Prize-Pool', href: '#prize-pool' },
    { name: 'Rules & Eligibility', href: '#rules' },
    { name: 'Contact', href: '#contact' },
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
      {/* Text with left-to-right color fill */}
      <span className="relative z-10 block text-white transition-colors duration-300 group-hover:text-[#FFB86A]">
        {link.name}
      </span>

      {/* Animated Underline */}
      <span
        className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#FFB86A]
        transition-all duration-300 ease-out
        group-hover:w-full"
      />
    </Link>
  ))}
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
            className={`text-white text-4xl font-extrabold uppercase tracking-wider mb-8 transition-all duration-500 ${
              isOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
