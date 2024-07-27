import { GiftIcon, MapIcon, MedalIcon, PlaneIcon } from "../components/Icons";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Accessibility",
    description:
      "Making blockchain technology accessible and user-friendly for everyone.",
  },
  {
    icon: <MapIcon />,
    title: "Community",
    description:
      "Building a strong and supportive community around decentralized technology.",
  },
  {
    icon: <PlaneIcon />,
    title: "Scalability",
    description:
      "Ensuring the Network Throughput and Robustness without Compromising Performance.",
  },
  {
    icon: <GiftIcon />,
    title: "Decentralization",
    description:
      "Emphasizing a decentralized approach to ensure transparency and security.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Step-by-step guide to understand the functionality and benefits of
        Zephyria Network.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
