import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesPreview } from "@/components/services-preview"
import { ServicesSection } from "@/components/services-section"
import { GallerySection } from "@/components/gallery-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { PromotionsSection } from "@/components/promotions-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesPreview />
        <ServicesSection />
        <GallerySection />
        <PricingSection />
        <TestimonialsSection />
        <ContactSection />
        <PromotionsSection />
      </main>
      <Footer />
    </div>
  )
}
