import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Crown, Heart } from "lucide-react"
import Link from "next/link"

export function PricingSection() {
  const pricingCategories = [
    {
      title: "Manicure",
      icon: <Star className="w-6 h-6 text-primary" />,
      services: [
        { name: "Manicure Simples", price: "R$ 20", description: "Corte, lixa e esmalte" },
        { name: "Manicure Clássica", price: "R$ 25", description: "Cutícula + hidratação" },
        { name: "Manicure Premium", price: "R$ 45", description: "Tratamento completo + massagem" },
        { name: "Só Esmalte", price: "R$ 15", description: "Aplicação de esmalte" },
      ],
    },
    {
      title: "Pedicure",
      icon: <Heart className="w-6 h-6 text-primary" />,
      services: [
        { name: "Pedicure Simples", price: "R$ 25", description: "Corte, lixa e esmalte" },
        { name: "Pedicure Clássica", price: "R$ 35", description: "Remoção de calos + hidratação" },
        { name: "Pedicure Spa", price: "R$ 55", description: "Tratamento relaxante completo" },
        { name: "Só Esmalte (Pés)", price: "R$ 20", description: "Aplicação de esmalte" },
      ],
    },
    {
      title: "Alongamento",
      icon: <Crown className="w-6 h-6 text-primary" />,
      services: [
        { name: "Alongamento Gel", price: "R$ 80", description: "Técnica em gel UV" },
        { name: "Alongamento Fibra", price: "R$ 90", description: "Fibra de vidro resistente" },
        { name: "Manutenção (15 dias)", price: "R$ 40", description: "Retoque e ajustes" },
        { name: "Remoção", price: "R$ 25", description: "Remoção segura" },
      ],
    },
    {
      title: "Nail Art",
      icon: <Star className="w-6 h-6 text-secondary" />,
      services: [
        { name: "Francesinha Decorada", price: "R$ 35", description: "Francesinha com detalhes" },
        { name: "Nail Art Simples", price: "R$ 45", description: "Desenhos delicados" },
        { name: "Nail Art Elaborada", price: "R$ 70", description: "Designs complexos" },
        { name: "Pedrarias (por unha)", price: "R$ 5", description: "Aplicação de strass" },
      ],
    },
  ]

  const combos = [
    {
      title: "Combo Básico",
      originalPrice: "R$ 60",
      price: "R$ 50",
      savings: "Economize R$ 10",
      services: ["Manicure Clássica", "Pedicure Clássica"],
      popular: false,
    },
    {
      title: "Combo Premium",
      originalPrice: "R$ 100",
      price: "R$ 85",
      savings: "Economize R$ 15",
      services: ["Manicure Premium", "Pedicure Spa"],
      popular: true,
    },
    {
      title: "Combo Completo",
      originalPrice: "R$ 150",
      price: "R$ 130",
      savings: "Economize R$ 20",
      services: ["Alongamento", "Nail Art Elaborada", "Pedicure"],
      popular: false,
    },
  ]

  return (
    <section id="precos" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tabela de Preços</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Preços justos e transparentes para todos os nossos serviços. Qualidade profissional com o melhor
            custo-benefício.
          </p>
        </div>

        {/* Services Pricing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingCategories.map((category, index) => (
            <Card key={index} className="border-border bg-card hover-lift">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-2">{category.icon}</div>
                <CardTitle className="text-xl text-card-foreground">{category.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-medium text-card-foreground text-sm">{service.name}</h4>
                      <p className="text-xs text-muted-foreground">{service.description}</p>
                    </div>
                    <span className="font-bold text-primary ml-2">{service.price}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Combos Section */}
        <div className="bg-muted rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Pacotes Promocionais</h3>
            <p className="text-muted-foreground">
              Combine serviços e economize! Nossos pacotes oferecem o melhor valor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {combos.map((combo, index) => (
              <Card
                key={index}
                className={`border-border bg-background hover-lift relative ${
                  combo.popular ? "ring-2 ring-secondary" : ""
                }`}
              >
                {combo.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground">
                    Mais Popular
                  </Badge>
                )}

                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-semibold text-card-foreground mb-2">{combo.title}</h4>

                  <div className="mb-4">
                    <span className="text-sm text-muted-foreground line-through">{combo.originalPrice}</span>
                    <div className="text-3xl font-bold text-primary">{combo.price}</div>
                    <Badge variant="outline" className="text-xs text-secondary border-secondary">
                      {combo.savings}
                    </Badge>
                  </div>

                  <div className="space-y-2 mb-6">
                    {combo.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{service}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    className={`w-full ${
                      combo.popular
                        ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                        : "bg-primary hover:bg-primary/90 text-primary-foreground"
                    }`}
                  >
                    <Link href="https://wa.me/5511999999999" target="_blank">
                      Escolher Pacote
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Informações Importantes</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Todos os preços incluem produtos de qualidade premium
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Agendamento com antecedência garante desconto de 5%
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Aceitamos cartão, PIX e dinheiro
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Garantia de satisfação em todos os serviços
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Política de Cancelamento</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Cancelamento gratuito até 2h antes do horário
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Reagendamento sem custo adicional
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Atraso superior a 15min pode resultar em reagendamento
                </li>
                <li className="flex items-start">
                  <Check className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  Desconto de fidelidade para clientes regulares
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">Pronta para agendar?</h3>
          <p className="text-muted-foreground mb-6">Entre em contato conosco pelo WhatsApp e garante já seu horário!</p>
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
