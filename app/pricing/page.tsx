import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Transparent Pricing</h1>
            <p className="text-xl text-blue-100 mb-8">Choose the perfect rental plan that fits your needs and budget</p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-4">Our Rental Plans</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We offer flexible rental options to accommodate your schedule and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Daily Plan */}
            <div className="relative h-full">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-t-lg">
                  <h3 className="text-2xl font-bold">Daily Rental</h3>
                  <p className="text-blue-100 mt-2">Perfect for short trips</p>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-900 dark:text-blue-100">$59</span>
                    <span className="text-gray-500 dark:text-gray-400">/day</span>
                  </div>
                  <ul className="space-y-3 mb-6 flex-grow">
                    {[
                      "Unlimited mileage",
                      "Comprehensive insurance",
                      "24/7 roadside assistance",
                      "Free cancellation",
                      "No hidden fees",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="bg-blue-100 dark:bg-blue-900/20 rounded-full p-1">
                          <Check className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Weekly Plan */}
            <div className="relative h-full">
              <div className="absolute top-0 left-0 w-full flex justify-center z-10">
                <div className="bg-amber-500 text-blue-900 px-4 py-1 rounded-b-lg font-semibold text-sm">
                  Most Popular
                </div>
              </div>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <CardHeader className="bg-gradient-to-r from-amber-400 to-amber-500 text-blue-900 p-6 rounded-t-lg mt-6">
                  <h3 className="text-2xl font-bold">Weekly Rental</h3>
                  <p className="text-blue-800 mt-2">Ideal for vacations</p>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-900 dark:text-blue-100">$299</span>
                    <span className="text-gray-500 dark:text-gray-400">/week</span>
                  </div>
                  <ul className="space-y-3 mb-6 flex-grow">
                    {[
                      "Unlimited mileage",
                      "Comprehensive insurance",
                      "24/7 roadside assistance",
                      "Free cancellation",
                      "No hidden fees",
                      "One free additional driver",
                      "GPS navigation included",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="bg-amber-100 dark:bg-amber-900/20 rounded-full p-1">
                          <Check className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Button className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-blue-900">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Monthly Plan */}
            <div className="relative h-full">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-t-lg">
                  <h3 className="text-2xl font-bold">Monthly Rental</h3>
                  <p className="text-blue-100 mt-2">Best for extended stays</p>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-900 dark:text-blue-100">$899</span>
                    <span className="text-gray-500 dark:text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6 flex-grow">
                    {[
                      "Unlimited mileage",
                      "Comprehensive insurance",
                      "24/7 roadside assistance",
                      "Free cancellation",
                      "No hidden fees",
                      "Two free additional drivers",
                      "GPS navigation included",
                      "Priority customer support",
                      "Free vehicle upgrade (subject to availability)",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="bg-blue-100 dark:bg-blue-900/20 rounded-full p-1">
                          <Check className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-4">Additional Services</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Enhance your rental experience with our premium add-on services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "GPS Navigation",
                price: "$5/day",
                description: "Never get lost with our premium GPS navigation system",
              },
              {
                title: "Child Seat",
                price: "$7/day",
                description: "Safety first with our certified child seats for different age groups",
              },
              {
                title: "Additional Driver",
                price: "$10/day",
                description: "Share the driving with an additional authorized driver",
              },
              {
                title: "Roadside Package",
                price: "$15/day",
                description: "Enhanced roadside assistance with priority service",
              },
            ].map((service, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">{service.title}</h3>
                  <div className="text-amber-500 font-semibold mb-3">{service.price}</div>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about our rental policies and services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "What documents do I need to rent a car?",
                answer:
                  "You'll need a valid driver's license, a credit card in your name, and a form of identification (passport or ID card). International renters may need additional documentation.",
              },
              {
                question: "Is there a security deposit?",
                answer:
                  "Yes, we require a security deposit which is refundable upon return of the vehicle in its original condition. The amount varies depending on the vehicle category.",
              },
              {
                question: "Can I modify or cancel my reservation?",
                answer:
                  "Yes, you can modify or cancel your reservation up to 24 hours before the scheduled pickup time without any penalty. Changes made within 24 hours may incur a fee.",
              },
              {
                question: "What is your fuel policy?",
                answer:
                  "Our vehicles are provided with a full tank of fuel and should be returned with a full tank. If not returned full, a refueling fee will apply.",
              },
              {
                question: "Is there a mileage limit?",
                answer:
                  "Most of our rental plans come with unlimited mileage. However, some specialty vehicles may have mileage restrictions. This will be clearly indicated during the booking process.",
              },
              {
                question: "What happens if I return the car late?",
                answer:
                  "Late returns may incur additional charges. We offer a grace period of 30 minutes, after which hourly or daily rates may apply.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-blue-900 dark:text-blue-100">{faq.question}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
