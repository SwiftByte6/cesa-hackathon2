'use client'

import React, { useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Sponsership from './Sponsership'

gsap.registerPlugin(ScrollTrigger)

const rules = [
  "Teams must consist of 2–4 members and complete registration and submission within the specified deadlines in the prescribed format.",
  "All submissions must be original. Plagiarism, copied content, or unfair practices will result in immediate disqualification.",
  "Entries will be evaluated solely on innovation, feasibility, impact, and clarity. The judges’ decisions will be final and binding.",
  "Shortlisted teams must mandatorily attend the mentoring-cum-evaluation round and present their solution on D-Day.",
  "All participants are expected to maintain professional, respectful, and ethical conduct throughout the hackathon.",
];
const faqs = [
  {
    question: "Who can participate in Hackfest?",
    answer:
      "Hackfest is open to all undergraduate students with some technical knowledge. Participants must register in teams of 2–4 members.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "Yes, a participation fee of ₹200 per team is applicable only for teams shortlisted for Round 2.",
  },
  {
    question: "What needs to be submitted for Round 1?",
    answer:
      "Teams must submit an Abstract or PPT in the prescribed format before the deadline.",
  },
  {
    question: "How are teams shortlisted?",
    answer:
      "Submissions are evaluated based on innovation, feasibility, clarity, relevance, and impact potential.",
  },
  {
    question: "What happens after Round 1 results?",
    answer:
      "Shortlisted teams advance to Round 2 and receive new problem statements for further development.",
  },
  {
    question: "Is the mentoring session compulsory?",
    answer:
      "Yes, the mentoring session is mandatory for all shortlisted teams as it serves as a progress evaluation round.",
  },
];


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
        <p className="mt-4 bg-white/20 rounded-2xl text-sm md:text-base text-white/80 p-2">
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

      {/* <Sponsership /> */}
    </section>
  )
}

export default Rules
