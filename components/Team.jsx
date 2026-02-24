'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { convener, leadership, domains } from '@/data/teamData'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

/* ─── Flatten all members into one array ─── */
function getAllMembers() {
  const all = []

  if (convener?.name) all.push(convener)

  leadership.forEach((m) => all.push(m))

  domains.forEach((d) => {
    d.members?.forEach((m) => all.push(m))
    d.coMembers?.forEach((m) => all.push(m))
  })

  return all
}

/* ─── Single Member Card ─── */
function MemberCard({ member }) {
  const [hovered, setHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  const imgSrc = hovered && member.image?.hover
    ? member.image.hover
    : member.image?.default

  return (
    <div
      className="team-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Photo */}
      <div className="team-card__photo">
        {imgSrc && !imageError ? (
          <Image
            src={imgSrc}
            alt={member.name}
            fill
            sizes="260px"
            className="team-card__img"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="team-card__placeholder">
            <span>{member.name.charAt(0)}</span>
          </div>
        )}

        {/* Social Overlay */}
        <div className="team-card__overlay">
          {member.links?.linkedin && (
            <a
              href={member.links.linkedin.startsWith('http') ? member.links.linkedin : `https://${member.links.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="team-card__social-btn"
              aria-label={`${member.name} LinkedIn`}
            >
              <FaLinkedin size={22} />
            </a>
          )}
          {member.links?.github && (
            <a
              href={member.links.github.startsWith('http') ? member.links.github : `https://${member.links.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="team-card__social-btn"
              aria-label={`${member.name} GitHub`}
            >
              <FaGithub size={22} />
            </a>
          )}
        </div>
      </div>

      {/* Info */}
      <h3 className="team-card__name">{member.name}</h3>
      <p className="team-card__role">{member.role}</p>
    </div>
  )
}

/* ─── Scrolling Row ─── */
function ScrollingRow({ members, direction = 'left', speed = 40 }) {
  const trackRef = useRef(null)
  const tweenRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // We duplicate the list so we get a seamless loop
    const totalWidth = track.scrollWidth / 2

    gsap.set(track, { x: direction === 'left' ? 0 : -totalWidth })

    tweenRef.current = gsap.to(track, {
      x: direction === 'left' ? -totalWidth : 0,
      duration: members.length * (speed / 10),
      ease: 'none',
      repeat: -1,
    })

    return () => tweenRef.current?.kill()
  }, [members, direction, speed])

  // Pause on hover
  const handleMouseEnter = () => tweenRef.current?.pause()
  const handleMouseLeave = () => tweenRef.current?.resume()

  // Double the items for seamless looping
  const items = [...members, ...members]

  return (
    <div
      className="team-scroll-row"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="team-scroll-track" ref={trackRef}>
        {items.map((member, i) => (
          <MemberCard key={`${member.name}-${i}`} member={member} />
        ))}
      </div>
    </div>
  )
}

/* ─── Main Component ─── */
export default function Team() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const subRef = useRef(null)

  const allMembers = getAllMembers()

  // Split into two rows
  const mid = Math.ceil(allMembers.length / 2)
  const row1 = allMembers.slice(0, mid)
  const row2 = allMembers.slice(mid)

  useGSAP(() => {
    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
    gsap.from(subRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      },
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.25,
      ease: 'power3.out',
    })
  }, [])

  return (
    <section ref={sectionRef} className="team-section">
      {/* Header */}
      <div className="team-header">
        <p className="team-label" ref={subRef}>Meet The Vikings</p>
        <h2 className="team-heading" ref={headingRef}>
          Our Team
        </h2>
        <p className="team-subheading" ref={subRef}>
          Passionate innovators and tech enthusiasts driving excellence in computer engineering education
        </p>
      </div>

      {/* Row 1 — scroll left */}
      <ScrollingRow members={row1} direction="left" speed={35} />

      {/* Row 2 — scroll right */}
      <ScrollingRow members={row2} direction="right" speed={40} />
    </section>
  )
}
