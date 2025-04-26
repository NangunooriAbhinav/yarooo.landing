import Image from "next/image"
import Link from "next/link"
import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function CallToActionSection() {
  return (
    <div className="w-full py-16 lg:py-40 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col text-center bg-muted dark:bg-gray-800 rounded-md p-4 lg:p-14 gap-6 md:gap-8 items-center">
          <div>
            <Badge>Get started</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl md:text-3xl lg:text-5xl tracking-tighter max-w-xl font-regular dark:text-white">
              Maximize Your Earnings with Our Affiliate Marketing Platform
            </h3>
            <p className="text-base md:text-lg leading-relaxed tracking-tight text-muted-foreground dark:text-gray-400 max-w-xl">
              Seamless cashback rewards, effortless affiliate link management, and powerful analytics – all in one place.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="gap-2 w-full sm:w-auto" variant="outline">
              Get Started Now <PhoneCall className="w-4 h-4" />
            </Button>
            <Button className="gap-2 w-full sm:w-auto">
              Sign Up for Free <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

