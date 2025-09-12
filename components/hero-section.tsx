import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Star, Award } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fdf2f8 0%, #f8bbd0 50%, #e91e63 100%)",
      }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('/elegant-manicured-hands-with-beautiful-nail-art-so.jpg')`,
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance drop-shadow-lg"
            style={{ color: "#1f2937" }}
          >
            Transforme suas unhas, <span style={{ color: "#7c2d12" }}>eleve sua autoestima</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-pretty" style={{ color: "#374151" }}>
            No Beleza nas Mãos, cada unha é uma obra de arte. Especialistas em nail art, alongamento e cuidados que
            fazem você se sentir única e especial.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg hover-lift shadow-xl"
            >
              <Link href="https://wa.me/5511999999999" target="_blank">
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Agora
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg hover-lift shadow-xl bg-transparent"
              style={{
                border: "2px solid #7c2d12",
                color: "#7c2d12",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <Link href="#servicos">Ver Serviços</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div
              className="text-center rounded-lg p-6 border shadow-lg"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderColor: "#e5e7eb",
              }}
            >
              <div className="flex items-center justify-center mb-2">
                <Star className="w-6 h-6 text-secondary mr-2" />
                <span className="text-2xl font-bold" style={{ color: "#1f2937" }}>
                  4.9
                </span>
              </div>
              <p className="text-sm" style={{ color: "#6b7280" }}>
                Avaliação média
              </p>
            </div>

            <div
              className="text-center rounded-lg p-6 border shadow-lg"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderColor: "#e5e7eb",
              }}
            >
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-secondary mr-2" />
                <span className="text-2xl font-bold" style={{ color: "#1f2937" }}>
                  500+
                </span>
              </div>
              <p className="text-sm" style={{ color: "#6b7280" }}>
                Clientes satisfeitas
              </p>
            </div>

            <div
              className="text-center rounded-lg p-6 border shadow-lg"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderColor: "#e5e7eb",
              }}
            >
              <div className="flex items-center justify-center mb-2">
                <Calendar className="w-6 h-6 text-secondary mr-2" />
                <span className="text-2xl font-bold" style={{ color: "#1f2937" }}>
                  3+
                </span>
              </div>
              <p className="text-sm" style={{ color: "#6b7280" }}>
                Anos de experiência
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div
          className="w-6 h-10 border-2 rounded-full flex justify-center"
          style={{
            borderColor: "#7c2d12",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <div className="w-1 h-3 rounded-full mt-2 animate-pulse" style={{ backgroundColor: "#7c2d12" }}></div>
        </div>
      </div>
    </section>
  )
}
