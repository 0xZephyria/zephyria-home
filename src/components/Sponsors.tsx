import {
  GlobeLock,
  Network,
  Radar,
  Shapes,
  Shield,
  TrendingUp,
} from "lucide-react";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <Shield size={34} />,
    name: "zk-SNARKs",
  },
  {
    icon: <Radar size={34} />,
    name: "EVM Compatibility",
  },
  {
    icon: <GlobeLock size={34} />,
    name: "Async BFT",
  },
  {
    icon: <TrendingUp size={34} />,
    name: "Plonky3",
  },
  {
    icon: <Network size={34} />,
    name: "Verkle Trees",
  },
  {
    icon: <Shapes size={34} />,
    name: "Decentralized Governance",
  },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Tech Backbone
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span>{icon}</span>
            <h3 className="text-xl  font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
