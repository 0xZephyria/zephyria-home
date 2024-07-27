import pilot from "../assets/Zephyr_the_Griffin-removebg.png";
// import pilot from "../assets/pilot.png";
import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Company
              </h2>
              <p className="text-xl text-muted-foreground mt-4 text-justify">
                Zephyria Network aims to revolutionize the Blockchain Tech with Ultra Scalable,
                Secure and EVM-compatible Succinct solution. We look forward to revolutionize technology
                to tackle current challenges, ensuring seamless integration and
                robust performance. Join us to shape the future of decentralized
                tech and drive mass adoption of web3.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
