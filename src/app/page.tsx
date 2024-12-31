import Image from "next/image"; // Import Image component from Next.js

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      {" "}
      {/* Ensures the black background covers the entire screen */}
      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between items-center p-10 md:p-20">
        {/* Image Section */}
        <div className="flex-1 text-center mb-6 md:mb-0">
          <Image
            src="/1.png"
            alt="Image"
            width={500}
            height={500}
            className="w-full max-w-xs md:max-w-md mx-auto"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 pr-5 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Hi, I am ANEELA TASNEEM
          </h1>
          <p className="text-base md:text-lg text-white">
            A{" "}
            <span className="text-yellow-500 font-extrabold">
              GRAPHIC DESIGNER
            </span>{" "}
            <br />
            A creative mind exploring the world of graphic design. <br />
            Every design I create reflects my love for innovation. <br />
            My goal is to design impactful and memorable visuals.
          </p>
        </div>
      </div>
    </div>
  );
}
