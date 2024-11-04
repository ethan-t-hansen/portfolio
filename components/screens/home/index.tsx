import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";
import { SpinningLogo } from "@/components/spinning-textpath";

const Spacer = () => <div style={{ marginTop: "24px" }} />;
export default function Home() {
  return (
    <FadeIn.Container>
      <div className="flex flex-col gap-8 md:flex-row md:items-center">
        <FadeIn.Item>
          <SpinningLogo />
        </FadeIn.Item>
        <div className="space-y-2">
          <FadeIn.Item>
            <div className="flex justify-between">
              <div>
                <h1 className="font-semibold text-xl">Ethan Hansen</h1>
                <h2>Software Dev + Interface Designer</h2>
              </div>
            </div>
          </FadeIn.Item>
          <FadeIn.Item>
            <p>
              Hi there! I'm a student at the University of British Columbia exploring digital interaction and product design.
            </p>
            <div className="mt-2">
              Currently interning as a UI / UX Engineer
              at{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://momentenergy.com/"
                className="group inline-block"
              >
                <span className="indigo-underline-animation">
                  <div className="indigo-gradient">Moment Energy.</div>
                </span>
              </a>
            </div>
          </FadeIn.Item>
        </div>
      </div>


      <FadeIn.Item>
        <Posts category="experience" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="programming" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="interface" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="design" />
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
    </FadeIn.Container>
  );
}
