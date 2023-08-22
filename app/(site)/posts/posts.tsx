import { PostCard } from "~/components/post-card";
import { PostType } from "~/lib/models";

interface PostsProps {
  posts: PostType[];
}

export function Posts({ posts }: PostsProps) {
  if (!posts?.length) {
    return (
      <section>
        <h5>Check back soon for some awesome blog posts!</h5>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-5">
      {posts.map((post) => (
        <PostCard key={post._id} post={{ ...post, featured: false }} />
      ))}
    </section>
  );
}
