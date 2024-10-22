"use client";

import type { Post } from "@/types";

import { Skeleton } from "@/components/ui/skeleton";

import Image from "next/image";
import { useState } from "react";

interface Props {
  post: Post;   
}

export const ProjectImage = ({ post }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {post.media?.image ? (
        <div className="relative mb-6 h-96 w-full">
          {isLoading && <Skeleton className="h-96 bg-neutral-300"/>}
          <Image
            src={post.media?.image}
            alt="Project Image"
            width={1000}
            height={200}
            onLoad={() => setIsLoading(false)}
            className={`mb-6 rounded-md transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
          />
        </div>
        
      ) : (
        <></>
      )}
    </>
  );
};
