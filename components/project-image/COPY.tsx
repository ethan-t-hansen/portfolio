"use client";

import type { Post } from "@/types";

// import { Skeleton } from "@/components/ui/skeleton";

import Image from "next/image";
import { useState } from "react";
import { Skeleton } from "../ui/skeleton";

interface Props {
  post: Post;   
}

export const ProjectImage = ({ post }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {post.media?.image ? (
        <div className="mb-6 max-h-96 w-full absolute">
          <Image
            unoptimized
            src={post.media?.image}
            alt="Project Image"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              objectFit: "contain",
              width: "100%",
              height: "auto",
              WebkitFilter: isLoading ? "blur(4px)" : "none",
              transition: "all 0.3s ease",
            }}
            onLoad={() => setIsLoading(false)}
            className='rounded-md'
          />
        </div>
        
      ) : (
        <></>
      )}
    </>
  );
};
