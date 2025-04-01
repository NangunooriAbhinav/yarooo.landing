import Link from "next/link";
import { Search, Share2, DollarSign } from "lucide-react";
import { PulsatingButton } from "../ui/pulsating-button";


interface StepCardProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLast?: boolean;
}

function StepCard({ number, title, description, icon, isLast = false }: StepCardProps) {
  const colors = [
    { bg: "bg-blue-600", light: "bg-blue-100 dark:bg-blue-900/30", iconColor: "text-blue-600 dark:text-blue-400" },
    { bg: "bg-[#A097FF]", light: "bg-purple-100 dark:bg-purple-900/30", iconColor: "text-[#A097FF] dark:text-[#B4ADFF]" },
    { bg: "bg-[#48DB7A]", light: "bg-green-100 dark:bg-green-900/30", iconColor: "text-[#48DB7A] dark:text-[#6DE99A]" },
  ];
  
  const color = colors[number - 1] || colors[0];
  
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="bg-white dark:bg-[#111827] shadow-lg rounded-xl p-8 transition-transform hover:-translate-y-2 duration-300 h-full">
        <div className={`${color.light} w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto`}>
          <div className={color.iconColor}>
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-center mb-4 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-6">{description}</p>
        
        {isLast && (
          <div className="mt-4 text-center">
            <Link href="#">
              <PulsatingButton pulseColor="#6dff9f" className="w-full font-semibold text-base">
                Start Earning Now
              </PulsatingButton>
            </Link>
          </div>
        )}
        
        {!isLast && (
          <div className="relative hidden lg:block h-4">
            </div>
        )}
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section className="bg-gray-50 py-20 dark:bg-gray-800 lg:py-[120px]">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-16 max-w-[510px] text-center">
          <span className="mb-2 block text-lg font-semibold text-blue-600 dark:text-blue-400">
            How It Works
          </span>
          <h2 className="mb-4 text-3xl font-bold leading-[1.2] text-gray-900 dark:text-white sm:text-4xl md:text-[40px]">
            Simple Steps to Start Earning
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
            Follow these simple steps to begin your journey with us and maximize your cashback earnings.
          </p>
        </div>

        <div className="relative mx-auto w-full">
          <div className="hidden lg:block absolute top-1/2 left-[25%] right-[25%] w-[50%] h-0.5 bg-gray-300 dark:bg-gray-600 transform -translate-y-1/2 z-0"></div>
          
          <div className="flex flex-wrap relative z-10 sm:gap-0 gap-10 ">
            <StepCard 
              number={1}
              title="Browse Offers"
              description="Explore available affiliate deals and products to find the best opportunities."
              icon={<Search size={32} />}
            />
            
            <StepCard 
              number={2}
              title="Share & Shop"
              description="Generate affiliate links and share them with your network or use them yourself."
              icon={<Share2 size={32} />}
            />
            
            <StepCard 
              number={3}
              title="Earn Cashback"
              description="Get paid for every qualifying purchase made through your links."
              icon={<DollarSign size={32} />}
              isLast={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
