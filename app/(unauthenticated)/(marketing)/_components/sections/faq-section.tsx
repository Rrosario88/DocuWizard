"use client"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible"
import { motion } from "framer-motion"
import { Plus } from "lucide-react"
import { useState } from "react"
import { SectionWrapper } from "./section-wrapper"

const faqs = [
  {
    question: "What magical powers does DocuWizard possess?",
    answer:
      "DocuWizard harnesses the power of local Ollama AI models to analyze PDF documents. Upload any scroll, ask questions in natural language, and receive precise answers with source citations. All magic happens locally on your machine for complete privacy."
  },
  {
    question: "How do I begin my wizard training?",
    answer:
      "First, install Ollama on your machine and download AI familiars like llama2 or mistral. Then clone the DocuWizard grimoire from GitHub, configure your environment, and start casting document spells immediately."
  },
  {
    question: "Is the magic truly free?",
    answer:
      "Yes! DocuWizard is open source magic under the MIT license. The Apprentice Wizard path is completely free with 3 documents and 10 questions per month. Upgrade to Master Wizard for unlimited document sorcery."
  },
  {
    question: "Can I customize my spells and enchantments?",
    answer:
      "Absolutely! You have full control over your magical arsenal. Configure AI model settings, customize prompts, adjust temperature for spell casting, and even modify the medieval interface to match your wizard aesthetic."
  },
  {
    question: "What AI familiars can I summon?",
    answer:
      "DocuWizard works with any Ollama-compatible model. Popular familiars include llama2, mistral, phi, codellama, and many others. Each familiar has unique strengths for different types of document analysis magic."
  },
  {
    question: "How do I get help from fellow wizards?",
    answer:
      "Join our community of document sorcerers on GitHub for spells, enchantments, and troubleshooting. Open issues for bugs, share your magical discoveries, or reach out for advanced wizard training and custom spell development."
  }
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (question: string) => {
    setOpenItems(prev =>
      prev.includes(question)
        ? prev.filter(item => item !== question)
        : [...prev, question]
    )
  }

  return (
    <SectionWrapper id="faq">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            className="wizard-title text-2xl leading-10 font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Wisdom from the Ancient Scrolls
          </motion.h2>
          <motion.p
            className="wizard-body text-muted-foreground mt-6 text-base leading-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need to know about document sorcery. Can't find the wisdom you seek? Consult the community grimoire on GitHub.
          </motion.p>
          <dl className="mt-10 space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Collapsible
                  open={openItems.includes(faq.question)}
                  onOpenChange={() => toggleItem(faq.question)}
                >
                  <CollapsibleTrigger className="flex w-full items-start justify-between text-left">
                    <span className="wizard-heading text-foreground text-base leading-7 font-semibold">
                      {faq.question}
                    </span>
                    <motion.span
                      className="ml-6 flex h-7 items-center"
                      animate={{
                        rotate: openItems.includes(faq.question) ? 45 : 0
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Plus
                        className="text-muted-foreground h-6 w-6"
                        aria-hidden="true"
                      />
                    </motion.span>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-2 pr-12">
                    <motion.p
                      className="wizard-body text-muted-foreground text-base leading-7"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.p>
                  </CollapsibleContent>
                </Collapsible>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </SectionWrapper>
  )
}
