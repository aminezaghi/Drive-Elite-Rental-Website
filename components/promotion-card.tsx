import Image from "next/image"
import { PhoneCall } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface PromotionCardProps {
  title: string
  subtitle: string
  description?: string
  buttonText?: string
  imageUrl: string
  variant?: "default" | "angular" | "rounded"
}

export function PromotionCard({
  title,
  subtitle,
  description,
  buttonText = "Book Now",
  imageUrl,
  variant = "default",
}: PromotionCardProps) {
  const getCardShape = () => {
    switch (variant) {
      case "angular":
        return "clip-path-angular"
      case "rounded":
        return "rounded-full-right"
      default:
        return ""
    }
  }

  return (
    <Card
      className={`overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 text-white h-full ${getCardShape()} shadow-md hover:shadow-xl transition-all duration-300 border-none`}
    >
      <CardContent className="p-0">
        <div className="p-6">
          <h3 className="text-2xl font-bold">{title}</h3>
          <div className="bg-amber-500 text-blue-900 inline-block px-3 py-1 rounded-full my-2 font-medium">
            {subtitle}
          </div>
          {description && <p className="mt-2 text-sm text-blue-100">{description}</p>}
          <div className="mt-4 flex items-center gap-4">
            {buttonText && (
              <Button
                variant="secondary"
                className="bg-white hover:bg-gray-100 text-blue-900 font-semibold transition-colors"
              >
                {buttonText}
              </Button>
            )}
            <div className="flex items-center gap-2">
              <PhoneCall className="h-4 w-4" />
              <span className="text-sm">+212 5 99999999</span>
            </div>
          </div>
        </div>
        <div className="relative h-40 md:h-48 overflow-hidden mt-4">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
        </div>
      </CardContent>
    </Card>
  )
}
