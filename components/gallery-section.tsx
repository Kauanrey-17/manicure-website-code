"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "images/elegant-manicured-hands-with-beautiful-nail-art-so.jpg",
      alt: "Nail art elegante com detalhes dourados",
      category: "Nail Art",
      description: "Design exclusivo com detalhes em dourado e pedrarias",
    },
    {
      src: "images/classic-manicure-hands-nail-polish.jpg",
      alt: "Manicure clássica com esmalte vermelho",
      category: "Manicure",
      description: "Manicure clássica com acabamento perfeito",
    },
    {
      src: "images/nail-extensions-long-nails-elegant.jpg",
      alt: "Alongamento de unhas elegante",
      category: "Alongamento",
      description: "Alongamento em gel com formato stiletto",
    },
    {
      src: "images/nail-art-decorative-designs-colorful.jpg",
      alt: "Nail art colorida e criativa",
      category: "Nail Art",
      description: "Design colorido com técnicas mistas",
    },
    {
      src: "images/pedicure-foot-care-relaxing-spa.jpg",
      alt: "Pedicure spa relaxante",
      category: "Pedicure",
      description: "Tratamento spa completo para os pés",
    },
    {
      src: "images/elegant-manicured-hands-with-beautiful-nail-art-so.jpg",
      alt: "Francesinha moderna",
      category: "Manicure",
      description: "Francesinha com twist moderno",
    },
    {
      src: "images/nail-art-decorative-designs-colorful.jpg",
      alt: "Nail art com flores",
      category: "Nail Art",
      description: "Delicadas flores pintadas à mão",
    },
    {
      src: "images/nail-extensions-long-nails-elegant.jpg",
      alt: "Unhas longas com brilho",
      category: "Alongamento",
      description: "Alongamento com acabamento em glitter",
    },
    {
      src: "images/classic-manicure-hands-nail-polish.jpg",
      alt: "Esmalte nude elegante",
      category: "Manicure",
      description: "Tons nude para o dia a dia",
    },
  ]

  const categories = ["Todos", "Manicure", "Pedicure", "Nail Art", "Alongamento"]
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredImages =
    activeCategory === "Todos" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section id="galeria" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossa Galeria</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos mais recentes. Cada unha é uma obra de arte única e personalizada.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <Card
              key={index}
              className="hover-lift border-border bg-card cursor-pointer overflow-hidden"
              onClick={() => openModal(index)}
            >
              <CardContent className="p-0 relative group">
                <div
                  className="w-full h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url('${image.src}')` }}
                ></div>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Badge className="mb-2 bg-primary text-primary-foreground">{image.category}</Badge>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70"
                onClick={closeModal}
              >
                <X className="w-4 h-4" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
                onClick={prevImage}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70"
                onClick={nextImage}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              <img
                src={filteredImages[selectedImage].src || "/placeholder.svg"}
                alt={filteredImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg">
                <Badge className="mb-2 bg-primary text-primary-foreground">
                  {filteredImages[selectedImage].category}
                </Badge>
                <p>{filteredImages[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Gostou do que viu? Agende seu horário e deixe suas unhas incríveis também!
          </p>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
              Agendar Agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}