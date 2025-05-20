"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredCars = [
  {
    id: 1,
    name: "Range Rover Velar",
    category: "SUV",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1725815760850-fa5901743fc7?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isNew: true,
  },
  {
    id: 2,
    name: "Lexus LX",
    category: "SUV",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1592857723369-03e2e792626d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Mercedes-Benz E-Class",
    category: "Sedan",
    price: 189,
    image:
      "https://images.unsplash.com/photo-1660108155084-e8d328530575?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isPopular: true,
  },
  {
    id: 4,
    name: "BMW X5",
    category: "SUV",
    price: 229,
    image:
      "https://images.unsplash.com/photo-1609184166822-bd1f1b991a06?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Ford Ranger",
    category: "Pickup",
    price: 179,
    image:
      "https://images.unsplash.com/photo-1551830820-330a71b99659?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isPopular: true,
  },
]

export function CarouselFeature() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCars, setVisibleCars] = useState(3)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCars(1)
      } else if (window.innerWidth < 1024) {
        setVisibleCars(2)
      } else {
        setVisibleCars(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const maxIndex = featuredCars.length - visibleCars

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1))
  }

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, maxIndex])

  // Touch events for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      // Swipe left
      nextSlide()
    }

    if (touchStart - touchEnd < -150) {
      // Swipe right
      prevSlide()
    }
  }

  return (
    <div className="relative">
      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCars)}%)` }}
        >
          {featuredCars.map((car) => (
            <div
              key={car.id}
              className={`flex-none w-full px-2 ${
                visibleCars === 3 ? "sm:w-1/2 lg:w-1/3" : visibleCars === 2 ? "sm:w-1/2" : "w-full"
              }`}
            >
              <Card className="overflow-hidden h-full shadow-md hover:shadow-lg transition-all duration-300 group bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-0">
                  <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                    <Image
                      src={car.image || "/placeholder.svg"}
                      alt={car.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <Badge className="bg-amber-500 hover:bg-amber-600 text-blue-900">${car.price}/day</Badge>
                      {car.isNew && <Badge className="bg-green-500 hover:bg-green-600">New</Badge>}
                      {car.isPopular && <Badge className="bg-blue-500 hover:bg-blue-600">Popular</Badge>}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-white">{car.name}</h3>
                      <span className="text-sm text-blue-200">{car.category}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className="w-4 h-4 text-amber-500 fill-amber-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-blue-200">4.8 (120 reviews)</span>
                    </div>
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-blue-900 font-semibold transition-colors">
                      Rent Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full shadow-md z-10 hidden sm:flex border-white/20 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full shadow-md z-10 hidden sm:flex border-white/20 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            className={`h-2 w-8 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-amber-500 w-10" : "bg-white/30"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
