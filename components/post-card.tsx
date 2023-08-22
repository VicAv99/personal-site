import { format } from "date-fns";
import Link from "next/link";
import { cn } from "~/lib/cn";
import { PostType } from "~/lib/models";

import { Badge } from "./ui/badge";

interface PostCardProps {
  post: PostType;
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
      <div className="bg-background hover:bg-zinc-50/90 rounded-lg p-3 space-y-2">
        <span className="flex justify-between items-center">
          <h2 className="font-semibold">{post.title}</h2>
          <p className="text-zinc-300 text-sm">
            {format(new Date(post.publishedAt), "MMM do, yyyy")}
          </p>
        </span>
        <div className="text-sm text-zinc-400 break-all line-clamp-2">
          {post.excerpt}
        </div>
        <Categories post={post} />
      </div>
    </Link>
  );
}

function Categories({ post }: PostCardProps) {
  if (!post.categories?.length) return null;

  return (
    <div>
      {post.categories
        .map((category) => category.title)
        .map((categoryTitle, i) => (
          <Badge key={`${post.title}${categoryTitle}-${i}`}>
            {categoryTitle}
          </Badge>
        ))}
    </div>
  );
}
