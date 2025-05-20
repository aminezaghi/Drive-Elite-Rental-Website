import type React from "react"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 overflow-hidden group">
      <CardContent className="p-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-2xl group-hover:bg-amber-50 dark:group-hover:bg-amber-900/20 transition-colors">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-blue-100">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
