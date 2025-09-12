import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Scissors, Palette, Heart, Crown, Star } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Manicure Clássica",
      description:
        "Cuidado completo com cutículas, lixamento, formato personalizado e esmaltação tradicional. Inclui hidratação das mãos.",
      price: "R$ 25",
      duration: "45 min",
      image: "public/classic-manicure-hands-nail-polish.jpg",
      popular: false,
    },
    {
      icon: <Crown className="w-8 h-8 text-primary" />,
      title: "Manicure Premium",
      description:
        "Tratamento luxuoso com esfoliação, máscara hidratante, massagem relaxante e esmaltação com produtos premium.",
      price: "R$ 45",
      duration: "60 min",
      image: "public/elegant-manicured-hands-with-beautiful-nail-art-so.jpg",
      popular: true,
    },
    {
      icon: <Scissors className="w-8 h-8 text-primary" />,
      title: "Alongamento em Gel",
      description:
        "Unhas longas e resistentes com técnica em gel. Formato personalizado e acabamento natural ou francesinha.",
      price: "R$ 80",
      duration: "90 min",
      image: "public/nail-extensions-long-nails-elegant.jpg",
      popular: false,
    },
    {
      icon: <Scissors className="w-8 h-8 text-primary" />,
      title: "Alongamento em Fibra",
      description:
        "Técnica moderna com fibra de vidro para unhas naturais e flexíveis. Ideal para quem busca resistência.",
      price: "R$ 90",
      duration: "100 min",
      image: "public/nail-extensions-long-nails-elegant.jpg",
      popular: false,
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Nail Art Simples",
      description:
        "Desenhos delicados e elegantes. Inclui francesinha decorada, flores, pontos e listras personalizadas.",
      price: "R$ 45",
      duration: "60 min",
      image: "public/nail-art-decorative-designs-colorful.jpg",
      popular: true,
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Nail Art Elaborada",
      description:
        "Designs complexos e únicos. Técnicas avançadas com pedrarias, texturas e arte personalizada exclusiva.",
      price: "R$ 70",
      duration: "90 min",
      image: "public/nail-art-decorative-designs-colorful.jpg",
      popular: false,
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Pedicure Clássica",
      description: "Cuidado completo dos pés com lixamento, remoção de calosidades, hidratação e esmaltação.",
      price: "R$ 35",
      duration: "50 min",
      image: "public/pedicure-foot-care-relaxing-spa.jpg",
      popular: false,
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Pedicure Spa",
      description: "Experiência relaxante com escalda-pés, esfoliação, máscara hidratante e massagem terapêutica.",
      price: "R$ 55",
      duration: "75 min",
      image: "public/pedicure-foot-care-relaxing-spa.jpg",
      popular: true,
    },
  ]

  const combos = [
    {
      title: "Combo Completo",
      description: "Manicure + Pedicure clássicas",
      originalPrice: "R$ 60",
      comboPrice: "R$ 50",
      savings: "Economize R$ 10",
    },
    {
      title: "Combo Premium",
      description: "Manicure Premium + Pedicure Spa",
      originalPrice: "R$ 100",
      comboPrice: "R$ 85",
      savings: "Economize R$ 15",
    },
    {
      title: "Combo Nail Art",
      description: "Alongamento + Nail Art Elaborada",
      originalPrice: "R$ 150",
      comboPrice: "R$ 130",
      savings: "Economize R$ 20",
    },
  ]

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossos Serviços</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços profissionais para deixar suas unhas sempre impecáveis. Cada
            tratamento é personalizado para atender suas necessidades e estilo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift border-border bg-card relative overflow-hidden">
              {service.popular && (
                <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground z-10">
                  <Star className="w-3 h-3 mr-1" />
                  Popular
                </Badge>
              )}

              <div
                className="w-full h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('${service.image}')` }}
              ></div>

              <CardHeader className="pb-3">
                <div className="flex items-center mb-2">
                  {service.icon}
                  <CardTitle className="text-lg ml-2 text-card-foreground">{service.title}</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <p className="text-xs text-muted-foreground">{service.duration}</p>
                  </div>

                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="https://wa.me/5511999999999" target="_blank">
                      Agendar
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Combos Section */}
        <div className="bg-muted rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Combos Especiais</h3>
            <p className="text-muted-foreground">
              Combine serviços e economize! Pacotes especiais para um cuidado completo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {combos.map((combo, index) => (
              <Card key={index} className="border-border bg-background hover-lift">
                <CardContent className="p-6 text-center">
                  <h4 className="text-xl font-semibold text-card-foreground mb-2">{combo.title}</h4>

                  <p className="text-muted-foreground mb-4">{combo.description}</p>

                  <div className="mb-4">
                    <span className="text-sm text-muted-foreground line-through">{combo.originalPrice}</span>
                    <div className="text-2xl font-bold text-primary">{combo.comboPrice}</div>
                    <Badge variant="outline" className="text-xs text-secondary border-secondary">
                      {combo.savings}
                    </Badge>
                  </div>

                  <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    <Link href="https://wa.me/5511999999999" target="_blank">
                      Escolher Combo
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">Não encontrou o que procura?</h3>
          <p className="text-muted-foreground mb-6">
            Entre em contato conosco para serviços personalizados e orçamentos especiais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link href="https://wa.me/5511999999999" target="_blank">
                Falar no WhatsApp
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Link href="#contato">Solicitar Orçamento</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
