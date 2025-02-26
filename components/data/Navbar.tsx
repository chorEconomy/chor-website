'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navItems } from '../common/constants';
import { Menu, X } from 'lucide-react'; // Install lucide-react for icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="align-element bg-white py-6  flex justify-between items-center relative">
      {/* Logo */}
      <div>
        <Image
          src="/assets/logo.png"
          width={100}
          height={100}
          alt="chore logo"
        />
      </div>

      {/* Desktop Nav Items */}
      <ul className="hidden md:flex gap-6 items-center">
        {navItems.map((item) => (
          <li key={item.id} className="font-semibold">
            <Link href={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>

      {/* Download Button (Desktop) */}
      <div className="hidden md:inline-block relative">
        <div className="absolute top-[2px] left-[2px] w-full h-full border-2 border-black rounded-[14px]"></div>
        <button className="primary-btn">Download App</button>
      </div>

      {/* Mobile Menu Button (☰) */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsOpen(true)}
        aria-label="Open Menu"
      >
        <Menu size={28} />
      </button>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 z-50 w-full h-full bg-white flex flex-col items-center justify-center space-y-6 text-lg font-semibold transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button (X) */}
        <button
          className="absolute top-4 right-4 p-2"
          onClick={() => setIsOpen(false)}
          aria-label="Close Menu"
        >
          <X size={28} />
        </button>

        {/* Nav Items */}
        {navItems.map((item) => (
          <Link key={item.id} href={item.link} onClick={() => setIsOpen(false)}>
            {item.text}
          </Link>
        ))}

        {/* Download Button (Mobile) */}
        <div className="relative inline-block">
          <div className="absolute top-[2px] left-[2px] w-full h-full border-2 border-black rounded-[14px]"></div>
          <button className="relative px-6 py-3 uppercase text-sm text-black font-bold border-2 border-black rounded-[14px] bg-white">
            Download App
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
