"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create WhatsApp message
    const message = `Olá! Gostaria de agendar um horário.
    
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Mensagem: ${formData.message}`

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Entre em Contato</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para cuidar de você! Entre em contato conosco e agende seu horário.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground flex items-center">
                <MessageCircle className="w-6 h-6 mr-2 text-primary" />
                Envie uma Mensagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-card-foreground">
                    Nome Completo
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-card-foreground">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-card-foreground">
                    Telefone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-card-foreground">
                    Mensagem
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Conte-nos sobre o serviço desejado, data preferida ou qualquer dúvida..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="border-border min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Contato Rápido</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">(11) 99999-9999</p>
                      <p className="text-sm text-muted-foreground">WhatsApp e Ligações</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">contato@belezanasmaos.com</p>
                      <p className="text-sm text-muted-foreground">E-mail para orçamentos</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-card-foreground">Rua das Flores, 123</p>
                      <p className="text-sm text-muted-foreground">Centro, São Paulo - SP</p>
                    </div>
                  </div>
                </div>

                <Button asChild className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="https://wa.me/5511999999999" target="_blank">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chamar no WhatsApp
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Horário de Funcionamento
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Segunda a Sexta</span>
                    <span className="font-medium text-card-foreground">9h às 19h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sábado</span>
                    <span className="font-medium text-card-foreground">9h às 17h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Domingo</span>
                    <span className="font-medium text-card-foreground">Fechado</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    💡 <strong>Dica:</strong> Agende com antecedência para garantir o melhor horário!
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">Nossa Localização</h3>
                <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Mapa interativo em breve</p>
                    <p className="text-xs text-muted-foreground mt-1">Rua das Flores, 123 - Centro, São Paulo</p>
                  </div>
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Link href="https://maps.google.com/?q=Rua+das+Flores+123+São+Paulo" target="_blank">
                    <MapPin className="w-4 h-4 mr-2" />
                    Ver no Google Maps
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
