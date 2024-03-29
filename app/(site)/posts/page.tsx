import { PostType } from "~/lib/models";
import { cachedFetchClient } from "~/sanity/lib/client";
import { postsQuery } from "~/sanity/lib/queries";

import { Posts } from "./posts";

import type { Metadata } from "next";

export const revalidate = 900;

export default async function PostsPage() {
  const posts = await cachedFetchClient<PostType[]>(postsQuery);

  return (
    <main className="mx-auto max-w-5xl px-6 md:px-16 space-y-24">
      <section className="max-w-2xl space-y-3">
        <h1 className="leading-tight lg:min-w-[700px] lg:leading-[3.7rem]">
          Blog posts!
        </h1>
        <p className="text-zinc-400">Written with ❤️</p>
      </section>
      <Posts posts={posts} />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Posts",
  description: "Blog posts written with ❤️!",
  openGraph: {
    title: "Posts",
    description: "Blog posts written with ❤️!",
    url: "https://victor-avila.com/posts",
    siteName: "Victor Avila's Website",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `/profile-black.jpeg`,
        width: 1200,
        height: 630,
        alt: "Victor Avila's Posts page",
      },
    ],
  },
};
