"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, PhoneCall, Sun, Moon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-blue-900/95 backdrop-blur-sm shadow-md" : "bg-blue-900"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1.5 font-bold rounded-md">
            Drive
          </div>
          <div className="text-xl font-bold text-white">Elite</div>
        </Link>

        {isMobile ? (
          <>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-white">
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-blue-900 dark:text-blue-100">
                <Menu className="h-6 w-6" />
              </Button>
            </div>

            {isMenuOpen && (
              <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 pt-16">
                <div className="absolute top-4 right-4">
                  <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-blue-900 dark:text-blue-100">
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <nav className="container flex flex-col gap-4 p-4">
                  <Link
                    href="/"
                    className="py-2 text-lg font-medium border-b dark:border-gray-800"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                  <Link
                    href="/cars"
                    className="py-2 text-lg font-medium border-b dark:border-gray-800"
                    onClick={toggleMenu}
                  >
                    Cars
                  </Link>
                  <Link
                    href="/pricing"
                    className="py-2 text-lg font-medium border-b dark:border-gray-800"
                    onClick={toggleMenu}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/about"
                    className="py-2 text-lg font-medium border-b dark:border-gray-800"
                    onClick={toggleMenu}
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="py-2 text-lg font-medium border-b dark:border-gray-800"
                    onClick={toggleMenu}
                  >
                    Contact
                  </Link>
                  <div className="mt-4">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      Book Now
                    </Button>
                  </div>
                </nav>
              </div>
            )}
          </>
        ) : (
          <>
            <nav className="flex items-center gap-6">
              <Link href="/" className="font-medium text-white hover:text-amber-400 transition-colors">
                Home
              </Link>
              <Link href="/cars" className="font-medium text-white hover:text-amber-400 transition-colors">
                Cars
              </Link>
              <Link href="/pricing" className="font-medium text-white hover:text-amber-400 transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="font-medium text-white hover:text-amber-400 transition-colors">
                About
              </Link>
              <Link href="/contact" className="font-medium text-white hover:text-amber-400 transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-white">
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Link href="tel:+21259999999" className="flex items-center gap-2 text-white">
                <PhoneCall className="h-5 w-5 text-amber-500" />
                <span className="font-medium">+212 5 99999999</span>
              </Link>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Book Now
              </Button>
            </div>
          </>
        )}
      </div>
    </header>
  )
}
