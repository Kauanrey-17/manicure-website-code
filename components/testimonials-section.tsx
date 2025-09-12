"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Maria Silva",
      service: "Nail Art Elaborada",
      rating: 5,
      text: "Simplesmente perfeito! A nail art ficou exatamente como eu imaginava. A atenção aos detalhes é impressionante e o atendimento é excepcional. Super recomendo!",
      image: "/placeholder.svg?height=60&width=60&text=MS",
    },
    {
      name: "Ana Costa",
      service: "Alongamento + Manicure",
      rating: 5,
      text: "Melhor salão da região! Minhas unhas ficaram lindas e duradouras. O ambiente é acolhedor e as profissionais são muito cuidadosas. Já virei cliente fiel!",
      image: "/placeholder.svg?height=60&width=60&text=AC",
    },
    {
      name: "Juliana Santos",
      service: "Pedicure Spa",
      rating: 5,
      text: "Que experiência relaxante! O pedicure spa é maravilhoso, saí de lá renovada. O cuidado com a higiene e a qualidade dos produtos é notável. Voltarei sempre!",
      image: "/placeholder.svg?height=60&width=60&text=JS",
    },
    {
      name: "Carla Oliveira",
      service: "Manicure Premium",
      rating: 5,
      text: "Atendimento impecável! A manicure premium vale cada centavo. Minhas unhas ficaram perfeitas e o tratamento das cutículas foi muito cuidadoso. Adorei!",
      image: "/placeholder.svg?height=60&width=60&text=CO",
    },
    {
      name: "Fernanda Lima",
      service: "Combo Completo",
      rating: 5,
      text: "Excelente custo-benefício! O combo completo é perfeito para quem quer se cuidar por completo. Profissionais qualificadas e resultado incrível. Recomendo muito!",
      image: "/placeholder.svg?height=60&width=60&text=FL",
    },
    {
      name: "Patrícia Rocha",
      service: "Francesinha Decorada",
      rating: 5,
      text: "A francesinha ficou um sonho! Delicada e elegante, exatamente como eu queria. O salão tem um ambiente muito agradável e o atendimento é nota 10!",
      image: "/placeholder.svg?height=60&width=60&text=PR",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">O Que Nossas Clientes Dizem</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A satisfação das nossas clientes é nossa maior recompensa. Veja alguns depoimentos reais.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="border-border bg-background">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <Quote className="w-12 h-12 text-primary" />
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-card-foreground mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                  ))}
                </div>

                {/* Client Info */}
                <div className="flex items-center justify-center space-x-4">
                  <div
                    className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-primary"
                    style={{ backgroundImage: `url('${testimonials[currentTestimonial].image}')` }}
                  ></div>
                  <div className="text-left">
                    <h4 className="font-semibold text-card-foreground">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].service}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial ? "bg-primary" : "bg-border"
              }`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
            <p className="text-muted-foreground">Avaliação Média</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground">Clientes Satisfeitas</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <p className="text-muted-foreground">Taxa de Retorno</p>
          </div>
        </div>
      </div>
    </section>
  )
}
