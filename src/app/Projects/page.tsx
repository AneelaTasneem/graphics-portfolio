import Image from 'next/image';  // Import Image component from Next.js

export default function Projects() {
  return (
    <div className="min-h-screen bg-black px-4 md:px-44">

        
               {/* Projects Heading */}
               <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-11 mt-6 md:mt-9 text-white underline mt-">
        Photoshop Manipulation
      </h1>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Card 1 */}
        <div className="bg-yellow-400 shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-black underline">Project 1</h2>
          <Image
            src="/as.jpg"  // Path to the image
            alt="Countdown Timer Project"  // Alt text for accessibility
            width={500}  // Set width for optimization
            height={300}  // Set height for optimization
            className="w-full h-auto mt-4 rounded-lg"
          />
          <p className="mt-4 text-black font-extrabold">Description Of Project</p>
          <p className="text-justify text-sm md:text-base">
          A photoshop manipulation.
          </p>
        </div>

        {/* Project Card 2 */}
        <div className="bg-yellow-400 shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-black underline">Project 2</h2>
          <Image
            src="/m1.jpg"  // Path to the image
            alt="Weather Widget Project"  // Alt text for accessibility
            width={500}  // Set width for optimization
            height={300}  // Set height for optimization
            className="w-full h-auto mt-4 rounded-lg"
          />
          <p className="mt-4 text-black font-extrabold">Description Of Project</p>
          <p className="text-justify text-sm md:text-base">
            A photoshop manipulation.
          </p>
        </div>

        {/* Project Card 3 */}
        <div className="bg-yellow-400 shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-black underline">Project 3</h2>
          <Image
            src="/m2.jpg"  // Path to the image
            alt="Admission Form Project"  // Alt text for accessibility
            width={500}  // Set width for optimization
            height={300}  // Set height for optimization
            className="w-full h-auto mt-4 rounded-lg"
          />
          <p className="mt-4 text-black font-extrabold">Description Of Project</p>
          <p className="text-justify text-sm md:text-base">
          A photoshop manipulation.
          </p>
        </div>
      </div>

   
          {/* Projects Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-11 mt-6 md:mt-9 text-white underline mt-">
        Competition Challanges
      </h1>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Card 1 */}
        <div className="bg-yellow-400 shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-black underline">Project 1</h2>
          <Image
            src="/teacher.jpg"  // Path to the image
            alt="Countdown Timer Project"  // Alt text for accessibility
            width={500}  // Set width for optimization
            height={300}  // Set height for optimization
            className="w-full h-auto mt-4 rounded-lg"
          />
          <p className="mt-4 text-black font-extrabold">Description Of Project</p>
          <p className="text-justify text-sm md:text-base">
            An Illistrator project on Teachers Day 2025 and won 1st prize.
          </p>
        </div>

        {/* Project Card 2 */}
        <div className="bg-yellow-400 shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-black underline">Project 2</h2>
          <Image
            src="/quaid.jpg"  // Path to the image
            alt="Weather Widget Project"  // Alt text for accessibility
            width={500}  // Set width for optimization
            height={300}  // Set height for optimization
            className="w-full h-auto mt-4 rounded-lg"
          />
          <p className="mt-4 text-black font-extrabold">Description Of Project</p>
          <p className="text-justify text-sm md:text-base">
            A Photoshop project on Jinnah Day 2025.
          </p>
        </div>

        {/* Project Card 3 */}
        <div className="bg-yellow-400 shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-black underline">Project 3</h2>
          <Image
            src="/newyear.jpg"  // Path to the image
            alt="Admission Form Project"  // Alt text for accessibility
            width={500}  // Set width for optimization
            height={300}  // Set height for optimization
            className="w-full h-auto mt-4 rounded-lg"
          />
          <p className="mt-4 text-black font-extrabold">Description Of Project</p>
          <p className="text-justify text-sm md:text-base">
          A Photoshop project on New Year 2025
          </p>
        </div>
      </div>


             {/* Projects Heading */}
             <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-11 mt-6 md:mt-9 text-white underline mt-">
        Logo Designs
      </h1>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Card 1 */}
        <div className="bg-yellow-400 shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-black underline">Project 1</h2>
          <Image
            src="/logo1.jpg"  // Path to the image
            alt="Countdown Timer Project"  // Alt text for accessibility
            width={500}  // Set width for optimization
            height={300}  // Set height for optimization
            className="w-full h-auto mt-4 rounded-lg"
          />
          <p className="mt-4 text-black font-extrabold">Description Of Project</p>
          <p className="text-justify text-sm md:text-base">
            An photoshop logo, made for my youtube channnel.
          </p>
        </div>

        {/* Project Card 2 */}
        <div className="bg-yellow-400 shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-black underline">Project 2</h2>
          <Image
            src="/pen.jpg"  // Path to the image
            alt="Weather Widget Project"  // Alt text for accessibility
            width={500}  // Set width for optimization
            height={300}  // Set height for optimization
            className="w-full h-auto mt-4 rounded-lg"
          />
          <p className="mt-4 text-black font-extrabold">Description Of Project</p>
          <p className="text-justify text-sm md:text-base">
            An illustrator logo for my behance identification.
          </p>
        </div>

        {/* Project Card 3 */}
        <div className="bg-yellow-400 shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-black underline">Project 3</h2>
          <Image
            src="/gym.jpg"  // Path to the image
            alt="Admission Form Project"  // Alt text for accessibility
            width={500}  // Set width for optimization
            height={300}  // Set height for optimization
            className="w-full h-auto mt-4 rounded-lg"
          />
          <p className="mt-4 text-black font-extrabold">Description Of Project</p>
          <p className="text-justify text-sm md:text-base">
          An illustrator logo for ladies gym .
          </p>
        </div>
      </div>


              {/* Projects Heading */}
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-11 mt-6 md:mt-9 text-white underline mt-">
        Social Media Posts
      </h1>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Card 1 */}
        <div className="bg-yellow-400 shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-black underline">Project 1</h2>
          <Image
            src="/sm2.jpg"  // Path to the image
            alt="Countdown Timer Project"  // Alt text for accessibility
            width={500}  // Set width for optimization
            height={300}  // Set height for optimization
            className="w-full h-auto mt-4 rounded-lg"
          />
          <p className="mt-4 text-black font-extrabold">Description Of Project</p>
          <p className="text-justify text-sm md:text-base">
            A corel draw project.
          </p>
        </div>

        {/* Project Card 2 */}
        <div className="bg-yellow-400 shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-black underline">Project 2</h2>
          <Image
            src="/bottle.jpg"  // Path to the image
            alt="Weather Widget Project"  // Alt text for accessibility
            width={500}  // Set width for optimization
            height={300}  // Set height for optimization
            className="w-full h-auto mt-4 rounded-lg"
          />
          <p className="mt-4 text-black font-extrabold">Description Of Project</p>
          <p className="text-justify text-sm md:text-base">
            A photoshop project.
          </p>
        </div>

        {/* Project Card 3 */}
        <div className="bg-yellow-400 shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-black underline">Project 3</h2>
          <Image
            src="/burger.jpg"  // Path to the image
            alt="Admission Form Project"  // Alt text for accessibility
            width={500}  // Set width for optimization
            height={300}  // Set height for optimization
            className="w-full h-auto mt-4 rounded-lg"
          />
          <p className="mt-4 text-black font-extrabold">Description Of Project</p>
          <p className="text-justify text-sm md:text-base">
          A photoshop project.
          </p>
        </div>
      </div>



         {/* Projects Heading */}
         <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-11 mt-6 md:mt-9 text-white underline">
        Projects Of Next.js 
      </h1>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Card 1 */}
        <div className="bg-yellow-400 shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-black underline">Project 1</h2>
          <Image
            src="/countdown timer.jpg"  // Path to the image
            alt="Countdown Timer Project"  // Alt text for accessibility
            width={500}  // Set width for optimization
            height={300}  // Set height for optimization
            className="w-full h-auto mt-4 rounded-lg"
          />
          <p className="mt-4 text-black font-extrabold ">Description Of Project</p>
          <p className="text-justify text-sm md:text-base">
            A Next.js, Tailwind CSS project to calculate fixed time.
          </p>
        </div>

        {/* Project Card 2 */}
        <div className="bg-yellow-400 shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-black underline">Project 2</h2>
          <Image
            src="/Weather wedget.jpg"  // Path to the image
            alt="Weather Widget Project"  // Alt text for accessibility
            width={500}  // Set width for optimization
            height={300}  // Set height for optimization
            className="w-full h-auto mt-4 rounded-lg"
          />
          <p className="mt-4 text-black font-extrabold">Description Of Project</p>
          <p className="text-justify text-sm md:text-base">
            A Next.js, Tailwind CSS project to search for weather updates.
          </p>
        </div>

        {/* Project Card 3 */}
        <div className="bg-yellow-400 shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-black underline">Project 3</h2>
          <Image
            src="/admission form.jpg"  // Path to the image
            alt="Admission Form Project"  // Alt text for accessibility
            width={500}  // Set width for optimization
            height={300}  // Set height for optimization
            className="w-full h-auto mt-4 rounded-lg"
          />
          <p className="mt-4 text-black font-extrabold">Description Of Project</p>
          <p className="text-justify text-sm md:text-base">
            An HTML, CSS-based form project to help keep student data.
          </p>
        </div>
      </div>


      
               {/* Projects Heading */}
               <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-11 mt-6 md:mt-9 text-white underline mt-">
        Story Time
      </h1>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Card 1 */}
        <div className="bg-yellow-400 shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-black underline">Project 1</h2>
          <Image
            src="/s1.jpg"  // Path to the image
            alt="Countdown Timer Project"  // Alt text for accessibility
            width={500}  // Set width for optimization
            height={300}  // Set height for optimization
            className="w-full h-auto mt-4 rounded-lg"
          />
          <p className="mt-4 text-black font-extrabold">Description Of Project</p>
          <p className="text-justify text-sm md:text-base">
          An illistrator work.
          </p>
        </div>

        {/* Project Card 2 */}
        <div className="bg-yellow-400 shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-black underline">Project 2</h2>
          <Image
            src="/s2.jpg"  // Path to the image
            alt="Weather Widget Project"  // Alt text for accessibility
            width={500}  // Set width for optimization
            height={300}  // Set height for optimization
            className="w-full h-auto mt-4 rounded-lg"
          />
          <p className="mt-4 text-black font-extrabold">Description Of Project</p>
          <p className="text-justify text-sm md:text-base">
          An illistrator work.
          </p>
        </div>

        {/* Project Card 3 */}
        <div className="bg-yellow-400 shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-black underline">Project 3</h2>
          <Image
            src="/s3.jpg"  // Path to the image
            alt="Admission Form Project"  // Alt text for accessibility
            width={500}  // Set width for optimization
            height={300}  // Set height for optimization
            className="w-full h-auto mt-4 rounded-lg"
          />
          <p className="mt-4 text-black font-extrabold">Description Of Project</p>
          <p className="text-justify text-sm md:text-base">
          An illistrator work.
          </p>
        </div>
      </div>


              {/* Projects Heading */}
              <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-11 mt-6 md:mt-9 text-white underline mt-">
        Typography
      </h1>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Card 1 */}
        <div className="bg-yellow-400 shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-black underline">Project 1</h2>
          <Image
            src="/t2.jpg"  // Path to the image
            alt="Countdown Timer Project"  // Alt text for accessibility
            width={500}  // Set width for optimization
            height={300}  // Set height for optimization
            className="w-full h-auto mt-4 rounded-lg"
          />
          <p className="mt-4 text-black font-extrabold">Description Of Project</p>
          <p className="text-justify text-sm md:text-base">
          An illistrator work.
          </p>
        </div>

        {/* Project Card 2 */}
        <div className="bg-yellow-400 shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-black underline">Project 2</h2>
          <Image
            src="/t3.jpg"  // Path to the image
            alt="Weather Widget Project"  // Alt text for accessibility
            width={500}  // Set width for optimization
            height={300}  // Set height for optimization
            className="w-full h-auto mt-4 rounded-lg"
          />
          <p className="mt-4 text-black font-extrabold">Description Of Project</p>
          <p className="text-justify text-sm md:text-base">
          A photoshop work.
          </p>
        </div>

        {/* Project Card 3 */}
        <div className="bg-yellow-400 shadow-md rounded-lg p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-black underline">Project 3</h2>
          <Image
            src="/t1.jpg"  // Path to the image
            alt="Admission Form Project"  // Alt text for accessibility
            width={500}  // Set width for optimization
            height={300}  // Set height for optimization
            className="w-full h-auto mt-4 rounded-lg"
          />
          <p className="mt-4 text-black font-extrabold">Description Of Project</p>
          <p className="text-justify text-sm md:text-base">
          An illistrator work.
          </p>
        </div>
      </div>



    </div>
  );
}
