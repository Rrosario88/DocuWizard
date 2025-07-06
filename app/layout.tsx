import { CheckoutRedirect } from "@/components/payments/checkout-redirect"
import { TooltipProvider } from "@/components/ui/tooltip"
import { TailwindIndicator } from "@/components/utility/tailwind-indicator"
import { ClerkProvider } from "@clerk/nextjs"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { Cinzel, Crimson_Text } from "next/font/google"
import { Toaster } from "sonner"
import "./globals.css"

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"]
})

export const metadata: Metadata = {
  title: "DocuWizard - Transform Documents with Ancient Wisdom & Modern AI",
  description: "AI-powered PDF document analysis with local Ollama models. Upload documents, ask questions, get instant answers powered by local AI. Your personal document sage awaits.",
  keywords: ["pdf", "ai", "document-analysis", "ollama", "wizard", "medieval", "local-ai"],
  authors: [{ name: "DocuWizard" }],
  creator: "DocuWizard",
  publisher: "DocuWizard",
  openGraph: {
    title: "DocuWizard - Your AI Document Assistant",
    description: "Transform any PDF into an intelligent conversation with local AI models",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "DocuWizard - Your AI Document Assistant",
    description: "Transform any PDF into an intelligent conversation with local AI models"
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${cinzel.variable} ${crimsonText.variable} antialiased`}
        >
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <TooltipProvider>
              {children}
              <CheckoutRedirect />

              <TailwindIndicator />
              <Toaster />
            </TooltipProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
