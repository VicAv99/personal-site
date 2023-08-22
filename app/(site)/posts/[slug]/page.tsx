import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { Metadata } from "next";
import Image from "next/image";
import { SanityCodeBlock } from "~/components/sanity/code-block";
import { SanityLink } from "~/components/sanity/link";
import { PostType } from "~/lib/models";
import { cachedFetchClient } from "~/sanity/lib/client";
import { postPathsQuery, postQuery } from "~/sanity/lib/queries";

type PostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return await cachedFetchClient(postPathsQuery);
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

  const components: Partial<PortableTextReactComponents> = {
    marks: {
      link: ({ value, children }) => (
        <SanityLink value={value}>{children}</SanityLink>
      ),
    },
    types: {
      code: ({ value }) => {
        return <SanityCodeBlock {...value} />;
      },
    },
  };

  return (
    <main className="mx-auto max-w-5xl px-6 md:px-16 space-y-24">
      <section className="max-w-4xl space-y-6 mx-auto">
        <h1 className="leading-tight lg:min-w-[700px] lg:leading-[3.7rem]">
          {post?.title}
        </h1>

        <div className="h-96 max-w-[800px] relative">
          <Image
            fill
            priority
            className="rounded-xl border border-zinc-800 object-cover"
            src={post.mainImage?.image ?? ""}
            alt={post.mainImage?.alt || post.title}
          />
        </div>

        <div className="flex flex-col gap-y-6 whitespace-break-spaces">
          <PortableText value={post.body} components={components} />
        </div>
      </section>
    </main>
  );
}
