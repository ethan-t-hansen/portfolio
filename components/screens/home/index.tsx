import * as FadeIn from "@/components/motion/staggers/fade";
import Navigation from "@/components/navigation";
import { ExperiencesSection, ImageFill } from "@/components/styled-components";


import Image from "next/image";

const Spacer = () => <div style={{ marginTop: "24px" }} />;
export default function Home() {
  return (
    <FadeIn.Container className="flex flex-col gap-24">
      <div className="sticky top-8 z-10">
        <FadeIn.Item>
          <Navigation />
        </FadeIn.Item>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 text-center space-y-4">
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
            <button className="bg-gray-800 text-white-a12 rounded-full px-6 py-2 transition-hover duration-300 hover:bg-gray-600">
              See my projects
            </button>

            <button className="border border-solid border-gray-800 text-gray-800 rounded-full px-6 py-2 transition-hover duration-300 hover:bg-gray-200">
              {" "}
              Hello{" "}
            </button>
          </div>
        </FadeIn.Item>
      </section>

      {/* Project Section */}
      <div className="landing-grid mt-24 box-border">
        <div className="Area1 w-full h-128 flex flex-col rounded-xl bg-clip-border">
          <ImageFill src={"/images/2.jpg"} />
          <p className="text-2xl font-medium mt-2"> Project Title </p>
        </div>
        <div className="Area2 w-full h-full flex flex-col rounded-xl">
          <ImageFill src={"/images/1.jpg"} />
          <p className="text-2xl font-medium mt-2"> Project Title </p>
        </div>
        <div className="Area3 w-full h-full flex flex-col rounded-xl">
          <ImageFill src={"/images/6.jpg"} />
          <p className="text-2xl font-medium mt-2"> Project Title </p>
        </div>
        <div className="Area4 w-full h-96 flex flex-col rounded-xl">
          <ImageFill src={"/images/5.jpg"} />
          <p className="text-2xl font-medium mt-2"> Project Title </p>
        </div>
      </div>

      {/* Experience Section */}
      <div className="flex flex-col gap-4">
        <p className="text-3xl text-gray-600 tracking-wide"> EXPERIENCE </p>
        <hr className="w-full border-b-gray-300 border-[1px]" />
        <ExperiencesSection/>
      </div>

      <div className="h-[50vh]"></div>
    </FadeIn.Container>
  );
}
