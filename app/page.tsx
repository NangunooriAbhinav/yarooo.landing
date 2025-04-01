import Navbar from "@/components/Navbar"
import HeroSection from "@/components/sections/HeroSection"
import BrandsSection from "@/components/sections/BrandsSection"
import ServicesSection from "@/components/sections/ServicesSection"
import PricingSection from "@/components/sections/PricingSection"
import TeamSection from "@/components/sections/TeamSection"
import CallToActionSection from "@/components/sections/CallToActionSection"
import ContactSection from "@/components/sections/ContactSection"
import FooterSection from "@/components/sections/FooterSection"
import TestimonialsSection from "@/components/sections/TestimonialSection"
import ThemeSwitcher from "@/components/theme-switcher"
import HowItWorksSection from "@/components/sections/HowItWorksSection"
import FAQSection from "@/components/sections/FAQSection"



export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <ServicesSection />

        {/* How It Works Section */}
        <HowItWorksSection />

              
        
        {/* FAQ Section */}
        <FAQSection />

        {/* Call To Action Section */}
        <CallToActionSection />

        {/* Footer Section */}
        <FooterSection />

        {/* Theme Switcher */}
        <ThemeSwitcher />
      </main>
    </div>
  )
}

