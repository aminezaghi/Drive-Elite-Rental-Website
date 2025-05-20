import Image from "next/image"
import { Check, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CarCardProps {
  name: string
  category: string
  price: number
  features: string[]
  imageUrl: string
}

export function CarCard({ name, category, price, features, imageUrl }: CarCardProps) {
  return (
    <Card className="overflow-hidden h-full shadow-md hover:shadow-xl transition-all duration-300 group border-none">
      <CardContent className="p-0">
        <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-amber-500 hover:bg-amber-600 text-blue-900 font-semibold">${price}/day</Badge>
          </div>
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">{name}</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">{category}</span>
          </div>
          <div className="flex items-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 text-amber-500 fill-amber-500" />
            ))}
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">4.8</span>
          </div>
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-full p-1">
                  <Check className="h-3 w-3 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="flex gap-2">
            <Button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transition-colors">
              Rent Now
            </Button>
            <Button
              variant="outline"
              className="flex-1 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
            >
              Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
