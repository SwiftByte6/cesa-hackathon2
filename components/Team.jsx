'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { convener, leadership, domains } from '@/data/teamData'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

export default function Team() {
  const containerRef = useRef(null)
  const cardsRef = useRef([])

  useGSAP(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: 'power3.out',
        })
      }
    })
  }, [])

  const MemberCard = ({ member, index }) => {
    const [imageError, setImageError] = React.useState(false)

    return (
      <div
        key={`${member.name}-${index}`}
        ref={(el) => cardsRef.current[index] = el}
        className="group relative rounded-3xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10 h-[600px] md:h-[700px]"
      >
        {/* Full Image Background */}
        {member.image?.default && !imageError ? (
          <Image
            src={member.image.default}
            alt={member.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
            <span className="text-6xl font-bold text-white/40">
              {member.name.charAt(0)}
            </span>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/80" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-end p-8">
          {/* Name */}
          <h3 className="relative z-10 text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-[#FFB86A] transition-colors duration-300 text-center">
            {member.name}
          </h3>

          {/* Role */}
          <p className="relative z-10 text-sm md:text-base text-gray-200 font-semibold mb-4 uppercase tracking-widest">
            {member.role}
          </p>

          {/* Divider */}
          <div className="relative z-10 w-16 h-1 bg-gradient-to-r from-transparent via-[#FFB86A] to-transparent mb-6" />

          {/* Social Links */}
          <div className="relative z-10 flex gap-4">
            {member.links?.linkedin && (
              <a
                href={member.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg text-white bg-white/20 hover:bg-[#FFB86A] hover:text-black transition-all duration-300 border border-white/30 group-hover:border-[#FFB86A] backdrop-blur-sm"
              >
                <FaLinkedin size={20} />
              </a>
            )}
            {member.links?.github && (
              <a
                href={member.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg text-white bg-white/20 hover:bg-[#FFB86A] hover:text-black transition-all duration-300 border border-white/30 group-hover:border-[#FFB86A] backdrop-blur-sm"
              >
                <FaGithub size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section ref={containerRef} className="relative min-h-screen w-full py-20 px-4">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-widest text-sm text-gray-400 mb-3">
            Meet Our Team
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            The Visionaries Behind CESA
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Passionate innovators and leaders dedicated to fostering creativity and innovation in the tech community
          </p>
        </div>

        {/* Convener Section */}
        {convener && (
          <div className="mb-24">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">Convener</h3>
            <div className="max-w-md mx-auto">
              <MemberCard member={convener} index={0} />
            </div>
          </div>
        )}

        {/* Leadership Section */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {leadership.map((member, index) => (
              <MemberCard key={member.name} member={member} index={index + 1} />
            ))}
          </div>
        </div>

        {/* Domain Teams */}
        {domains.map((domain, domainIndex) => (
          <div key={domain.title} className="mb-24">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
              {domain.title} Team
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {[...domain.members, ...(domain.coMembers || [])].map((member, memberIndex) => (
                <MemberCard
                  key={`${member.name}-${memberIndex}`}
                  member={member}
                  index={domainIndex * 10 + memberIndex}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Join CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-4">Want to be part of the CESA team?</p>
          <button className="relative overflow-hidden group bg-white text-black font-bold px-8 py-4 rounded-full flex items-center gap-2 mx-auto transition-all duration-300 hover:scale-105">
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
              Join Us
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
