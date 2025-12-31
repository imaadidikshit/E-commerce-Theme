
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We accept returns of unworn, undamaged items within 30 days of purchase. Please visit our Shipping & Returns page for more details.",
    },
    {
      question: "How do I care for my cashmere sweater?",
      answer: "We recommend hand washing your cashmere in cold water with a gentle detergent. Lay flat to dry and store folded, not hung, to maintain its shape.",
    },
    {
      question: "Are your materials sustainably sourced?",
      answer: "Yes, we are committed to responsible sourcing. Our materials are chosen for their quality, durability, and sustainable origins. You can read more on our Sustainability page.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-headline text-center">Frequently Asked Questions</h1>
      <div className="max-w-3xl mx-auto mt-8">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
