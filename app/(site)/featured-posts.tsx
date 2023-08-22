import { PostCard } from "~/components/post-card";
import { PostType } from "~/lib/models";

interface FeaturedPostsProps {
  featuredPosts: PostType[];
}

export function FeaturedPosts({ featuredPosts }: FeaturedPostsProps) {
  if (!featuredPosts?.length) return;

  return (
    <section className="space-y-6">
      <h2>Featured Posts</h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {featuredPosts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
}
