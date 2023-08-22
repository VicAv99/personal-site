import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import Image from "next/image";
import { PostType } from "~/lib/models";
import { cachedFetchClient } from "~/sanity/lib/client";
import { postPathsQuery, postQuery } from "~/sanity/lib/queries";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const rams = await cachedFetchClient<{ slug: string }>(postPathsQuery);
  console.log(rams);
  return rams;
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await cachedFetchClient<PostType>(postQuery, params);

  return {
    title: `${post.title}`,
    description: post.excerpt,
    openGraph: {
      images: post.mainImage?.image || "add-a-fallback-project-image-here",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function Project({ params }: Props) {
  const post = await cachedFetchClient<PostType>(postQuery, params);

  return (
    <main className="mx-auto max-w-6xl px-8 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 flex items-start justify-start">
          <h1 className="mb-4 text-3xl font-bold lg:text-5xl lg:leading-tight">
            {post?.title}
          </h1>
        </div>

        <div className="h-96 max-w-[800px] relative">
          <Image
            fill
            className="rounded-xl border border-zinc-800"
            src={post.mainImage?.image ?? ""}
            alt={post.mainImage?.alt || post.title}
            objectFit="cover" // change to suit your needs
          />
        </div>

        <div className="mt-8 flex flex-col gap-y-6 leading-7 text-zinc-700 whitespace-break-spaces">
          <PortableText value={post.body} />
        </div>
      </div>
    </main>
  );
}
