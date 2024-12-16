import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import Navigation from "@/components/navigation";
import { Posts } from "@/components/posts";
import { SpinningLogo } from "@/components/spinning-textpath";

import Image from "next/image";

const Spacer = () => <div style={{ marginTop: "24px" }} />;
export default function Home() {
  return (
    <FadeIn.Container>
      <div className="sticky top-8 z-10">
        <FadeIn.Item>
          <Navigation />
        </FadeIn.Item>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center space-y-4">
        <FadeIn.Item>
          <Image
            src="/eth-logo.svg"
            alt="ETH Logo"
            width={256}
            height={256}
            className="mx-auto my-8"
          />
        </FadeIn.Item>
        <FadeIn.Item>
          <p className="text-3xl flex font-extralight flex-row items-center justify-center text-gray-500 gap-[5px] pb-0">
            Hey,
            <span className="font-medium text-gray-950"> I'm Ethan. </span>I
            like building cool things on the web.
          </p>
        </FadeIn.Item>
        <FadeIn.Item>
          <p className="text-lg text-gray-500 m-0 text-nowrap">
            Design Engineer @ ICBC / CS + Business @ UBC
          </p>
        </FadeIn.Item>
        <FadeIn.Item>
          <div className="flex justify-center gap-4">
            <button>See my projects</button>
            <button>View my Resume</button>
          </div>
        </FadeIn.Item>
      </section>

      <div className="landing-grid mt-24 box-border">
        <div className="Area1 w-full h-full flex flex-col rounded-xl">
          <Image
            src={"/assets/hero/biztech-hero.webp"}
            style={{ objectFit: "cover" }}
            width={64}
            height={64}
            sizes={"100vw"}
            className="h-full w-full rounded-xl"
            alt="image..."
          />
          <p className="text-2xl font-medium mt-2"> Project Title </p>
        </div>
        <div className="Area2 w-full h-full flex flex-col rounded-xl">
          <Image
            src={"/assets/hero/biztech-hero.webp"}
            style={{ objectFit: "cover" }}
            width={64}
            height={64}
            sizes={"100vw"}
            className="h-full w-full rounded-xl"
            alt="image..."
          />
          <p className="text-2xl font-medium mt-2"> Project Title </p>
        </div>
        <div className="Area3 w-full h-full flex flex-col rounded-xl">
          <Image
            src={"/assets/hero/biztech-hero.webp"}
            style={{ objectFit: "cover" }}
            width={64}
            height={64}
            sizes={"100vw"}
            className="h-full w-full rounded-xl"
            alt="image..."
          />
          <p className="text-2xl font-medium mt-2"> Project Title </p>
        </div>
        <div className="Area4 w-full h-72 flex flex-col rounded-xl">
          <Image
            src={"/assets/hero/biztech-hero.webp"}
            style={{ objectFit: "cover" }}
            width={64}
            height={64}
            sizes={"100vw"}
            className="h-full w-full rounded-xl"
            alt="image..."
          />
          <p className="text-2xl font-medium mt-2"> Project Title </p>
        </div>
      </div>

      <div className="h-[50vh]"></div>
    </FadeIn.Container>
  );
}
