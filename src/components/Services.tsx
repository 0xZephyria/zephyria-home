import cubeLeg from "../assets/cube-leg.png";
import { ChartIcon, MagnifierIcon, WalletIcon } from "./Icons";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Code Collaboration",
    description:
      "Our platform enables seamless collaboration among developers, fostering innovation and efficiency",
    icon: <ChartIcon />,
  },
  {
    title: "Project Management",
    description:
      "Efficiently deploy Blockchain projects with our comprehensive tools and resources.",
    icon: <WalletIcon />,
  },
  {
    title: "Decentralization",
    description:
      "Ensuring a highly decentralized approach to maximize Security, Transparency and Build Trust.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Community-Centric{" "}
            </span>
            Blockchain
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Zephyria Network Collecting Developers and Blockchain
            enthusiasts to Build Web3
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
