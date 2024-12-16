
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link' // Import Next.js Link
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <header className="max-w-[1920px] h-[92px] bg-[#043873] flex justify-between items-center px-4 lg:px-[220px] py-4">
        {/* Logo */}
        <Link href="/">
          <div className="lg:w-[191px] lg:h-[34px] cursor-pointer">
            <Image
              src="/Logo.png"
              alt="logo"
              width={191}
              height={39}
            />
          </div>
        </Link>
        
        {/* Menu for large screens */}
        <div className="lg:flex hidden flex-row justify-between text-white w-[737.5px] h-[60px] items-center">
          <ul className="flex flex-row items-center w-[549px] h-[23px] gap-[32px] justify-center">
            {/* Navigation Items with Links */}
            {[
              { name: 'Products', href: '#products' },
              { name: 'Solutions', href: '#solutions' },
              { name: 'Resources', href: '#resources' },
              { name: 'Pricing', href: '#pricing' },
            ].map((item) => (
              <li
                key={item.name}
                className="w-[78px] h-[32px] cursor-pointer relative group flex items-center justify-center"
              >
                <Link href={item.href}>
                  <span className="relative">{item.name}</span>
                </Link>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#FFE492] transition-all duration-300 group-hover:w-full"></div>
              </li>
            ))}
          </ul>
          {/* Login Button with Link */}
          <Link href="/login">
            <div className="w-[126px] h-[60px] bg-[#FFE492] text-[#043873] font-bold rounded-md flex items-center justify-center cursor-pointer">
              Login
            </div>
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <HiX size={30} color="white" /> : <HiMenu size={30} color="white" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#043873] text-white w-full py-4">
          <ul className="flex flex-col items-center gap-4">
            {/* Mobile Navigation Items with Links */}
            {[
              { name: 'Products', href: '#products' },
              { name: 'Solutions', href: '#solutions' },
              { name: 'Resources', href: '#resources' },
              { name: 'Pricing', href: '#pricing' },
            ].map((item) => (
              <li
                key={item.name}
                className="cursor-pointer relative group flex items-center justify-center"
              >
                <Link href={item.href}>
                  <span className="relative">{item.name}</span>
                </Link>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#FFE492] transition-all duration-300 group-hover:w-full"></div>
              </li>
            ))}
            <li>
              <Link href="/login">
                <div className="w-[126px] h-[60px] bg-[#FFE492] text-[#043873] font-bold rounded-md cursor-pointer flex items-center justify-center">
                  Login
                </div>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar