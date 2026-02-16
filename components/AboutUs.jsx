'use client'

import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

export function AboutUs() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <section className="relative min-h-screen w-full overflow-hidden py-20 lg:py-28">

      <div className="relative z-10 max-w-[90vw] lg:max-w-[85vw] mx-auto px-4 lg:px-6 font-space-grotesk">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-widest text-sm text-gray-400 mb-3">
            About the Event
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white">
            What is <span>INNOV8 TMRRW?</span>
          </h2>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14">

          {/* LEFT SIDE — TEXT */}
          <div className="text-white max-w-xl mx-auto lg:mx-0">

            <p className="text-gray-100 leading-relaxed mb-6">
              <span className="font-semibold text-white">
                HACKFEST – INNOV8 TMRW
              </span>{" "}
              is a structured, multi-round hackathon initiative by CESA-VIT designed
              to transform innovative ideas into real-world solutions. Built around
              carefully curated, domain-specific challenges, the event provides students
              with a dynamic platform to explore problems, develop strategic approaches,
              and implement technology-driven innovations that address practical needs.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              The hackathon fosters creativity, critical thinking, and collaborative
              problem-solving by encouraging participants to move beyond theoretical
              concepts and focus on tangible outcomes. With expert mentorship and a
              competitive yet supportive environment, teams refine their ideas,
              strengthen their execution, and enhance their presentation skills.
            </p>

            <p className="text-gray-400 leading-relaxed mb-10">
              Through this journey, participants don’t just build projects —
              they design scalable, impactful solutions engineered for meaningful
              and lasting change.
            </p>

            {/* TAG FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  title: "Structured Innovation Journey",
                  desc: "Multi-Stage Competition",
                },
                {
                  title: "Diverse Real-World Challenges",
                  desc: "Multiple Domains",
                },
                {
                  title: "Guidance. Evaluation. Excellence.",
                  desc: "Mentorship & Recognition",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-base font-semibold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>


          {/* RIGHT SIDE — IMAGE */}
          <div className="relative flex justify-center lg:justify-end items-end h-[400px] lg:h-[600px]">
            <div className="relative z-10 w-[400px] h-[340px] sm:w-[380px] sm:h-[300px] md:w-[450px] md:h-[360px] lg:w-[600px] lg:h-[480px] xl:w-[700px] xl:h-[560px] animate-float">
              <Image
                src="/aboutus.svg"
                alt="Hackfest Illustration"
                fill
                priority
                className="object-contain drop-shadow-2xl scale-200 md:scale-150"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
