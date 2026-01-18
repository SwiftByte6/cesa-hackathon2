'use client'
import Image from "next/image";
import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function NotFound() {
  const ufoRef = useRef(null);

  useEffect(() => {
    if (ufoRef.current) {
      gsap.to(ufoRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }
  }, []);

  return (
    <main
      className=" relative h-screen w-full inset-0 z-[1000]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 50%, #151a63 10%, #0b0f3b 50%, #06081f 100%)",
      }}
>

          <Image
            src="/star1.png"
            fill
            alt="star background"
            className="object-cover opacity-50"
          />

          {/* Upper Text */}
          <div className="absolute top-20 left-0 right-0 z-50 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-white font-semibold text-center">
              Oops! Looks like this route doesn't exist.
            </p>
          </div>
   
          <div className="absolute z-100 inset-0 flex items-center justify-center text-white font-bold"> 
            <h1 className="text-[14rem] md:text-[30rem] text-white/30">404</h1>
          </div>
          <div className="absolute z-100 -inset-20 md:inset-10 flex items-center justify-center text-white font-bold" ref={ufoRef}> 
            <Image
              src="/404/ufo.png"
              fill
              alt="star background"
              className=" object-contain "
            />
          </div>
          <div className="absolute z-100 w-full mix-blend-lighten h-[300px] md:h-[400px] bottom-0   "> 
            <Image
              src="/404/bottom-laser.png"
              fill
              alt="star background"
              className="object-contain mix-blend-lighten"
            />
          </div>

          {/* Glassmorphism Button */}
          <div className="absolute bottom-[30vh] cursor-pointer left-0 right-0 z-150 flex items-center justify-center">
            <Link
              href="/"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300"
            >
              <FiHome className="text-lg" />
              Back to Home
            </Link>
          </div>
</main>
  );
}
