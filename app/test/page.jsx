import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen  gap-8">

      {/* Dragon Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full mix-blend-multiply max-w-4xl rounded-lg shadow-2xl"
      >
        <source src="/dragon.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Link
        href="/courses/AllCourses"
        className="group relative inline-block text-white text-xl font-bold py-4 px-10 rounded-2xl overflow-hidden
        transition-all duration-300
        hover:shadow-[0_0_40px_5px_rgba(232,96,46,0.5)]"
        style={{
          background:
            "linear-gradient(96.76deg, rgb(232,96,46) 5.3%, rgb(52,14,0) 234.66%)",
          backgroundSize: "150% 100%",
        }}
      >
        {/* Text Wrapper */}
        <div className="relative h-6 overflow-hidden">

          {/* First Text */}
          <div className="transition-transform duration-300 ease-out group-hover:-translate-y-full">
            Explore Courses →
          </div>

          {/* Second Text */}
          <div className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
            Explore Courses →
          </div>

        </div>
      </Link>

    </div>
  );
}