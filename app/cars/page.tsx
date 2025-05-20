import { Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CarCard } from "@/components/car-card"
import { SearchForm } from "@/components/search-form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CarsPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5"></div>
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Premium Fleet</h1>
            <p className="text-xl text-blue-100 mb-8">
              Choose from our wide selection of premium vehicles for your perfect journey
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white dark:bg-gray-950">
        <div className="container">
          <Card className="border-none shadow-xl bg-white dark:bg-gray-900 relative -mt-16 z-20">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6 text-center text-blue-900 dark:text-blue-100">
                Find Your Perfect Ride
              </h2>
              <SearchForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cars Listing */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100">Available Cars</h2>
              <p className="text-gray-600 dark:text-gray-400">Showing 12 cars available for rent</p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>
                <Select defaultValue="price-low">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="popularity">Popularity</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CarCard
              name="Range Rover Velar"
              category="SUV"
              price={199}
              features={["5 Seats", "Automatic", "AC", "GPS"]}
              imageUrl="https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CarCard
              name="Mercedes-Benz E-Class"
              category="Sedan"
              price={189}
              features={["5 Seats", "Automatic", "AC", "GPS"]}
              imageUrl="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CarCard
              name="BMW X5"
              category="SUV"
              price={229}
              features={["7 Seats", "Automatic", "AC", "GPS"]}
              imageUrl="https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CarCard
              name="Audi A6"
              category="Sedan"
              price={179}
              features={["5 Seats", "Automatic", "AC", "GPS"]}
              imageUrl="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CarCard
              name="Tesla Model 3"
              category="Electric"
              price={209}
              features={["5 Seats", "Automatic", "AC", "Autopilot"]}
              imageUrl="https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CarCard
              name="Porsche 911"
              category="Sports"
              price={349}
              features={["2 Seats", "Automatic", "AC", "GPS"]}
              imageUrl="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CarCard
              name="Jeep Wrangler"
              category="SUV"
              price={159}
              features={["5 Seats", "Manual", "AC", "4x4"]}
              imageUrl="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CarCard
              name="Ford Mustang"
              category="Sports"
              price={199}
              features={["4 Seats", "Automatic", "AC", "GPS"]}
              imageUrl="https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <CarCard
              name="Toyota Land Cruiser"
              category="SUV"
              price={249}
              features={["7 Seats", "Automatic", "AC", "4x4"]}
              imageUrl="https://images.unsplash.com/photo-1594502184342-2e12f877aa73?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>

          <div className="mt-12 flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              Load More Cars
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
