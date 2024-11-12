import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Calendar, DollarSign, Clock } from "lucide-react"

export function EventFilters() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-lg font-semibold mb-6">Filters</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-3">Category</h3>
          <div className="space-y-2">
            {["Music", "Sports", "Arts", "Food", "Technology"].map((category) => (
              <div key={category} className="flex items-center">
                <Checkbox id={category} />
                <label htmlFor={category} className="ml-2 text-sm">
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-3">Price Range</h3>
          <div className="px-2">
            <Slider defaultValue={[0, 100]} max={100} step={1} />
          </div>
          <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
            <span>$0</span>
            <span>$100+</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-3">Date</h3>
          <div className="space-y-2">
            {["Today", "Tomorrow", "This Week", "This Month"].map((date) => (
              <div key={date} className="flex items-center">
                <Checkbox id={date} />
                <label htmlFor={date} className="ml-2 text-sm">
                  {date}
                </label>
              </div>
            ))}
          </div>
        </div>

        <Button className="w-full">Apply Filters</Button>
      </div>
    </div>
  )
}