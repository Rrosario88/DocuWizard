"use client"

import { WizardButton } from "@/components/ui/wizard-button"
import { MagicStaff, SpellBook } from "@/components/icons/medieval-icons"
import { motion } from "framer-motion"
import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"
import { SectionWrapper } from "./section-wrapper"

export function CTASection() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          className="wizard-title text-3xl font-bold tracking-tight sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to Master Document Sorcery?
        </motion.h2>
        <motion.p
          className="wizard-body mx-auto mt-6 max-w-xl text-lg leading-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Join the ranks of document wizards. Clone the grimoire and start casting spells on your PDFs today.
        </motion.p>
        <motion.div
          className="mt-10 flex items-center justify-center gap-x-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <WizardButton
            size="lg"
            variant="mystical"
            asChild
          >
            <Link
              href="https://github.com/Rrosario88/DocuWizard"
              target="_blank"
            >
              <SpellBook className="mr-2 h-4 w-4" />
              Clone Grimoire
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </WizardButton>
          <WizardButton
            size="lg"
            variant="ghost"
            asChild
          >
            <Link href="#features">
              <MagicStaff className="mr-2 h-4 w-4" />
              View Powers <span aria-hidden="true">→</span>
            </Link>
          </WizardButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {[
            { label: "Time to First Spell", value: "< 5 min" },
            { label: "Magic Ready", value: "100%" },
            { label: "Grimoire License", value: "MIT" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <dt className="wizard-body text-muted-foreground text-sm font-medium">
                {stat.label}
              </dt>
              <dd className="wizard-title mt-2 text-2xl font-bold">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
