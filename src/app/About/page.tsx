export default function About() {
    return (
      <div className="min-h-screen bg-black px-4 md:px-10">
        {/* About Me Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-11 text-yellow-400 pt-[80px] md:pt-[100px]">
          About Me
        </h1>
  
        {/* Introduction Text */}
        <p className="text-base md:text-lg text-center mb-8 md:mb-10 text-white">
          I am a passionate and dedicated graphic designer in the process of mastering my craft. I have learned Photoshop, Illustrator, and CorelDRAW, honing my skills in creating stunning visuals. Currently, I am enhancing my expertise by pursuing certification as a Certified Cloud Applied Generative AI Engineer (GenEng). I have also ventured into web development, earning proficiency in TypeScript and actively learning Next.js with Tailwind CSS. I have worked on competitive projects, including a portfolio website, resume builder, and API integration with Sanity, while exploring UI/UX design with Figma. My journey is fueled by a love for creativity and innovation, and I am committed to evolving in the dynamic world of design and technology.
        </p>
  
        {/* Qualification Section */}
        <div className="max-w-lg mx-auto bg-yellow-400 shadow-lg rounded-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-black">
            My Qualification
          </h2>
          <ul className="list-disc pl-4 md:pl-5 space-y-2 text-sm md:text-base">
            <li>Bachelors Degree in Micro Biology</li>
            <li>Certificate in CIT</li>
            <li>currently pursuing advanced graphic design training at Arena Multimedia(Bahadurabad) </li>
            <li>Currently learning web development with Next.js and Tailwind CSS</li>
          </ul>
        </div>
      </div>
    );
  }
  