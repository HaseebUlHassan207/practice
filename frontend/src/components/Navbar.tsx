"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa"

export default function Navbar({ dark, setDark }: { dark: boolean, setDark: (value: boolean) => void }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white dark:bg-gray-800 relative"
    >
      <Link href="/" className="text-2xl font-bold">EduVerse</Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-6">
        <button onClick={() => setDark(!dark)} className="text-xl">
          {dark ? <FaSun /> : <FaMoon />}
        </button>
        <Link href="/signup" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100">
          Get Started
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-blue-600 dark:bg-gray-800 md:hidden flex flex-col items-start px-6 py-4 space-y-4 z-10">
          <button onClick={() => setDark(!dark)} className="text-xl">
            {dark ? <FaSun /> : <FaMoon />}
          </button>
          <Link href="/signup" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 w-full text-center">
            Get Started
          </Link>
        </div>
      )}
    </motion.nav>
  )
}
