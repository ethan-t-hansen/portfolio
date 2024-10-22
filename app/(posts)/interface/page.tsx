import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";
import { OpenGraph } from "@/lib/og";

import React from "react";

export function generateMetadata() {
  const title = "interface";
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}api/og?title=${encodeURIComponent(title)}`;

  return {
    ...OpenGraph,
    title,
    openGraph: {
      title,
      images: [image],
    },
    twitter: {
      images: [image],
    },
  };
}

export default function Page() {
  return (
    <React.Fragment>
      <FadeIn.Item>
        <Posts category="interface" />
      </FadeIn.Item>
    </React.Fragment>
  );
}
