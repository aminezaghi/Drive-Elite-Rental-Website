import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, PhoneCall, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 px-3 py-1.5 font-bold rounded-md">
                Drive
              </div>
              <div className="text-xl font-bold">Elite</div>
            </div>
            <p className="text-blue-200 mb-6">
              Experience the freedom of the road with our premium car rental service. We offer a wide range of vehicles
              to suit your needs.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="bg-blue-800 p-2 rounded-full hover:bg-amber-500 hover:text-blue-900 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-blue-800 p-2 rounded-full hover:bg-amber-500 hover:text-blue-900 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-blue-800 p-2 rounded-full hover:bg-amber-500 hover:text-blue-900 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="bg-blue-800 p-2 rounded-full hover:bg-amber-500 hover:text-blue-900 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 bg-amber-500 rounded-full transition-all group-hover:w-3"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/cars"
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 bg-amber-500 rounded-full transition-all group-hover:w-3"></span>
                  Cars
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 bg-amber-500 rounded-full transition-all group-hover:w-3"></span>
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 bg-amber-500 rounded-full transition-all group-hover:w-3"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 bg-amber-500 rounded-full transition-all group-hover:w-3"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-500 mt-0.5" />
                <span className="text-blue-200">
                  123 Boulevard Mohammed V, Quartier des Affaires, Casablanca 20250, Morocco
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall className="h-5 w-5 text-amber-500" />
                <Link href="tel:+21259999999" className="text-blue-200 hover:text-white transition-colors">
                  +212 5 99999999
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-500" />
                <Link href="mailto:info@driveelite.ma" className="text-blue-200 hover:text-white transition-colors">
                  info@driveelite.ma
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-blue-200 mb-4">Subscribe to our newsletter to receive updates and special offers.</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="bg-blue-800 border-blue-700 text-white" />
              <Button className="bg-amber-500 hover:bg-amber-600 text-blue-900 font-semibold">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-6 text-center text-blue-200">
          <p>© {new Date().getFullYear()} Drive Elite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
