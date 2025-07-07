"use client"

import { PricingButton } from "@/components/payments/pricing-button"
import { WizardButton } from "@/components/ui/wizard-button"
import { SpellBook, Sparkles } from "@/components/icons/medieval-icons"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { SectionWrapper } from "./section-wrapper"

const pricing = [
  {
    name: "Apprentice Wizard",
    price: "Free",
    period: "",
    description: "Perfect for learning the ancient arts",
    features: [
      "3 documents in your grimoire",
      "Basic spell casting (10 questions/month)",
      "Access to common AI familiars",
      "Scroll analysis magic",
      "Community spell book",
      "Basic enchantments"
    ],
    paymentLink: null,
    icon: SpellBook,
    highlight: false
  },
  {
    name: "Master Wizard",
    price: "$9.99",
    period: "/month",
    description: "Unlock the full power of document sorcery",
    features: [
      "Unlimited documents in grimoire",
      "Unlimited spell casting",
      "Access to all AI familiars",
      "Advanced document enchantments",
      "Priority magical support",
      "Export conversation scrolls",
      "Custom spell configurations",
      "Early access to new magic"
    ],
    paymentLink: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_MONTHLY,
    icon: Sparkles,
    highlight: true
  }
]

export function PricingSection() {
  return (
    <SectionWrapper id="pricing">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="wizard-title text-3xl font-bold tracking-tight sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Choose Your Magical Path
          </motion.h2>
          <motion.p
            className="wizard-body text-muted-foreground mt-4 text-lg leading-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Begin as an apprentice or unlock the full power of document sorcery. Your magical journey awaits.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          {pricing.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`relative rounded-3xl p-8 ring-1 ${
                tier.highlight
                  ? "bg-primary text-primary-foreground ring-primary"
                  : "bg-card text-card-foreground ring-border"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
            >
              {tier.highlight && (
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <span className="bg-wizard-gold text-wizard-ink inline-flex items-center rounded-full px-4 py-1 text-xs font-semibold wizard-body">
                    ⭐ MOST POWERFUL
                  </span>
                </motion.div>
              )}

              <div className="flex items-center gap-4">
                <tier.icon
                  className={`h-8 w-8 ${
                    tier.highlight ? "text-primary-foreground" : "text-primary"
                  }`}
                />
                <h3
                  className={`wizard-heading text-lg leading-8 font-semibold ${
                    tier.highlight
                      ? "text-primary-foreground"
                      : "text-foreground"
                  }`}
                >
                  {tier.name}
                </h3>
              </div>

              <p
                className={`wizard-body mt-4 text-sm leading-6 ${
                  tier.highlight
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {tier.description}
              </p>

              <p className="mt-6 flex items-baseline gap-x-1">
                <span
                  className={`text-4xl font-bold tracking-tight ${
                    tier.highlight
                      ? "text-primary-foreground"
                      : "text-foreground"
                  }`}
                >
                  {tier.price}
                </span>
                <span
                  className={`text-sm leading-6 font-semibold ${
                    tier.highlight
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {tier.period}
                </span>
              </p>

              <ul
                className={`mt-8 space-y-3 text-sm leading-6 ${
                  tier.highlight
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {tier.features.map(feature => (
                  <li key={feature} className="flex gap-x-3">
                    <Check
                      className={`h-6 w-5 flex-none ${
                        tier.highlight
                          ? "text-primary-foreground"
                          : "text-primary"
                      }`}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {tier.paymentLink ? (
                <PricingButton
                  paymentLink={tier.paymentLink}
                  className={`mt-8 w-full ${
                    tier.highlight
                      ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      : ""
                  }`}
                  variant={tier.highlight ? "default" : "outline"}
                >
                  {tier.highlight ? "Ascend to Master" : "Begin Quest"}
                </PricingButton>
              ) : (
                <WizardButton
                  className="mt-8 w-full"
                  variant="parchment"
                  disabled
                >
                  Start Your Journey
                </WizardButton>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="wizard-body text-muted-foreground text-sm">
            All magical paths include a 30-day satisfaction guarantee. If the magic doesn't work for you, we'll return your gold.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
