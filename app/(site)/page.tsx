import Link from "next/link";
import { Button } from "~/components/ui/button";
import { PostType, ProfileType } from "~/lib/models";
import { cachedFetchClient } from "~/sanity/lib/client";
import { featuredPostsQuery, profileQuery } from "~/sanity/lib/queries";

import { FeaturedPosts } from "./featured-posts";

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

      <FeaturedPosts featuredPosts={featuredPosts} />
    </main>
  );
}
