"use client"

import { motion } from "framer-motion"
import { 
  MagicStaff, 
  CrystalBall, 
  SpellBook, 
  Sparkles, 
  PotionBottle, 
  WizardHat 
} from "@/components/icons/medieval-icons"
import { SectionWrapper } from "./section-wrapper"

const features = [
  {
    name: "Local AI Familiars",
    description:
      "Harness the power of Ollama models running on your own machine. Choose from llama2, mistral, phi, and more magical AI companions.",
    icon: MagicStaff
  },
  {
    name: "Crystal Ball Insights",
    description:
      "Ask any question about your documents and receive precise answers with source citations. Your personal oracle for document wisdom.",
    icon: CrystalBall
  },
  {
    name: "Grimoire Management",
    description:
      "Upload and organize your PDF scrolls in a beautiful, searchable library. Your documents become an enchanted collection.",
    icon: SpellBook
  },
  {
    name: "Mystical Interface",
    description:
      "Beautiful medieval wizard-themed UI with magical animations, parchment textures, and enchanting visual effects.",
    icon: Sparkles
  },
  {
    name: "Privacy Fortress",
    description:
      "All magic happens locally on your machine. Your documents never leave your castle, ensuring complete privacy and security.",
    icon: WizardHat
  },
  {
    name: "Spell Customization",
    description:
      "Configure your AI familiars with custom prompts, temperature settings, and model preferences for personalized document magic.",
    icon: PotionBottle
  }
]

export function FeaturesSection() {
  return (
    <SectionWrapper className="relative" id="features">
      <div className="bg-[radial-gradient(45%_45%_at_50%_50%,theme(colors.brand-primary/20),transparent)] absolute inset-0 -z-10 opacity-20 dark:opacity-40" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            id="features-heading"
            className="text-primary text-base leading-7 font-semibold wizard-body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ancient Powers Unleashed
          </motion.h2>
          <motion.p
            className="wizard-title mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Master the Art of Document Sorcery
          </motion.p>
          <motion.p
            className="wizard-body text-muted-foreground mt-6 text-lg leading-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transform any PDF into an intelligent conversation partner. Unlock the secrets hidden within your documents using the power of local AI magic.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="group relative flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <motion.div
                  className="bg-card ring-border w-fit rounded-lg p-2 ring-1"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <feature.icon
                    className="text-primary h-6 w-6"
                    aria-hidden="true"
                  />
                </motion.div>

                <dt className="wizard-heading text-foreground mt-4 flex items-center gap-x-3 text-base leading-7 font-semibold">
                  {feature.name}
                  <motion.div
                    className="from-wizard-primary/50 h-px flex-1 bg-gradient-to-r to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    style={{ transformOrigin: "left" }}
                  />
                </dt>

                <dd className="wizard-body text-muted-foreground mt-4 flex flex-auto flex-col text-base leading-7">
                  <p className="flex-auto">{feature.description}</p>
                </dd>

                <motion.div
                  className="bg-accent/50 absolute -inset-x-4 -inset-y-2 scale-95 rounded-2xl opacity-0"
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </SectionWrapper>
  )
}
