import Link from "next/link";
import { PostType } from "~/lib/models";
import { cachedFetchClient } from "~/sanity/lib/client";
import { postsQuery } from "~/sanity/lib/queries";

export default async function Project() {
  const posts = await cachedFetchClient<PostType[]>(postsQuery);

  return (
    <main className="mx-auto max-w-7xl px-6 md:px-16">
      <section className="mb-16">
        <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:leading-[3.7rem]">
          Check out some of my blog posts!
        </h1>
        <p className="text-base leading-relaxed text-zinc-400">
          Written with ❤️
        </p>
      </section>

      <section className="mb-12 grid grid-cols-1 gap-5 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            href={`/posts/${post.slug}`}
            key={post._id}
            className="gap-x-4 rounded-lg border border-transparent bg-muted p-4 ease-in-out hover:border-zinc-200"
          >
            <h2 className="mb-1 font-semibold">{post.title}</h2>
            <div className="text-sm text-zinc-400 break-all line-clamp-2">
              {post.excerpt}
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
