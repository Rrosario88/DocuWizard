"use client"

import { motion } from "framer-motion"
import { SectionWrapper } from "./section-wrapper"

const stats = [
  { label: "Documents Analyzed", value: "∞" },
  { label: "Spells Cast", value: "🔮" },
  { label: "Wizards Trained", value: "⭐" }
]

const features = [
  "Ollama AI",
  "Local Magic",
  "PDF Sorcery",
  "Document Wisdom",
  "Privacy Fortress",
  "Medieval UI",
  "Spell Casting",
  "AI Familiars"
]

export function CompaniesSection() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="wizard-title text-3xl font-bold tracking-tight sm:text-4xl">
            Forged with Ancient Magic
          </h2>
          <p className="wizard-body text-muted-foreground mt-4 text-lg leading-8">
            Mystical powers and enchantments that bring your documents to life
          </p>
        </motion.div>

        {/* Tech Stack Marquee */}
        <div className="relative mt-16">
          <div className="from-background absolute top-0 bottom-0 left-0 z-10 w-20 bg-gradient-to-r to-transparent" />
          <div className="from-background absolute top-0 right-0 bottom-0 z-10 w-20 bg-gradient-to-l to-transparent" />

          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-8 pr-8"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...features, ...features].map((feature, index) => (
                <div
                  key={`${feature}-${index}`}
                  className="bg-wizard-parchment text-wizard-ink flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold whitespace-nowrap wizard-body border border-wizard-gold/20"
                >
                  {feature}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.dl
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-center sm:mt-20 sm:grid-cols-3 sm:gap-y-16 lg:mx-0 lg:max-w-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <dt className="wizard-body text-muted-foreground text-base leading-7">
                {stat.label}
              </dt>
              <dd className="wizard-title order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="inline-block"
                >
                  {stat.value}
                </motion.span>
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </SectionWrapper>
  )
}
