import Link from "next/link"
import { Instagram, Clock, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold text-gradient">Beleza nas Mãos</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Transforme suas unhas, eleve sua autoestima. Especialistas em nail art e cuidados com as unhas.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contato</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contato@belezanasmaos.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Rua das Flores, 123 - São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Horário de Funcionamento</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <div>
                  <p>Seg - Sex: 9h às 19h</p>
                  <p>Sáb: 9h às 17h</p>
                  <p>Dom: Fechado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Newsletter</h3>
            <p className="text-sm text-muted-foreground">Receba promoções e novidades em primeira mão!</p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Seu e-mail" className="flex-1" />
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Inscrever
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2024 Beleza nas Mãos. Todos os direitos reservados.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link
              href="https://instagram.com/belezanasmaos"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Link href="https://wa.me/5511999999999" target="_blank">
                WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
