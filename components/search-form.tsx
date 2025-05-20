"use client"

import { useState } from "react"
import { Search, Calendar, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export function SearchForm() {
  const [pickupDate, setPickupDate] = useState<Date>()
  const [returnDate, setReturnDate] = useState<Date>()

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Pick-up Location</label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            placeholder="City, Airport, or Address"
            className="pl-10 border-gray-300 dark:border-gray-700 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Pick-up Date</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal border-gray-300 dark:border-gray-700",
                !pickupDate && "text-muted-foreground",
              )}
            >
              <Calendar className="mr-2 h-4 w-4" />
              {pickupDate ? format(pickupDate, "PPP") : <span>Select date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <CalendarComponent mode="single" selected={pickupDate} onSelect={setPickupDate} initialFocus />
          </PopoverContent>
        </Popover>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Return Date</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal border-gray-300 dark:border-gray-700",
                !returnDate && "text-muted-foreground",
              )}
            >
              <Calendar className="mr-2 h-4 w-4" />
              {returnDate ? format(returnDate, "PPP") : <span>Select date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <CalendarComponent
              mode="single"
              selected={returnDate}
              onSelect={setReturnDate}
              initialFocus
              disabled={(date) => (pickupDate ? date < pickupDate : false) || date < new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Car Type</label>
        <Select>
          <SelectTrigger className="w-full border-gray-300 dark:border-gray-700">
            <SelectValue placeholder="Any" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any</SelectItem>
            <SelectItem value="economy">Economy</SelectItem>
            <SelectItem value="compact">Compact</SelectItem>
            <SelectItem value="midsize">Midsize</SelectItem>
            <SelectItem value="suv">SUV</SelectItem>
            <SelectItem value="luxury">Luxury</SelectItem>
            <SelectItem value="convertible">Convertible</SelectItem>
            <SelectItem value="pickup">Pickup</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="md:col-span-2 lg:col-span-5 flex justify-center mt-4">
        <Button
          size="lg"
          className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-blue-900 font-semibold px-8 rounded-full"
        >
          <Search className="mr-2 h-4 w-4" />
          Search Cars
        </Button>
      </div>
    </div>
  )
}
