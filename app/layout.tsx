import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Beleza nas Mãos - Salão de Manicure",
  description:
    "Transforme suas unhas, eleve sua autoestima. Salão de manicure especializado em nail art, alongamento e cuidados com as unhas.",
  generator: "v0.app",
  keywords: "manicure, pedicure, nail art, alongamento de unhas, salão de beleza, unhas decoradas",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
