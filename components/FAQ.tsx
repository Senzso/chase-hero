import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <section id="faq" className="w-full max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-6xl font-bold text-[#8B3168] text-center mb-16">
        Frequently Asked
        <br />
        Questions
      </h2>
      <Accordion type="single" collapsible className="w-full space-y-6">
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className="text-2xl font-bold text-[#070735] hover:no-underline">
            Is this an official CHASE HERO product?
          </AccordionTrigger>
          <AccordionContent className="text-xl text-gray-600">
            Yes, this is the only Official CHASE HERO Meme, by CHASE HERO himself.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-none">
          <AccordionTrigger className="text-2xl font-bold text-[#070735] hover:no-underline">
            What is the official contract address and symbol for the CHASE HERO Meme?
          </AccordionTrigger>
          <AccordionContent className="text-xl text-gray-600">
            CA will be posted on our official X @chaseheromeme.
            <br />
            Symbol: $HERO
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-none">
          <AccordionTrigger className="text-2xl font-bold text-[#070735] hover:no-underline">
            How can I get CHASE HERO Memes?
          </AccordionTrigger>
          <AccordionContent className="text-xl text-gray-600">
            You can get $HERO tokens on various decentralized exchanges on the Solana blockchain. Always ensure you're
            using the official contract address when trading.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-none">
          <AccordionTrigger className="text-2xl font-bold text-[#070735] hover:no-underline">
            What is a meme?
          </AccordionTrigger>
          <AccordionContent className="text-xl text-gray-600">
            Merriam-Webster's meme noun: 1: an idea, behavior, style, or usage that spreads from person to person within
            a culture.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6" className="border-none">
          <AccordionTrigger className="text-2xl font-bold text-[#070735] hover:no-underline">
            Which blockchain network are the CHASE HERO Memes minted?
          </AccordionTrigger>
          <AccordionContent className="text-xl text-gray-600">Solana</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

