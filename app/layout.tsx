import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { StructuredData } from "@/components/structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Drive Elite - Premium Car Rental in Morocco",
  description: "Experience luxury and comfort with Drive Elite's premium car rental service in Morocco. Wide selection of vehicles, competitive rates, and exceptional service.",
  keywords: "car rental, Morocco, luxury cars, vehicle rental, Casablanca, premium cars",
  authors: [{ name: "Drive Elite" }],
  creator: "Drive Elite",
  publisher: "Drive Elite",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://car-rental-zaghi.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://car-rental-zaghi.vercel.app',
    title: 'Drive Elite - Premium Car Rental in Morocco',
    description: 'Experience luxury and comfort with Drive Elite\'s premium car rental service in Morocco.',
    siteName: 'Drive Elite',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Drive Elite - Premium Car Rental',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drive Elite - Premium Car Rental in Morocco',
    description: 'Experience luxury and comfort with Drive Elite\'s premium car rental service in Morocco.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://car-rental-zaghi.vercel.app" />
        <StructuredData />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
