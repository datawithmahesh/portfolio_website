"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, logo, name, theme } from "../myDetail";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 border-b border-gray-200 bg-white text-black">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo / Name */}
        <Link href="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
          <span className="font-bold text-lg">{name}</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href || "#"}
                className="hover:text-gray-500 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 py-4 bg-white border-t border-gray-200">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href || "#"}
                onClick={() => setOpen(false)}
                className="block hover:text-gray-500 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
