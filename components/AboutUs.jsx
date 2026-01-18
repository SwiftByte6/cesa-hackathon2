'use client'

import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useMediaQuery } from 'react-responsive'
import { Planet } from '@/components/Planet'
import Image from 'next/image'
import { Suspense } from 'react'

export function AboutUs() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  // Desktop-only tuning
  const scale = 1.1
  const dpr = 1
  const cameraZ = 6
  const fov = 28

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black py-20 lg:py-28">
      {/* 🌌 STAR BACKGROUND */}
      <Image
        src="/invert.png"
        alt="Stars Background"
        fill
        priority
        className="object-cover"
      />

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

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14">
          {/* TEXT */}
          <div className="text-white max-w-xl mx-auto lg:mx-0">
            <p className="text-gray-300 leading-relaxed mb-6">
              INNOV8 TMRRW is a national-level hackathon designed to bring together innovators,
              developers, and problem-solvers to build technology-driven solutions for real-world challenges.
              Guided by the theme “Build. Beyond. Infinity.”, the event pushes boundaries of innovation.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8">
              Participants collaborate across domains, receive mentorship, and compete through structured
              evaluation rounds — transforming ideas into impactful solutions.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: '24+ Hours', desc: 'Non-stop innovation' },
                { title: 'Multiple Domains', desc: 'Real-world problems' },
                { title: 'Mentorship & Prizes', desc: 'Guidance & rewards' },
              ].map((item, i) => (
                <div key={i} className="relative rounded-lg p-4">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-[#6e56cf] to-[#c084fc]" />
                  <div className="absolute inset-[1.5px] rounded-lg bg-[#0F1026]" />
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 🌍 VISUAL */}
          <div className="relative h-[320px] sm:h-[380px] mix-b-lighten lg:h-[700px] flex items-center justify-center">
            {/* 🔹 MOBILE → STATIC IMAGE */}
            {isMobile && (
              <Image
                src="/planet1.png" // 🔁 use exported render of your planet
                alt="Planet Illustration"
                width={420}
                height={420}
                priority
                className="object-contain opacity-90 m-lighten"
              />
            )}

            {/* 🔹 DESKTOP → 3D PLANET */}
            {!isMobile && (
              <Canvas
                dpr={dpr}
                camera={{ position: [0, 1, cameraZ], fov }}
                gl={{
                  alpha: true,
                  antialias: true,
                  outputColorSpace: THREE.SRGBColorSpace,
                  toneMapping: THREE.ACESFilmicToneMapping,
                  toneMappingExposure: 1,
                }}
                onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
              >
                <Suspense fallback={null}>
                  <ambientLight intensity={0.6} />
                  <directionalLight position={[5, 3, 5]} intensity={1.2} />

                  <Float speed={0.6} rotationIntensity={0} floatIntensity={0.5}>
                    <Planet scale={scale} />
                  </Float>

                  <EffectComposer>
                    <Bloom
                      intensity={0}
                      luminanceThreshold={0.25}
                      luminanceSmoothing={0.9}
                    />
                  </EffectComposer>
                </Suspense>
              </Canvas>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
