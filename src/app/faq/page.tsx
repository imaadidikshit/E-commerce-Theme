
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "FAQ",
  description: "Answers to frequently asked questions about Aether products, shipping, and returns.",
};

export default function FAQPage() {
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We accept returns of unworn, undamaged items within 30 days of purchase. Please visit our Shipping & Returns page or contact care@aether.com to initiate a return. A $10 restocking fee will be deducted from your refund.",
    },
    {
      question: "How do I care for my cashmere sweater?",
      answer: "We recommend hand washing your cashmere in cold water with a gentle, pH-neutral detergent. Avoid wringing it out. Instead, gently press the water out and lay it flat on a towel to dry, away from direct sunlight. Store folded, not hung, to maintain its shape.",
    },
    {
      question: "Are your materials sustainably sourced?",
      answer: "Yes, we are deeply committed to responsible sourcing. Our materials are chosen for their quality, durability, and sustainable origins. You can read more about our specific practices on our Sustainability page.",
    },
    {
      question: "How can I track my order?",
      answer: "Once your order has shipped, you will receive an email confirmation containing a tracking number. You can use this number to track your package on the carrier's website.",
    },
     {
      question: "Do you ship internationally?",
      answer: "Currently, we only ship to addresses within the United States. We are hoping to expand to international shipping in the near future.",
    },
     {
      question: "How do I find the right size?",
      answer: "Please refer to our comprehensive Sizing Guide, which has detailed measurements for all our clothing and jewelry. If you are between sizes, we generally recommend sizing up for a more comfortable fit.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
       <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-headline">Frequently Asked Questions</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Have questions? We're here to help.
        </p>
      </header>

      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-0">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className={index === faqs.length - 1 ? "border-b-0" : ""}>
                 <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                    <div className="prose dark:prose-invert max-w-none">
                        <p>{faq.answer}</p>
                    </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
