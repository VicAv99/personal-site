import Link from "next/link";
import { PostCard } from "~/components/post-card";
import { Button } from "~/components/ui/button";
import { PostType, ProfileType } from "~/lib/models";
import { cachedFetchClient } from "~/sanity/lib/client";
import { featuredPostsQuery, profileQuery } from "~/sanity/lib/queries";

export default async function Home() {
  const profile = await cachedFetchClient<ProfileType>(profileQuery);
  const featuredPosts = await cachedFetchClient<PostType[]>(featuredPostsQuery);

  return (
    <main className="mx-auto max-w-5xl px-6 lg:px-16 space-y-24">
      <section className="max-w-2xl lg:max-w-2xl space-y-6">
        <h1 className="leading-tight lg:min-w-[700px] lg:leading-[3.7rem]">
          {profile.headline}
        </h1>
        <p className="text-zinc-400">{profile.shortBio}</p>
      </section>

      <section>
        <Button asChild className="my-2">
          <Link href="/about" className="hover:underline capitalize">
            Get to know me!
          </Link>
        </Button>
      </section>

      <section className="space-y-6">
        <h2>Featured Posts</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {featuredPosts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
