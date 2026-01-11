'use client'

import React, { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Sponsership from './Sponsership'

gsap.registerPlugin(ScrollTrigger)

const rules = [
  'Each team must consist of 2 to 4 participants.',
  'Teams may be inter-departmental and inter-year.',
  'Pre-built projects are strictly prohibited.',
  'All development activity will be monitored throughout the hackathon.',
  'Participants must adhere to ethical coding practices and fair-play standards.',
]

const faqs = [
  {
    question: 'Who can participate in INNOV8 TMMRW?',
    answer:
      'The hackathon is open to all eligible students who meet the team composition criteria.',
  },
  {
    question: 'Can we participate with an existing idea?',
    answer: 'Fresh builds only. Bring the idea, build during the hackathon.',
  },
  {
    question: 'Is cross-department or cross-year participation allowed?',
    answer: 'Yes. Mixed teams are encouraged to foster diverse perspectives.',
  },
  {
    question: 'Will mentorship be provided during the event?',
    answer: 'Yes. Mentors will be available during checkpoints and office hours.',
  },
]

const FAQItem = ({ item, index, isOpen, onToggle }) => {
  const contentRef = useRef(null)

  useGSAP(() => {
    if (!contentRef.current) return

    gsap.to(contentRef.current, {
      height: isOpen ? 'auto' : 0,
      opacity: isOpen ? 1 : 0,
      duration: 0.4,
      ease: 'power2.out',
    })
  }, [isOpen])

  return (
    <div className="py-4">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => onToggle(index)}
        className="flex w-full items-center justify-between text-left gap-4 select-none hover:opacity-80 transition-opacity cursor-pointer"
      >
        <span className="text-sm md:text-base font-semibold flex-1">
          {item.question}
        </span>
        <span className="text-xl font-bold leading-none">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden h-0 opacity-0"
      >
        <p className="mt-4 bg-[#00bed3]/70 text-sm md:text-base text-black p-2">
          {item.answer}
        </p>
      </div>
    </div>
  )
}

const Rules = () => {
  const [openIndex, setOpenIndex] = useState(0)
  const sectionRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // useGSAP(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: sectionRef.current,
  //       start: 'top 80%',
  //     },
  //   })

  //   tl.from(leftRef.current, {
  //     y: 60,
  //     opacity: 0,
  //     duration: 0.8,
  //     ease: 'power3.out',
  //   })
  //     .from(
  //       rightRef.current,
  //       {
  //         y: 60,
  //         opacity: 0,
  //         duration: 0.8,
  //         ease: 'power3.out',
  //       },
  //       '-=0.4'
  //     )
  // }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
        
        {/* Rules */}
        <div ref={leftRef} className="space-y-6">
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-gray-300">
            Important
          </p>
          <h2 className="text-3xl md:text-[48px] font-extrabold">
            Rules &amp; Guidelines
          </h2>
          <ol className="space-y-4 text-sm md:text-base text-gray-100 list-decimal list-inside">
            {rules.map((rule, idx) => (
              <li key={idx}>{rule}</li>
            ))}
          </ol>
        </div>

        {/* FAQ */}
        <div
          ref={rightRef}
          className="md:border-l md:border-white/15 md:pl-10 space-y-6"
        >
          <h2 className="text-3xl md:text-[48px] font-extrabold">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-white/10 border-t border-white/10">
            {faqs.map((item, idx) => (
              <FAQItem
                key={idx}
                item={item}
                index={idx}
                isOpen={openIndex === idx}
                onToggle={handleToggle}
              />
            ))}
          </div>
        </div>
      </div>

      <Sponsership />
    </section>
  )
}

export default Rules
