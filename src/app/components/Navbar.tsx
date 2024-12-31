"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-yellow-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-black font-bold text-3xl">
          Aneela Tasneem
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden text-black text-2xl" onClick={handleToggle}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="text-black hover:text-blue-900">
              Home
            </Link>
          </li>
          <li>
            <Link href="/About" className="text-black hover:text-blue-900">
              About
            </Link>
          </li>
          <li>
            <Link href="/Projects" className="text-black hover:text-blue-900 ">
              Projects
            </Link>
          </li>

          <li>
            <Link href="/Contact" className="text-black hover:text-blue-900">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden absolute top-16 left-0 w-full bg-yellow-400 space-y-4 p-6 z-50">
            <li>
              <Link
                href="/"
                className="text-black hover:text-blue-900"
                onClick={handleToggle}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className="text-black hover:text-blue-900"
                onClick={handleToggle}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Projects"
                className="text-black hover:text-blue-900"
                onClick={handleToggle}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                href="/Contact"
                className="text-black hover:text-blue-900"
                onClick={handleToggle}
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
