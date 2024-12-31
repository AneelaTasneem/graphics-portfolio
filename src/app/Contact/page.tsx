import Image from 'next/image';  // Import Image component from Next.js

export default function Contact() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-11 text-white">
        Contact Me
      </h1>

      {/* Contact Information Section */}
      <div className="bg-yellow-400 shadow-md rounded-lg p-4 md:p-8 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4 text-black underline">Get In Touch</h2>

        <p className="mb-6 text-sm md:text-base text-justify">
          I would love to hear from you! Whether you have a question, feedback, or just want to say hi, feel free to reach out to me through any of the methods below.
        </p>

        {/* Contact Details */}
        <div className="space-y-5">
          {/* Phone */}
          <div className="flex items-center">
            <Image
              src="/whatsapp.png"  // Path to the image
              alt="WhatsApp Icon"  // Alt text for accessibility
              width={28}  // Set width for optimization
              height={28}  // Set height for optimization
              className="mr-3"
            />
            <p className="text-lg">Phone: +92 315 7296169</p>
          </div>

          {/* Email */}
          <div className="flex items-center">
            <Image
              src="/email.png"  // Path to the image
              alt="Email Icon"  // Alt text for accessibility
              width={28}  // Set width for optimization
              height={28}  // Set height for optimization
              className="mr-3"
            />
            <p className="text-lg">Email: aneelatasneem21@gmail.com</p>
          </div>

          {/* Address */}
          <div className="flex items-center">
            <Image
              src="/gps.png"  // Path to the image
              alt="Location Icon"  // Alt text for accessibility
              width={28}  // Set width for optimization
              height={28}  // Set height for optimization
              className="mr-3"
            />
            <p className="text-lg">Address: Karachi</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-3 text-black underline">Follow Me</h3>
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/in/aneela-tasneem-b770192b7"
              className="text-black  hover:text-blue-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/AneelaTasneem"
              className="text-black hover:text-blue-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
