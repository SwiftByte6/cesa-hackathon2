'use client'
import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { useGSAP } from '@gsap/react'
import { Canvas } from '@react-three/fiber'
import { Astronaut1 } from './Astronaut1'
import Image from 'next/image'
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const footerRef = useRef(null)
  const contentRef = useRef(null)

  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [scrollProgress, setScrollProgress] = useState(0)

  /* ---------------- Mouse ---------------- */
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  /* ---------------- Scroll + Parallax ---------------- */
  useGSAP(() => {
    const lenis = new Lenis({ smooth: true })
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((t) => lenis.raf(t * 1000))
    gsap.ticker.lagSmoothing(0)

    ScrollTrigger.create({
      trigger: footerRef.current,
      start: 'top bottom',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        const p = self.progress
        setScrollProgress(p)

        // Foreground content
        gsap.set(contentRef.current, {
          y: `${-45 * (1 - p)}%`,
        })

        // Background layers
        gsap.set('.bg-layer', {
          y: `${-10 * (1 - p)}%`,
        })

        gsap.set('.stars-layer', {
          y: `${-5 * (1 - p)}%`,
        })
      },
    })
  }, [])

  return (
    <footer ref={footerRef} className="footer-root">
      {/* ---------------- BACKGROUND ---------------- */}
      <div className="parallax-layer bg-layer">
        <Image
          src="/backgroundwave.png"
          fill
          alt="background"
          className="object-cover opacity-70 md:opacity-80"
        />
      </div>

      <div className="parallax-layer stars-layer">
        <Image
          src="/star.jpg"
          fill
          alt="stars"
          className="object-cover opacity-30"
        />
      </div>

      {/* ---------------- CANVAS ---------------- */}
      <div className="footer-canvas" aria-hidden>
        <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
          <ambientLight intensity={1.4} />
          <directionalLight position={[10, 10, 5]} intensity={2} />
          <pointLight position={[-10, -10, 10]} intensity={0.5} />
          <Astronaut1
            mouse={mouse}
            scrollProgress={scrollProgress}
          />
        </Canvas>
      </div>

      {/* ---------------- CONTENT ---------------- */}
      <div
  ref={contentRef}
  className="footer-content"
  style={{ transform: 'translateY(-45%)' }}
>
  <div className="footer-row">

    {/* Brand */}
    <div>
      <h2 className="title text-[3rem] md:text-[4rem] ">INNOV8 TMRRW</h2>
      <p className="tag">Build. Beyond. Infinity.</p>
      <p className="meta">
        A national-level hackathon organized by <br />
        Computer Engineering Students’ Association (CESA), <br />
        Vidyalankar Institute of Technology, Mumbai
      </p>
    </div>

    {/* Event Info */}
    <div>
      <h3>EVENT INFO</h3>
      <p>10–14 February 2026</p>
      <p>Hybrid Mode</p>
      <p>VIT Mumbai</p>
    </div>

    {/* Contact */}
    <div>
      <h3>CONTACT</h3>
      <p>Email: cesa.vidyalankar@gmail.com</p>
      <p>Swaroop – +91 70210 85649</p>
      <p>Tejas – +91 91738 94631</p>
      <p>Bhavika – +91 81890 97092</p>
      <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <a href="https://instagram.com/cesa_vit" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-100 transition-opacity">
          <FaInstagram size={22} color="rgba(255,255,255,0.6)" />
        </a>

        <a href="https://youtube.com/@cesavit" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:opacity-100 transition-opacity">
          <FaYoutube size={26} color="rgba(255,255,255,0.6)" />
        </a>

        <a href="https://linkedin.com/company/cesa-vit" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-100 transition-opacity">
          <FaLinkedin size={22} color="rgba(255,255,255,0.6)" />
        </a>

        <a href="mailto:cesa.vidyalankar@gmail.com" aria-label="Email" className="hover:opacity-100 transition-opacity">
          <MdEmail size={24} color="rgba(255,255,255,0.6)" />
        </a>
      </div>
    </div>

  </div>

  {/* Footer Bottom */}
  <div className="footer-bottom">
    <span>© 2026 CESA, VIT Mumbai. All rights reserved.</span>
    <span>Designed & Developed by CESA Tech Team</span>
  </div>
</div>


      {/* ---------------- STYLES ---------------- */}
      <style jsx>{`
        .footer-root {
          position: relative;
          height: 75svh;
          background: black;
          color: white;
          overflow: hidden;
        }

        .parallax-layer {
          position: absolute;
          inset: 0;
          will-change: transform;
        }

        .bg-layer {
          z-index: 0;
        }

        .stars-layer {
          z-index: 1;
          mix-blend-mode: screen;
        }

        .footer-canvas {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          opacity: 0.6;
        }

        .footer-content {
          position: relative;
          z-index: 3;
          height: 100%;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .footer-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem;
        }

        .title {
          
          font-weight: 900;
        }

        .tag {
          opacity: 0.8;
        }

        .meta {
          opacity: 0.6;
          font-size: 0.85rem;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          opacity: 0.6;
        }
      `}</style>
    </footer>
  )
}
