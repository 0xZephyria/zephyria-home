import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Check, Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt="EVM Logo"
              src="https://cdn.icon-icons.com/icons2/3714/PNG/512/coin_cryptocurrency_crypto_ethereum_icon_230248.png"
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">EVM Compatibility</CardTitle>
            <CardDescription>Ethereum Virtual Machine</CardDescription>
          </div>
        </CardHeader>

        <CardContent> platform that is more scalable!</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://img.icons8.com/3d-fluency/94/discord-logo.png"
            onClick={() => {
              window
                .open("https://discord.com/invite/MY9B7bDa", "_blank")
                ?.focus();
            }}
            alt="discord-logo"
            className="absolute grayscale-[0%] -top-12  w-24 h-24 aspect-square object-cover cursor-pointer"
          />

          <CardTitle className="text-center">Join our Discord</CardTitle>
          <CardDescription className="font-normal text-primary">
            Exclusive Community
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            Zephyria Network! Connect with like-minded individuals, stay
            updated, and contribute to our mission of mass adoption.
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/0xZephyria"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://twitter.com/0xZephyria"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">X icon</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>

            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/company/zephyria/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Solving
            <Badge variant="secondary" className="text-sm text-primary">
              Boom 🚀
            </Badge>
          </CardTitle>
          <div>
            <span className="text-xl font-bold inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Blockchain Trilemma
            </span>
            <span className="text-muted-foreground"> </span>
          </div>

          <CardDescription>
            Zephyria Network's commitment to solving the blockchain trilemma!
          </CardDescription>
        </CardHeader>

        <CardContent>
          <a
            href="https://aisel.aisnet.org/icis2023/blockchain/blockchain/5/"
            target="_blank"
          >
            <Button className="w-full">Know More</Button>
          </a>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Scalability", "Security", "Decentralization"].map(
              (benefit: string) => (
                <span key={benefit} className="flex">
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>ZK & zk-SNARKs</CardTitle>
            <CardDescription className="text-md mt-2">
              ZK Succinct Non-Interactive Arguments of Knowledge.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
