import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import Image from "next/image";
import { PostType } from "~/lib/models";
import { cachedFetchClient } from "~/sanity/lib/client";
import { postPathsQuery, postQuery } from "~/sanity/lib/queries";

type PostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return await cachedFetchClient<PostPageProps["params"]>(postPathsQuery);
}

// Dynamic metadata for SEO
export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await cachedFetchClient<PostType>(postQuery, params);

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: post.mainImage?.image,
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await cachedFetchClient<PostType>(postQuery, params);

  return (
    <main className="mx-auto max-w-5xl px-6 md:px-16 space-y-24">
      <section className="max-w-4xl space-y-6 mx-auto">
        <h1 className="leading-tight lg:min-w-[700px] lg:leading-[3.7rem]">
          {post?.title}
        </h1>

        <div className="h-96 max-w-[800px] relative">
          <Image
            fill
            className="rounded-xl border border-zinc-800"
            src={post.mainImage?.image ?? ""}
            alt={post.mainImage?.alt || post.title}
            objectFit="cover" // change to suit your needs
          />
        </div>

        <div className="flex flex-col gap-y-6 whitespace-break-spaces">
          <PortableText value={post.body} />
        </div>
      </section>
    </main>
  );
}
