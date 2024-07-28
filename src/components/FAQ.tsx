import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is Zephyria Network?",
    answer:
      "Zephyria Network is an innovative blockchain platform designed to address the blockchain trilemma by providing scalable, secure, and decentralized solutions using technologies like zk-SNARKs and asynchronous BFT consensus.",
    value: "item-1",
  },
  {
    question: "How does Zephyria Network ensure scalability?",
    answer:
      "Zephyria Network employs cutting-edge technologies like zk-SNARKs and a highly efficient consensus mechanism to handle thousands of transactions per second, ensuring the network remains fast and scalable.",
    value: "item-2",
  },
  {
    question: "What makes Zephyria Network secure?",
    answer:
      "Our network uses zero-knowledge proofs (zk-SNARKs) to enhance privacy and security, along with asynchronous Byzantine Fault Tolerance (BFT) to protect against malicious attacks and ensure the integrity of transactions.",
    value: "item-3",
  },
  {
    question: "Is Zephyria Network compatible with Ethereum?",
    answer:
      "Yes, Zephyria Network is fully compatible with the Ethereum Virtual Machine (EVM), allowing developers to easily deploy existing Ethereum dApps and smart contracts on our platform.",
    value: "item-4",
  },
  {
    question: "How can I get involved with Zephyria Network?",
    answer:
      "You can join our community by following us on social media, participating in our forums, or contributing to our project on GitHub. Stay tuned for updates and opportunities to get involved!",
    value: "item-5",
  },
  {
    question: "What are the key features of Zephyria Network?",
    answer:
      "Key features include zk-SNARKs for enhanced security and privacy, EVM compatibility, asynchronous BFT consensus for reliability, and robust scalability to handle high transaction volumes.",
    value: "item-6",
  },
  {
    question:
      "Why should I choose Zephyria Network over other blockchain platforms?",
    answer:
      "Zephyria Network offers a unique combination of scalability, security, and decentralization, solving the blockchain trilemma and providing a future-proof platform for developers and users alike.",
    value: "item-7",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="mailto:0xZephyria@gmail.com"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
