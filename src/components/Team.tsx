import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  tagLine: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl:
      "https://pbs.twimg.com/profile_images/1809517444119293952/3XegpkMH_400x400.jpg",
    name: "Karan Dhot",
    position: "Business Lead",
    tagLine: "Leads the business and logic management at Zephyria Network.",
    socialNetworks: [
      { name: "Linkedin", url: "https://www.linkedin.com/in/karan-kamboj/" },
      {
        name: "Github",
        url: "https://github.com/DHOTNetworks",
      },
      {
        name: "Twitter",
        url: "https://x.com/KaranKambojDhot",
      },
    ],
  },
  {
    imageUrl:
      "https://pbs.twimg.com/profile_images/1812402118856196097/I8nsmLLe_400x400.jpg",
    name: "Kunal Dhongade",
    position: "Software Developer",
    tagLine:
      "Leading technical development, ensuring our code is robust, efficient, & innovative.",
    socialNetworks: [
      { name: "Linkedin", url: "http://linkedin.com/in/kunaldhongade" },
      {
        name: "Github",
        url: "https://www.github.com/kunaldhongade",
      },
      {
        name: "Twitter",
        url: "https://www.x.com/kunaldhongade",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Github":
        return <Github size="20" />;

      case "Twitter":
        return <Twitter size="20" />;
    }
  };

  return (
    <section id="team" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Dedicated{" "}
        </span>
        Crew
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        The Minds Behind Zephyria Network
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-20 gap-y-10">
        {teamList.map(
          ({
            imageUrl,
            name,
            position,
            socialNetworks,
            tagLine,
          }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>{tagLine}</p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
