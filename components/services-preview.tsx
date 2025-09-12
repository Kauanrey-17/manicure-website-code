import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Scissors, Palette, Heart } from "lucide-react"

export function ServicesPreview() {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Manicure Clássica",
      description: "Cuidado completo com cutículas, formato e esmaltação perfeita.",
      price: "A partir de R$ 25",
      image: "public/classic-manicure-hands-nail-polish.jpg",
    },
    {
      icon: <Scissors className="w-8 h-8 text-primary" />,
      title: "Alongamento de Unhas",
      description: "Unhas longas e resistentes com técnicas modernas e seguras.",
      price: "A partir de R$ 80",
      image: "publix/nail-extensions-long-nails-elegant.jpg",
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Nail Art",
      description: "Designs únicos e personalizados para expressar sua personalidade.",
      price: "A partir de R$ 45",
      image: "public/nail-art-decorative-designs-colorful.jpg",
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Pedicure Completa",
      description: "Relaxamento e cuidado especial para seus pés ficarem perfeitos.",
      price: "A partir de R$ 35",
      image: "public/pedicure-foot-care-relaxing-spa.jpg",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossos Serviços</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para deixar suas unhas sempre impecáveis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift border-border bg-card">
              <CardContent className="p-6">
                <div
                  className="w-full h-40 bg-cover bg-center rounded-lg mb-4"
                  style={{ backgroundImage: `url('${service.image}')` }}
                ></div>

                <div className="flex items-center mb-3">
                  {service.icon}
                  <h3 className="text-lg font-semibold text-card-foreground ml-2">{service.title}</h3>
                </div>

                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">{service.price}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    Saiba Mais
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="#servicos">Ver Todos os Serviços</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
