import { formatter } from "@/lib/formatter";
import { getPosts } from "@/lib/mdx";
import Image from "next/image"

import { Link as NextViewTransition } from "next-view-transitions";
import React from "react";

interface PostProps {
  category: string;
}

export const Posts = ({ category }: PostProps) => {
  const posts = getPosts(category).sort((a, b) => {
    return (
      new Date(b.time.created).getTime() - new Date(a.time.created).getTime()
    );
  });

  const Seperator = () => <div className="border-border border-t" />;

  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 flex flex-col">
      <NextViewTransition
        href={`/${category}`}
        className="flex justify-between"
      >
        <h2 className="py-2 text-muted capitalize">
          {category} {posts.length > 0 && `(${posts.length})`}
        </h2>
      </NextViewTransition>

      {posts.map((post) => {
        return (
          <React.Fragment key={post.slug}>
            <Seperator />
            <NextViewTransition
              href={`/${category}/${post.slug}`}
              className="flex w-full items-center justify-between py-2"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={post.media?.image ? post.media.image : ''}
                  width={64}
                  height={64}
                  className='rounded-md'
                  alt="Project Image"
                />
                <p className="mt-0">{post.title}</p>
              </div>

              <p className="mt-0 text-muted">
                {formatter.date(new Date(post.time.created))}
              </p>
            </NextViewTransition>
          </React.Fragment>
        );
      })}
    </div>
  );
};
