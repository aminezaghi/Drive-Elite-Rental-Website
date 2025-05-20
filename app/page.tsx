import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Clock, Shield, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CarouselFeature } from "@/components/carousel-feature"
import { CarCard } from "@/components/car-card"
import { PromotionCard } from "@/components/promotion-card"
import { SearchForm } from "@/components/search-form"
import { FeatureCard } from "@/components/feature-card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 md:py-24 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl"></div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center md:text-left">
              <div className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold">
                Premium Car Rental Service
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Drive Your <span className="text-amber-400">Dream Car</span> Today
              </h1>
              <p className="text-lg text-blue-100 max-w-lg mx-auto md:mx-0">
                Experience luxury and comfort with our premium fleet of vehicles. Affordable rates, flexible rental
                options.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link href="/cars">
                  <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-blue-900 font-semibold">
                    Browse Cars
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-black dark:text-white hover:text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] mt-8 md:mt-0 animate-float">
              <Image
                src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Luxury SUV"
                fill
                className="object-contain drop-shadow-2xl"
                priority
                style={{ filter: "drop-shadow(0 20px 13px rgb(0 0 0 / 0.3))" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white dark:bg-gray-950">
        <div className="container">
          <Card className="border-none shadow-xl bg-white dark:bg-gray-900 relative -mt-16 md:-mt-24 z-20">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6 text-center text-blue-900 dark:text-blue-100">
                Find Your Perfect Ride
              </h2>
              <SearchForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We offer the best car rental experience with premium vehicles and exceptional service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-amber-500" />}
              title="24/7 Support"
              description="Our customer service team is available around the clock to assist you with any questions or concerns."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-amber-500" />}
              title="Fully Insured"
              description="All our vehicles come with comprehensive insurance coverage for your peace of mind."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-amber-500" />}
              title="Fast & Easy Booking"
              description="Our streamlined booking process gets you on the road quickly with minimal paperwork."
            />
          </div>
        </div>
      </section>

      {/* Car Fleet Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-2">
                Our Premium Fleet
              </h2>
              <p className="text-gray-600 dark:text-gray-400">Discover our selection of luxury and comfort vehicles</p>
            </div>
            <Link
              href="/cars"
              className="text-amber-500 hover:text-amber-600 font-medium flex items-center gap-2 group"
            >
              View all cars
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CarCard
              name="Range Rover Velar"
              category="SUV"
              price={199}
              features={["5 Seats", "Automatic", "AC", "GPS"]}
              imageUrl="https://images.unsplash.com/photo-1725815760850-fa5901743fc7?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CarCard
              name="Mercedes-Benz E-Class"
              category="Sedan"
              price={189}
              features={["5 Seats", "Automatic", "AC", "GPS"]}
              imageUrl="https://images.unsplash.com/photo-1660108155084-e8d328530575?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CarCard
              name="BMW X5"
              category="SUV"
              price={229}
              features={["7 Seats", "Automatic", "AC", "GPS"]}
              imageUrl="https://images.unsplash.com/photo-1609184166822-bd1f1b991a06?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      </section>

      {/* Featured Cars Carousel */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Vehicles</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Explore our most popular cars that offer the perfect blend of luxury, performance, and comfort
            </p>
          </div>
          <CarouselFeature />
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900 dark:text-blue-100">
            Special Offers
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Take advantage of our limited-time deals and discounts on premium vehicles
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PromotionCard
              title="Weekend Getaway"
              subtitle="30% OFF"
              description="Book a weekend rental and get 30% off on luxury vehicles"
              imageUrl="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <PromotionCard
              title="Business Travel"
              subtitle="FREE UPGRADE"
              description="Free upgrade to premium class for business travelers"
              imageUrl="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              variant="angular"
            />
            <PromotionCard
              title="Monthly Rental"
              subtitle="UP TO 50% OFF"
              buttonText="BOOK NOW"
              imageUrl="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              variant="rounded"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900 dark:text-blue-100">
            What Our Customers Say
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our satisfied customers have to say
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="shadow-md hover:shadow-lg transition-shadow border-none bg-gray-50 dark:bg-gray-900"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <div className="flex gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-5 h-5 text-amber-500 fill-amber-500" />
                        ))}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 italic mb-6">
                        "The car was in perfect condition and the rental process was smooth and hassle-free. I would
                        definitely rent from them again!"
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                        {["JD", "SM", "AK"][i - 1]}
                      </div>
                      <div>
                        <p className="font-semibold text-blue-900 dark:text-blue-100">
                          {["John Doe", "Sarah Miller", "Alex Kim"][i - 1]}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {["New York", "Los Angeles", "Chicago"][i - 1]}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900 dark:text-blue-100">
            How It Works
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Renting a car with us is quick and easy - just follow these simple steps
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: "Choose Your Car",
                description: "Browse our fleet and select the perfect vehicle for your needs",
              },
              {
                step: 2,
                title: "Book & Pay Online",
                description: "Complete your reservation with our secure payment system",
              },
              {
                step: 3,
                title: "Enjoy Your Ride",
                description: "Pick up your car and hit the road with confidence",
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 flex items-center justify-center text-blue-900 text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl"></div>

        <div className="container text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Hit the Road?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Experience the freedom of the road with our premium car rental service. Book today and get special
            discounts!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-blue-900 font-semibold">
              Book Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-black dark:text-white hover:text-white hover:bg-white/10"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
