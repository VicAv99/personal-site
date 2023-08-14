import Image from "next/image";
import Link from "next/link";
import { PostType } from "~/lib/models";
import { cachedFetchClient, imageBuilder } from "~/sanity/lib/client";
import { postsQuery } from "~/sanity/lib/queries";

export default async function Project() {
  const posts = await cachedFetchClient<PostType[]>(postsQuery);

  return (
    <main className="mx-auto max-w-7xl px-6 md:px-16">
      <section className="mb-16 max-w-2xl">
        <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:leading-[3.7rem]">
          Featured posts I&apos;ve written over the years
        </h1>
        <p className="text-base leading-relaxed text-zinc-400">
          I&apos;ve worked on tons of little projects over the years but these
          are the ones that I&apos;m most proud of. Many of them are
          open-source, so if you see something that piques your interest, check
          out the code and contribute if you have ideas for how it can be
          improved.
        </p>
      </section>

      <section className="mb-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <Link
            href={`/posts/${post.slug}`}
            key={post._id}
            className="flex items-center gap-x-4 rounded-lg border border-transparent bg-muted p-4 ease-in-out hover:border-zinc-200"
          >
            <Image
              src={imageBuilder.image(post.mainImage!).url()}
              width={60}
              height={60}
              alt={post.mainImage?.alt ?? ""}
              className="rounded-md bg-muted-foreground p-2"
            />
            <div>
              <h2 className="mb-1 font-semibold">{post.title}</h2>
              <div className="text-sm text-zinc-400">{post.excerpt}</div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
