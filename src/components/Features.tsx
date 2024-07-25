import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/ledger.png";
import image4 from "../assets/newspaper.png";
import image3 from "../assets/scalable.png";
// import image from "../assets/growth.png";
// import image4 from "../assets/looking-ahead.png";
// import image3 from "../assets/reflecting.png";
import { Badge } from "./ui/badge";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "zk-SNARKs",
    description:
      "Implementing zero-knowledge proofs to enhance privacy and security on the blockchain.",
    image: image4,
  },
  {
    title: "Scalability",
    description:
      "Ensuring our network can handle a high volume of transactions efficiently.",
    image: image3,
  },
  {
    title: "Decentralization",
    description:
      "Emphasizing a decentralized approach to ensure transparency and security.",
    image: image,
  },
];

const featureList: string[] = [
  "zk-SNARKs",
  "Scalability",
  "Decentralization",
  "EVM Compatibility",
  "Asynchronous BFT",
  "Community Driven",
  "Future Proof",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[140px] lg:w-[160px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
