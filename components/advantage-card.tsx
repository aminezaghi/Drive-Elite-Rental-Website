import Image from "next/image"
import { Check } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface AdvantageCardProps {
  title: string
  points: string[]
  imageUrl: string
}

export function AdvantageCard({ title, points, imageUrl }: AdvantageCardProps) {
  return (
    <Card className="overflow-hidden h-full shadow-md hover:shadow-lg transition-all duration-300">
      <CardContent className="p-0">
        <div className="bg-red-500 text-white p-6">
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <div className="p-6">
          <ul className="space-y-4">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="bg-red-500 rounded-full p-1 mt-0.5">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt="Advantages of car rental"
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </CardContent>
    </Card>
  )
}
