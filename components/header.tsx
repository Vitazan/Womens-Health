"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import RegisterButton from "@/components/register-button"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-1" : "bg-white/80 backdrop-blur-sm py-2"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="https://nfh.ca/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <motion.img
              src="/nfh.png"
              alt="NFH Logo"
              className="h-[76px] p-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
          </Link>
          <Link href="https://vitazan.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <motion.img
              src="/vitazan.png"
              alt="Vitazan Logo"
              className="h-16 p-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-[#9455e5] font-medium transition-colors">
            Home
          </Link>

          <Link href="/#webinars" className="text-gray-700 hover:text-[#9455e5] font-medium transition-colors">
            Schedule
          </Link>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <RegisterButton label="Register" />
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#9455e5] font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#webinars"
              className="text-gray-700 hover:text-[#9455e5] font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Schedule
            </Link>
            <Link
              href="/#ce-credits"
              className="text-gray-700 hover:text-[#9455e5] font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CE Credits
            </Link>
            <Link
              href="/faq"
              className="text-gray-700 hover:text-[#9455e5] font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <motion.div
              className="self-start"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RegisterButton label="Register" wrapperClassName="items-start" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Header
