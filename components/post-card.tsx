import Link from "next/link";
import { cn } from "~/lib/cn";
import { PostType } from "~/lib/models";

interface PostCardProps {
  post: Pick<PostType, "slug" | "title" | "excerpt" | "featured">;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className={cn(
        "p-1 rounded-xl",
        !post.featured && "border border-zinc-300",
        post.featured &&
          "bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
      )}
    >
      <div className="bg-background hover:bg-zinc-50/90 rounded-lg p-3">
        <h2 className="mb-1 font-semibold">{post.title}</h2>
        <div className="text-sm text-zinc-400 break-all line-clamp-2">
          {post.excerpt}
        </div>
      </div>
    </Link>
  );
}
