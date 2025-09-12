import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Gift, Users } from "lucide-react"

export function PromotionsSection() {
  const promotions = [
    {
      icon: <Gift className="w-6 h-6 text-secondary" />,
      title: "Primeira Visita",
      discount: "20% OFF",
      description: "Desconto especial para novas clientes em qualquer serviço",
      validUntil: "Válido até 31/12/2024",
      highlight: true,
    },
    {
      icon: <Users className="w-6 h-6 text-secondary" />,
      title: "Combo Amigas",
      discount: "15% OFF",
      description: "Venha com uma amiga e ganhem desconto nas duas",
      validUntil: "Promoção permanente",
      highlight: false,
    },
    {
      icon: <Clock className="w-6 h-6 text-secondary" />,
      title: "Happy Hour",
      discount: "10% OFF",
      description: "Atendimento das 14h às 16h de segunda a quarta",
      validUntil: "Todas as semanas",
      highlight: false,
    },
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Promoções Especiais</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aproveite nossas ofertas exclusivas e cuide das suas unhas gastando menos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {promotions.map((promo, index) => (
            <Card
              key={index}
              className={`hover-lift border-border relative ${promo.highlight ? "ring-2 ring-secondary" : ""}`}
            >
              {promo.highlight && (
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground">
                  Mais Popular
                </Badge>
              )}

              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{promo.icon}</div>

                <h3 className="text-xl font-semibold text-card-foreground mb-2">{promo.title}</h3>

                <div className="text-3xl font-bold text-primary mb-3">{promo.discount}</div>

                <p className="text-muted-foreground mb-4">{promo.description}</p>

                <p className="text-sm text-muted-foreground mb-6">{promo.validUntil}</p>

                <Button
                  asChild
                  className={`w-full ${
                    promo.highlight
                      ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}
                >
                  <Link href="https://wa.me/5511999999999" target="_blank">
                    Aproveitar Oferta
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Não perca tempo! Agende já seu horário e aproveite nossas promoções.
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <Link href="https://wa.me/5511999999999" target="_blank">
              Agendar pelo WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
