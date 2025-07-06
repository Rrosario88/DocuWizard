"use client"

import { WizardButton } from "@/components/ui/wizard-button"
import { WizardLogo } from "@/components/branding/WizardLogo"
import { Sparkles, MagicStaff } from "@/components/icons/medieval-icons"
import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { SectionWrapper } from "./section-wrapper"

export function HeroSection() {
  const [starHovered, setStarHovered] = useState(false)
  return (
    <SectionWrapper className="py-16 sm:py-32">
      {/* Animated gradient background */}

      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="https://github.com/Rrosario88/DocuWizard"
            className="group ring-border hover:bg-accent hover:text-accent-foreground relative inline-flex items-center rounded-full px-3 py-1 text-xs leading-6 shadow-sm ring-1 transition-colors sm:text-sm parchment-texture"
            target="_blank"
          >
            <Sparkles className="mr-2 h-4 w-4" size={16} />
            <span className="inline wizard-body">Powered by Local AI Magic</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div
          className="mb-6 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <WizardLogo size={80} showText={false} className="wizard-float" />
        </motion.div>

        <motion.h1
          className="wizard-title text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          DocuWizard
          <motion.span
            className="wizard-title block pb-2 leading-tight"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 5,
              ease: "linear",
              repeat: Infinity
            }}
            style={{
              backgroundSize: "200% 200%"
            }}
          >
            Your AI Document Sage
          </motion.span>
        </motion.h1>
        <motion.p
          className="wizard-body mx-auto mt-4 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Transform any PDF into an intelligent conversation with the power of local AI. 
          Upload documents, ask questions, get instant answers - all powered by your own Ollama models.
          <span className="block mt-2 text-sm italic">
            "Harness ancient wisdom with modern magic"
          </span>
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <WizardButton
              variant="mystical"
              size="lg"
              asChild
              className="group relative w-full overflow-hidden sm:w-auto"
            >
              <Link href="/signup">
                <MagicStaff className="mr-2 h-5 w-5" />
                Begin Your Quest
                <motion.div
                  className="ml-2 inline-block"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
              </Link>
            </WizardButton>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <WizardButton
              variant="parchment"
              size="lg"
              asChild
              className="group w-full sm:w-auto"
              onMouseEnter={() => setStarHovered(true)}
              onMouseLeave={() => setStarHovered(false)}
            >
              <Link href="https://github.com/Rrosario88/DocuWizard">
                View Grimoire
                <motion.div
                  className="ml-2 inline-block"
                  whileHover={{ rotate: 12 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Star
                    className={`h-4 w-4 transition-colors ${starHovered ? "text-amber-600" : ""}`}
                    fill="currentColor"
                    stroke="currentColor"
                  />
                </motion.div>
              </Link>
            </WizardButton>
          </motion.div>
        </motion.div>

        {/* Magical features */}
        <motion.div
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {[
            { text: "Local AI Magic", icon: "🧙‍♂️" },
            { text: "Privacy Fortress", icon: "🏰" },
            { text: "Lightning Fast", icon: "⚡" }
          ].map(
            ({ text, icon }, i) => (
              <motion.div
                key={text}
                className="flex w-full items-center justify-center gap-2 sm:w-auto wizard-body"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
              >
                <motion.span
                  className="text-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 15,
                    delay: 0.9 + i * 0.1
                  }}
                >
                  {icon}
                </motion.span>
                <span className="text-sm sm:text-base">{text}</span>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
