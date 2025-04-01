"use client"

import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Plus } from "lucide-react"

export default function FAQSection() {
  const faqs = [
    {
      id: "1",
      title: "How does cashback work?",
      content: "Every time you or someone using your affiliate link makes a purchase, you earn cashback!"
    },
    {
      id: "2",
      title: "Can I withdraw my earnings?",
      content: "Yes, you can withdraw your cashback through supported payment methods."
    },
    {
      id: "3",
      title: "Is the platform free to use?",
      content: "Yes! There are no hidden charges for users."
    }
  ]

  return (
    <section id="faq" className="bg-white py-16 dark:bg-gray-900 md:py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-10 md:mb-16 max-w-[570px] text-center">
          <span className="mb-2 block text-lg font-semibold text-blue-600 dark:text-blue-400">
            FAQs
          </span>
          <h2 className="mb-4 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl md:text-[40px]">
            Common Questions About Our Platform
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Find answers to the most common questions about using our cashback and affiliate platform
          </p>
        </div>
        
        <div className="space-y-4 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full" defaultValue="1">
            {faqs.map((faq) => (
              <AccordionItem value={faq.id} key={faq.id} className="py-2 border-none mb-2 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger className="flex w-full items-center justify-between bg-white px-4 md:px-6 py-4 md:py-5 text-left text-base md:text-lg font-medium text-gray-900 transition-colors dark:bg-gray-800 dark:text-white [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                    {faq.title}
                    <Plus
                      size={16}
                      strokeWidth={2}
                      className="shrink-0 opacity-60 transition-transform duration-200"
                      aria-hidden="true"
                    />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="bg-gray-50 px-4 md:px-6 py-4 md:py-5 text-base text-gray-600 dark:bg-gray-900 dark:text-gray-300">
                  {faq.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
