import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Green Planet - Protect Nature Before It's Too Late",
  description:
    "Green Planet is an environmental awareness platform dedicated to protecting nature, wildlife, forests, oceans, and inspiring eco-friendly lifestyles for a sustainable future.",
  keywords: [
    "green planet",
    "protect nature",
    "save earth",
    "climate change awareness",
    "environmental protection",
    "eco friendly lifestyle",
    "wildlife conservation",
    "sustainable future",
    "save forests",
    "clean environment",
  ],
  openGraph: {
    title: "Green Planet - Protect Nature Before It's Too Late",
    description:
      "Green Planet is an environmental awareness platform dedicated to protecting nature, wildlife, forests, oceans, and inspiring eco-friendly lifestyles for a sustainable future.",
    images: [
      {
        url: "/cvr.png",
        width: 1200,
        height: 630,
        alt: "Green Planet Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Planet - Protect Nature Before It's Too Late",
    description:
      "Green Planet is an environmental awareness platform dedicated to protecting nature, wildlife, forests, oceans, and inspiring eco-friendly lifestyles for a sustainable future.",
    images: ["/cvr.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", poppins.variable, inter.variable)}
    >
      <body>
        <ThemeProvider defaultTheme="light" forcedTheme="light">{children}</ThemeProvider>
      </body>
    </html>
  )
}
