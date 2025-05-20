import Image from "next/image"
import { Award, Users, Clock, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Drive Elite</h1>
            <p className="text-xl text-blue-100 mb-8">Your trusted partner for premium car rentals since 2010</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-6">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Drive Elite was founded in 2010 with a simple mission: to provide exceptional car rental experiences
                with premium vehicles and outstanding customer service.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                What started as a small fleet of luxury cars has grown into one of Morocco's most trusted car rental
                services, with a diverse range of vehicles to suit every need and preference.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Our commitment to quality, transparency, and customer satisfaction has earned us a loyal client base and
                numerous industry accolades over the years.
              </p>
              <div className="mt-8">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1600320254374-ce2d293c324e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Drive Elite office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-4">Our Core Values</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do at Drive Elite
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-10 w-10 text-amber-500" />,
                title: "Excellence",
                description:
                  "We strive for excellence in every aspect of our service, from vehicle quality to customer interactions.",
              },
              {
                icon: <Users className="h-10 w-10 text-amber-500" />,
                title: "Customer Focus",
                description:
                  "Our customers are at the heart of everything we do. We listen, adapt, and exceed expectations.",
              },
              {
                icon: <Shield className="h-10 w-10 text-amber-500" />,
                title: "Integrity",
                description:
                  "We operate with honesty, transparency, and ethical practices in all our business dealings.",
              },
              {
                icon: <Clock className="h-10 w-10 text-amber-500" />,
                title: "Reliability",
                description: "We deliver on our promises, ensuring dependable service and vehicles you can count on.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The dedicated professional behind Drive Elite's success
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2 text-blue-900 dark:text-blue-100">Amine Zaghi</h3>
                <p className="text-amber-500 font-medium text-lg mb-4">Full Stack Web Developer</p>
                <p className="text-gray-600 dark:text-gray-300">
                  Passionate about creating seamless digital experiences and innovative solutions for the car rental
                  industry.
                </p>
                <div className="mt-6 flex justify-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-blue-600 dark:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-blue-600 dark:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-blue-600 dark:text-blue-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">Milestones that mark our journey of excellence and growth</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years of Experience" },
              { number: "500+", label: "Premium Vehicles" },
              { number: "20,000+", label: "Happy Customers" },
              { number: "15+", label: "Service Locations" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">{stat.number}</div>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Hear from our satisfied customers about their Drive Elite experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Drive Elite provided an exceptional rental experience. The car was immaculate, and the service was professional and friendly.",
                author: "Sarah Johnson",
                location: "United Kingdom",
              },
              {
                quote:
                  "I've rented from many companies, but Drive Elite stands out for their attention to detail and customer care. Highly recommended!",
                author: "Ahmed Khalid",
                location: "UAE",
              },
              {
                quote:
                  "The perfect car for our Moroccan adventure! The team at Drive Elite made everything so easy from pickup to return.",
                author: "Marie Dubois",
                location: "France",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 text-amber-500">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.032.303-.406.7-.754 1.19-1.045l-.025-.958c-.6.302-1.192.63-1.772.984-.65.41-1.27.858-1.854 1.344-.584.486-1.077 1.03-1.47 1.63-.396.6-.587 1.226-.574 1.88.01.64.184 1.213.523 1.72.34.505.803.913 1.4 1.227.597.313 1.262.48 2.002.5.918-.004 1.615-.123 2.108-.358.492-.235.874-.594 1.14-1.078.266-.483.396-1.06.396-1.73zm10.04 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.812-.56-.12-1.07-.12-1.54-.028-.16-.95.1-1.626.41-2.032.302-.406.7-.754 1.19-1.045l-.025-.958c-.6.302-1.192.63-1.772.984-.65.41-1.27.858-1.854 1.344-.584.486-1.077 1.03-1.47 1.63-.396.6-.587 1.226-.574 1.88.01.64.184 1.213.523 1.72.34.505.803.913 1.4 1.227.597.313 1.262.48 2.002.5.918-.004 1.615-.123 2.108-.358.492-.235.874-.594 1.14-1.078.266-.483.396-1.06.396-1.73z" />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-blue-900 dark:text-blue-100">{testimonial.author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
