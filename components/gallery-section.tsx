"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "/images/elegant-manicured-hands-with-beautiful-nail-art-so.jpg",
      alt: "Nail art elegante com detalhes dourados",
      category: "Nail Art",
      description: "Design exclusivo com detalhes em dourado e pedrarias",
    },
    {
      src: "/images/classic-manicure-hands-nail-polish.jpg",
      alt: "Manicure clássica com esmalte vermelho",
      category: "Manicure",
      description: "Manicure clássica com acabamento perfeito",
    },
    {
      src: "/images/nail-extensions-long-nails-elegant.jpg",
      alt: "Alongamento de unhas elegante",
      category: "Alongamento",
      description: "Alongamento em gel com formato stiletto",
    },
    {
      src: "/images/nail-art-decorative-designs-colorful.jpg",
      alt: "Nail art colorida e criativa",
      category: "Nail Art",
      description: "Design colorido com técnicas mistas",
    },
    {
      src: "/images/pedicure-foot-care-relaxing-spa.jpg",
      alt: "Pedicure spa relaxante",
      category: "Pedicure",
      description: "Tratamento spa completo para os pés",
    },
  ]

  const categories = ["Todos", "Manicure", "Pedicure", "Nail Art", "Alongamento"]
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredImages =
    activeCategory === "Todos"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  const openModal = (index: number) => setSelectedImage(index)
  const closeModal = () => setSelectedImage(null)
  const nextImage = () => selectedImage !== null && setSelectedImage((selectedImage + 1) % filteredImages.length)
  const prevImage = () =>
    selectedImage !== null &&
    setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)

  return (
    <section id="galeria" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Galeria</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos mais recentes.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
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
                <div className="relative w-full h-64">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-md"
                  />
                </div>

                {/* Hover Info */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-end">
                  <div className="p-4 text-white translate-y-full group-hover:translate-y-0 transition">
                    <Badge className="mb-2">{image.category}</Badge>
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
                className="absolute top-4 right-4 bg-black/50 text-white"
                onClick={closeModal}
              >
                <X className="w-4 h-4" />
              </Button>

              {/* Prev */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white"
                onClick={prevImage}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              {/* Next */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white"
                onClick={nextImage}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Image */}
              <div className="relative w-[90vw] max-w-3xl h-[70vh] mx-auto">
                <Image
                  src={filteredImages[selectedImage].src}
                  alt={filteredImages[selectedImage].alt}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>

              {/* Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg">
                <Badge className="mb-2">{filteredImages[selectedImage].category}</Badge>
                <p>{filteredImages[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}